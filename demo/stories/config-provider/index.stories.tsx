/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ConfigProvider from '@osui/config-provider';

export default {
    title: '其他/全局化配置 ConfigProvider',
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

