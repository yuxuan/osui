import React from 'react';
import Header from 'antd/lib/calendar/Header';
import momentGenerateConfig from 'rc-picker/lib/generate/moment';
import moment from 'moment';
import Calendar from '../src';

export default {
    title: '数据展示/Calendar 日历',
    component: Calendar,
};

export const Demo = () => {

    function onPanelChange(value, mode) {
        console.log(value.format('YYYY-MM-DD'), mode);
    }

    return (<Calendar onPanelChange={onPanelChange} />);
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/calendar-cn/">Antd Calendar API</a>
        </>
    );
};
