import React, { useState } from "react";
import { render } from "react-dom";
import Drawer from '@osui/drawer';
import Button from '@osui/button';
import Input from '@osui/input';
import './index.less';

const App = () => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <>
            <Button type="primary" onClick={showDrawer}>
                Open
            </Button>
            <Input />
            <Drawer
                closable
                placement="right"
                onClose={onClose}
                visible={visible}
                size="large"
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    );
};

render(<App />, document.getElementById("root"));
