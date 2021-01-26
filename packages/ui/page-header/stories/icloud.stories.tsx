import React from 'react';
import PageHeader from '../src';

export default {
    title: '未实现/PageHeader 页头',
    component: PageHeader,
};

export const Demo = () => {
    return (
        <>
            <PageHeader
                onBack={() => null}
                title="Title"
                subTitle="This is a subtitle"
            />
            <p>noPadding: padding可以根据排版需要自行设置</p>
            <PageHeader noPadding title="Title" />
        </>
    );
};