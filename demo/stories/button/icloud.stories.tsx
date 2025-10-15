import React from 'react';
import {OutlinedPlusNew, OutlinedLeft} from 'acud-icon';
import Markdown from '@osui/markdown';
import Divider from '@osui/divider';
import Space from '@osui/space';
import Flex from '@osui/flex';
import BrandProvider from '@osui/brand-provider';
import {version} from 'antd';
import Button from '@osui/button';
import {MinWidth} from './icloud-demo';
import './index.less';

const Blockquote = ({children}: {children: React.ReactNode}) => (
    <blockquote style={{
        background: 'var(--brand-color-1)',
        borderRadius: '3px',
        borderLeft: '5px solid var(--brand-color-6)',
        margin: '30px 0',
        padding: '30px',
    }}
    >
        {children}
    </blockquote>
);

export default {
    title: '通用/[new]按钮 Button',
};

export const Demo = () => {
    return (
        <BrandProvider>
            <Divider>基础</Divider>
            <p>基础按钮</p>
            <Flex gap="small">
                <Button type="primary" custom>个性按钮</Button>
                <Button type="primary">强按钮</Button>
                <Button type="primary" danger>危险按钮</Button>
                <Button type="primary" neutral>中按钮</Button>
                <Button type="primary" weak>弱按钮</Button>
            </Flex>
            <p />
            <p>描边按钮</p>
            <Flex gap="small">
                <Button type="strong">强按钮</Button>
                <Button>弱按钮</Button>
                <Button danger>危险按钮</Button>
            </Flex>
            <p />
            <p>文字按钮</p>
            <Flex gap="small">
                <Button type="text" strongText>强按钮</Button>
                <Button type="text">弱按钮</Button>
            </Flex>
            <p />

            <Divider>禁用</Divider>
            <p>基础按钮</p>
            <Flex gap="small">
                <Button type="primary" custom disabled>个性按钮</Button>
                <Button type="primary" disabled>强按钮</Button>
                <Button type="primary" danger disabled>危险按钮</Button>
                <Button type="primary" neutral disabled>中按钮</Button>
                <Button type="primary" weak disabled>弱按钮</Button>
            </Flex>
            <p />
            <p>描边按钮</p>
            <Flex gap="small">
                <Button type="strong" disabled>强按钮</Button>
                <Button disabled>弱按钮</Button>
                <Button danger disabled>危险按钮</Button>
            </Flex>
            <p />
            <p>文字按钮</p>
            <Flex gap="small">
                <Button type="text" disabled strongText>强按钮</Button>
                <Button type="text" disabled>弱按钮</Button>
            </Flex>
            <p />

            <Divider>圆角</Divider>
            <p>基础按钮</p>
            <Flex gap="small">
                <Button type="primary" custom rounded>个性按钮</Button>
                <Button type="primary" rounded>强按钮</Button>
                <Button type="primary" danger rounded>危险按钮</Button>
                <Button type="primary" neutral rounded>中按钮</Button>
                <Button type="primary" weak rounded>弱按钮</Button>
            </Flex>
            <p />
            <p>描边按钮</p>
            <Flex gap="small">
                <Button type="strong" rounded>强按钮</Button>
                <Button rounded>弱按钮</Button>
                <Button danger rounded>危险按钮</Button>
            </Flex>
            <p />
            <Divider>尺寸</Divider>
            <p>基础按钮</p>
            <Flex gap="small" align="center">
                <Button type="primary" custom size="small">个性按钮</Button>
                <Button type="primary" custom>个性按钮</Button>
                <Button type="primary" custom size="large">个性按钮</Button>
            </Flex>
            <p />
            <Flex gap="small" align="center">
                <Button type="primary" custom rounded size="small">个性按钮</Button>
                <Button type="primary" custom rounded>个性按钮</Button>
                <Button type="primary" custom rounded size="large">个性按钮</Button>
            </Flex>
            <p />
            <Flex gap="small" align="center">
                <Button type="primary" size="small">强按钮</Button>
                <Button type="primary">强按钮</Button>
                <Button type="primary" size="large">强按钮</Button>
            </Flex>
            <p />
            <Flex gap="small" align="center">
                <Button type="primary" rounded size="small">强按钮</Button>
                <Button type="primary" rounded>强按钮</Button>
                <Button type="primary" rounded size="large">强按钮</Button>
            </Flex>
            <p />
            <p>描边按钮</p>
            <Flex gap="small" align="center">
                <Button type="strong" size="small">强按钮</Button>
                <Button type="strong">强按钮</Button>
                <Button type="strong" size="large">强按钮</Button>
            </Flex>
            <p />
            <Flex gap="small" align="center">
                <Button type="strong" rounded size="small">强按钮</Button>
                <Button type="strong" rounded>强按钮</Button>
                <Button type="strong" rounded size="large">强按钮</Button>
            </Flex>
            <p />
            <Flex gap="small" align="center">
                <Button size="small">弱按钮</Button>
                <Button>弱按钮</Button>
                <Button size="large">弱按钮</Button>
            </Flex>
            <p />
            <Flex gap="small" align="center">
                <Button rounded size="small">弱按钮</Button>
                <Button rounded>弱按钮</Button>
                <Button rounded size="large">弱按钮</Button>
            </Flex>
            <p />
            <Divider>加载中</Divider>
            <p>基础按钮</p>
            <Flex gap="small" align="center">
                <Button type="primary" custom loading>个性按钮</Button>
                <Button type="primary" loading>强按钮</Button>
                <Button type="primary" danger loading>危险按钮</Button>
                <Button type="primary" neutral loading>中按钮</Button>
                <Button type="primary" weak loading>弱按钮</Button>
            </Flex>
            <p />
            <p>描边按钮</p>
            <Flex gap="small">
                <Button type="strong" loading>强按钮</Button>
                <Button loading>弱按钮</Button>
                <Button danger loading>危险按钮</Button>
            </Flex>
            <p />
            <p>文字按钮</p>
            <Flex gap="small">
                <Button type="text" loading strongText>强按钮</Button>
                <Button type="text" loading>弱按钮</Button>
            </Flex>
            <p />

            <Divider>图文按钮</Divider>
            <p>加强样式</p>
            <Button
                type="text"
                strongText
                flexCenter
                icon={<OutlinedPlusNew />}
                style={{'margin': '0 20px 20px 0'}}
            >
                图文按钮
            </Button>
            <Button
                disabled
                type="text"
                strongText
                flexCenter
                icon={<OutlinedPlusNew />}
                style={{'margin': '0 20px 20px 0'}}
            >
                图文按钮
            </Button>
            <Button
                loading
                type="link"
                flexCenter
                icon={<OutlinedPlusNew />}
                style={{'margin': '0 20px 20px 0'}}
            >
                图文按钮
            </Button>
            <p>普通样式</p>
            <Button
                type="text"
                flexCenter
                icon={<OutlinedPlusNew />}
                style={{'margin': '0 20px 20px 0'}}
            >
                图文按钮
            </Button>
            <Button
                disabled
                type="text"
                flexCenter
                icon={<OutlinedPlusNew />}
                style={{'margin': '0 20px 20px 0'}}
            >
                图文按钮
            </Button>
            <Button
                loading
                type="text"
                flexCenter
                icon={<OutlinedPlusNew />}
                style={{'margin': '0 20px 20px 0'}}
            >
                图文按钮
            </Button>
            <p>按钮形式普通样式</p>
            <Button flexCenter icon={<OutlinedPlusNew />} style={{'margin': '0 20px 20px 0'}}>
                图文按钮
            </Button>
            <Button flexCenter disabled icon={<OutlinedPlusNew />} style={{'margin': '0 20px 20px 0'}}>
                图文按钮
            </Button>
            <Button flexCenter loading icon={<OutlinedPlusNew />} style={{'margin': '0 20px 20px 0'}}>
                图文按钮
            </Button>
            <p>按钮形式重要样式</p>
            <Button flexCenter type="primary" icon={<OutlinedPlusNew />} style={{'margin': '0 20px 20px 0'}}>
                图文按钮
            </Button>
            <Button
                flexCenter
                disabled
                type="primary"
                icon={<OutlinedPlusNew />}
                style={{'margin': '0 20px 20px 0'}}
            >
                图文按钮
            </Button>
            <Button
                flexCenter
                loading
                type="primary"
                icon={<OutlinedPlusNew />}
                style={{'margin': '0 20px 20px 0'}}
            >
                图文按钮
            </Button>
            <p>图文按钮跳转</p>
            <Button
                href="http://eefe.baidu-int.com/sites/icloud/?path=/story/osui%E4%BB%8B%E7%BB%8D-%E6%AC%A2%E8%BF%8E%E4%BD%BF%E7%94%A8--demo"
                flexCenter
                type="text"
                icon={<OutlinedLeft />}
                style={{'margin': '0 20px 20px 0'}}
            >
                返回ECI资源管理
            </Button>
            <h3><strong>4、图标按钮</strong></h3>
            <Blockquote>
                有两种形式：一种是没有type=&quot;icon&quot;，
                另一种是加了type=&quot;icon&quot;的，区别是加了type的是不会有其它类似于primary的这种用法，只是单独一个icon
            </Blockquote>
            <p>普通样式</p>
            <Flex gap="small" align="center">
                <Button icon={<OutlinedPlusNew />} size="small" />
                <Button icon={<OutlinedPlusNew />} />
                <Button icon={<OutlinedPlusNew />} size="large" />
            </Flex>
            <p />
            <Flex gap="small" align="center">
                <Button disabled icon={<OutlinedPlusNew />} size="small" />
                <Button disabled icon={<OutlinedPlusNew />} />
                <Button disabled icon={<OutlinedPlusNew />} size="large" />
            </Flex>
            <p />
            <Flex gap="small" align="center">
                <Button rounded icon={<OutlinedPlusNew />} size="small" />
                <Button rounded icon={<OutlinedPlusNew />} />
                <Button rounded icon={<OutlinedPlusNew />} size="large" />
            </Flex>
            <p>加强样式</p>
            <Flex gap="small" align="center">
                <Button type="strong" icon={<OutlinedPlusNew />} size="small" />
                <Button type="strong" icon={<OutlinedPlusNew />} />
                <Button type="strong" icon={<OutlinedPlusNew />} size="large" />
            </Flex>
            <p />
            <Flex gap="small" align="center">
                <Button disabled type="strong" icon={<OutlinedPlusNew />} size="small" />
                <Button disabled type="strong" icon={<OutlinedPlusNew />} />
                <Button disabled type="strong" icon={<OutlinedPlusNew />} size="large" />
            </Flex>
            <p />
            <Flex gap="small" align="center">
                <Button type="strong" rounded icon={<OutlinedPlusNew />} size="small" />
                <Button type="strong" rounded icon={<OutlinedPlusNew />} />
                <Button type="strong" rounded icon={<OutlinedPlusNew />} size="large" />
            </Flex>
            <p>重要样式</p>
            <Flex gap="small" align="center">
                <Button type="primary" icon={<OutlinedPlusNew />} size="small" />
                <Button type="primary" icon={<OutlinedPlusNew />} />
                <Button type="primary" icon={<OutlinedPlusNew />} size="large" />
            </Flex>
            <p />
            <Flex gap="small" align="center">
                <Button disabled type="primary" icon={<OutlinedPlusNew />} size="small" />
                <Button disabled type="primary" icon={<OutlinedPlusNew />} />
                <Button disabled type="primary" icon={<OutlinedPlusNew />} size="large" />
            </Flex>
            <p />
            <Flex gap="small" align="center">
                <Button type="primary" rounded icon={<OutlinedPlusNew />} size="small" />
                <Button type="primary" rounded icon={<OutlinedPlusNew />} />
                <Button type="primary" rounded icon={<OutlinedPlusNew />} size="large" />
            </Flex>
            <p>纯图标按钮</p>
            <p />
            <Flex gap="small" align="center">
                <Button type="text" icon={<OutlinedPlusNew />} />
                <Button type="text" disabled icon={<OutlinedPlusNew />} />
                <Button type="text" loading icon={<OutlinedPlusNew />} />
            </Flex>
            <p />
            <p>纯图标按钮加强</p>
            <p />
            <Flex gap="small" align="center">
                <Button
                    strongText
                    type="text"
                    icon={<OutlinedPlusNew />}
                />
                <Button
                    strongText
                    type="text"
                    disabled
                    icon={<OutlinedPlusNew />}
                />
                <Button
                    strongText
                    type="text"
                    loading
                    icon={<OutlinedPlusNew />}
                />
            </Flex>
            <p />
            <p />
            <p />
            <p />
        </BrandProvider>
    );
};
export const MinWidthDemo = MinWidth;
export const Size = () => {
    return (
        <BrandProvider>
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
                <Button size="small">普通样式</Button>
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
    );
};

export const Group = () => {
    return (
        <BrandProvider>
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
                <Button style={{minWidth: 75}}>Cancel</Button>
                <Button style={{minWidth: 75}}>Ok</Button>
            </Button.Group>
        </BrandProvider>
    );
};

export const Danger = () => {
    return (
        <BrandProvider>
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
        </BrandProvider>
    );
};

export const DisabledReasonDemo = () => {
    return (
        <BrandProvider>
            <Space>
                <Button
                    flexCenter
                    disabled
                    type="primary"
                    disabledReason="您没有权限使用这个功能"
                    icon={<OutlinedPlusNew />}
                >
                    申请创建资源账户
                </Button>

                <Button
                    flexCenter
                    disabled
                    disabledReason="您没有权限使用这个功能"
                    icon={<OutlinedPlusNew />}
                >
                    申请创建资源账户
                </Button>
            </Space>
        </BrandProvider>

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
    class DefaultButton extends React.Component {
        state = {
            loading: false,
        };

        enterLoading = () => {
            this.setState({loading: {delay: 1000}});
        };

        render() {
            const {loading} = this.state;
            return (
                <BrandProvider>
                    <Button loading={loading} onClick={this.enterLoading}>
                        Button
                    </Button>
                    <p />
                    <Button loading>
                        Button
                    </Button>
                </BrandProvider>
            );
        }
    }
    return (
        <BrandProvider>
            {version}
            <p />
            <p>使用delay的方式</p>
            <DefaultButton />
        </BrandProvider>
    );
};

export const TestCase2 = () => {
    return (
        <BrandProvider>
            <Space>
                <Button type="primary" danger>
                    Primary
                </Button>
                <Button danger>Default</Button>
                <Button type="dashed" danger>
                    Dashed
                </Button>
                <Button type="text" danger>
                    Text
                </Button>
                <Button type="link" danger>
                    Link
                </Button>
                <Button type="primary" danger size="small">
                    Primary
                </Button>
                <Button danger size="small">Default</Button>
                <Button type="dashed" danger size="small">
                    Dashed
                </Button>
                <Button type="text" danger size="small">
                    Text
                </Button>
                <Button type="link" danger size="small">
                    Link
                </Button>
            </Space>
        </BrandProvider>
    );
};

export const TestCase3 = () => {
    return (
        <BrandProvider>
            <Space>
                <Button type="primary">Primary</Button>
                <Button type="primary" disabled>
                    Primary(disabled)
                </Button>
                <br />
                <Button>Default</Button>
                <Button disabled>Default(disabled)</Button>
                <br />
                <Button type="dashed">Dashed</Button>
                <Button type="dashed" disabled>
                    Dashed(disabled)
                </Button>
                <br />
                <Button type="text">Text</Button>
                <Button type="text" disabled>
                    Text(disabled)
                </Button>
                <br />
                <Button type="link">Link</Button>
                <Button type="link" disabled>
                    Link(disabled)
                </Button>
                <br />
                <Button danger>Danger Default</Button>
                <Button danger disabled>
                    Danger Default(disabled)
                </Button>
                <br />
                <Button danger type="text">
                    Danger Text
                </Button>
                <Button danger type="text" disabled>
                    Danger Text(disabled)
                </Button>
                <br />
                <Button type="link" danger>
                    Danger Link
                </Button>
                <Button type="link" danger disabled>
                    Danger Link(disabled)
                </Button>
            </Space>
            <br />
            <br />
            <div
                className="site-button-ghost-wrapper"
                style={{padding: '8px 8px 8px 8px', background: 'rgb(190, 200, 200)'}}
            >
                <Space>
                    <Button ghost>Ghost</Button>
                    <Button ghost disabled>
                        Ghost(disabled)
                    </Button>
                </Space>
            </div>
        </BrandProvider>
    );
};
