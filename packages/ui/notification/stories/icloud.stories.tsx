/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Button from '@osui/button';
import {Space} from 'antd';
import BrandProvider from '@osui/brand-provider';
import Divider from '@osui/divider';
import notification from '../src';

export default {
    title: '反馈/通知提醒框 Notification',
    component: Notification,
};


export const Demo = () => {
    const openNotification = () => {
        notification.open({
            message: '普通通知',
            closeIcon: false,
            description:
                `
                This is the content of the notification.
                This is the content of the notification.
                `,
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };
    const openNotificationIcon = () => {
        notification.open({
            message: '普通通知',
            closeIcon: false,
            icon: '+',
            description:
                `
                This is the content of the notification.
                This is the content of the notification.
                `,
        });
    };
    const openNotificationClose = () => {
        notification.open({
            message: '普通通知',
            icon: '+',
            description:
                `
                This is the content of the notification.
                This is the content of the notification.
                `,
        });
    };
    const info = () => {
        notification.info({
            message: '普通通知',
            description: 'This is the content of the notification.',
        });
    };
    const success = () => {
        notification.success({
            message: '成功提示',
            description: 'This is the content of the notification.',
        });
    };
    const error = () => {
        notification.error({
            message: '错误提示',
            description: 'This is the content of the notification.',
        });
    };
    const warning = () => {
        notification.warning({
            message: '警告提示',
            description: 'This is the content of the notification.',
        });
    };
    const large = () => {
        notification.open({
            message: '警告提示',
            description: (
                <>
                    <div>This is the content of the notification.</div>
                    <div>错误码：xxxxx-xxxxx-xxxx-xxx</div>
                </>
            ),
        });
    };
    return (
        <BrandProvider brand="icloud">
            <Divider>基础消息通知</Divider>
            <Space>
                <Button onClick={openNotification}>
                    无ICON
                </Button>
                <Button onClick={openNotificationIcon}>
                    有ICON
                </Button>
                <Button onClick={openNotificationClose}>
                    可关闭
                </Button>
            </Space>

            <Divider>通知状态</Divider>
            <Space>
                <Button onClick={info}>
                    普通通知
                </Button>
                <Button onClick={success}>
                    成功提示
                </Button>
                <Button onClick={error}>
                    错误提示
                </Button>
                <Button onClick={warning}>
                    警告提示
                </Button>
            </Space>

            <Divider>组件尺寸</Divider>
            <Button onClick={large}>
                大尺寸
            </Button>
        </BrandProvider>

    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/notification-cn/">Antd Notification API</a>
        </>
    );
};

