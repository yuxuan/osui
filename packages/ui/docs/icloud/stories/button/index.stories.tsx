import React from 'react';
import { IconSearchOutlined, IconHomeOutlined, IconPlusOutlined } from '@osui/icons';
import Space from '@osui/space';
import Button from '@osui/button';

export default {
    title: '通过验收/Button 按钮',
    component: Button,
};

export const Demo = () => {
    return (
        <>
            <div>
                <Button type="primary" style={{ 'margin': '0 20px 20px 0' }}>主要按钮</Button>
                <Button type="primary" loading style={{ 'margin': '0 20px 20px 0' }}>主要按钮</Button>
                <Button type="primary" disabled style={{ 'margin': '0 20px 20px 0' }}>主要按钮</Button>
            </div>
            <div>
                <Button type="strong" style={{ 'margin': '0 20px 20px 0' }}>次要按钮</Button>
                <Button type="strong" loading style={{ 'margin': '0 20px 20px 0' }}>次要按钮</Button>
                <Button type="strong" disabled style={{ 'margin': '0 20px 20px 0' }}>次要按钮</Button>
            </div>
            <div>
                <Button type="default" style={{ 'margin': '0 20px 20px 0' }}>次要按钮</Button>
                <Button type="default" loading style={{ 'margin': '0 20px 20px 0' }}>次要按钮</Button>
                <Button type="default" disabled style={{ 'margin': '0 20px 20px 0' }}>次要按钮</Button>
            </div>
            <div>
                <Button type="link" style={{ 'margin': '0 20px 20px 0' }}>文字按钮</Button>
                <Button type="link" loading style={{ 'margin': '0 20px 20px 0' }}>文字按钮</Button>
                <Button type="link" disabled style={{ 'margin': '0 20px 20px 0' }}>文字按钮</Button>
            </div>
            <div>
                <Button icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
                <Button loading icon={<IconSearchOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
                <Button disabled icon={<IconSearchOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
            </div>
            <div>
                <Button type="icon" icon={<IconHomeOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
                <Button type="icon" loading icon={<IconSearchOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
                <Button type="icon" disabled icon={<IconSearchOutlined />} style={{ 'margin': '0 20px 20px 0' }} />
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
            </div>
        </>
    );
};

export const Size = () => {
    return (
        <>
            <p>未在规范内，但是产品有用到，希望ue检查</p>
            <Space size="small">
                <Button size="small">确定</Button>
                <Button size="small" icon={<IconPlusOutlined />}>确定</Button>
            </Space>
            <br />
            <br />
            <Space size="small">
                <Button size="middle">确定</Button>
                <Button size="middle" icon={<IconPlusOutlined />}>确定</Button>
            </Space>
            <br />
            <br />
            <Space size="small">
                <Button size="large">确定</Button>
                <Button size="large" icon={<IconPlusOutlined />}>确定</Button>
            </Space>
        </>
    );
};

export const Group = () => {
    return (
        <>
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
                <Button style={{minWidth: 75}}>Cancel</Button>
                <Button style={{minWidth: 75}}>Ok</Button>
            </Button.Group>
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
