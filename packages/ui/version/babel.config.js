const {getTransformBabelConfig} = require('@reskript/config-babel');

const options = {
    browserSupport: {},
    usage: 'build',
    mode: 'production',
    polyfill: false,
    hostType: 'library',
};

const babelConfig = getTransformBabelConfig(options);

babelConfig.plugins = babelConfig.plugins.filter(plugin => {
    if (Array.isArray(plugin) && plugin[0].includes('babel-plugin-import')) {
        return false;
    }
    return true;
});

module.exports = babelConfig;
