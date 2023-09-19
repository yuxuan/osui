/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import BrandProvider from '@osui/brand-provider';
import Descriptions from '../src';

export default {
    title: '数据展示/Descriptions 描述列表',
    component: Descriptions,
};

export const Demo = () => {
    return (
        <BrandProvider>
            <p>规范用法见业务组件库icloud-ui Card组件</p>
            <p></p>
            <p></p>
            <p>以下为Antd默认的效果</p>
            <Descriptions title="User Info">
                <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
                <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                <Descriptions.Item label="Remark">empty</Descriptions.Item>
                <Descriptions.Item label="Address">
                    No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                </Descriptions.Item>
            </Descriptions>
        </BrandProvider>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/descriptions-cn/">Antd Descriptions API</a>
        </>
    );
};

