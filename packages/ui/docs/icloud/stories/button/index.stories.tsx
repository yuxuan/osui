import React from 'react';
import { IconHomeOutlined, IconPlusOutlined, IconLeftOutlined } from '@osui/icons';
import Divider from '@osui/divider';
import Space from '@osui/space';
import FlexCentered from '@osui/flex-centered';
import { ConfigProvider } from 'antd';
import Button from '@osui/button';
import './index.less';

export default {
    title: '通用/Button 按钮',
    component: Button,
};

export const Demo = () => {
    return (
        <>
            <p><strong>FE说明</strong>UE要求两个字时中间没有空格，通过antd ConfigProvider来配置autoInsertSpaceInButton: false</p>
            <Divider>展示</Divider>
            <h3>1、普通按钮</h3>
            <p>重要样式</p>
            <div>
                <Button type="primary" style={{ 'margin': '0 20px 20px 0' }}>重要样式</Button>
                <Button type="primary" loading style={{ 'margin': '0 20px 20px 0' }}>重要样式</Button>
                <Button type="primary" disabled style={{ 'margin': '0 20px 20px 0' }}>重要样式</Button>
            </div>
            <p>加强样式</p>
            <div>
                <Button type="strong" style={{ 'margin': '0 20px 20px 0' }}>加强样式</Button>
                <Button type="strong" loading style={{ 'margin': '0 20px 20px 0' }}>加强样式</Button>
                <Button type="strong" disabled style={{ 'margin': '0 20px 20px 0' }}>加强样式</Button>
            </div>
            <p>普通样式</p>
            <div>
                <Button type="default" style={{ 'margin': '0 20px 20px 0' }}>普通样式</Button>
                <Button type="default" loading style={{ 'margin': '0 20px 20px 0' }}>普通样式</Button>
                <Button type="default" disabled style={{ 'margin': '0 20px 20px 0' }}>普通样式</Button>
            </div>
            <p>文字链接按钮：</p>
            <div>
                <Button type="link" style={{ 'margin': '0 20px 20px 0' }}>文字链接按钮</Button>
                <Button type="link" loading style={{ 'margin': '0 20px 20px 0' }}>文字链接按钮</Button>
                <Button type="link" disabled style={{ 'margin': '0 20px 20px 0' }}>文字链接按钮</Button>
            </div>
            <p>文字按钮：</p>
            <p><strong>FE说明</strong>没有在规范内，但是有使用到过，样式是否符合</p>
            <div>
                <Button type="text" style={{ 'margin': '0 20px 20px 0' }}>文字按钮</Button>
                <Button type="text" loading style={{ 'margin': '0 20px 20px 0' }}>文字按钮</Button>
                <Button type="text" disabled style={{ 'margin': '0 20px 20px 0' }}>文字按钮</Button>
            </div>
            <h3>图标按钮</h3>
            <p><strong>FE说明：</strong>注意图标按钮需要用icon属性，而不是children内放入图标</p>
            <p>
                <strong>FE说明：</strong>
                有两种形式：一种是没有type=&quot;icon&quot;，另一种是加了type=&quot;icon&quot;的，区别是加了type的是不会有其它类似于primary的这种用法，只是单独一个icon
            </p>
            <div>
                <Button type="primary" icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
                <Button type="primary" loading icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
                <Button type="primary" disabled icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
            </div>
            <div>
                <Button type="strong" icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
                <Button type="strong" loading icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
                <Button type="strong" disabled icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
            </div>
            <div>
                <Button icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
                <Button loading icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
                <Button disabled icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
            </div>
            <p>纯图标按钮</p>
            <div>
                <Button type="icon" icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
                <Button type="icon" loading icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
                <Button type="icon" disabled icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
            </div>
            <p>纯图标按钮加强</p>
            <p><strong>FE说明</strong>颜色需要自己调整一下css</p>
            <div>
                <Button
                    type="icon"
                    icon={<IconHomeOutlined />}
                    className="icon-strong"
                    style={{ 'margin': '0 20px 20px 0' }}
                />
                <Button type="icon" loading icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
                <Button type="icon" disabled icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
            </div>
            <div>
                <p>当icon和文字一起的时候，如果对不齐，可以添加flexCenter属性，如果导致同行不齐，外面包裹div display: flex</p>
                <Button flexCenter icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }}>
                    图文按钮
                </Button>
                <Button flexCenter loading icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }}>
                    图文按钮
                </Button>
                <Button flexCenter disabled icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }}>
                    图文按钮
                </Button>
                <br />
                <Button flexCenter type="primary" icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }}>
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
                <Button
                    flexCenter
                    disabled
                    type="primary"
                    icon={<IconHomeOutlined />}
                    style={{ 'margin': '0 20px 20px 0' }}
                >
                    图文按钮
                </Button>
                <p>图文按钮跳转</p>
                <a href="www.baidu.com" className="text-link">
                    <FlexCentered>
                        <IconLeftOutlined />
                        返回ECI资源管理
                    </FlexCentered>
                </a>
            </div>
        </>
    );
};

export const Size = () => {
    return (
        <>
            <ConfigProvider autoInsertSpaceInButton={false}>
                <p>未在规范内，但是产品有用到，希望ue检查</p>
                <Space size="small">
                    <Button size="small">确定</Button>
                    <Button size="small" icon={<IconPlusOutlined />}>确定</Button>
                </Space>
                <br />
                <br />
                <Space size="small">
                    <Button size="middle">确定</Button>
                    <Button flexCenter size="middle" icon={<IconPlusOutlined />}>确定</Button>
                </Space>
                <br />
                <br />
                <Space size="small">
                    <Button size="large">确定</Button>
                    <Button flexCenter size="large" icon={<IconPlusOutlined />}>确定</Button>
                </Space>
            </ConfigProvider>
        </>
    );
};

export const Group = () => {
    return (
        <>
            <ConfigProvider autoInsertSpaceInButton={false}>
                <p>当有两个以上Button共同出现使用时，考虑用Button Group</p>
                <p>Button Group的的几种用法</p>
                <p>1. 中间有间隔的，可以使用Space，可以参考Space的参数</p>
                <Space>
                    <Button size="small">取消</Button>
                    <Button type="primary" size="small">确定</Button>
                </Space>
                <br />
                <br />
                <Space>
                    <Button>取消</Button>
                    <Button type="primary">确定</Button>
                </Space>
                <br />
                <br />
                <Space>
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
            </ConfigProvider>
        </>
    );
};

export const Face = () => {
    return (
        <>
            <Space>
                <Button success>成功按钮</Button>
                <Button success type="primary">成功按钮</Button>
            </Space>
            <br />
            <br />
            <Space>
                <Button error>失败按钮</Button>
                <Button error type="primary">失败按钮</Button>
            </Space>
            <br />
            <br />
            <Space>
                <Button warning>失败按钮</Button>
                <Button warning type="primary">失败按钮</Button>
            </Space>
        </>
    );
};
