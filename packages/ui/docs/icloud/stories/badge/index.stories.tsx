import React from 'react';
import Space from '@osui/space';
import { ClockCircleOutlined } from '@ant-design/icons';

import Badge from '@osui/badge';

export default {
    title: '验收中/Badge 徽标数',
};

export const Demo = () => {
    return (
        <>
            <Space size="large">
                <Badge count={5}>
                    <a href="#" style={{width: 76, height: 30, background: '#ddd', display: 'inline-block'}} />
                </Badge>
                <Badge count={15}>
                    <a href="#" style={{ width: 76, height: 30, background: '#ddd', display: 'inline-block' }} />
                </Badge>
            </Space>
            <br />
            <p>Icon可以自由替换，颜色需要用class</p>
            <Badge count={<ClockCircleOutlined style={{ color: '#f5222d' }} />}>
                <a href="#" style={{ width: 76, height: 30, background: '#ddd', display: 'inline-block' }} />
            </Badge>
            <br />
            <br />
            <Badge dot>
                <a href="#" style={{ width: 76, height: 30, background: '#ddd', display: 'inline-block' }} />
            </Badge>
            <br />
            <br />
            <Badge count={99} type="success">
                <a href="#" style={{ width: 76, height: 30, background: '#ddd', display: 'inline-block' }} />
            </Badge>
        </>
    );
};

export const OverflowCount = () => {
    return (
        <Space size="large">
            <Badge count={99}>
                <a href="#" style={{width: 76, height: 30, background: '#ddd', display: 'inline-block'}} />
            </Badge>
            <Badge count={100}>
                <a href="#" style={{width: 76, height: 30, background: '#ddd', display: 'inline-block'}} />
            </Badge>
            <Badge count={99} overflowCount={10}>
                <a href="#" style={{width: 76, height: 30, background: '#ddd', display: 'inline-block'}} />
            </Badge>
            <Badge count={1000} overflowCount={999}>
                <a href="#" style={{width: 76, height: 30, background: '#ddd', display: 'inline-block'}} />
            </Badge>
        </Space>
    );
};

export const Status = () => {
    return (
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
    );
};


export const TypeDemo = () => {
    return (
        <>
            <p>用<code>type</code>来区分Badage徽标形式下的状态</p>
            <p>用<code>count</code>作为文字徽，minWidth:'40px'自定义传入</p>
            <p>当error展示文字的时候，也是需要<code>type</code>的</p>
            <Space size="large">
                <Badge count="9折" type="warning" style={{minWidth: '40px'}}>
                    <a href="#" style={{width: 76, height: 30, background: '#ddd', display: 'inline-block'}} />
                </Badge>
                <Badge count="New" type="error" style={{minWidth: '40px'}}>
                    <a href="#" style={{ width: 76, height: 30, background: '#ddd', display: 'inline-block' }} />
                </Badge>
                <Badge count="Sale" type="warning" style={{minWidth: '40px'}}>
                    <a href="#" style={{ width: 76, height: 30, background: '#ddd', display: 'inline-block' }} />
                </Badge>
                <Badge count="Top" type="success" style={{minWidth: '40px'}}>
                    <a href="#" style={{ width: 76, height: 30, background: '#ddd', display: 'inline-block' }} />
                </Badge>
            </Space>
            <br />
            <br />
            <p>countOnly属性取消掉背景和边框, offset调整位置，可能根据不同文字offset不同</p>
            <Badge count="New" type="success" style={{minWidth: '40px'}} countOnly offset={[15, 0]}>
                <span>某某报告</span>
            </Badge>
        </>
    );
};
