import React from 'react';
import Calendar from '@osui/calendar';

export default {
    title: '未实现/Calendar 日历',
    component: Calendar,
};

export const Demo = () => {

    function onPanelChange(value, mode) {
        console.log(value.format('YYYY-MM-DD'), mode);
    }

    return (<Calendar onPanelChange={onPanelChange} />);
};
