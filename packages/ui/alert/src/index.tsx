import React, {FC, useCallback, useContext, useReducer} from 'react';
import {Alert as AntdAlert, ConfigProvider} from 'antd';
import {AlertProps as AntdAlertProps} from 'antd/es/alert';
import {
    IconCheckCircleFilled,
    IconExclamationCircleFilled,
    IconCloseCircleFilled,
    IconInfoCircleFilled,
    IconCloseOutlined,
    IconDownOutlined,
} from '@osui/icons';
import classNames from 'classnames';
import {useBoolean} from '@huse/boolean';
import {useInterval} from '@huse/timeout';
import hoistNonReactStatics from 'hoist-non-react-statics';
// import './index.less';
import {useStyle} from './style';

const clsPrefix = 'osui-alert';

export interface AlertProps extends AntdAlertProps {
    actions?: React.ReactNode;
    expandable?: boolean;
    countDown?: number | null;
}

type iconTypes = 'info' | 'success' | 'error' | 'warning';

const typeToIcon: Record<iconTypes, React.ReactNode> = {
    info: <IconInfoCircleFilled className={`${clsPrefix}-infoIcon`} />,
    success: <IconCheckCircleFilled className={`${clsPrefix}-successIcon`} />,
    error: <IconCloseCircleFilled className={`${clsPrefix}-errorIcon`} />,
    warning: <IconExclamationCircleFilled className={`${clsPrefix}-warningIcon`} />,
};

interface ActionExpandProps {
    expanded: boolean;
    open(): void;
    close(): void;
}

const ActionExpand: FC<ActionExpandProps> = ({expanded, open, close}) => {
    const handleClick = useCallback(
        () => {
            if (expanded) {
                close();
            }
            else {
                open();
            }
        },
        [expanded, open, close]
    );
    return (
        <a
            onClick={handleClick}
            className={classNames(`${clsPrefix}-action-expand`, {[`${clsPrefix}-action-expand-open`]: expanded})}
        >
            {expanded ? '收起' : '展开'} <IconDownOutlined />
        </a>
    );
};

interface ActionCountDownCloseProps {
    countDown: number;
    onTimeout(): void;
}

const ActionCountDownClose: FC<ActionCountDownCloseProps> = ({countDown, onTimeout}) => {
    const [timer, reduce] = useReducer<(arg: number) => number>(state => state - 1, countDown);
    // 每秒调用一次
    useInterval(reduce, 1 * 1000);

    if (countDown <= 0) {
        return null;
    }

    if (timer === 0) {
        onTimeout();
        return null;
    }

    return <span className={`${clsPrefix}-count-down-close`}>({timer}s)</span>;
};

export interface AlertInterface extends React.FC<AlertProps> {
    ErrorBoundary: typeof AntdAlert.ErrorBoundary;
}

const Alert: AlertInterface = props => {
    const {
        icon,
        closeText,
        type,
        className,
        closable,
        message,
        actions,
        expandable,
        countDown = -1,
        onClose,
    } = props;
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('alert', props.prefixCls);
    const antPrefixCls = getPrefixCls('');
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefixCls);
    const [expanded, {on, off}] = useBoolean(false);
    const [isDestroy, {on: destroy}] = useBoolean(false);

    const patchedIcon = icon || typeToIcon[type as iconTypes];
    const patchedClosable = closable === true || countDown! > 0;
    const patchedCloseText = patchedClosable ? (
        closeText || <IconCloseOutlined className={`${clsPrefix}-icon-cross`} />
    ) : null;

    const renderActions = () => {
        let internalActions = actions;
        // 按顺序添加actions
        if (expandable) {
            internalActions = (
                <>
                    {internalActions}
                    <ActionExpand expanded={expanded} open={on} close={off} />
                </>
            );
        }

        if (countDown! > 0) {
            internalActions = (
                <>
                    {internalActions}
                    <ActionCountDownClose countDown={countDown!} onTimeout={destroy} />
                </>
            );
        }

        if (internalActions) {
            return wrapSSROsui(
                <div className={
                    classNames(`${clsPrefix}-message-wrapper`, {[`${clsPrefix}-message-wrapper-closable`]: closable})
                }
                >
                    <div className={
                        classNames(
                            `${clsPrefix}-message-content`,
                            {[`${clsPrefix}-message-content-expanded-close`]: expandable && !expanded}
                        )}
                    >
                        {message}
                    </div>
                    <div className={`${clsPrefix}-message-actions`}>
                        {internalActions}
                    </div>
                </div>
            );
        }
        return null;
    };

    const patchedMessage = renderActions() || message;

    if (isDestroy) {
        // @ts-ignore
        // 这里调用一下onClose但是没有click事件
        onClose && onClose();
        return null;
    }

    return wrapSSROsui(
        <AntdAlert
            {...props}
            icon={patchedIcon}
            closeText={patchedCloseText}
            className={classNames(clsPrefix, className)}
            message={patchedMessage}
            closable={patchedClosable}
        />
    );
};

hoistNonReactStatics(Alert, AntdAlert);

Alert.ErrorBoundary = AntdAlert.ErrorBoundary;

export default Alert;
