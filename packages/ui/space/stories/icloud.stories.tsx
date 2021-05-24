import React from 'react';
import Button from '@osui/button';
import Space from '../src';

export default {
    title: '布局/Space',
};

export const Demo = () => {
    return (
        <Space>
            <Button type="primary">primary</Button>
            <Button>secondary</Button>
        </Space>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/space-cn/">Antd Space API</a>
        </>
    );
};

