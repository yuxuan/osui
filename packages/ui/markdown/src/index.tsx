/**
 * @file Markdown 组件
 * @author zhangguoqing02
 */
import React, {useContext} from 'react';
import classNames from 'classnames';
import remark from 'remark';
import htmlPlugin from 'remark-html';
import 'github-markdown-css/github-markdown.css';
// import './index.less';
import {ConfigProvider, theme} from 'antd';
import {useStyle} from './style';
const {useToken} = theme;
const clsPrefix = 'osui-markdown';

interface Props {
    content?: string;
    className?: string;
    plugins?: any[];
    prefixCls?: string;
}

const getHtml = (content: string, plugins: any[]) => {
    let processor = remark();
    plugins.forEach(plugin => {
        processor = processor.use(plugin);
    });
    return processor.use(htmlPlugin as any).processSync(content).toString();
};

const Markdown: React.FC<Props> = ({content = '', className, plugins = [], prefixCls: prefixClsIn = ''}) => {
    /**
     * NOTE 这里有 xss 攻击的可能性，但是以下两种方案均不成立
     * 1. const html = xss(...);
     * 不成立的地方在于 - [ ] 会首先转译成 <checkbox>，然后 xss 会把它 stringify
     * 2. const html = ...processSync(xss(content))...
     * 不成立的地方在于 markdown 的 code block ``` 中的内容会被首先转译，导致 > 转译为 &gt;
     * 这个问题首先是由安全部在效率云发现，而 iCode 作为内部系统，安全性较高一些
     * 故首先 revert 至不处理 xss
     * 可能的解决方案如下
     * 利用 remark 找到会被解析为 html 的代码，对这些 html 运行 xss，然后重新 stringify 并得到 html
     */

    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('markdown', prefixClsIn);
    const antPrefix = getPrefixCls('');
    const wrapSSROsui = useStyle(`${clsPrefix}-main`, prefixCls, cssVar, antPrefix);
    const {hashId} = useToken();
    const html = getHtml(content, plugins);

    return wrapSSROsui(
        <div
            /* eslint-disable react/no-danger */
            dangerouslySetInnerHTML={{__html: html}}
            /* eslint-enable react/no-danger */
            className={classNames('markdown-body', `${clsPrefix}-main`, hashId, className)}
        />
    );
};

export default Markdown;
