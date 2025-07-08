import React from 'react';
import type {Preview} from '@storybook/react-vite';
import '../ui-theme/icloud-theme/es/vars.css';
import BrandProvider from '../ui/brand-provider/es';
import './global.css';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        docs: {
            codePanel: true,
        },
    },
    decorators: [
        Story => (
            <BrandProvider brand="icloud" theme={{cssVar: false}}>
                <Story />
            </BrandProvider>
        ),
    ],
};

export default preview;
