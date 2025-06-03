import React, {useContext} from 'react';
import {Typography as AntdTypography, ConfigProvider} from 'antd';
import {TypographyProps as AntdTypographyProps} from 'antd/es/typography/Typography';
import classNames from 'classnames';
// import './index.less';
import {useStyle} from './style';

const clsPrefix = 'osui-typography';

// eslint-disable-next-line max-len
function TypographyComponent<C extends keyof JSX.IntrinsicElements>(
    {className, ...props}: AntdTypographyProps<C>,
    ref: any
) {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('typography', props.prefixCls);
    const antPrefixCls = getPrefixCls('');
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefixCls);
    const innerClassName = classNames(className, clsPrefix);
    // Antd Typography 暴露出来的类型把ref吞掉了
    // @ts-ignore
    return wrapSSROsui(
        <AntdTypography
            ref={ref}
            className={innerClassName}
            {...props}
        />
    );
}

const Typography = React.forwardRef(TypographyComponent) as typeof AntdTypography;

Typography.Text = AntdTypography.Text;
Typography.Link = AntdTypography.Link;
Typography.Title = AntdTypography.Title;
Typography.Paragraph = AntdTypography.Paragraph;

export type {TypographyProps} from 'antd';
export default Typography;
