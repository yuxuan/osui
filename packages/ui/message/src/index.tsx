import React, {useState, useEffect, useReducer} from 'react';
import partial from 'lodash.partial';
import classNames from 'classnames';
import {message as AntdMessage} from 'antd';
import {
    MessageType as AntdMessageType,
    MessageInstance as AntdMessageInstance,
    MessageApi as AntdMessageApi,
    ArgsProps as AntdMessageArgsProps,
    ConfigOptions,
} from 'antd/lib/message';
import {useInterval} from '@huse/timeout';
import {
    IconCheckCircleFilled,
    IconCloseCircleFilled,
    IconInfoCircleFilled,
    IconExclamationCircleFilled,
    IconCloseOutlined,
} from '@osui/icons';
import './index.less';

const clsPrefix = 'osui-message';

type NoticeType = AntdMessageArgsProps['type'] | 'notify' ;
type iconTypes = 'info' | 'success' | 'error' | 'warning'; // 不覆盖loading

export type MessageInstance = AntdMessageInstance;
export interface MessageArgsProps extends AntdMessageArgsProps {
    original?: boolean;
    showCountDown?: boolean;
    showClose?: boolean;
    title?: string | React.ReactNode;
}

type JointContent = React.ReactNode | string | MessageArgsProps;

export interface MessageApi extends Omit<AntdMessageApi, 'open'> {
    open(args: MessageArgsProps): AntdMessageType;
    notify(content: JointContent, duration?: number, onClose?: () => void): AntdMessageType;
}

const typeToIcon: Record<iconTypes, React.ReactNode> = {
    info: <IconInfoCircleFilled className={`${clsPrefix}-infoIcon`} />,
    success: <IconCheckCircleFilled className={`${clsPrefix}-successIcon`} />,
    error: <IconCloseCircleFilled className={`${clsPrefix}-errorIcon`} />,
    warning: <IconExclamationCircleFilled className={`${clsPrefix}-warningIcon`} />,
};

function isObject(content: JointContent): boolean {
    return Object.prototype.toString.call(content) === '[object Object]';
}

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

let localInnerKey = 0; // 用来记录message destory的
interface MessageContentProps {
    content: JointContent;
    className: string;
    localInnerKey: number | string;
    onClose?: MessageArgsProps['onClose'];
    duration?: MessageArgsProps['duration'];
}
// eslint-disable-next-line complexity
const getMessageContent = ({content, className, localInnerKey, onClose, duration}: MessageContentProps) => {
    const {
        title = '',
        showClose = true,
        showCountDown = true,
        duration: innerDuration = (duration || 5),
        key: innerKey = localInnerKey,
        onClose: innerOnClose = onClose,
    } = isObject(content) ? (content as MessageArgsProps) : {};

    const realContent = isObject(content) ? (content as MessageArgsProps).content ?? null : content;
    let innerContent = null;

    const handleClose = () => {
        AntdMessage.destroy(innerKey);
        innerOnClose && innerOnClose();
    };

    const countDown = (
        showCountDown && (
            <CountDownClose
                countDown={innerDuration || -1}
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
                    {realContent}
                </div>
            </div>
        );
    }
    else {
        innerContent = (
            <div className={classNames(`${clsPrefix}-message-content`, `${clsPrefix}-message-content-inline`)}>
                {realContent}
                {countDown}
                {closeIcon}
            </div>
        );
    }

    return {
        content: innerContent,
        className,
        key: localInnerKey,
        duration: innerDuration,
        onClose: innerOnClose,
    };
};

// 对antd message args的调整
const getPatchedArgs = (args: MessageArgsProps) => {
    const getPropFromConfig = (prop: keyof MessageArgsProps) => {
        return (args.content as MessageArgsProps)[prop] || args[prop];
    };

    if (getPropFromConfig('original')) {
        // 如果传入original为true则只覆盖icon和className
        const contentConfig = isObject(args.content) ? args.content as MessageArgsProps : {};
        return {
            ...args,
            ...contentConfig, // 当content是config时，要覆盖部分args的参数
            className: classNames(clsPrefix, getPropFromConfig('className')),
            icon: getPropFromConfig('icon') || typeToIcon[args.type as iconTypes],
        };
    }
    // 如果传入original为false，则使用自定义组件作为content，使用自定义组件作为content时

    const content = args.content;
    const type = getPropFromConfig('type');
    const icon = getPropFromConfig('icon') || typeToIcon[args.type as iconTypes];

    const className = classNames(
        clsPrefix,
        `${clsPrefix}-message-${type}`,
        getPropFromConfig('className')
    );

    // 这里对countDown做了处理，duration不能直接透传给countDown，考虑到有可能有自动关闭，但是不想显示倒计时的场景
    return {
        ...args,
        ...getMessageContent({
            content,
            className,
            localInnerKey: (args as any).localInnerKey,
            onClose: args.onClose,
            duration: args.duration,
        }),
        icon,
    };
};

const messageBuilder = (
    type: NoticeType,
    content: JointContent,
    duration?: number,
    onClose?: () => void
) => {
    localInnerKey++;
    return AntdMessage.open(
        getPatchedArgs({
            type,
            content,
            duration,
            onClose,
            localInnerKey, // 这个是额外加的，只内部使用
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
    loading: partial(messageBuilder, 'loading'),
    notify: partial(messageBuilder, 'notify'),
    open: openMessageBuilder,
    config: (options: ConfigOptions) => {
        // 对antd message config的patch，注意还不支持context的方式
        AntdMessage.config(options);
    },
    destroy: AntdMessage.destroy,
    useMessage: AntdMessage.useMessage,
}) as MessageApi;
