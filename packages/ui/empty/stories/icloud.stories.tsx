import React from 'react';
import Empty from '../src';

export default {
    title: '数据展示/Empty 空状态',
    component: Empty,
};

export const Demo1 = () => {
    return (
        <Empty />
    );
};

export const Demo2 = () => {
    return (
        <Empty type="error" description="404 Not Found" />
    );
};

export const Demo3 = () => {
    return (
        <Empty type="error" />
    );
};
