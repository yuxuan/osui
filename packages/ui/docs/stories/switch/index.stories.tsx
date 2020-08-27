import React from 'react';
import {Space} from 'antd';
import {IconSwitchTick, IconSwitchCross} from '@osui/icons';
import Switch from '@osui/switch';

export default {
    title: 'OSUI-Switch',
};

export const Demo = () => {
    return (
        <div style={{ padding: 30 }}>
            <Space>
                <Switch >Switch</Switch>
                <Switch defaultChecked >Switch</Switch>
                <Switch disabled>Switch</Switch>
                <Switch defaultChecked disabled>Switch</Switch>
                <Switch checkedChildren={<IconSwitchTick />} unCheckedChildren={<IconSwitchCross />} />
                <Switch defaultChecked checkedChildren={<IconSwitchTick />} unCheckedChildren={<IconSwitchCross />} />
            </Space>
        </div>);
};
