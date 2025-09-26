import React from 'react';
import {Meta, StoryObj} from '@storybook/react';
import Watermark from '@osui/watermark';

const meta = {
    title: '反馈/水印 Watermark',
    component: Watermark,
    parameters: {
        height: 1000,
    },
    argTypes: {
        rotate: {
            control: 'number',
            description: '水印绘制时，旋转的角度，单位 °',
        },
        content: {
            control: 'text',
            description: '水印文字内容, string | string[]',
        },
        image: {
            control: 'text', description: '图片源，建议导出 2 倍或 3 倍图，优先级高 (支持 base64 格式)',
        },
        width: {
            control: 'number',
            description: '水印的宽度，content 的默认值为自身的宽度',
        },
        height: {
            control: 'number',
            description: '水印的高度，content 的默认值为自身的高度',
        },
    },
} satisfies Meta<typeof Watermark>;

export default meta;
type Story = StoryObj<typeof meta>;
const url = 'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbywo0oAAAAAAAAAAAAADrJ8AQ/original';

export const Primary: Story = {
    args: {
        rotate: -22,
        image: url,
        width: 120,
        height: 64,
        content: '水印',
    },
    render: args => {
        return (
            <Watermark
                {...args}
            >
                <div style={{height: 500}} />
            </Watermark>
        );
    },
};

export const Demo: React.FC = () => (
    <Watermark
        height={30}
        width={130}
        image={url}
    >
        <div style={{height: 500}} />
    </Watermark>
);

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/watermark-cn/">Antd Watermark API</a>
        </>
    );
};

