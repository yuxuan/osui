import React from 'react';
import {IconHomeOutlined, IconPlusOutlined, IconLeftOutlined} from '@osui/icons';
import Markdown from '@osui/markdown';
import Divider from '@osui/divider';
import Space from '@osui/space';
import FlexCentered from '@osui/flex-centered';
import BrandProvider from '@osui/brand-provider';
import {version} from 'antd';
import Button from '@osui/button';
import './index.less';

const Blockquote = ({children}) => (
    <blockquote style={{
        background: 'var(--color-brand-1)',
        borderRadius: '3px',
        borderLeft: '5px solid var(--color-brand-6)',
        margin: '30px 0',
        padding: '30px',
    }}
    >
        {children}
    </blockquote>
);

export default {
    title: '通用/Button 按钮',
    component: Button,
};

export const Demo = () => {
    return (
        <>
            <BrandProvider brand="icloud">
                <Blockquote >
                    UE要求两个字时中间没有空格，通过antd ConfigProvider来配置autoInsertSpaceInButton: false。
                    <br />
                    <strong>注意</strong>Button loading自动添加了flexedCenter，当作为button组时，需要外面裹一下div flex center
                </Blockquote>
                <Divider>展示</Divider>
                <h3><b>1、普通按钮</b></h3>
                <p>普通样式</p>
                <FlexCentered>
                    <Button type="default" style={{ 'margin': '0 20px 20px 0' }}>普通样式</Button>
                    <Button type="default" disabled style={{ 'margin': '0 20px 20px 0' }}>普通样式</Button>
                    <Button type="default" loading style={{ 'margin': '0 20px 20px 0' }}>普通样式</Button>
                </FlexCentered>
                <p>加强样式</p>
                <FlexCentered>
                    <Button type="strong" style={{ 'margin': '0 20px 20px 0' }}>加强样式</Button>
                    <Button type="strong" disabled style={{ 'margin': '0 20px 20px 0' }}>加强样式</Button>
                    <Button type="strong" loading style={{ 'margin': '0 20px 20px 0' }}>加强样式</Button>
                </FlexCentered>
                <p>重要样式</p>
                <FlexCentered>
                    <Button type="primary" style={{ 'margin': '0 20px 20px 0' }}>重要样式</Button>
                    <Button type="primary" disabled style={{ 'margin': '0 20px 20px 0' }}>重要样式</Button>
                    <Button type="primary" loading style={{ 'margin': '0 20px 20px 0' }}>重要样式</Button>
                </FlexCentered>
                <h3><b>2、纯文字按钮</b></h3>
                <Blockquote>
                    <p>文字形态的按钮，普通状态（默认黑字hover上变蓝）是用Button type text， 而加强状态（默认蓝色）是使用type link</p>
                    <p>
                        如果是使用a实现，需要自己处理一下样式 <br />
                        color: color-brand-6;
                        hover: color-brand-5;
                        focus: color-brand-7;
                        active: color-brand-7;
                        disabled: color-brand-3;
                    </p>
                </Blockquote>
                <p>普通样式</p>
                <FlexCentered>
                    <Button type="text" style={{ 'margin': '0 20px 20px 0' }}>文字按钮</Button>
                    <Button type="text" disabled style={{ 'margin': '0 20px 20px 0' }}>文字按钮</Button>
                    <Button type="text" loading style={{ 'margin': '0 20px 20px 0' }}>文字按钮</Button>
                </FlexCentered>
                <p>加强样式</p>
                <FlexCentered>
                    <Button type="link" style={{ 'margin': '0 20px 20px 0' }}>文字按钮</Button>
                    <Button type="link" disabled style={{ 'margin': '0 20px 20px 0' }}>文字按钮</Button>
                    <Button type="link" loading style={{ 'margin': '0 20px 20px 0' }}>文字按钮</Button>
                </FlexCentered>
                <h3><strong>3、图文按钮</strong></h3>
                <Blockquote>当icon和文字一起的时候，如果对不齐，可以添加flexCenter属性，如果导致同行不齐，外面包裹div display: flex</Blockquote>
                <p>加强样式</p>
                <Button
                    type="link"
                    flexCenter
                    icon={<IconHomeOutlined />}
                    style={{ 'margin': '0 20px 20px 0' }}
                >
                    图文按钮
                </Button>
                <Button
                    disabled
                    type="link"
                    flexCenter
                    icon={<IconHomeOutlined />}
                    style={{ 'margin': '0 20px 20px 0' }}
                >
                    图文按钮
                </Button>
                <Button
                    loading
                    type="link"
                    flexCenter
                    icon={<IconHomeOutlined />}
                    style={{ 'margin': '0 20px 20px 0' }}
                >
                    图文按钮
                </Button>
                <p>普通样式</p>
                <Button
                    type="text"
                    flexCenter
                    icon={<IconHomeOutlined />}
                    style={{ 'margin': '0 20px 20px 0' }}
                >
                    图文按钮
                </Button>
                <Button
                    disabled
                    type="text"
                    flexCenter
                    icon={<IconHomeOutlined />}
                    style={{ 'margin': '0 20px 20px 0' }}
                >
                    图文按钮
                </Button>
                <Button
                    loading
                    type="text"
                    flexCenter
                    icon={<IconHomeOutlined />}
                    style={{ 'margin': '0 20px 20px 0' }}
                >
                    图文按钮
                </Button>
                <p>按钮形式普通样式</p>
                <Button flexCenter icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }}>
                    图文按钮
                </Button>
                <Button flexCenter disabled icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }}>
                    图文按钮
                </Button>
                <Button flexCenter loading icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }}>
                    图文按钮
                </Button>
                <p>按钮形式重要样式</p>
                <Button flexCenter type="primary" icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }}>
                    图文按钮
                </Button>
                <Button
                    flexCenter
                    disabled
                    type="primary"
                    icon={<IconHomeOutlined />}
                    style={{ 'margin': '0 20px 20px 0' }}
                >
                    图文按钮
                </Button>
                <Button
                    flexCenter
                    loading
                    type="primary"
                    icon={<IconHomeOutlined />}
                    style={{ 'margin': '0 20px 20px 0' }}
                >
                    图文按钮
                </Button>
                <p>图文按钮跳转</p>
                <Button
                    href="http://eefe.baidu-int.com/sites/icloud/?path=/story/osui%E4%BB%8B%E7%BB%8D-%E6%AC%A2%E8%BF%8E%E4%BD%BF%E7%94%A8--demo"
                    flexCenter
                    type="text"
                    icon={<IconLeftOutlined />}
                    style={{ 'margin': '0 20px 20px 0' }}
                >
                    返回ECI资源管理
                </Button>
                <h3><strong>4、图标按钮</strong></h3>
                <Blockquote>
                    有两种形式：一种是没有type=&quot;icon&quot;，
                    另一种是加了type=&quot;icon&quot;的，区别是加了type的是不会有其它类似于primary的这种用法，只是单独一个icon
                </Blockquote>
                <p>普通样式</p>
                <div>
                    <Button icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
                    <Button disabled icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
                    <Button loading icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
                </div>
                <p>加强样式</p>
                <div>
                    <Button type="strong" icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
                    <Button type="strong" disabled icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
                    <Button type="strong" loading icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
                </div>
                <p>重要样式</p>
                <div>
                    <Button type="primary" icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
                    <Button type="primary" disabled icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
                    <Button type="primary" loading icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
                </div>
                <p>纯图标按钮</p>
                <div>
                    <Button type="icon" icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
                    <Button type="icon" disabled icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
                    <Button type="icon" loading icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
                </div>
                <p>纯图标按钮加强</p>
                <Blockquote>颜色需要自己调整一下css</Blockquote>
                <Button
                    type="icon"
                    icon={<IconHomeOutlined />}
                    className="icon-strong"
                    style={{ 'margin': '0 20px 20px 0' }}
                />
                <Button
                    className="icon-strong"
                    type="icon"
                    disabled
                    icon={<IconHomeOutlined />}
                    style={{ 'margin': '0 20px 20px 0' }}
                />
                <Button type="icon" loading icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
            </BrandProvider>
        </>
    );
};

export const Size = () => {
    return (
        <>
            <BrandProvider brand="icloud">
                <Blockquote>
                    <p>Button大小分为small middle large三种，间距也分为small（8px，默认） middle（12px） large（20px）三种</p>
                    <p>
                        与规范中不同，规范中有五种大小。而实际上，规范中的middle是组件库middle + 字号14px，规范中的特大号为组件库的large + 字号20px。<br />
                        组件库默认的Button size是middle，而规范要求：12号字系统下默认是small，而14号字系统下默认大小为middle。
                        默认的Button font size 是与系统字号一致的。规范中的small和middle是不会同时出现的，会根据系统字号使用，而特大号目前没有使用场景。
                        所以三种大小可以满足使用。
                    </p>
                </Blockquote>
                <h3>按钮与按钮</h3>
                <Space size="small">
                    <Button size="small" type="primary">普通样式</Button>
                    <Button size="small" >普通样式</Button>
                </Space>
                <br />
                <br />
                <Space size="middle">
                    <Button type="primary">普通样式</Button>
                    <Button>普通样式</Button>
                </Space>
                <br />
                <br />
                <Space size="large">
                    <Button size="large" type="primary">普通样式</Button>
                    <Button size="large">普通样式</Button>
                </Space>
                <br />
                <br />
                <h3>按钮与文字按钮</h3>
                <Blockquote>
                    注意：当使用link或者text时需要自己处理一下间距
                </Blockquote>
                <Space size="small">
                    <Button size="small" type="primary">普通样式</Button>
                    <Button size="small" type="text">普通样式</Button>
                </Space>
                <br />
                <br />
                <Space size="middle">
                    <Button type="primary">普通样式</Button>
                    <Button type="text">普通样式</Button>
                </Space>
                <br />
                <br />
                <Space size="large">
                    <Button size="large" type="primary">普通样式</Button>
                    <Button size="large" type="text">普通样式</Button>
                </Space>
                <br />
                <br />
                <h3>文字按钮与文字按钮：</h3>
                <Space size="small">
                    <Button size="small" type="text">普通样式</Button>
                    <Button size="small" type="text">普通样式</Button>
                </Space>
                <br />
                <br />
                <Space size="middle">
                    <Button type="text">普通样式</Button>
                    <Button type="text">普通样式</Button>
                </Space>
                <br />
                <br />
                <Space size="large">
                    <Button size="large" type="text">普通样式</Button>
                    <Button size="large" type="text">普通样式</Button>
                </Space>
                <br />
                <br />
                <h3>两个字时没有间距：</h3>
                <Button type="primary">确定</Button>
            </BrandProvider>
        </>
    );
};

export const Group = () => {
    return (
        <>
            <BrandProvider brand="icloud">
                <Blockquote>当有两个以上Button共同出现使用时，考虑用Button Group</Blockquote>
                <p>Button Group的的几种用法</p>
                <p>1. 中间有间隔的，可以使用Space，可以参考Space的参数</p>
                <Space size="small">
                    <Button size="small">取消</Button>
                    <Button type="primary" size="small">确定</Button>
                </Space>
                <br />
                <br />
                <Space size="middle">
                    <Button>取消</Button>
                    <Button type="primary">确定</Button>
                </Space>
                <br />
                <br />
                <Space size="large">
                    <Button size="large">取消</Button>
                    <Button size="large" type="primary">确定</Button>
                </Space>
                <br />
                <br />
                <p>2. Antd默认的Button.Group，没有间隔，Button之间的border做了处理</p>
                <Button.Group>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Button.Group>
                <br />
                <br />
                <p>如果需要Group内的button等宽，需要自行设置min-width，例如：</p>
                <Button.Group>
                    <Button style={{ minWidth: 75 }}>Cancel</Button>
                    <Button style={{ minWidth: 75 }}>Ok</Button>
                </Button.Group>
            </BrandProvider>
        </>
    );
};

export const Danger = () => {
    return (
        <>
            <Space>
                <Button danger>失败按钮</Button>
                <Button danger type="primary">失败按钮</Button>
            </Space>
            <br />
            <br />
            <Space>
                <Button danger disabled>失败按钮</Button>
                <Button danger type="primary" disabled>失败按钮</Button>
            </Space>
        </>
    );
};

export const DisabledReasonDemo = () => {
    return (
        <Button
            flexCenter
            disabled
            type="primary"
            disabledReason="您没有权限使用这个功能"
            icon={<IconPlusOutlined />}
        >
            申请创建资源账户
        </Button>

    );
};

export const Api = () => {
    const content = `
| 参数 | 说明 | 类型 | 默认值
| --- | --- | --- | --- |
| type | 在antd基础上增加了strong，icon。对antd text类型做了样式调整 | primary,ghost,dashed,link,text,default,strong,icon | default |
| success | 成功样式的button，目前没有用| boolean | - |
| error | 失败样式的button，请使用danger| boolean | - |
| warning | 警告样式的button，目前没有用| boolean | - |
| flexCenter | button是否要flex布局，用于icon和文字组合的button，如图文按钮 | boolean | - |
| disabledReason | 增加disabledReason属性时，会disable按钮，并且hover展示reason内容 | string | - |
`;

    return (
        <>
            <h2>Antd Props</h2>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/button-cn/">Antd Button API</a>
            <br />
            <br />
            <h2>OSUI增加的Props</h2>
            <Markdown content={content} />
        </>
    );
};

export const TestCase = () => {
    return (
        <>
            {version}
        </>
    );
};
