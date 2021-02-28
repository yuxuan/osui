import React from 'react';
import Divider from '@osui/divider';
import TimePicker from '@osui/time-picker';

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
