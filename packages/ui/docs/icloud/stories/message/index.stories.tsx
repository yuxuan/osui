import React from 'react';
import { Button, Space } from 'antd';
import message from '@osui/message';

export default {
    title: 'Message',
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
        message.open({type: 'success', content: 'This is a loading message', duration: 2});
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
            </Space>
        </div>);
};
