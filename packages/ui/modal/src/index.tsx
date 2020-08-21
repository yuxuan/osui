import React from 'react';
import {Modal as AntdModal} from 'antd';
import {ModalProps as AntdModalProps} from 'antd/es/modal';
import {ModalStaticFunctions as AntdModalStaticFunctions, globalConfig} from 'antd/es/modal/confirm';
import classNames from 'classnames';
import {IconCross} from '@osui/icons';
import './index.less';

const {success, confirm, info, error, warning, warn, destroyAll, config} = AntdModal;

const clsPrefix = 'osui-modal';

export interface ModalProps extends AntdModalProps {
    bodyHeight?: number;
}

interface ModalInterface extends React.FC<ModalProps> {
    useModal: typeof AntdModal.useModal;
}

const OriginModal: ModalInterface = ({ className, bodyStyle = {}, bodyHeight, ...restProps }) => {
    const classes = classNames({
        [`${clsPrefix}`]: true,
        [`${clsPrefix}-body-border`]: bodyHeight,
    }, className);
    if (bodyHeight) {
        bodyStyle.height = bodyHeight;
    }
    return <AntdModal bodyStyle={bodyStyle} className={classNames(classes)} {...restProps} closeIcon={<IconCross />} />;
};

OriginModal.useModal = AntdModal.useModal;

type Modal = typeof OriginModal & AntdModalStaticFunctions & { destroyAll: () => void, config: typeof globalConfig };

const Modal: Modal = OriginModal as typeof AntdModal;

// TODO: 这边没有添加自己的class preifx，因为UE没设计
Modal.success = success;
Modal.confirm = confirm;
Modal.info = info;
Modal.error = error;
Modal.warn = warn;
Modal.warning = warning;
Modal.destroyAll = destroyAll;
Modal.config = config;

export default Modal;
