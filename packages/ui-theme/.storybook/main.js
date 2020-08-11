const {getBabelConfig} = require('@reskript/config-babel');
const {loaders} = require('@reskript/config-webpack');
const path = require('path');

const loaderOptions = {
    cwd: process.cwd(),
    srcDirectory: 'src',
    projectSettings: {
        build: {
            extractCSS: false,
            styleResources: [
                require.resolve('../src/styles/theme.var.less'),
            ],
        },
    },
};

module.exports = {
    stories: ['../stories/**/*.stories.[tj]s{,x}'],
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
        config.resolve.alias['@'] = path.resolve(__dirname, '../src');
        return config;
    },
};
