import {useDarkMode} from 'storybook-dark-mode';
import {useEffect} from 'react';
import {themes} from '@storybook/theming';
// import '@osui/icloud-theme/dist/theme/vars.css';
import '@osui/icloud-theme/dist/antd4-styles-patch.css';
import './global.css';

export const parameters = {
    options: {
        storySort: {
            order: ['OSUI介绍', '通用', '数据录入', '导航', '数据展示', '反馈', '其它', '布局', '场景', 'FE'],
        },
    },
    darkMode: {
        // Override the default dark theme
        dark: {...themes.dark},
        // Override the default light theme
        light: {...themes.normal},
        stylePreview: true,
    },
};


export const decorators = [
    Story => {
        const isDarkMode = useDarkMode();
        useEffect(
            () => {
                document.documentElement.dataset.theme = isDarkMode ? 'dark' : 'light';
            },
            [isDarkMode]
        );
        return <div style={{padding: 30, 'background-color': 'white'}}><Story /></div>;
    },
];
