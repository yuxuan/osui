import React from 'react';
import Empty from '@osui/empty';

export default {
    title: '验收中/Empty 空状态',
    component: Empty,
};

export const Demo1 = () => {
    return (
        <Empty />
    );
};

export const Demo2 = () => {
    return (
        <Empty type="404" />
    );
};

export const Demo3 = () => {
    return (
        <Empty type="error" />
    );
};
