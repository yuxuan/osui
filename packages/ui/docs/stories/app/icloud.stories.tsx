import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import BrandProvider from '@osui/brand-provider/';
import {Button, Space} from 'antd';
import App from '@osui/app';

const meta = {
    title: 'App',
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

const Index = () => {
    const {message, modal, notification} = App.useApp();
    const showMessage = () => {
        console.log('message', message);
        message.success('Success!');
    };

    const showModal = () => {
        modal.warning({
            title: 'This is a warning message',
            content: 'some messages...some messages...',
        });
    };

    const showNotification = () => {
        notification.info({
            message: 'Notification topLeft',
            description: 'Hello, Ant Design!!',
            placement: 'topLeft',
        });
    };

    return (
        <BrandProvider>
            <Space wrap>
                <Button type="primary" onClick={showMessage}>
                    Open message
                </Button>
                <Button type="primary" onClick={showModal}>
                    Open modal
                </Button>
                <Button type="primary" onClick={showNotification}>
                    Open notification
                </Button>
            </Space>
        </BrandProvider>
    );
};

export const Demo: Story = {
    render: () => {
        return (
            <App>
                <Index />
            </App>
        );
    },
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/app-cn/">Antd App API</a>
        </>
    );
};
