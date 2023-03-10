/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Tooltip from '@osui/tooltip';
import {Space} from 'antd';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import Avatar from '@osui/avatar';

export default {
    title: '数据展示/Avatar 头像',
};

export const Demo = () => {
    return (
        <div style={{padding: 30}}>
            <div style={{marginBottom: 20}}>
                <p>Avatar 头像</p>
                <Space>
                    <Avatar size="large" icon={<UserOutlined />} />
                    <Avatar size="default" icon={<UserOutlined />} />
                    <Avatar size="small" icon={<UserOutlined />} />
                    <Avatar size="large">S</Avatar>
                    <Avatar>S</Avatar>
                    <Avatar size="small">S</Avatar>
                </Space>
            </div>
            <div>
                <p>PR评审通过 （24尺寸专用）</p>
                <Space>
                    <Avatar size="default" pr>a</Avatar>
                    <Avatar pr src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/128/batman-icon.png" />
                </Space>
            </div>
        </div>
    );
};

export const Group = () => {
    return (
        <Avatar.Group>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
            <Tooltip title="Ant User" placement="top">
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            </Tooltip>
            <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
        </Avatar.Group>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/avatar-cn/">Antd Avatar API</a>
        </>
    );
};

