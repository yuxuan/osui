import React, { useCallback } from 'react';
import {Alert as AntdAlert} from 'antd';
import {AlertProps as AntdAlertProps} from 'antd/es/alert';
import {
    IconCheckCircleFill,
    IconWarningCircleFill,
    IconCloseCircleFill,
    IconInfoCircleFill,
    IconCross,
} from '@osui/icons';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-alert';

export interface AlertProps extends AntdAlertProps {
    shouldStopClose?: boolean;
}

type iconTypes = 'info' | 'success' | 'error' | 'warning'; // 不覆盖loading
const typeToIcon: Record<iconTypes, React.ReactNode> = {
    info: <IconInfoCircleFill className={`${clsPrefix}-infoIcon`} />,
    success: <IconCheckCircleFill className={`${clsPrefix}-successIcon`} />,
    error: <IconCloseCircleFill className={`${clsPrefix}-errorIcon`} />,
    warning: <IconWarningCircleFill className={`${clsPrefix}-warningIcon`} />,
};

const Alert: React.FC<AlertProps> = props => {
    const { icon, closeText, type, className, shouldStopClose = true} = props;
    const patchedIcon = icon || typeToIcon[type as iconTypes];
    const stopClose: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => void = useCallback(
        e => shouldStopClose && e.stopPropagation(),
        [shouldStopClose]
    );
    const patchedCloseText = closeText
        ? <span onClick={stopClose}>{closeText}</span>
        : <IconCross className={`${clsPrefix}-icon-cross`} />;

    return (
        <AntdAlert
            {...props}
            icon={patchedIcon}
            closeText={patchedCloseText}
            className={classNames(clsPrefix, className)}
        />
    );
};

export default Alert;
