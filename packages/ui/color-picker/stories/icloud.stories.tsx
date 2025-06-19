import React, {useState} from 'react';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {DownOutlined} from '@ant-design/icons';
import {Space} from 'antd';
import ColorPicker from '../src';

const meta = {
    title: 'ColorPicker',
    component: ColorPicker,
    argTypes: {
        value: {
            control: 'color', description: '颜色的值',
        },
        defaultValue: {
            control: 'color', description: '颜色默认的值',
        },
        showText: {
            control: 'boolean', description: '显示颜色文本',
        },
        trigger: {
            control: 'select', options: ['hover', 'click'],
            description: '颜色选择器的触发模式',
        },
    },
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        showText: true,
        defaultValue: '#1677ff',
        trigger: 'click',
    },
};

export const Demo = () => {
    const [open, setOpen] = useState(false);
    return (
        <Space direction="vertical">
            <ColorPicker defaultValue="#1677ff" showText />
            <ColorPicker
                defaultValue="#1677ff"
                showText={color => <span>Custom Text ({color.toHexString()})</span>}
            />
            <ColorPicker
                defaultValue="#1677ff"
                open={open}
                onOpenChange={setOpen}
                showText={() => (
                    <DownOutlined
                        rotate={open ? 180 : 0}
                        style={{
                            color: 'rgba(0, 0, 0, 0.25)',
                        }}
                    />
                )}
            />
        </Space>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/color-picker-cn/">Antd ColorPicker API</a>
        </>
    );
};
