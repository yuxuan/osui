/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Divider from '@osui/divider';
import Empty from '@osui/empty';
import {EmptyInComponents} from './icloud-demo';

export default {
    title: '数据展示/Empty 空状态',
    component: Empty,
};

// export const Demo1 = Base;
export const Demo1 = EmptyInComponents;

export const Demo2 = () => {
    return (
        <Empty type="error" description="404 Not Found" size="large" />
    );
};

export const Demo3 = () => {
    return (
        <>
            <p>可以通过imageStyle来调整图片高度</p>
            <Divider>展示</Divider>
            <Empty type="error" size="large" />
        </>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/empty-cn/">Antd Empty API</a>
        </>
    );
};

