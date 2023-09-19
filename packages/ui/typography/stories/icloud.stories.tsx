/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import BrandProvider from '@osui/brand-provider';
import Typography from '../src';

export default {
    title: '布局/Typography 排版',
    component: Typography,
};

export const Demo = () => {
    const {Title} = Typography;

    return (
        <BrandProvider>
            <Title>h1. Ant Design</Title>
            <Title level={2}>h2. Ant Design</Title>
            <Title level={3}>h3. Ant Design</Title>
            <Title level={4}>h4. Ant Design</Title>
            <Title level={5}>h5. Ant Design</Title>
        </BrandProvider>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/typography-cn/">Antd Typography API</a>
        </>
    );
};

