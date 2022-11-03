/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Button from '@osui/button';
import ThemeProvider from '../src';

export default {
    title: 'FE/ThemeProvider',
};

export const Demo = () => {
    const {useTheme, DarkModeSwitcher} = ThemeProvider;
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
