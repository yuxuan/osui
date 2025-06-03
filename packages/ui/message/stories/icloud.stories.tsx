/* eslint-disable import/no-extraneous-dependencies */
import React, {useState} from 'react';
import {version} from 'antd';
import Button from '@osui/button';
import Markdown from '@osui/markdown';
import BrandProvider from '@osui/brand-provider';
import message from '../src';

export default {
    title: '反馈/Message 全局提示',
};

const NewApp = () => {
    const [api, successHolder] = message.useMessage();
    const success = () => {
        api.success('This is a success message', 200);
    };
    const error = () => {
        api.error('This is an error message', 10000);
    };
    const info = () => {
        api.info('This is an info message');
    };
    const warning = () => {
        api.warning('This is a warning message');
    };

    const loading = () => {
        api.loading('This is a loading message');
    };

    const success2 = () => {
        api.success({
            content: 'This is a success message',
            showClose: true,
        }, 100000);
    };

    const success3 = () => {
        api.success({title: '创建成功', content: '后续您可在列表中操作'});
    };

    const success4 = () => {
        api.success({
            title: '创建成功',
            content: (
                <>
                    <div>
                        订单接口返回异常，您可尝试联系集团云值班同学解决，<a>查看集团云值班表</a>
                    </div>
                    <div>错误码：ewrfjji-ejjkfnjkbjk-wfjhjjkn-fhihg11</div>
                </>),
            showClose: true,
        });
    };

    const success5 = () => {
        api.success({
            title: '创建成功',
            showClose: true,
        }, 10000);
    };

    const open = () => {
        api.open({
            content: 'This is a success message',
        });
    };

    return (
        <>
            {/* <ConfigProvider> */}
            <div style={{padding: 30}}>
                <h3>1、成功提示</h3>
                <p>基础样式</p>
                <Button
                    type="primary"
                    onClick={() => api.success({
                        content: 'This is a success message',
                        duration: 2000,
                    })}
                >
                    Success
                </Button>
                <p>基础样式</p>
                <Button onClick={success}>Success</Button>
                <p />
                <p>关闭&倒计时</p>
                <Button onClick={success2}>Success</Button>
                <p />
                <p>标题&内容</p>
                <Button onClick={success3}>Success</Button>
                <p>标题</p>
                <Button onClick={success5}>Success</Button>
                <p />
                <p>带操作项</p>
                <Button onClick={success4}>Success</Button>
                <h3>2、错误提示</h3>
                <Button onClick={error}>Error</Button>
                <h3>3、警示样式</h3>
                <Button onClick={warning}>Warning</Button>
                <h3>4、通知样式</h3>
                <Button onClick={info}>Info</Button>
                <h3>5、加载样式</h3>
                <Button onClick={loading}>Loading</Button>
                <h3>6.open</h3>
                <Button onClick={open}>Open</Button>
                <p />
                {successHolder}
            </div>
        </>
    );
};

export const NewDemo = () => {
    const [cssVar, setCssVar] = useState(true);

    const theme = {
        cssVar: cssVar && {
            prefix: 'tna',
            key: 'tluafed',
        },
    };

    return (
        <BrandProvider theme={theme}>
            <button
                onClick={() => setCssVar(v => !v)}
            >
                切换{cssVar ? '不' : ''}使用cssVar
            </button>
            <NewApp />
        </BrandProvider>
    );
};

const App = () => {
    const success = () => {
        message.success('This is a success message', 200);
    };
    const error = () => {
        message.error('This is an error message');
    };
    const info = () => {
        message.info('This is an info message');
    };
    const warning = () => {
        message.warning('This is a warning message');
    };

    const loading = () => {
        message.loading('This is a loading message');
    };

    const success2 = () => {
        message.success({content: 'This is a success message', showClose: true});
    };

    const success3 = () => {
        message.success({title: '创建成功', content: '后续您可在列表中操作'}, 10000);
    };

    const success4 = () => {
        message.success({
            title: '创建成功',
            content: (
                <>
                    <div>
                        订单接口返回异常，您可尝试联系集团云值班同学解决，<a>查看集团云值班表</a>
                    </div>
                    <div>错误码：ewrfjji-ejjkfnjkbjk-wfjhjjkn-fhihg11</div>
                </>),
            showClose: true,
        }, 10000);
    };

    const open = () => {
        message.open({
            content: 'This is a loading message',
        });
    };

    return (
        <div style={{padding: 30}}>
            {version}
            <p>如果message从中间展示，在app入口处，使用config-provder。可以全局配置message的展示位置</p>
            <code>
                {"setGlobalConfig({messagePosition: 'center'})"}
            </code>
            <p>使用静态方法，需要 antd <b>5.13.0+</b> <a href="https://ant.design/components/config-provider-cn#configproviderconfig">ConfigProvider.config</a></p>
            <p></p>
            <h3>1、成功提示</h3>
            <p>基础样式</p>
            <Button onClick={success}>Success</Button>
            <p />
            <p>关闭&倒计时</p>
            <Button onClick={success2}>Success</Button>
            <p />
            <p>标题&内容</p>
            <Button onClick={success3}>Success</Button>
            <p />
            <p>带操作项</p>
            <Button onClick={success4}>Success</Button>
            <h3>2、错误提示</h3>
            <Button onClick={error}>Error</Button>
            <h3>3、警示样式</h3>
            <Button onClick={warning}>Warning</Button>
            <h3>4、通知样式</h3>
            <Button onClick={info}>Info</Button>
            <h3>5、加载样式</h3>
            <Button onClick={loading}>Loading</Button>
            <h3>6.open</h3>
            <Button onClick={open}>Open</Button>
        </div>
    );
};

export const Demo = () => {
    const [cssVar, setCssVar] = useState(true);
    const theme = {
        cssVar: cssVar && {
            prefix: 'tna',
            key: 'tluafed',
        },
    };

    return (
        <BrandProvider theme={theme}>
            <button
                onClick={() => setCssVar(v => !v)}
            >
                切换{cssVar ? '不' : ''}使用cssVar
            </button>
            <App />
        </BrandProvider>
    );
};

export const Api = () => {
    const content = `
| 参数 | 说明 | 类型 | 默认值
| --- | --- | --- | --- |
| title | message的title部分 | ReactNode、string | '' |
| content | message的content部分 | ReactNode、string | '' |
| showClose | 是否展示关闭icon | boolean | false |
| showCountDown | 是否展示倒计时 | boolean | true |
| original | 当传入original为true时，返回默认的antd message| boolean | undefined |
`;

    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/message-cn/">Antd Message API</a>
            <h2>新增参数</h2>
            <p>主要是content为config的用法，一下列出config新增的参数</p>
            <Markdown content={content} />
        </>
    );
};

export const TestCase = () => {
    const success = () => {
        // eslint-disable-next-line max-len
        message.success('This is a success messageThis is a success messageThis is a success messageThis is a success messageThis is a success messageThis is a success message');
    };

    const success2 = () => {
        message.success('ok');
    };

    const success3 = () => {
        message.success({content: 'ok', showClose: true});
    };

    const success4 = () => {
        message.success({
            content: (
                <>
                    <div>订单接口返回异常，您可尝试联系集团云值班同学解决，查看集团云值班表</div>
                    <div>错误码：ewrfjji-ejjkfnjkbjk-wfjhjjkn-fhihg11</div>
                </>
            ),
            title: '创建成功',
        },
        200000);
    };

    const success5 = () => {
        message.success({
            content: (
                <>
                    { /* eslint-disable-next-line max-len */ }
                    <div>订单接口返回异常，您可尝试联系集团云值班同学解决，查看集团云值班表订单接口返回异常，您可尝试联系集团云值班同学解决，查看集团云值班表订单接口返回异常，您可尝试联系集团云值班同学解决，查看集团云值班表</div>
                    <div>错误码：ewrfjji-ejjkfnjkbjk-wfjhjjkn-fhihg11</div>
                </>
            ),
            title: '创建成功',
        });
    };

    const success6 = () => {
        message.success({
            title: '创建成功',
        },
        20000).then(() => {
            console.log(2112);
        });
    };
    const success7 = () => {
        message.success({
            title: (
                <div style={{display: 'flex'}}>
                    <div>创建成功</div>
                    <a style={{float: 'right', marginLeft: '8px'}}>
                        查看详情
                    </a>
                </div>
            ),
        });
    };
    const success8 = () => {
        message.success({
            showCountDown: false,
            showClose: true,
            duration: 6000,
            title: (
                <div style={{display: 'flex'}}>
                    <div>创建成功</div>
                    <a style={{float: 'right', marginLeft: '8px'}}>
                        查看详情
                    </a>
                </div>
            ),
        });
    };

    const success9 = () => {
        message.success({
            title: '创建成功',
            onClose: () => console.log('closed'),
        });
    };

    const success10 = () => {
        message.success('创建成功', 10, () => console.log('closed'));
    };

    const success11 = () => {
        message.success({
            title: '创建成功',
            onClose: () => console.log('closed'),
            showClose: true,
            onClick: () => console.log('clicked'),
        });
    };

    const success12 = () => {
        const key = 'updatable';
        message.loading({content: 'Loading...', key});
        // Testing that content of the message should be updated.
        setTimeout(() => message.success({content: 'Loaded', key}), 1000);
        setTimeout(() => message.destroy(), 3000);
    };

    const success13 = () => {
        // 这个不好用了，因为我们覆盖了duration
        message.config({duration: 3});
        message.info('test');
    };

    return (
        <div style={{padding: 30}}>
            <p>max-width测试</p>
            <Button onClick={success}>Success</Button>
            <p>很短测试</p>
            <Button onClick={success2}>Success</Button>
            <p>有close</p>
            <Button onClick={success3}>Success</Button>
            <p>title</p>
            <Button onClick={success4}>Success</Button>
            <Button onClick={success5}>Success</Button>
            <p>title only</p>
            <Button onClick={success6}>Success</Button>
            <p>title里面有链接</p>
            <Button onClick={success7}>Success</Button>
            <p>永久显示，时间设置一个很长的时间，showClose: true, showCountDown: false</p>
            <Button onClick={success8}>Success</Button>
            <p>onClose测试</p>
            <Button onClick={success9}>content配置</Button>
            <Button onClick={success10}>函数第三个参数</Button>
            <Button onClick={success11}>点击关闭时调用</Button>
            <p>同一个message key内容替换</p>
            <Button onClick={success12}>message</Button>
            <p>config 测试</p>
            <Button onClick={success13}>message</Button>
        </div>
    );
};
