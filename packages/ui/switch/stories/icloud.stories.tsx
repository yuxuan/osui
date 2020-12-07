import React from 'react';
import {Space} from 'antd';
import {IconSwitchTick, IconSwitchCross} from '@osui/icons';
import Switch from '../src';

export default {
    title: '通过验收/Switch 开关',
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
                <Switch defaultChecked checkedChildren={<IconSwitchTick />} unCheckedChildren={<IconSwitchCross />} />
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
