/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Timeline from '../src';

export default {
    title: '数据展示/Timeline 时间轴',
};

export const Demo = () => {
    return (
        <>
            <h3>纯展示的情况</h3>
            <div style={{ padding: '50px' }}>
                <Timeline>
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                </Timeline>
            </div>
        </>
    );
};


export const Link = () => {
    return (
        <>
            <h3>可跳转link的情况</h3>
            <div style={{ padding: '50px' }}>
                <Timeline>
                    <Timeline.Item><a href="">Create a services site 2015-09-01</a></Timeline.Item>
                    <Timeline.Item><a href="">Create a services site 2015-09-01</a></Timeline.Item>
                    <Timeline.Item><a href="">Create a services site 2015-09-01</a></Timeline.Item>
                    <Timeline.Item><a href="">Create a services site 2015-09-01</a></Timeline.Item>
                </Timeline>
            </div>
        </>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/timeline-cn/">Antd Timeline API</a>
        </>
    );
};

