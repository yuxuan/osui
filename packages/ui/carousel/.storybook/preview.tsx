import React from 'react';
import type {Preview} from '@storybook/react';
import {DocsPage, DocsContainer} from '@storybook/addon-docs';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import '@osui/icloud-theme/dist/theme/vars.css';
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
    },
    decorators: [
        (Story) => (
            <div style= {{ padding: 30, background: '#fff' }} >
                <Story />
            </div>
        )
    ],
};

export default preview;
