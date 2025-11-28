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
    const [api, contextHolder] = notification.useNotification();
    const openNotification = () => {
        api.open({
            message: '普通通知',
            closeIcon: false,
            description: '这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知',
            duration: 100,
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };
    const openNotificationIcon = () => {
        api.info({
            message: '普通通知',
            closeIcon: false,
            description: '这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知',
        });
    };
    const openNotificationClose = () => {
        api.info({
            message: '普通通知',
            description: '这是一条消息通知',
            duration: 100,
        });
    };
    const info = () => {
        api.info({
            message: '普通通知',
            closeIcon: false,
            description: 'This is the content of the notification.',
        });
    };
    const success = () => {
        api.success({
            message: '成功提示',
            closeIcon: false,
            description: 'This is the content of the notification.',
        });
    };
    const error = () => {

        api.error({
            message: '错误提示',
            closeIcon: false,
            description: 'This is the content of the notification.',
        });
    };
    const warning = () => {
        api.warning({
            message: '警告提示',
            closeIcon: false,
            description: 'This is the content of the notification.',
        });
    };
    const small = () => {
        api.open({
            message: '提示',
            closeIcon: false,
            description: '小尺寸',
            duration: 100,
        });
    };
    const errorLarge = () => {
        api.error({
            message: '当前子用户权限不足，无法完成操作',
            code: 'xxxx-xxxxx-xxxx-xxxx-xxxxxx-xxxxxx123123123123123121312331312123',
            description: '当前子用户没有资源(am-nyku90v15vh1)的操作权限(DescribeModelSet、DescribeModelSet)',
            duration: 100,
        });
    };
    return (
        <BrandProvider brand="icloud">
            {contextHolder}
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
            <Space>
                <Button onClick={small}>
                    小尺寸
                </Button>
                <Button onClick={errorLarge}>
                    大尺寸
                </Button>
            </Space>
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

