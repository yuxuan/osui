import React from 'react';
import {Space} from 'antd';
import {IconSwitchTick, IconSwitchCross} from '@osui/icons';
import Switch from '@osui/switch';

export default {
    title: '通过验收/Switch 开关',
};

export const Demo = () => {
    return (
        <Space>
            <Switch >Switch</Switch>
            <Switch defaultChecked >Switch</Switch>
            <Switch disabled>Switch</Switch>
            <Switch defaultChecked disabled>Switch</Switch>
            <Switch checkedChildren="开" unCheckedChildren="关" />
            <Switch defaultChecked checkedChildren={<IconSwitchTick />} unCheckedChildren={<IconSwitchCross />} />
        </Space>
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
