import React from 'react';
import { Button, Space } from 'antd';
import message from '../src';

export default {
    title: 'Message',
};

export const Demo = () => {
    const success = () => {
        message.success({content: 'This is a success message'});
    };
    const error = () => {
        message.error({content: 'This is an error message'});
    };
    const info = () => {
        message.info({content: 'This is an info message'});
    };
    const warning = () => {
        message.warning({content: 'This is a warning message'});
    };

    const loading = () => {
        message.loading('This is a loading message');
    };

    const open = () => {
        message.open({type: 'success', content: 'This is a loading message', duration: 200 });
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
