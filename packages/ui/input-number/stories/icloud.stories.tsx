import React from 'react';
import Space from '@osui/space';
import InputNumber from '../src';

export default {
    title: '通过验收/InputNumber 数字输入框',
    component: InputNumber,
};

export const Demo = () => {
    const onChange = value => {
        console.log('changed', value);
    };
    return (
        <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
    );
};

export const Size = () => {
    const onChange = value => {
        console.log('changed', value);
    };
    return (
        <Space>
            <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={onChange} />
            <InputNumber min={1} max={100000} defaultValue={3} onChange={onChange} />
            <InputNumber size="small" min={1} max={100000} defaultValue={3} onChange={onChange} />
        </Space>
    );
};
