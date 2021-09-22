/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Divider from '@osui/divider';
import BrandProvider from '@osui/brand-provider';
import Form from '@osui/form';
import TimePicker from '../src';

export default {
    title: '数据录入/TimePicker 时间选择框',
    component: TimePicker,
};

export const Demo = () => {
    return (
        <BrandProvider brand="icloud">
            <TimePicker style={{width: 160}} />
            <p></p>
            <p></p>
            <p>禁用状态</p>
            <TimePicker disabled style={{width: 160}} />
            <p></p>
            <p>进制选择部分小时</p>
            <TimePicker disabledHours={() => [0, 1, 2, 3]} style={{width: 160}} />
            <p></p>
            <p></p>
            <p>报错</p>
            <Form
                name="demo"
                labelAlign="left"
                labelCol={{span: 4}}
                wrapperCol={{span: 8}}
            >
                <Form.Item
                    validateMessageLayout="inline"
                    validateStatus="error"
                    help={'格式错误，请按提示规则录入'}
                    style={{width: 350}}
                >
                    <TimePicker style={{width: 160}} />
                </Form.Item>
            </Form>
        </BrandProvider>
    );
};

export const Demo2 = () => {

    const {RangePicker} = TimePicker;

    return (
        <>
            <Divider orientation="left">支持选择时间段</Divider>
            <BrandProvider brand="icloud">
                <RangePicker />
            </BrandProvider>
        </>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/time-picker-cn/">Antd TimePicker API</a>
        </>
    );
};

