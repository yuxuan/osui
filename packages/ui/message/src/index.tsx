import React, {ReactElement, ReactNode, useContext, useLayoutEffect} from 'react';
import {message as AntdMessage, ConfigProvider, theme as AntdTheme} from 'antd';
import {
    MessageInstance as AntdMessageInstance,
    ConfigOptions,
} from 'antd/es/message/interface';
import {useStyle} from './style';
import useMessage from './useMessage';
// import './index.less';
const {useToken} = AntdTheme;
import {genOpenMessage, genMessage} from './genMessage';
import {type MessageApi, type MessageArgsProps} from './interface';

export type MessageInstance = AntdMessageInstance;

export {
    MessageApi,
    MessageArgsProps,
};

const OSUIMessage = Object.assign({}, AntdMessage, {
    warn: AntdMessage.warning,
    // open: (args: MessageArgsProps) => AntdMessage.open(getPatchedArgs(args)),
    config: (options: ConfigOptions) => {
        // 对antd message config的patch，注意还不支持context的方式
        AntdMessage.config(options);
    },
    destroy: AntdMessage.destroy,
    // useMessage: AntdMessage.useMessage
    useMessage,
}) as MessageApi;

interface Props {
    hashId: string;
    wrapSSROsui: (v: ReactElement) => ReactElement;
}

interface GlobalHolderRef {
    instance: AntdMessageInstance;
    sync: () => void;
}

export const messageGlobalHolderRender = ({
    hashId,
    wrapSSROsui,
}: Props) => (children: ReactNode) => {

    if (!children
        || typeof children === 'string'
        || typeof children === 'number'
        || typeof children === 'boolean'
        || typeof (children as any)?.ref !== 'function'
    ) {
        return children;
    }

    const ref = (children as any)?.ref;

    return React.cloneElement(
        children as any,
        {
            ref: (node: GlobalHolderRef | null) => {
                const {instance: instanceIn, sync} = node || {};
                if (!instanceIn) {
                    ref?.(node);
                }
                const methods = ['success', 'error', 'warning', 'info', 'loading'] as const;
                const instance = {
                    ...(instanceIn as AntdMessageInstance),
                };

                instance.open = genOpenMessage(
                    'open',
                    `${hashId} undefined`,
                    wrapSSROsui,
                    instanceIn as AntdMessageInstance);

                for (const method of methods) {
                    instance[method] = genMessage(
                        method,
                        `${hashId} undefined`,
                        wrapSSROsui,
                        instanceIn as AntdMessageInstance
                    );
                }
                ref?.({
                    instance, sync,
                });
            },
        }
    );
};

export const useGetMessageWrapSSROsui = () => {
    const {token: outerToken} = useToken();
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('message');
    const {hashId} = useToken();
    const wrapSSROsui = useStyle('osui-message', prefixCls, cssVar, outerToken);
    return {wrapSSROsui, hashId};
};

export const useSetStaticMessage = () => {
    const {wrapSSROsui, hashId} = useGetMessageWrapSSROsui();

    useLayoutEffect(
        () => {
            ConfigProvider.config({
                holderRender: messageGlobalHolderRender({
                    wrapSSROsui,
                    hashId,
                }),
            });
        },
        [wrapSSROsui, hashId]
    );
};

export default OSUIMessage;
