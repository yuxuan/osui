import React from 'react';
import Spin from '@osui/spin';

export default {
    title: '反馈/Spin 加载中',
    component: Spin,
};

export function Demo() {
    return (
        <Spin />
    );
}

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/spin-cn/">Antd Spin API</a>
        </>
    );
};

