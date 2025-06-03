import React from 'react';
import {message} from 'antd';
import {
    MessageType as AntdMessageType,
    MessageInstance as AntdMessageInstance,
    ArgsProps as AntdMessageArgsProps,
    ConfigOptions,
} from 'antd/es/message/interface';

export interface MessageArgsProps extends Omit<AntdMessageArgsProps, 'content'> {
    original?: boolean;
    showCountDown?: boolean;
    showClose?: boolean;
    title?: string | React.ReactNode;
    content?: React.ReactNode;
}

type JointContent = React.ReactNode | MessageArgsProps;

type TypeOpen = (content: JointContent, duration?: number | VoidFunction, onClose?: VoidFunction) => AntdMessageType;

export interface MessageMethods {
    info: TypeOpen;
    success: TypeOpen;
    error: TypeOpen;
    warning: TypeOpen;
    loading: TypeOpen;
}

export type MessageInstance = AntdMessageInstance & MessageMethods;

export type UseMessage = (messageConfig?: ConfigOptions) =>
    readonly [MessageInstance, React.ReactElement<any, string | React.JSXElementConstructor<any>>];

export type MessageApi = MessageMethods & {
    useMessage: UseMessage;
} & typeof message;
