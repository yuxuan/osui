import React from 'react';
import {Modal as AntdModal} from 'antd';
import {ModalProps as AntdModalProps, ModalFuncProps} from 'antd/es/modal';
import {globalConfig} from 'antd/es/modal/confirm';
import classNames from 'classnames';
import {IconCross} from '@osui/icons';
import Button from '@osui/button';
import './index.less';

const {destroyAll, config} = AntdModal;

type Size = 'small' | 'default' | 'large';

const getModalSize = (size?: Size) => {
    switch (size) {
        case 'small':
            return [400, 'size-s'];
        case 'default':
            return [600, 'size-m'];
        case 'large':
            return [800, 'size-l'];
        default:
            return [600, 'size-m'];
    }
};

const clsPrefix = 'osui-modal';

export interface ModalProps extends AntdModalProps {
    bodyHeight?: number;
    noBorder?: boolean;
    size?: Size;
    autoHeight?: boolean;
}

interface ModalInterface extends React.FC<ModalProps> {
    useModal: typeof AntdModal.useModal;
}

const OriginModal: ModalInterface = ({className, bodyStyle = {}, bodyHeight, size = 'default', ...props}) => {
    const {
        okText = '确定',
        cancelText = '取消',
        onOk,
        onCancel,
        confirmLoading,
        okButtonProps,
        cancelButtonProps,
        noBorder = false,
        autoHeight = false,
    } = props;

    const [width, classNameSize] = getModalSize(size);

    const classes = classNames(
        clsPrefix,
        {
            [`${clsPrefix}-no-border`]: noBorder,
            [`${clsPrefix}-auto-height`]: autoHeight,
            [`${clsPrefix}-body-border`]: bodyHeight,
        },
        `${clsPrefix}-${classNameSize}`,
        className
    );

    if (bodyHeight) {
        bodyStyle.height = bodyHeight;
        bodyStyle.overflowY = 'scroll';
    }

    const footer = (
        <div>
            <Button onClick={onCancel} {...cancelButtonProps}>{cancelText}</Button>
            <Button type="primary" onClick={onOk} loading={confirmLoading} {...okButtonProps}>{okText}</Button>
        </div>
    );

    return (
        <AntdModal
            className={classNames(classes)}
            bodyStyle={bodyStyle}
            closeIcon={<IconCross />}
            footer={footer}
            width={width}
            {...props}
        />
    );
};

OriginModal.useModal = AntdModal.useModal;

// Modal function component such as confirm
export type ModalFunc = (
    props: ConfirmProps,
) => {
    destroy: () => void;
    update: (newConfig: ModalFuncProps) => void;
};

export interface ModalStaticFunctions {
    info: ModalFunc;
    success: ModalFunc;
    error: ModalFunc;
    warn: ModalFunc;
    warning: ModalFunc;
    confirm: ModalFunc;
}

type ModalType = typeof OriginModal & ModalStaticFunctions & { destroyAll: () => void, config: typeof globalConfig };

const Modal = OriginModal as ModalType;

interface ConfirmProps extends ModalFuncProps {
    size?: Size;
}
const getConfirmConfig = ({size = 'default', ...config}: ConfirmProps) => {
    const baseConfig = config;

    if (config.icon) {
        // 对confirm图表的样式调整处理
        Object.assign(baseConfig, {icon: <span className={`${clsPrefix}-confirm-icon`}>{config.icon}</span>});
    }

    return {
        width: getModalSize(size)[0],
        ...baseConfig,
        className: classNames(`${clsPrefix}-confirm`, config.className),
    };
};

Modal.info = (config: ConfirmProps) => AntdModal.info(getConfirmConfig(config));
Modal.warning = (config: ConfirmProps) => AntdModal.warning(getConfirmConfig(config));
Modal.warn = Modal.warning;
Modal.error = (config: ConfirmProps) => AntdModal.error(getConfirmConfig(config));
Modal.success = (config: ConfirmProps) => AntdModal.success(getConfirmConfig(config));
Modal.confirm = (config: ConfirmProps) => AntdModal.confirm(getConfirmConfig(config));

Modal.destroyAll = destroyAll;
Modal.config = config;

export default Modal;
