import React from 'react';
import Divider from '@osui/divider';
import Select from '@osui/select';
import Empty from '@osui/empty';

export default {
    title: '数据展示/Empty 空状态',
    component: Empty,
};

export const Demo1 = () => {
    return (
        <>
            <p>下拉内的空状态</p>
            <Divider>展示</Divider>
            <Select notFoundContent={<Empty small />} style={{width: 150}} />
        </>
    );
};

export const Demo2 = () => {
    return (
        <>
            <p>可以通过imageStyle来调整图片高度</p>
            <Divider>展示</Divider>
            <Empty type="error" description="404 Not Found" imageStyle={{ height: 362 }} />
        </>
    );
};

export const Demo3 = () => {
    return (
        <>
            <p>可以通过imageStyle来调整图片高度</p>
            <Divider>展示</Divider>
            <Empty type="error" imageStyle={{ height: 362 }} />
        </>
    );
};
