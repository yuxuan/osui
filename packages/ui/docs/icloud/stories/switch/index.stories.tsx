import React from 'react';
import { Space } from 'antd';
import { IconCheckOutlined, IconCloseOutlined } from '@osui/icons';
import Switch from '@osui/switch';

export default {
    title: '数据录入/Switch 开关',
};

export const Demo = () => {
    return (
        <>
            <Space>
                <Switch />
                <Switch defaultChecked />
            </Space>
            <br />
            <br />
            <Space>
                <Switch disabled />
                <Switch defaultChecked disabled />
            </Space>
            <br />
            <br />
            <Space>
                <Switch checkedChildren="开" unCheckedChildren="关" />
                <Switch
                    defaultChecked
                    checkedChildren={<IconCheckOutlined />}
                    unCheckedChildren={<IconCloseOutlined />}
                />
            </Space>
        </>
    );
};


export const Size = () => {
    return (
        <>
            <Switch defaultChecked />
            <br />
            <Switch size="small" defaultChecked />
        </>
    );
};
