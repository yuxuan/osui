const {getBabelConfig} = require('@reskript/config-babel');
const {loaders} = require('@reskript/config-webpack');
const path = require('path');
const process = require('process');

// const themeEnv = process.env.THEME;
// const isOsuiThem = themeEnv === 'osui';
const antdVarsPatchPath = path.join(__dirname, '..', 'node_modules', '@osui/icloud-theme/dist/antd-vars-patch.less')
const lessFunctionsOverridesPath = path.join(__dirname, '..', 'node_modules', '@osui/icloud-theme/dist/less-functions-overrides.less')

const loaderOptions = {
    cwd: process.cwd(),
    srcDirectory: 'src',
    projectSettings: {
        build: {
            style: {
                resources: [
                    antdVarsPatchPath,
                    lessFunctionsOverridesPath,
                ],
                lessVariables: {
                    'ant-prefix': 'ant',
                },
                extractCSS: false,
            },
        },
    },
};

const babelConfig = getBabelConfig();

babelConfig.plugins = babelConfig.plugins.filter(plugin => {
    if (Array.isArray(plugin) && plugin[0].includes('babel-plugin-import')) {
        return false;
    }
    return true;
});

module.exports = ({
    core: {
        builder: 'webpack5',
    },
    stories: [
        '../stories/**/*.stories.[tj]s{,x}',
        '../stories/**/*.stories.mdx',
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
    webpackFinal: config => {
        config.module.rules.push({
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: babelConfig,
            }],
        });
        config.module.rules.push({
            test: /\.less$/,
            use: [
                loaders.style(loaderOptions),
                loaders.css(loaderOptions),
                loaders.less(loaderOptions),
                loaders.styleResources(loaderOptions),
            ],
        });
        // 如果使用css modules 请打开这个，并按需匹配css modules 文件
        // 这个同时打开了classnames loader， 可以用 import c from 'xxx.less'
        // config.module.rules.push({
        //     test: /\.less$/,
        //     loaders: [
        //         loaders.classNames(),
        //         loaders.style(loaderOptions),
        //         loaders.cssModules(loaderOptions),
        //         loaders.less(loaderOptions),
        //         loaders.styleResources(loaderOptions),
        //     ],
        // });

        config.resolve.extensions.push('.ts', '.tsx');
        config.resolve.alias['@'] = path.resolve(__dirname, '../src');
        config.resolve.alias['@osui/icons'] = '@osui/icons-icloud';

        // config.module.rules[0].use[0].options.presets = [
        //     require.resolve('@babel/preset-react'),
        //     require.resolve('@babel/preset-env'),
        //     require.resolve('@emotion/babel-preset-css-prop'),
        // ];

        return config;
    },
});

