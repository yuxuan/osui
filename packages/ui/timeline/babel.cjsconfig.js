// 没用 babel.config.cjs 是因为 babel 认为 babel.config.js 和 babel.config.cjs 都是默认的config。
const merge = require('babel-merge');
const {getTransformBabelConfig} = require('@reskript/config-babel');

const options = {
    browserSupport: {},
    usage: 'build',
    mode: 'production',
    polyfill: false,
    hostType: 'library',
};

const overrides = {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: 'cjs',
            },
        ],
    ],
    plugins: [
        [
            'import',
            {
                libraryName: 'antd',
                libraryDirectory: 'lib',
                style: true,
            },
        ],
    ],
};

module.exports = merge(getTransformBabelConfig(options), overrides);
