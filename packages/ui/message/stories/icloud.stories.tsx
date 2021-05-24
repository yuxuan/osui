import React from 'react';
import Button from '@osui/button';
import Space from '@osui/space';
import message from '../src';

export default {
    title: '反馈/Message 全局提示',
};

export const Demo = () => {
    const success = () => {
        message.success('This is a success message');
    };
    const error = () => {
        message.error('This is an error message');
    };
    const info = () => {
        message.info('This is an info message');
    };
    const warning = () => {
        message.warning('This is a warning message');
    };

    const loading = () => {
        message.loading('This is a loading message');
    };

    const open = () => {
        message.open({type: 'success', content: 'This is a loading message', duration: 200, showCountDown: true});
    };

    const original = () => {
        message.open({
            type: 'success',
            content: '弹性公网IP（EIP）需绑定在负载均衡（BLB）或预付费云服务器（BCC）上方可进行备案。',
            original: true,
            duration: 3,
        });
    };
    return (
        <div style={{ padding: 30 }}>
            <Space>
                <Button onClick={success}>Success</Button>
                <Button onClick={error}>Error</Button>
                <Button onClick={info}>Info</Button>
                <Button onClick={warning}>Warning</Button>
                <Button onClick={loading}>Loading</Button>
                <Button onClick={open}>open success</Button>
                <Button onClick={original}>open Antd Original Message</Button>
            </Space>
        </div>);
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/message-cn/">Antd Message API</a>
        </>
    );
};

