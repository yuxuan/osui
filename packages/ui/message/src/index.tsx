import React from 'react';
import partial from 'lodash.partial';
import classNames from 'classnames';
import {message as AntdMessage} from 'antd';
import {
    MessageType as AntdMessageType,
    MessageInstance as AntdMessageInstance,
    MessageApi as AntdMessageApi,
    ArgsProps as AntdMessageArgsProps,
} from 'antd/es/message';
import Alert, {AlertProps} from '@osui/alert';
import {IconCheckCircleFill, IconCloseCircleFill, IconInfoCircleFill, IconWarningCircleFill} from '@osui/icons';
import './index.less';

const clsPrefix = 'osui-message';

type NoticeType = AntdMessageArgsProps['type'];
type JointContent = React.ReactNode | string | AntdMessageArgsProps;
type iconTypes = 'info' | 'success' | 'error' | 'warning'; // 不覆盖loading

export type MessageInstance = AntdMessageInstance;
export interface MessageArgsProps extends AntdMessageArgsProps {
    original?: boolean;
    showCountDown?: boolean;
}

export interface MessageApi extends Omit<AntdMessageApi, 'open'> {
    open(args: MessageArgsProps): AntdMessageType;
}

const typeToIcon: Record<iconTypes, React.ReactNode> = {
    info: <IconInfoCircleFill className={`${clsPrefix}-infoIcon`} />,
    success: <IconCheckCircleFill className={`${clsPrefix}-successIcon`} />,
    error: <IconCloseCircleFill className={`${clsPrefix}-errorIcon`} />,
    warning: <IconWarningCircleFill className={`${clsPrefix}-warningIcon`} />,
};

function isArgsProps(content: JointContent): boolean {
    return (
        Object.prototype.toString.call(content) === '[object Object]' && !!(content as AntdMessageArgsProps).content
    );
}

// 对antd message args的调整
const getPatchedArgs = (args: MessageArgsProps) => {
    const getPropFromConfig = (prop: keyof MessageArgsProps) => {
        return (args.content as MessageArgsProps)[prop] || args[prop];
    };

    if (getPropFromConfig('original')) {
        // 如果传入original为true则只覆盖icon和className
        const contentConfig = isArgsProps(args.content) ? args.content : {};
        return {
            ...args,
            ...contentConfig, // 当content是config时，要覆盖部分args的参数
            className: classNames(clsPrefix, getPropFromConfig('className')),
            icon: getPropFromConfig('icon') || typeToIcon[args.type as iconTypes],
        };
    }
    // 如果传入original为false，则使用Alert作为content，使用Alert作为content时，className加上`${clsPrefix}-alert`
    const className = classNames(
        clsPrefix,
        getPropFromConfig('className'),
        `${clsPrefix}-alert`
    );
    const content = getPropFromConfig('content');
    const countDown = getPropFromConfig('duration') as AlertProps['countDown'];
    const type = getPropFromConfig('type');
    const icon = <span />; // icon直接覆盖掉，用alert里面的icon

    // 这里对countDown做了处理，duration不能直接透传给countDown，考虑到有可能有自动关闭，但是不想显示倒计时的场景
    const alertProps: AlertProps = {
        message: content,
        type: type as AlertProps['type'],
        className: `${clsPrefix}-alert`,
    };
    if (args.showCountDown) {
        alertProps.countDown = countDown;
    }
    return {
        ...args,
        className,
        content: <Alert showIcon {...alertProps} />,
        icon,
    };
};

const messageBuilder = (
    type: NoticeType,
    content: JointContent,
    duration?: number,
    onClose?: () => void
) => {
    return AntdMessage.open(
        getPatchedArgs({
            type,
            content,
            duration,
            onClose,
        } as MessageArgsProps));
};

const openMessageBuilder = (args: MessageArgsProps) => {
    return AntdMessage.open(getPatchedArgs(args));
};

export default Object.assign({}, AntdMessage, {
    success: partial(messageBuilder, 'success'),
    error: partial(messageBuilder, 'error'),
    warning: partial(messageBuilder, 'warning'),
    info: partial(messageBuilder, 'info'),
    warn: partial(messageBuilder, 'warning'),
    loading: AntdMessage.loading,
    open: openMessageBuilder,
}) as MessageApi;
