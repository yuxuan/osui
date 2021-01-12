import React from 'react';
import ConfigProvider from '@osui/config-provider';

export default {
    title: '通过验收/ConfigProvider',
    component: ConfigProvider,
};

export const Demo = () => {
    return (
        <ConfigProvider />
    );
};
