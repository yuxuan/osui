import React from 'react';
import Popconfirm from '../src';

export default {
    title: 'Popconfirm',
    component: Popconfirm,
};

export const Demo = () => {
    return (
        <Popconfirm title="卡片标题">
            带标题的
        </Popconfirm>
    );
};
