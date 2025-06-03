/* eslint-disable import/no-extraneous-dependencies */
import React, {useState} from 'react';
import Tooltip from '@osui/tooltip';
import {Space} from 'antd';
import {UserOutlined, AntDesignOutlined} from '@ant-design/icons';
import BrandProvider from '@osui/brand-provider';
import Avatar from '../src';

export default {
    title: '数据展示/Avatar 头像',
};

export const Demo = () => {
    const [cssVar, setCssVar] = useState(false);
    const theme = {
        cssVar: cssVar && {
            prefix: 'tna',
            key: 'tluafed',
        },
    };

    return (
        <BrandProvider theme={theme}>
            <div style={{padding: 30}}>
                <div style={{marginBottom: 20}}>
                    <button
                        onClick={() => setCssVar(v => !v)}
                    >
                        切换{cssVar ? '不' : ''}使用cssVar
                    </button>
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
        </BrandProvider>
    );
};

export const Group = () => {
    return (
        <BrandProvider>
            <Avatar.Group>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <Avatar style={{backgroundColor: '#f56a00'}}>K</Avatar>
                <Tooltip title="Ant User" placement="top">
                    <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined />} />
                </Tooltip>
                <Avatar style={{backgroundColor: '#1890ff'}} icon={<AntDesignOutlined />} />
            </Avatar.Group>
        </BrandProvider>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/avatar-cn/">Antd Avatar API</a>
        </>
    );
};

