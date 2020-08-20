const {stableChunk, sentry, devLogin, browserInspect, dependenciesOnCDN} = require('@baidu/reskript-plugins');

const enableTrack = process.env.TRACK_ENV !== 'off';

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

exports.build = {
    appTitle: 'Unknown', // TODO: 修改系统名称
    extractCSS: false,
    styleResources: [
        require.resolve('@osui/theme/dist/antd-vars-patch.less'),
        require.resolve('@osui/theme/dist/less-functions-overrides.less'),
    ],
};

exports.devServer = {
    port: 8100, // TODO: 找一个不和其它系统冲突的端口
    apiPrefixes: ['/api'], // TODO: 设置后端API的URL前缀
    defaultProxyDomain: 'unknown-test.baidu.com', // TODO: 设置后端测试环境域名
    hot: 'simple',
};

exports.addition = () => ({});

const devLoginOptions = {
    uuapCallbackURL: '/',
    sessionCookieName: 'SESSION',
    // TODO: 使用常用的测试用户名
    presetUsers: [
        {username: 'zhanglili01', tags: ['测试用户']},
    ],
};

exports.plugins = [
    stableChunk(),
    sentry('invalid'),
    // devLogin(devLoginOptions),
    browserInspect({chrome: 72, safari: 12, other: 'accept'}),
    dependenciesOnCDN({polyfill: true}),
];
