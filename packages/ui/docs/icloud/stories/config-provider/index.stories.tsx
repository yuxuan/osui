import React from 'react';
import ConfigProvider from '@osui/config-provider';

export default {
    title: 'FE/ConfigProvider',
    component: ConfigProvider,
};

export const Demo = () => {
    return (
        <ConfigProvider />
    );
};
