import React from 'react';
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
