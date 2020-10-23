import React from 'react';
import Progress from '@osui/progress';

export default {
    title: '待验收/Progress 进度条',
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
