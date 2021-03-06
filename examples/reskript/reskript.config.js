const {stableChunk} = require('@baidu/reskript-plugins');

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
        // 以下内容是需要添加配置的
        lessVariables: {
            'ant-prefix': 'ant',
        }, // antd css class的前缀
        resources: [
            // 对antd变量的覆盖
            require.resolve('@osui/icloud-theme/dist/antd-vars-patch.less'),
            // 使用less-functions-overrides覆盖less函数，让css variables通过less编译
            require.resolve('@osui/icloud-theme/dist/less-functions-overrides.less'),
        ],
    },
    finalize: config => {
        config.resolve.alias['@osui/icons'] = '@osui/icons-icloud';
        return config;
    }
};

exports.devServer = {
    port: 8300, // TODO: 找一个不和其它系统冲突的端口
    apiPrefixes: ['/api'], // TODO: 设置后端API的URL前缀
    defaultProxyDomain: 'unknown-test.baidu.com', // TODO: 设置后端测试环境域名
};

exports.plugins = [
    stableChunk(),
];
