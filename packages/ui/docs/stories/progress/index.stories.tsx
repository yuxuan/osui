import * as React from 'react';
import Progress from '@osui/progress';

export default {
    title: 'OSUI-Progress',
};

export const Demo = () => {
    return (
        <div style={{padding: 30}}>
            <Progress percent={20} />
            <Progress percent={30} status="success" />
            <Progress percent={40} status="exception" />
            <Progress percent={50} status="normal" />
            <Progress percent={60} status="active" />
        </div>);
};
