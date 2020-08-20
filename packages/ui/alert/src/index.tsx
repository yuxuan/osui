import React from 'react';
import {Alert as AntdAlert} from 'antd';
import {AlertProps as AntdAlertProps} from 'antd/es/alert';
import {IconCheckCircleFill, IconWarningCircleFill, IconCloseCircleFill, IconCross} from '@osui/icons';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-alert';

export type AlertProps = AntdAlertProps;

const Alert: React.FC<AlertProps> = props => {
    const {showIcon, icon, closeText, type, closable} = props; // omit props

    let internalIcon = icon;
    if (!icon && showIcon) { // 要求showIcon但是没有传入
        switch (type) {
            case 'success':
                internalIcon = <IconCheckCircleFill />;
                break;
            case 'warning':
            case 'info':
                internalIcon = <IconWarningCircleFill />;
                break;
            case 'error':
                internalIcon = <IconCloseCircleFill />;
                break;
        }
    }
    let internalCloseText = closeText;
    if (!closeText && closable) {
        internalCloseText = <IconCross />;
    }

    return (
        <AntdAlert
            {...props}
            icon={internalIcon}
            closeText={internalCloseText}
            className={classNames(clsPrefix, props.className)}
        />
    );
};

export default Alert;
