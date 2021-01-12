import React from 'react';
import { Button, Divider } from 'antd';
import Drawer from '../src';

export default {
    title: '验收中/Drawer 抽屉',
};

export const Demo = () => {

    const [visible, setVisible] = React.useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <div style={{ padding: 30 }}>
            {/* success */}
            <Divider orientation="left">基础抽屉</Divider>
            <Button type="primary" onClick={showDrawer}>
                Open
            </Button>
            <p style={{ margin: '20px 0 20px 0' }}>基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭</p>
            <Drawer
                title="Basic Drawer"
                placement="right"
                width="450"
                closable
                onClose={onClose}
                visible={visible}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>);
};
