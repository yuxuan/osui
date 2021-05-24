import React from 'react';
import Divider from '@osui/divider';
import TimePicker from '../src';

export default {
    title: '数据录入/TimePicker 时间选择框',
    component: TimePicker,
};

export const Demo = () => {
    return (
        <TimePicker />
    );
};

export const Demo2 = () => {

    const {RangePicker} = TimePicker;

    return (
        <>
            <Divider orientation="left">支持选择时间段</Divider>
            <RangePicker />
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

