/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {Flex} from 'antd';
import QRCode from '../src';

const meta = {
    title: 'QRCode 二维码',
    component: QRCode,
    argTypes: {
        value: {
            control: 'text', description: '扫描后的文本',
        },
        type: {
            control: 'select', options: ['canvas', 'svg'],
            description: '渲染类型',
        },
        icon: {
            control: 'text', description: '二维码中图片的地址（目前只支持图片地址）',
        },
        size: {
            control: 'number', description: '二维码大小',
        },
        bgColor: {
            control: 'text', description: '背景颜色',
        },
        status: {
            control: 'select', options: ['active', 'expired', 'loading', 'scanned'],
        },
    },
} satisfies Meta<typeof QRCode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        value: 'https://www.baidu.com',
        type: 'canvas',
        size: 160,
        bgColor: '#fff',
        status: 'active',
    },
};

const value = 'https://ant.design';

export const Demo: React.FC = () => (
    <Flex gap="middle" wrap="wrap">
        <QRCode value={value} status="loading" />
        <QRCode value={value} status="expired" onRefresh={() => console.log('refresh')} />
        <QRCode value={value} status="scanned" />
    </Flex>
);

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/qr-code-cn/">Antd QRCode API</a>
        </>
    );
};

