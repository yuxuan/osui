import React from 'react';
import ConfigProvider from '../src';

export default {
    title: 'FE/ConfigProvider',
    component: ConfigProvider,
};

export const Demo = () => {
    return (
        <ConfigProvider />
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/config-provider-cn/">Antd ConfigProvider API</a>
        </>
    );
};

