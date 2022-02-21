/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {Button} from '@osui/ui';
import ThemeProvider, {DarkModeSwitcher, useTheme} from '../src';

export default {
    title: 'ThemeProvider',
};

export const Demo = () => {
    const theme = useTheme();
    return (
        <ThemeProvider>
            <DarkModeSwitcher>
                开关
            </DarkModeSwitcher>
            <Button>Hello: {theme}</Button>
        </ThemeProvider>
    );
};
