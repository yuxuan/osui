/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Button from '@osui/button';
import notification from '../src';

export default {
    title: '反馈/Notification 通知提醒框',
    component: Notification,
};


export const Demo = () => {
    const openNotification = () => {
        notification.open({
            message: 'Notification Title',
            description:
                `
                This is the content of the notification.
                This is the content of the notification.
                This is the content of the notification.
                `,
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };

    return (
        <Button type="primary" onClick={openNotification}>
            Open the notification box
        </Button>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/notification-cn/">Antd Notification API</a>
        </>
    );
};

