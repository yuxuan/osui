import React from 'react';
import Card from '../src';

export default {
    title: '数据展示/Card 卡片',
    component: Card,
};

export const Demo = () => {
    return (
        <Card />
    );
};

export const Api = () => {
    return (
        <>
            <a href="https://ant.design/components/card-cn/">Antd Card API</a>
        </>
    );
};

