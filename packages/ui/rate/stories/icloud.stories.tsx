import React from 'react';
import Rate from '../src';

export default {
    title: '未实现/Rate 评分',
    component: Rate,
};

export const Demo = () => {
    return (<Rate allowHalf defaultValue={2.5} />);
};
