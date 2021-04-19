import React from 'react';
import Rate from '@osui/rate';

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
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/rate-cn/">Antd Rate API</a>
        </>
    );
};

