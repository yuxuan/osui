import type {StorybookConfig} from '@storybook/react-vite';
import {mergeConfig} from 'vite';

export default (getAbsolutePath: (name: string) => any, __dirname: string) => {
    const config: StorybookConfig = {
        stories: [
            '../stories/**/icloud.stories.[tj]s{,x}',
            // './stories/**/icloud.stories.mdx',
        ],
        framework: {
            name: getAbsolutePath('@storybook/react-vite'),
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
    return config;
};
