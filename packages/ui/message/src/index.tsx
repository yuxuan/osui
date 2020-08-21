import React from 'react';
import partial from 'lodash.partial';
import {message as AntdMessage} from 'antd';
import {
    MessageInstance as AntdMessageInstance,
    MessageApi as AntdMessageApi,
    ArgsProps as AntdMessageArgsProps,
} from 'antd/es/message';
import {IconCheckCircleFill, IconCloseCircleFill, IconInfoCircleFill, IconWarningCircleFill} from '@osui/icons';
import './index.less';

const clsPrefix = 'osui-message';

export type MessageInstance = AntdMessageInstance;
export type MessageApi = AntdMessageApi;

type iconTypes = 'info' | 'success' | 'error' | 'warning'; // 不覆盖loading
const typeToIcon: Record<iconTypes, React.ReactNode> = {
    info: <IconInfoCircleFill className={`${clsPrefix}-infoIcon`} />,
    success: <IconCheckCircleFill className={`${clsPrefix}-successIcon`} />,
    error: <IconCloseCircleFill className={`${clsPrefix}-errorIcon`} />,
    warning: <IconWarningCircleFill className={`${clsPrefix}-warningIcon`} />,
};

type MessageType = AntdMessageArgsProps['type'];
type JointContent = React.ReactNode | string | AntdMessageArgsProps;

function isArgsProps(content: JointContent): boolean {
    return (
        Object.prototype.toString.call(content) === '[object Object]' && !!(content as AntdMessageArgsProps).content
    );
}

const messageBuilder = (
    type: MessageType,
    content: JointContent,
    duration?: number,
    onClose?: () => void
) => {
    const patchedClassName = clsPrefix + ` ${(content as any).className ?? ''}`;
    const patchedIcon = (content as AntdMessageArgsProps).icon || typeToIcon[type as iconTypes];

    if (isArgsProps(content)) {
        return AntdMessage.open({
            ...(content as AntdMessageArgsProps),
            type,
            className: patchedClassName,
            icon: patchedIcon,
        });
    }

    return AntdMessage.open({
        content,
        duration: duration as any, // antd 这个参数类型有问题
        type,
        onClose,
        className: patchedClassName,
        icon: patchedIcon,
    });
};

const openMessageBuilder = (args: any) => {
    return AntdMessage.open({className: clsPrefix + ` ${args.className ?? ''}`, ...args});
};

export default Object.assign({}, AntdMessage, {
    success: partial(messageBuilder, 'success'),
    error: partial(messageBuilder, 'error'),
    warning: partial(messageBuilder, 'warning'),
    info: partial(messageBuilder, 'info'),
    loading: partial(messageBuilder, 'loading'),
    warn: partial(messageBuilder, 'warning'),
    open: openMessageBuilder,
}) as MessageApi;
