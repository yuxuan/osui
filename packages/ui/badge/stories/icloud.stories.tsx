import React from 'react';
import Space from '@osui/space';
import { ClockCircleOutlined } from '@ant-design/icons';
import Divider from '@osui/divider';

import Badge from '../src';

export default {
    title: '数据展示/Badge 徽标数',
};

export const Demo = () => {
    return (
        <>
            <p>通过醒目的视觉标注提醒用户重要的信息，如新消息或者新功能上线。一般出现在图标或文字的右上角。</p>
            <Divider>展示</Divider>
            <h3>主要样式</h3>
            <Space size="large">
                <Badge count={5}>
                    <a href="#" style={{ width: 76, height: 30, background: '#ddd', display: 'inline-block' }} />
                </Badge>
                <Badge count={15}>
                    <a href="#" style={{ width: 76, height: 30, background: '#ddd', display: 'inline-block' }} />
                </Badge>
            </Space>
            <br />
            <br />
            <h3>红点徽标</h3>
            <Badge dot>
                <a href="#" style={{ width: 76, height: 30, background: '#ddd', display: 'inline-block' }} />
            </Badge>
            <br />
            <br />
            <h3>自定义徽标</h3>
            <p>提示用户某种属性状态。</p>
            <Badge count={99} type="success">
                <a href="#" style={{ width: 76, height: 30, background: '#ddd', display: 'inline-block' }} />
            </Badge>

            <p><strong>FE说明：</strong>Icon可以自由替换，颜色需要用class</p>
            <Badge count={<ClockCircleOutlined style={{ color: '#f5222d' }} />}>
                <a href="#" style={{ width: 76, height: 30, background: '#ddd', display: 'inline-block' }} />
            </Badge>
        </>
    );
};

export const OverflowCount = () => {
    return (
        <>
            <Divider>展示</Divider>
            <h3>信息较多样式</h3>
            <Space size="large">
                <Badge count={99}>
                    <a href="#" style={{ width: 76, height: 30, background: '#ddd', display: 'inline-block' }} />
                </Badge>
                <Badge count={100}>
                    <a href="#" style={{ width: 76, height: 30, background: '#ddd', display: 'inline-block' }} />
                </Badge>
                <Badge count={99} overflowCount={10}>
                    <a href="#" style={{ width: 76, height: 30, background: '#ddd', display: 'inline-block' }} />
                </Badge>
                <Badge count={1000} overflowCount={999}>
                    <a href="#" style={{ width: 76, height: 30, background: '#ddd', display: 'inline-block' }} />
                </Badge>
            </Space>
        </>
    );
};

export const Status = () => {
    return (
        <>
            <h3>状态徽标</h3>
            <p>多用于表格或详情页中提示内容的状态。</p>
            <Divider>展示</Divider>
            <div>
                <Badge status="success" text="成功" />
                <br />
                <Badge status="error" text="失败" />
                <br />
                <Badge status="default" text="置灰" />
                <br />
                <Badge status="processing" text="进行中" />
                <br />
                <Badge status="warning" text="警告" />
            </div>
        </>
    );
};


export const TypeDemo = () => {
    return (
        <>
            <h3>文字徽标</h3>
            <p>用<code>type</code>来区分Badage徽标形式下的状态</p>
            <p>用<code>count</code>作为文字徽，minWidth:&quot;40px&quot;自定义传入</p>
            <p>当error展示文字的时候，也是需要<code>type</code>的</p>
            <Space size="large">
                <Badge count="9折" type="warning" style={{ minWidth: '40px' }}>
                    <a href="#" style={{ width: 76, height: 30, background: '#ddd', display: 'inline-block' }} />
                </Badge>
                <Badge count="New" type="error" style={{ minWidth: '40px' }}>
                    <a href="#" style={{ width: 76, height: 30, background: '#ddd', display: 'inline-block' }} />
                </Badge>
                <Badge count="Sale" type="warning" style={{ minWidth: '40px' }}>
                    <a href="#" style={{ width: 76, height: 30, background: '#ddd', display: 'inline-block' }} />
                </Badge>
                <Badge count="Top" type="success" style={{ minWidth: '40px' }}>
                    <a href="#" style={{ width: 76, height: 30, background: '#ddd', display: 'inline-block' }} />
                </Badge>
            </Space>
            <br />
            <br />
            <h3>其他飘新样式</h3>
            <p>countOnly属性取消掉背景和边框, offset调整位置，可能根据不同文字offset不同</p>
            <Badge count="New" type="success" style={{ minWidth: '40px' }} countOnly offset={[15, 0]}>
                <span>某某报告</span>
            </Badge>
        </>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/badge-cn/">Antd Badge API</a>
        </>
    );
};

