import React from 'react';
import {ClockCircleOutlined} from '@ant-design/icons';
import '@osui/theme/dist/theme/vars.css';
import Timeline from '../src';

export default {
    title: 'OSUI-Timeline',
};

export const Demo = () => {
    return (<div style={{padding: '50px'}}>
        <Timeline>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        </Timeline>
        <Timeline mode="alternate" style={{width: 200}}>
            <Timeline.Item>时间列表</Timeline.Item>
            <Timeline.Item color="green">时间列表</Timeline.Item>
            <Timeline.Item dot={<ClockCircleOutlined style={{fontSize: '16px'}} />}>
                时间列表
            </Timeline.Item>
            <Timeline.Item color="red">时间列表</Timeline.Item>
            <Timeline.Item>时间列表</Timeline.Item>
            <Timeline.Item dot={<ClockCircleOutlined style={{fontSize: '16px'}} />}>
                时间列表
            </Timeline.Item>
        </Timeline>
    </div>);
};
