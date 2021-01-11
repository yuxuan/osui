import React from 'react';
import PageHeader from '@osui/page-header';

export default {
    title: 'PageHeader',
};

export const Demo = () => {
    return (
        <>
            <p>默认的padding: 16px 24px</p>
            <PageHeader title="Title" />
            <p>noPadding: padding可以根据排版需要自行设置</p>
            <PageHeader noPadding title="Title" />
        </>
    );
};

export const Back = () => {
    return (
        <>
            <PageHeader title="Title" onBack={() => null} />
        </>
    );
};