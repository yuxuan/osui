const fs = require('fs');
const lessVarsToJs = require('less-vars-to-js');
const lessVars = fs.readFileSync(require.resolve('@osui/theme/dist/antd-vars-patch.less'), 'utf8');
const modifyVars = lessVarsToJs(lessVars, {
    resolveVariables: true,
    stripPrefix: true
});

const {loaders} = require('@reskript/config-webpack');

const loaderOptions = {
    cwd: process.cwd(),
    srcDirectory: '',
    projectSettings: {
        build: {
            extractCSS: false,
            extraLessVariables: modifyVars,
            styleResources: [
                require.resolve('@osui/theme/dist/less-functions-overrides.less'),
            ],
        },
    },
};

module.exports = {
    plugins: [{
        plugin: {
            overrideWebpackConfig({webpackConfig}) {
                const oneOfRule = webpackConfig.module.rules.find(rule => rule.oneOf);

                const lessRule = oneOfRule.oneOf.find(
                    rule => String(rule.test) === String(/\.less$/)
                );
                if (!lessRule) {
                    oneOfRule.oneOf.unshift({
                        test: /\.less$/,
                        use: [
                            loaders.style(loaderOptions),
                            loaders.css(loaderOptions),
                            loaders.less(loaderOptions),
                            loaders.styleResources(loaderOptions),
                        ]
                    });
                }
                return webpackConfig;
            }
        }
    }],
};