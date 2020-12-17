/** @typedef {import("@reskript/settings").ProjectSettings} ProjectSettings */

const {stableChunk, sentry, devLogin, browserInspect, dependenciesOnCDN} = require('@baidu/reskript-plugins');

const enableTrack = process.env.DEPLOY_ENV === 'online';

/**
 * @type ProjectSettings['featureMatrix']
 */
exports.featureMatrix = {
    stable: {
        track: enableTrack,
    },
    test: {
        track: enableTrack,
    },
    dev: {
        track: false,
    },
};

/**
 * @type ProjectSettings['build']
 */
exports.build = {
    appTitle: 'OSUI Example', // TODO: 修改系统名称
    style: {
        resources: [
            require.resolve('@osui/icloud-theme/dist/antd-vars-patch.less'),
            require.resolve('@osui/icloud-theme/dist/less-functions-overrides.less'),
        ],
    },
};

/**
 * @type ProjectSettings['devServer']
 */
exports.devServer = {
    port: 8100, // TODO: 找一个不和其它系统冲突的端口
    apiPrefixes: ['/api'], // TODO: 设置后端API的URL前缀
    defaultProxyDomain: 'unknown-test.baidu.com', // TODO: 设置后端测试环境域名
    hot: 'all',
};

const devLoginOptions = {
    uuapCallbackURL: '/',
    sessionCookieName: 'SESSION',
    // TODO: 使用常用的测试用户名
    presetUsers: [
        {username: 'zhanglili01', tags: ['测试用户']},
    ],
};

/**
 * @type ProjectSettings['plugins']
 */
exports.plugins = [
    stableChunk(),
    sentry('invalid'),
    // devLogin(devLoginOptions),
    browserInspect({chrome: 72, safari: 12, other: 'accept'}),
    dependenciesOnCDN({polyfill: true}),
];
