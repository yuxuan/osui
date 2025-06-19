import React from 'react';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {Button, Segmented, Divider} from 'antd';
import Gap from '@osui/gap';
import type {SegmentedProps} from '@osui/ui';
import BrandProvider from '@osui/brand-provider';
import Flex, {type FlexProps} from '../src';

const meta = {
    title: 'Flex 弹性布局',
    component: Flex,
    argTypes: {
        vertical: {
            control: 'boolean',
            description: 'flex 主轴的方向是否垂直，使用 flex-direction: column',
        },
        wrap: {
            control: 'boolean',
            description: '设置元素单行显示还是多行显示,	flex-wrap | boolean',
        },
        justify: {
            control: 'select',
            options: [
                'start', 'end', 'center', 'space-between',
                'space-around', 'space-evenly',
            ],
            description: '设置元素在主轴方向上的对齐方式',
        },
        align: {
            control: 'select',
            options: [
                'normal', 'stretch',
                'center', 'start', 'end', 'flex-start', 'flex-end', 'self-start', 'self-end',
                'baseline', 'first baseline', 'last baseline', 'safe center', 'unsafe center',
                'inherit', 'initial', 'revert', 'revert-layer', 'unset',
            ],
            description: '设置元素在交叉轴方向上的对齐方式, align-items	',
        },
        flex: {
            control: 'text',
            description: 'CSS 简写属性	flex',
        },
        gap: {
            control: 'select',
            options: [
                'small', 'middle', 'large', 'none',
            ],
            description: '设置网格之间的间隙, small | middle | large | string | number',
        },
    },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        vertical: false,
        justify: 'start',
        gap: 'none',
    },
    render: args => {
        return (
            <BrandProvider>
                <Divider orientation="left">横向水平居中</Divider>
                <Flex {...args}>
                    <Button type="primary">Primary</Button>
                    <Gap orientation="horizontal" factor={2} />
                    <Button>Default</Button>
                    <Gap orientation="horizontal" factor={2} />
                    <Button type="dashed">Dashed</Button>
                    <Gap orientation="horizontal" factor={2} />
                    <Button type="link">Link</Button>
                </Flex>
            </BrandProvider>
        );
    },
};

const boxStyle: React.CSSProperties = {
    width: '100%',
    height: 120,
    borderRadius: 6,
    border: '1px solid #40a9ff',
};

const justifyOptions = [
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly',
];

const alignOptions = ['flex-start', 'center', 'flex-end'];

export const Demo: React.FC = () => {
    const [justify, setJustify] = React.useState<FlexProps['justify']>(justifyOptions[0]);
    const [alignItems, setAlignItems] = React.useState<FlexProps['align']>(alignOptions[0]);
    return (
        <Flex gap="middle" align="start" vertical>
            <p>Select justify :</p>
            <Segmented options={justifyOptions} onChange={setJustify as SegmentedProps['onChange']} />
            <p>Select align :</p>
            <Segmented options={alignOptions} onChange={setAlignItems as SegmentedProps['onChange']} />
            <Flex style={boxStyle} justify={justify} align={alignItems}>
                <Button type="primary">Primary</Button>
                <Button type="primary">Primary</Button>
                <Button type="primary">Primary</Button>
                <Button type="primary">Primary</Button>
            </Flex>
        </Flex>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/flex-cn/">Antd Flex API</a>
        </>
    );
};
