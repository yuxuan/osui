const {getTransformBabelConfig} = require('@reskript/config-babel');

const options = {
    browserSupport: {},
    usage: 'build',
    mode: 'production',
    polyfill: false,
    hostType: 'library',
};

module.exports = getTransformBabelConfig(options);
