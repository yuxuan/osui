import React from 'react';
import BrandProvider from '@osui/brand-provider';
import {QuestionCircleOutlined} from '@ant-design/icons';
import {Meta, StoryObj} from '@storybook/react';
import FloatButton from '@osui/float-button';

const meta = {
    title: '通用/悬浮按钮 FloatButton',
    component: FloatButton,
    argTypes: {
        tooltip: {
            control: 'text',
        },
        type: {
            control: 'select',
            options: ['default', 'primary'],
        },
        shape: {
            control: 'select',
            options: ['circle', 'square'],
        },
        href: {
            control: 'text',
            description: '点击跳转的地址，指定此属性 button 的行为和 a 链接一致',
        },
        target: {
            control: 'text',
            description: '相当于 a 标签的 target 属性, href 存在时生效',
        },
    },
} satisfies Meta<typeof FloatButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        tooltip: '气泡卡片的内容, ReactNode | () => ReactNode',
        type: 'default',
        shape: 'circle',
    },
};

export const Demo = () => {
    return (
        <BrandProvider brand="icloud">
            <div style={{height: 400}}>
                <FloatButton
                    icon={<QuestionCircleOutlined />}
                    type="primary"
                    style={{right: 24}}
                    onClick={() => console.log('Question One onClick')}
                />
                <FloatButton
                    icon={<QuestionCircleOutlined />}
                    type="default"
                    style={{right: 94}}
                    onClick={() => console.log('Question Two onClick')}
                />
            </div>
        </BrandProvider>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/float-button-cn/">Antd FloatButton API</a>
        </>
    );
};
