import React from 'react';
import Space from '@osui/space';
import Badge from '@osui/badge';

export default {
    title: '验收中/Badge 徽标数',
};

export const Demo = () => {
    return (
        <Space size="large">
            <Badge count={5}>
                <a href="#" style={{width: 76, height: 30, background: '#ddd', display: 'inline-block'}} />
            </Badge>
            <Badge count={15}>
                <a href="#" style={{ width: 76, height: 30, background: '#ddd', display: 'inline-block' }} />
            </Badge>
        </Space>
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
