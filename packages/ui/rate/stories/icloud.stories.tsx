/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import BrandProvider from '@osui/brand-provider';
import Rate from '../src';

export default {
    title: '数据录入/Rate 评分',
    component: Rate,
};

export const Demo = () => {
    return (
        <BrandProvider brand="icloud">
            <Rate allowHalf defaultValue={2.5} />
        </BrandProvider>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/rate-cn/">Antd Rate API</a>
        </>
    );
};

