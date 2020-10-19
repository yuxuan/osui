// storybook 6.0 需要 @babel/preset-env @babel/plugin-proposal-class-properties loose: true
// 直接复制本文件粘贴到 {your-project-path}/osui/node_modules/@reskript/config-babel/dist/index.js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBabelConfig = exports.getTransformBabelConfig = exports.getParseOnlyBabelConfig = void 0;
const lodash_1 = require("lodash");
const resolve_1 = require("resolve");
// https://github.com/babel/babel/issues/10379#issuecomment-527077992
const coreJSPreset = () => {
    return {
        plugins: [
            [
                resolve_1.sync('@reskript/babel-plugin-resolve-core-js'),
                {
                    replacementName: '$internal/core-js',
                },
            ],
        ],
    };
};
exports.getParseOnlyBabelConfig = (options = {}) => {
    const { browserSupport = {}, polyfill = false, modules = false } = options;
    const presets = [
        polyfill && coreJSPreset,
        [
            resolve_1.sync('@babel/preset-env'),
            {
                loose: true,
                modules,
                debug: false,
                targets: browserSupport,
                useBuiltIns: polyfill ? 'usage' : false,
                corejs: polyfill ? { version: 3, proposals: true } : undefined,
            },
        ],
        resolve_1.sync('@babel/preset-typescript'),
        resolve_1.sync('@babel/preset-react'),
    ];
    const plugins = [
        [resolve_1.sync('@babel/plugin-proposal-decorators'), { legacy: true }],
        [resolve_1.sync('@babel/plugin-proposal-class-properties'), {loose: true}],
        resolve_1.sync('@babel/plugin-proposal-do-expressions'),
        // export Foo from './Foo';
        resolve_1.sync('@babel/plugin-proposal-export-default-from'),
        // export {Foo} from './Foo';
        resolve_1.sync('@babel/plugin-proposal-export-namespace-from'),
        // const foo = obejct.foo ?? 'default';
        resolve_1.sync('@babel/plugin-proposal-nullish-coalescing-operator'),
        // 1_234_567
        resolve_1.sync('@babel/plugin-proposal-numeric-separator'),
        // object?.foo?.bar
        resolve_1.sync('@babel/plugin-proposal-optional-chaining'),
        // const result = array |> unique |> compact |> flatten
        [resolve_1.sync('@babel/plugin-proposal-pipeline-operator'), { proposal: 'minimal' }],
        // const valid = input.isValid() || throw new Error('Invalid')
        resolve_1.sync('@babel/plugin-proposal-throw-expressions'),
        resolve_1.sync('@babel/plugin-syntax-dynamic-import'),
        resolve_1.sync('@babel/plugin-syntax-import-meta'),
    ];
    return {
        plugins,
        presets: lodash_1.compact(presets),
    };
};
exports.getTransformBabelConfig = (options = {}) => {
    const minimal = exports.getParseOnlyBabelConfig(options);
    const { mode = 'development' } = options;
    const plugins = [
        // 这东西必须放在最前面，不然`export default class`会被其它插件转义掉没机会确认真实的名字
        resolve_1.sync('@reskript/babel-plugin-add-react-display-name'),
        ...minimal.plugins || [],
        [
            resolve_1.sync('babel-plugin-import'),
            {
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: true,
            },
        ],
        mode === 'production' && [resolve_1.sync('babel-plugin-lodash'), { id: ['lodash', 'lodash-decorators'] }],
        resolve_1.sync('babel-plugin-react-require'),
    ];
    return {
        presets: minimal.presets,
        plugins: lodash_1.compact(plugins),
    };
};
exports.getBabelConfig = (options = {}) => {
    const { mode = 'development', hot = 'none', hostType = 'application' } = options;
    const transform = exports.getTransformBabelConfig(options);
    const requireReactOptimization = mode === 'production' && hostType === 'application';
    // 考虑到生成的chunk的hash稳定性，此处不使用`babel-plugin-lodash`来缩减lodash的体积了
    const plugins = [
        ...transform.plugins || [],
        requireReactOptimization && resolve_1.sync('babel-plugin-transform-react-remove-prop-types'),
        hot === 'all' && [resolve_1.sync('react-refresh/babel'), { skipEnvCheck: true }],
    ];
    return { presets: transform.presets, plugins: lodash_1.compact(plugins) };
};
//# sourceMappingURL=index.js.map