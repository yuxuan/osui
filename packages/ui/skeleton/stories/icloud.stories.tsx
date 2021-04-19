import React from 'react';
import Skeleton from '../src';

export default {
    title: '数据展示/Skeleton 骨架屏',
    component: Skeleton,
};

export const Demo = () => {
    return (
        <Skeleton />
    );
};

export const Api = () => {
    return (
        <>
            <a href="https://ant.design/components/skeleton-cn/">Antd Skeleton API</a>
        </>
    );
};

