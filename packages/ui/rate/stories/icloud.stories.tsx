import React from 'react';
import Rate from '../src';

export default {
    title: '数据录入/Rate 评分',
    component: Rate,
};

export const Demo = () => {
    return (<Rate allowHalf defaultValue={2.5} />);
};

export const Api = () => {
    return (
        <>
            <a href="https://ant.design/components/rate-cn/">Antd Rate API</a>
        </>
    );
};

