import React from 'react';
import { Space } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import Switch from '@osui/switch';

export default {
    title: 'OSUI-Switch',
};

export const Demo = () => {
    return (
        <Space>
            <Switch >Switch</Switch>
            <Switch defaultChecked >Switch</Switch>
            <Switch disabled>Switch</Switch>
            <Switch defaultChecked disabled>Switch</Switch>
            <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} />
            <Switch defaultChecked checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} />
        </Space>
    );
};
