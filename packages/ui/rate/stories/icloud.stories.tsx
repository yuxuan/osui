import React from 'react';
import Rate from '../src';

export default {
    title: '数据录入/Rate 评分',
    component: Rate,
};

export const Demo = () => {
    return (<Rate allowHalf defaultValue={2.5} />);
};
