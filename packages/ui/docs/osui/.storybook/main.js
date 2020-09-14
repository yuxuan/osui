const {getBabelConfig} = require('@reskript/config-babel');
const {loaders} = require('@reskript/config-webpack');
const process = require('process');

const loaderOptions = {
    cwd: process.cwd(),
    srcDirectory: '',
    projectSettings: {
        build: {
            extractCSS: false,
            styleResources: [
                require.resolve('@osui/theme/dist/antd-vars-patch.less'),
                require.resolve('@osui/theme/dist/less-functions-overrides.less'),
            ],
        },
    },
};

module.exports = {
    stories: [
        '../stories/**/*.stories.[tj]s{,x}',
        '../stories/**/*.stories.mdx'
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
        '@storybook/addon-storysource', // https://github.com/storybookjs/storybook/tree/master/addons/storysource
        '@storybook/addon-a11y/register', // https://github.com/storybookjs/storybook/tree/master/addons/a11y
        '@storybook/addon-viewport/register', // https://github.com/storybookjs/storybook/tree/master/addons/viewport
    ],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader',
                    options: getBabelConfig(),
                },
            ],
        });
        config.module.rules.push({
            test: /\.less$/,
            loaders: [
                loaders.style(loaderOptions),
                loaders.css(loaderOptions),
                loaders.less(loaderOptions),
                loaders.styleResources(loaderOptions),
            ],
        });

        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    },
};
