import React from 'react';
import {Popconfirm as AntdPopconfirm} from 'antd';
import './index.less';
interface Props {
    title: string;
    content: string | React.ReactNode;
}


export const ConfirmContentWithTitle = ({title, content}: Props) => {
    return (
        <>
            <div className="osui-popconfirm-content-title">{title}</div>
            <div className="osui-popconfirm-content-content">
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
