/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {Space} from 'antd';
import {IconCheckOutlined, IconCloseOutlined} from '@osui/icons';
import BrandProvider from '@osui/brand-provider';
import Divider from '@osui/divider';
import Switch from '../src';

export default {
    title: '数据录入/[new_dev]开关 Switch',
};

export const Demo = () => {

    return (
        <BrandProvider brand="icloud">
            <Divider>常规尺寸</Divider>
            <Space size={50}>
                <div style={{width: 60}}>正常</div>
                <Space>
                    <Switch />
                    <Switch defaultChecked />
                </Space>
            </Space>
            <br />
            <br />
            <Space size={50}>
                <div style={{width: 60}}>禁用</div>
                <Space>
                    <Switch disabled />
                    <Switch disabled defaultChecked />
                </Space>
            </Space>
            <br />
            <br />
            <Space size={50}>
                <div style={{width: 60}}>Loading</div>
                <Space>
                    <Switch loading />
                    <Switch loading defaultChecked />
                </Space>
            </Space>

            <Divider>中尺寸</Divider>
            <Space size={50}>
                <div style={{width: 60}}>正常</div>
                <Space>
                    <Switch size="middle" />
                    <Switch size="middle" defaultChecked />
                </Space>
            </Space>
            <br />
            <br />
            <Space size={50}>
                <div style={{width: 60}}>禁用</div>
                <Space>
                    <Switch size="middle" disabled />
                    <Switch size="middle" disabled defaultChecked />
                </Space>
            </Space>
            <br />
            <br />
            <Space size={50}>
                <div style={{width: 60}}>Loading</div>
                <Space>
                    <Switch size="middle" loading />
                    <Switch size="middle" loading defaultChecked />
                </Space>
            </Space>

            <Divider>小尺寸</Divider>
            <Space size={50}>
                <div style={{width: 60}}>正常</div>
                <Space>
                    <Switch size="small" />
                    <Switch size="small" defaultChecked />
                </Space>
            </Space>
            <br />
            <br />
            <Space size={50}>
                <div style={{width: 60}}>禁用</div>
                <Space>
                    <Switch size="small" disabled />
                    <Switch size="small" disabled defaultChecked />
                </Space>
            </Space>
            <br />
            <br />
            <Space size={50}>
                <div style={{width: 60}}>Loading</div>
                <Space>
                    <Switch size="small" loading />
                    <Switch size="small" loading defaultChecked />
                </Space>
            </Space>
        </BrandProvider>
    );
};

export const OldDemo = () => {
    return (
        <BrandProvider brand="icloud">
            <h3>基础开关</h3>
            <Space>
                <Switch />
                <Switch defaultChecked />
            </Space>
            <br />
            <br />
            <Space>
                <Switch loading />
                <Switch defaultChecked loading />
            </Space>
            <br />
            <br />
            <Space>
                <Switch disabled />
                <Switch defaultChecked disabled />
            </Space>
            <br />
            <br />
            <h3>含图标和文字的开关</h3>
            <Space>
                <Switch checkedChildren="开" unCheckedChildren="关" />
                <Switch
                    defaultChecked
                    checkedChildren={<IconCheckOutlined />}
                    unCheckedChildren={<IconCloseOutlined />}
                />
            </Space>
        </BrandProvider>
    );
};


export const Size = () => {
    return (
        <BrandProvider>
            <Switch defaultChecked />
            <br />
            <Switch size="small" defaultChecked />
        </BrandProvider>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/switch-cn/">Antd Switch API</a>
        </>
    );
};

