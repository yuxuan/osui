import React, {useState, useEffect, useReducer} from 'react';
import classNames from 'classnames';
import {message as AntdMessage} from 'antd';
import { MessageType } from 'antd/es/message/interface';
import {
    MessageInstance as AntdMessageInstance,
    ArgsProps as AntdMessageArgsProps,
    ConfigOptions,
} from 'antd/es/message/interface';
import {useInterval} from '@huse/timeout';
import {
    IconCheckCircleFilled,
    IconCloseCircleFilled,
    IconInfoCircleFilled,
    IconExclamationCircleFilled,
    IconCloseOutlined,
} from '@osui/icons';
import {getGlobalConfig} from '@osui/config-provider';
import './index.less';

const clsPrefix = 'osui-message';

type NoticeType = AntdMessageArgsProps['type'];
type iconTypes = 'info' | 'success' | 'error' | 'warning'; // 不覆盖loading

const DEFAULT_DURATION = 5;

export type MessageInstance = AntdMessageInstance;
export interface MessageArgsProps extends AntdMessageArgsProps {
    original?: boolean;
    showCountDown?: boolean;
    showClose?: boolean;
    title?: string | React.ReactNode;
}

type JointContent = React.ReactNode | MessageArgsProps;

type OSUITypeOpen =  (content: JointContent, duration?: number | VoidFunction, onClose?: VoidFunction) => MessageType;

type AntdMessageType = typeof AntdMessage;

export interface MessageApi extends AntdMessageType {
    info: OSUITypeOpen;
    success: OSUITypeOpen;
    error: OSUITypeOpen;
    warning: OSUITypeOpen;
    loading: OSUITypeOpen;
}

const typeToIcon: Record<iconTypes, React.ReactNode> = {
    info: <IconInfoCircleFilled className={`${clsPrefix}-infoIcon`} />,
    success: <IconCheckCircleFilled className={`${clsPrefix}-successIcon`} />,
    error: <IconCloseCircleFilled className={`${clsPrefix}-errorIcon`} />,
    warning: <IconExclamationCircleFilled className={`${clsPrefix}-warningIcon`} />,
};

const CountDownClose: React.FC<{countDown: number, onTimeout: () => void}> = ({countDown, onTimeout}) => {
    const [timer, reduce] = useReducer<(arg: number) => number>(state => state - 1, countDown);
    const [show, setShow] = useState(true);
    // 每秒调用一次
    useInterval(reduce, 1 * 1000);
    useEffect(
        () => {
            if (timer < 0) {
                // onTimeout();
                setShow(false);
            }
        },
        [timer, countDown, onTimeout]
    );

    if (countDown <= 0) {
        return null;
    }

    return (show && <span className={`${clsPrefix}-count-down-close`}>({timer}s)</span> || null);
};

let _localInnerKey = 0; // 用来记录message destory的

// 对message内容的调整
// eslint-disable-next-line complexity
const getMessageContent = (props: MessageArgsProps) => {
    const {
        key,
        title = '',
        duration = DEFAULT_DURATION, // 允许传入0，0表示需要手动关闭
        content,
        className,
        onClose,
        onClick,
        showClose = true,
        showCountDown = true,
    } = props;

    const handleClose = () => {
        AntdMessage.destroy(key);
        onClose && onClose();
    };

    const countDown = (
        showCountDown && (
            <CountDownClose
                countDown={duration || -1}
                // eslint-disable-next-line react/jsx-no-bind
                onTimeout={handleClose}
            />
        )
    );

    const closeIcon = (
        showClose && (
            // eslint-disable-next-line react/jsx-no-bind
            <span className="close-icon" onClick={handleClose}>
                <IconCloseOutlined />
            </span>
        )
    );

    let innerContent = null;

    if (title) {
        // content with title;
        innerContent = (
            <div className={`${clsPrefix}-message-content`}>
                <div className={`${clsPrefix}-message-content-title`}>
                    <span className={`${clsPrefix}-message-content-title-text`}>{title}</span>
                    {countDown}
                    {closeIcon}
                </div>
                <div>
                    {content}
                </div>
            </div>
        );
    }
    else {
        innerContent = (
            <div className={
                classNames(
                    `${clsPrefix}-message-content`,
                    `${clsPrefix}-message-content-inline`
                )}
            >
                {content}
                {countDown}
                {closeIcon}
            </div>
        );
    }

    return {
        content: innerContent,
        className,
        key,
        duration,
        onClose,
        onClick,
    };
};


// 对antd message args的调整
// 调整icon，调整className
const getPatchedArgs = (argsProps: MessageArgsProps & {_localInnerKey?: number}) => {
    if (argsProps.original) {
        // 如果传入original为true则只覆盖icon和className
        return {
            ...argsProps, // 当content是config时，要覆盖部分args的参数
            key: argsProps.key ?? _localInnerKey,
            className: classNames(clsPrefix, argsProps.className),
            icon: argsProps.icon || typeToIcon[argsProps.type as iconTypes],
        };
    }
    // 如果传入original为false，则使用自定义组件作为content，使用自定义组件作为content时
    const {
        content,
        type,
        icon = typeToIcon[argsProps.type as iconTypes],
        key = argsProps.key ?? _localInnerKey,
        duration,
        className,
        title,
        onClose,
        onClick
    } = argsProps;

    const {messagePosition} = getGlobalConfig();

    const innerClassName = classNames(
        clsPrefix,
        `${clsPrefix}-message-${type}`,
        `${clsPrefix}-message-at-${messagePosition}`,
        {[`${clsPrefix}-message-with-title`]: title},
        {[`${clsPrefix}-message-with-title-only`]: !argsProps.content},
        className,
    );

    // 这里对countDown做了处理，duration不能直接透传给countDown，考虑到有可能有自动关闭，但是不想显示倒计时的场景
    return {
        ...argsProps,
        // 自定义的覆盖默认传进来的
        ...getMessageContent({
            key,
            title: argsProps.title,
            content,
            className: innerClassName,
            duration,
            onClose,
            onClick,
            showClose: argsProps.showClose,
            showCountDown: argsProps.showCountDown,
        }),
        icon,
    };
};

// 使用方式： message[level](content, [duration], onClose)
// 导致第二个参数可能是duration也有可能是onClose
const genMessage = (type: NoticeType) => (
    jointContent: JointContent,
    duration?: number,
    onClose?: () => void
) => {
    _localInnerKey++;

    let durationIn = duration;
    let onCloseIn = onClose;

    let argsProps;

    if (jointContent && typeof jointContent === 'object' && ('content' in jointContent || 'title' in jointContent)) {
        argsProps = jointContent;
    } else {
        // 这种情况下只有一个content，其他的都是默认的配置
        argsProps = {
            content: jointContent,
        };
    }

    if (typeof duration === 'function') { // 为了支持第二个参数是onClose
        onCloseIn = duration;
        durationIn = DEFAULT_DURATION;
    }

    return AntdMessage.open(
        getPatchedArgs({
            ...argsProps,
            type,
            duration: durationIn,
            onClose: onCloseIn,
            _localInnerKey, // 这个是额外加的，只内部使用
        } as MessageArgsProps)
    );
};

const OSUIMessage = Object.assign({}, AntdMessage, {
    success: genMessage('success'),
    error: genMessage('error'),
    warning: genMessage('warning'),
    info: genMessage('info'),
    warn: genMessage('warning'),
    loading: genMessage('loading'),
    open: (args: MessageArgsProps) => AntdMessage.open(getPatchedArgs(args)),
    config: (options: ConfigOptions) => {
        // 对antd message config的patch，注意还不支持context的方式
        AntdMessage.config(options);
    },
    destroy: AntdMessage.destroy,
    useMessage: AntdMessage.useMessage,
}) as MessageApi;


export default OSUIMessage;