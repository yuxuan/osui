import React from 'react';
import ConfigProvider from '../src';

export default {
    title: '通过验收/ConfigProvider',
    component: ConfigProvider,
};

export const Demo = () => {
    return (
        <ConfigProvider />
    );
};
