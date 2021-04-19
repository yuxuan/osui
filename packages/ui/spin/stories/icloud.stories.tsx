import React from 'react';
import {Spin} from 'antd';

export default {
    title: '反馈/Spin 加载中',
    component: Spin,
};

export const Demo = () => {
    return (
        <Spin />
    );
};

export const Api = () => {
    return (
        <>
            <a href="https://ant.design/components/spin-cn/">Antd Spin API</a>
        </>
    );
};

