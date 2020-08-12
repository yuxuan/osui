import * as React from 'react';
import { Modal as AntdModal } from 'antd';
import { ModalProps as AntdModalProps } from 'antd/lib/Modal';
import classNames from 'classnames';
import './index.less';

const { success, confirm, info, error, warning, destroyAll, useModal } = AntdModal;

const clsPrefix = 'osui-modal';

export interface ModalProps extends AntdModalProps {
    bodyHeight?: number;
}

interface ModalInterface extends React.FC<ModalProps> {
    success: typeof success;
    confirm: typeof confirm;
    info: typeof info;
    error: typeof error;
    warning: typeof warning;
    destroyAll: typeof destroyAll;
    useModal: typeof useModal;
}

const Modal: ModalInterface = ({ className, bodyStyle = {}, bodyHeight, ...restProps }) => {
    const classes = classNames({
        [`${clsPrefix}`]: true,
        [`${clsPrefix}-body-border`]: bodyHeight,
    }, className);
    if (bodyHeight) {
        bodyStyle.height = bodyHeight;
    }
    return <AntdModal bodyStyle={bodyStyle} className={classNames(classes)} {...restProps} />;
};

Modal.success = success;
Modal.confirm = confirm;
Modal.info = info;
Modal.error = error;
Modal.warning = warning;
Modal.destroyAll = destroyAll;
Modal.useModal = useModal;


export default Modal;
