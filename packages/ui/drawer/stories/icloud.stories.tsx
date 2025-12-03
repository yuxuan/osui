/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Button from '@osui/button';
import Divider from '@osui/divider';
import Space from '@osui/space';
import {Form} from 'antd';
import BrandProvider from '@osui/brand-provider';
import Drawer from '../src';

export default {
    title: '反馈/[new_dev]抽屉 Drawer',
};

const BaseDrawer = ({content, text, ...props}: any) => {
    const [visible, setVisible] = React.useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    return (
        <>
            <Button onClick={showDrawer}>
                {text || 'Open'}
            </Button>
            <Drawer
                closable
                title="标题"
                onClose={onClose}
                visible={visible}
                {...props}
            >
                {content || (
                    <>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </>
                )}

            </Drawer>
        </>
    );
};
export const Demo = () => {
    const footer = (
        <div style={{display: 'flex', gap: 20, justifyContent: 'flex-end'}}>
            <Button>取消</Button>
            <Button type="primary">确认</Button>
        </div>
    );
    const formContent = (
        <Form>
            <Form.Item label="用户名">
                <input placeholder="请输入用户名" style={{width: '100%'}} />
            </Form.Item>
            <Form.Item label="密码">
                <input placeholder="请输入密码" style={{width: '100%'}} />
            </Form.Item>
            <Form.Item label="备注">
                <input placeholder="请输入备注" style={{width: '100%'}} />
            </Form.Item>
        </Form>
    );
    return (
        <BrandProvider brand="icloud">
            <Divider>基础抽屉</Divider>
            <h3>不同方位</h3>
            <p style={{paddingLeft: 20}}>
                <Space>
                    右侧
                    <BaseDrawer />
                </Space>
            </p>
            <p style={{paddingLeft: 20}}>
                <Space>
                    左侧
                    <BaseDrawer placement="left" />
                </Space>
            </p>
            <p style={{paddingLeft: 20}}>
                <Space>
                    上方
                    <BaseDrawer placement="top" />
                </Space>
            </p>
            <p style={{paddingLeft: 20}}>
                <Space>
                    下方
                    <BaseDrawer placement="bottom" />
                </Space>
            </p>
            <h3>无蒙层</h3>
            <BaseDrawer mask={false} />
            <p />
            <h3>带主操作按钮</h3>
            <BaseDrawer footer={footer} />
            <p />
            <h3>无标题</h3>
            <BaseDrawer title={null} />
            <p />
            <h3>表单抽屉</h3>
            <BaseDrawer content={formContent} footer={footer} />
            <p />
            <h3>多层抽屉</h3>
            <BaseDrawer content={<BaseDrawer />} />

            <Divider>抽屉大小</Divider>
            <BaseDrawer width="25vw" text="小" />
            <BaseDrawer width="33vw" text="中" />
            <BaseDrawer width="66vw" text="大" />

        </BrandProvider>
    );
};

export const Demo1 = () => {
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
        <BrandProvider>
            <div style={{padding: 30}}>
                <p>footer没有封装在组件内，按业务逻辑调整</p>
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

