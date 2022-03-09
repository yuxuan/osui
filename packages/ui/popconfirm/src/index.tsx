import React from 'react';
import {Popconfirm} from 'antd';
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


export type {PopconfirmProps} from 'antd';
export default Popconfirm;
