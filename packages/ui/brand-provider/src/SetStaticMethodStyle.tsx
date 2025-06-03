import {
    messageGlobalHolderRender,
    useGetMessageWrapSSROsui,
} from '@osui/message';
import {
    modalGlobalHolderRender,
    useGetModalWrapSSROsui,
} from '@osui/modal';
import {ConfigProvider} from 'antd';
import React, {useLayoutEffect, ReactNode} from 'react';

type WrapSSROsui = (node: React.ReactElement<any, string | React.JSXElementConstructor<any>>) => React.JSX.Element;

interface ComponentInfo {
    wrapSSROsui: WrapSSROsui;
    hashId: string;
}

type HolderRender = (children: ReactNode, messageInfo?: ComponentInfo, modalInfo?: ComponentInfo) => ReactNode;

const emptyFn = (p: ReactNode) => p;

let globalHolderRender: HolderRender | undefined = (children, messageInfo, modalInfo) => {
    const afterMessageChildren = messageInfo?.wrapSSROsui && messageInfo?.hashId
        ? messageGlobalHolderRender({
            wrapSSROsui: messageInfo.wrapSSROsui,
            hashId: messageInfo.hashId,
        })(children)
        : emptyFn(children);

    const afterModalChildren = modalInfo?.wrapSSROsui && modalInfo?.hashId
        ? modalGlobalHolderRender({
            wrapSSROsui: modalInfo.wrapSSROsui,
            hashId: modalInfo.hashId,
        })(afterMessageChildren)
        : emptyFn(children);

    return afterModalChildren;
};
ConfigProvider.config({
    holderRender: globalHolderRender,
});

export type Config = (
    props: Parameters<typeof ConfigProvider.config>[0],
    overide?: boolean
) => void;

export const config: Config = (props, overide = false) => {
    const holderRender = props?.holderRender;
    if (overide || !holderRender || !globalHolderRender) {
        ConfigProvider.config(props);
        globalHolderRender = holderRender;
        return;
    }

    globalHolderRender = children => (globalHolderRender
        ? globalHolderRender(holderRender(children))
        : holderRender(children));
    ConfigProvider.config({
        ...props,
        holderRender: globalHolderRender,
    });
};

export const SetStaticMethodStyle = () => {
    const {wrapSSROsui: messageWrapSSROsui, hashId: messageHashId} = useGetMessageWrapSSROsui();
    const {wrapSSROsui: modalWrapSSROsui, hashId: modalHashId} = useGetModalWrapSSROsui();

    useLayoutEffect(
        () => {
            ConfigProvider.config({
                holderRender: children => globalHolderRender?.(
                    children,
                    {wrapSSROsui: messageWrapSSROsui, hashId: messageHashId},
                    {wrapSSROsui: modalWrapSSROsui, hashId: modalHashId}
                ),
            });
        }
    );
    return <></>;
};
