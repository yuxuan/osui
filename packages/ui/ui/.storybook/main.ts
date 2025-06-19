import type {StorybookConfig} from '@storybook/react-vite';
import {mergeConfig} from 'vite';

const config: StorybookConfig = {
    stories: [
        '../../*/stories/**/icloud.stories.[tj]s{,x}',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    async viteFinal(config) {
        return mergeConfig(config, {
            build: {
                cssCodeSplit: false,
            },
            resolve: {
                alias: [
                    {find: '@', replacement: __dirname + '/src'},
                ],
            },
        });
    },
};

export default config;
