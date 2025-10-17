import React from 'react';
import BrandProvider from '@osui/brand-provider';
import Divider from '@osui/divider';
import Spin from '../src';

export default {
    title: '反馈/加载中 Spin',
    component: Spin,
};

export const Demo = () => {
    return (
        <BrandProvider brand="icloud">
            <Divider>图标加载</Divider>
            <p>样式一</p>
            <Spin />
            <p />
            <p>样式二</p>
            <Spin />
            <Divider>文字加载</Divider>
            <Spin />
            <Divider>图片+文字加载</Divider>
            <p>样式一</p>
            <Spin tip="Loading"> </Spin>
            <br />
            <br />
            <br />
            <p>样式二</p>
            <Spin tip="Loading"> </Spin>
            <br />
            <br />
            <br />
            <p>左右排列</p>
            <Spin tip="Loading" />

            <Divider>不同大小加载</Divider>
            <p>m-20*20（局部加载）</p>
            <Spin size="small" />
            <p />
            <p>xl-32*32（表格加载）</p>
            <Spin />
            <p />
            <p>2xl-40*40（弹窗/大卡片）</p>
            <Spin size="large" />
            <p />
            <p>3xl-60*60（全局）</p>
            <Spin />

        </BrandProvider>
    );
};

export const Api = () => {
    return (
        <BrandProvider>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/spin-cn/">Antd Spin API</a>
        </BrandProvider>
    );
};

