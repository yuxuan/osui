import type {StorybookConfig} from '@storybook/react-vite';
import {mergeConfig} from 'vite';
// import {resolveInjection, LessInjection} from './lessInjection';

export default (getAbsolutePath: (name: string) => any, __dirname: string) => {
    //  const themeEnv = process.env.THEME;

    // const resources = [getAbsolutePath('@osui/icloud-theme') + '/dist/antd-vars-patch.less']


    const config: StorybookConfig = {
        stories: [
            // '../stories/**/*.stories.[tj]s{,x}',
            // '../stories/**/*.stories.mdx',
            '../stories/**/icloud.stories.[tj]s{,x}',
            '../stories/**/icloud.stories.mdx',
        ],
        addons: [
            {
                name: '@storybook/addon-docs',
                options: {
                    configureJSX: true,
                    babelOptions: {},
                    sourceLoaderOptions: null,
                },
            },
            getAbsolutePath('@storybook/addon-links'),
            getAbsolutePath('@storybook/addon-essentials'),
            getAbsolutePath('@storybook/addon-onboarding'),
            getAbsolutePath('@storybook/addon-interactions'),
        ],
        framework: {
            name: getAbsolutePath('@storybook/react-vite'),
            options: {},
        },
        docs: {
            autodocs: 'tag',
        },
        async viteFinal(config) {
            // const resolving = [
            //     import('less-plugin-npm-import'),
            //     resolveInjection(process.cwd(), 'src', resources),
            // ] as const;
            // const [{default: NpmImport}, injection] = await Promise.all(resolving);
            // Merge custom configuration into the default config
            return mergeConfig(config, {
                // Add dependencies to pre-optimization
                optimizeDeps: {
                    include: ['storybook-dark-mode'],
                },
                // css: {
                //     preprocessorOptions: {
                //         less: {
                //             plugins: [
                //                 new LessInjection(injection),
                //                 new NpmImport({prefix: '~'}),
                //             ],
                //             modifyVars: {
                //                 'ant-prefix': 'ant',
                //             },
                //             javascriptEnabled: true,
                //         },
                //     },
                // },
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
