import React, {useEffect} from 'react';
import type {Preview} from '@storybook/react';
import {DocsPage, DocsContainer} from '@storybook/addon-docs';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import {useDarkMode} from 'storybook-dark-mode';
// import '@osui/icloud-theme/dist/theme/vars.css';
import {themes} from '@storybook/theming';
import './global.css';
const preview: Preview = {
    parameters: {
        actions: {argTypesRegex: '^on[A-Z].*'},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        viewport: {
            viewports: {
                ...INITIAL_VIEWPORTS
            }
        },
        docs: {
            container: DocsContainer,
            page: DocsPage,
        },
        options: {
            storySort: {
                order: ['OSUI介绍', '通用', '数据录入', '导航', '数据展示', '反馈', '其它', '布局', '场景', 'FE'],
            },
        },
        darkMode: {
            // Override the default dark theme
            dark: { ...themes.dark },
            // Override the default light theme
            light: { ...themes.normal},
            stylePreview: true
        }
    },
    decorators: [
        (Story) => {
            const isDarkMode = useDarkMode();
            console.log(123, isDarkMode);
            useEffect(
                () => {
                    document.documentElement.dataset.theme = isDarkMode ? "dark" : "light";
                },
                [isDarkMode]
            );
            return (
                <div style={{ padding: 30, background: '#fff' }} >
                    <Story />
                </div>
            );
        }
    ],
};

export default preview;
