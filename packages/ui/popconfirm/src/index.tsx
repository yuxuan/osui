import React, {useContext} from 'react';
import {
    Popconfirm as AntdPopconfirm,
    ConfigProvider,
    theme,
} from 'antd';
// import './index.less';
import {useStyle} from './style';
interface Props {
    title: string;
    content: string | React.ReactNode;
    prefixCls?: string;
}

const clsPrefix = 'osui-popconfirm';
const {useToken} = theme;

export const ConfirmContentWithTitle = ({title, content, prefixCls: prefixClsIn}: Props) => {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('popconfirm', prefixClsIn);
    const antPrefix = getPrefixCls('');
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefix);
    const {hashId} = useToken();

    return wrapSSROsui(
        <>
            <div className={`${clsPrefix}-content-title ${hashId}`}>{title}</div>
            <div className={`${clsPrefix}-content-content`}>
                {content}
            </div>
        </>
    );
};

export type PopconfirmInterface = typeof AntdPopconfirm & {
    ConfirmContentWithTitle: typeof ConfirmContentWithTitle;
};

const Popconfirm = AntdPopconfirm as PopconfirmInterface;

Popconfirm.ConfirmContentWithTitle = ConfirmContentWithTitle;

export type {PopconfirmProps} from 'antd';
export default Popconfirm;
