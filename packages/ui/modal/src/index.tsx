import * as React from 'react';
import { Modal as AntdModal } from 'antd';
import { ModalProps as AntdModalProps } from 'antd/lib/Modal';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-modal';

export interface ModalProps extends AntdModalProps {
    bodyHeight?: number;
}

const Modal: React.FC<ModalProps> = ({ className, bodyStyle = {}, bodyHeight, ...restProps }) => {
    const classes = classNames({
        [`${clsPrefix}`]: true,
        [`${clsPrefix}-body-border`]: bodyHeight,
    }, className);
    if (bodyHeight) {
        bodyStyle.height = bodyHeight;
    }
    return <AntdModal bodyStyle={bodyStyle} className={classNames(classes)} {...restProps} />;
};

export default Modal;
