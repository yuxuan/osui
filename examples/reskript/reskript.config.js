const {dependenciesOnCDN} = require('@baidu/reskript-plugins');

const enableTrack = process.env.DEPLOY_ENV === 'online';

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
    appTitle: 'Unknown',
    style: {
        lessVariables: {'ant-prefix': 'ant'},
        resources: [
            require.resolve('@osui/icloud-theme/dist/antd-vars-patch.less'),
            require.resolve('@osui/icloud-theme/dist/less-functions-overrides.less'),
        ],
    },
    finalize: config => {
        config.resolve.alias['@osui/icons'] = '@osui/icons-icloud';
        return config;
    }
};

exports.devServer = {
    port: 8100, // TODO: 找一个不和其它系统冲突的端口
    apiPrefixes: ['/api'], // TODO: 设置后端API的URL前缀
    defaultProxyDomain: 'unknown-test.baidu.com', // TODO: 设置后端测试环境域名
    hot: 'all',
};

exports.plugins = [
    dependenciesOnCDN({polyfill: true}),
];
