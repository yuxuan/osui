const CracoLessPlugin = require('craco-less');
const fs = require('fs');
const lessVarsToJs = require('less-vars-to-js');
const lessVars = fs.readFileSync(require.resolve('@osui/theme/dist/antd-vars-patch.less'), 'utf8');
const modifyVars = lessVarsToJs(lessVars, {
    resolveVariables: true,
    stripPrefix: true
});
const LessPluginFunctions = require('less-plugin-functions');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: modifyVars,
                        javascriptEnabled: true,
                        plugins: [
                            new LessPluginFunctions({alwaysOverride: true}),
                        ],
                    },
                },
            },
        },
        {
            plugin: {
                overrideWebpackConfig({webpackConfig}) {
                    const oneOfRule = webpackConfig.module.rules.find(rule => rule.oneOf);
                    const lessRule = oneOfRule.oneOf.find(
                        rule => rule.test && rule.test.toString().includes("less")
                    );

                    lessRule.use.push({
                        loader: require.resolve('style-resources-loader'),
                        options: {
                            patterns: [require.resolve('@osui/theme/dist/less-functions-overrides.less')],
                            injector: "append",
                        }
                    });
                    return webpackConfig;
                }
            }
        }
    ],
};