/* eslint-disable import/no-extraneous-dependencies */
import React, {useState} from 'react';
import {Space} from 'antd';
import {IconCheckOutlined, IconCloseOutlined} from '@osui/icons';
import BrandProvider from '@osui/brand-provider';
import Switch from '../src';

export default {
    title: '数据录入/Switch 开关',
};

export const Demo = () => {
    const [cssVar, setCssVar] = useState(false);
    const theme = {
        cssVar: cssVar && {
            prefix: 'tna',
            key: 'tluafed',
        },
    };
    return (
        <BrandProvider brand="icloud" theme={theme}>
            <button
                onClick={() => setCssVar(v => !v)}
            >
                切换{cssVar ? '不' : ''}使用cssVar
            </button>
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

