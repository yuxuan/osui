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
