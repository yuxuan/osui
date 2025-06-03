/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Button from '@osui/button';
import Divider from '@osui/divider';
import Space from '@osui/space';
import BrandProvider from '@osui/brand-provider';
import Drawer from '../src';

export default {
    title: '反馈/Drawer 抽屉',
};

export const Demo = () => {
    const [cssVar, setCssVar] = React.useState(false);
    const theme = {
        cssVar: cssVar && {
            prefix: 'tna',
            key: 'tluafed',
        },
    };

    const [visible, setVisible] = React.useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const footer = (
        <div style={{display: 'flex', justifyContent: 'flex-end'}}><Button type="primary">确认</Button></div>
    );

    return (
        <BrandProvider theme={theme}>
            <div style={{padding: 30}}>
                <p>footer没有封装在组件内，按业务逻辑调整</p>
                <button
                    onClick={() => setCssVar(v => !v)}
                >
                    切换{cssVar ? '不' : ''}使用cssVar
                </button>

                <Divider orientation="left">基础抽屉</Divider>
                <Button type="primary" onClick={showDrawer}>
                    Open
                </Button>
                <p style={{margin: '20px 0 20px 0'}}>基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭</p>
                <Drawer
                    closable
                    title="Basic Drawer"
                    placement="right"
                    onClose={onClose}
                    visible={visible}
                    footer={footer}
                    extra={<div>extra</div>}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
            </div>
        </BrandProvider>
    );
};


export const Size = () => {
    const [smallVisible, setSmallVisible] = React.useState(false);
    const [middleVisible, setMiddleVisible] = React.useState(false);
    const [largeVisible, setLargeVisible] = React.useState(false);
    const footer = (
        <div style={{display: 'flex', justifyContent: 'flex-end'}}><Button type="primary">确认</Button></div>
    );

    return (
        <BrandProvider>
            <div style={{padding: 30}}>
                <p>footer没有封装在组件内，按业务逻辑调整</p>
                <Divider orientation="left">small抽屉</Divider>
                <Button type="primary" onClick={() => setSmallVisible(true)}>
                    Small
                </Button>
                <Drawer
                    title="Basic Drawer"
                    placement="right"
                    onClose={() => setSmallVisible(false)}
                    visible={smallVisible}
                    size="small"
                    footer={footer}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
                <Divider orientation="left">middle抽屉</Divider>
                <Button type="primary" onClick={() => setMiddleVisible(true)}>
                    Middle
                </Button>
                <Drawer
                    title="Basic Drawer"
                    placement="right"
                    onClose={() => setMiddleVisible(false)}
                    visible={middleVisible}
                    size="middle"
                    footer={footer}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
                <Divider orientation="left">large抽屉</Divider>
                <Button type="primary" onClick={() => setLargeVisible(true)}>
                    Large
                </Button>
                <Drawer
                    title="Basic Drawer"
                    placement="right"
                    onClose={() => setLargeVisible(false)}
                    visible={largeVisible}
                    size="large"
                    footer={footer}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
            </div>
        </BrandProvider>
    );
};

export const TestCaseExtraWithClose = () => {
    const [visible, setVisible] = React.useState(false);
    const footer = (
        <div style={{display: 'flex', justifyContent: 'flex-end'}}><Button type="primary">确认</Button></div>
    );
    return (
        <BrandProvider>
            <Button type="primary" onClick={() => setVisible(true)}>
                open
            </Button>
            <Drawer
                title="Basic Drawer"
                placement="right"
                onClose={() => setVisible(false)}
                visible={visible}
                footer={footer}
                extra={
                    <Space>
                        <Button>Cancel</Button>
                        <Button type="primary">
                            OK
                        </Button>
                    </Space>
                }
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </BrandProvider>
    );
};

export const TestCaseExtraOnly = () => {
    const [visible, setVisible] = React.useState(false);
    const footer = (
        <div style={{display: 'flex', justifyContent: 'flex-end'}}><Button type="primary">确认</Button></div>
    );
    return (
        <BrandProvider>
            <Button type="primary" onClick={() => setVisible(true)}>
                open
            </Button>
            <Drawer
                closable={false}
                title="Basic Drawer"
                placement="right"
                onClose={() => setVisible(false)}
                visible={visible}
                footer={footer}
                extra={
                    <Space>
                        <Button>Cancel</Button>
                        <Button type="primary">
                            OK
                        </Button>
                    </Space>
                }
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </BrandProvider>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/drawer-cn/">Antd Drawer API</a>
        </>
    );
};

