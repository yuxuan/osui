/* eslint-disable import/no-extraneous-dependencies */
import React, {useState} from 'react';
import BrandProvider from '@osui/brand-provider';
import Menu from '@osui/menu';
import type {MenuProps} from 'antd';
import {Breadcrumb, theme} from 'antd';
import Layout from '@osui/layout';
// import { Layout } from 'antd';

export default {
    title: '布局/Layout 布局',
    component: Layout,
};

const {Header, Sider, Content} = Layout;

const items: MenuProps['items'] = ['1', '2', '3'].map(key => ({
    key,
    label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [1, 2, 3].map(
    (v, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            label: `subnav ${key}`,

            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    }
);

export const Demo = () => {
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    const [collapsible, setCollapsible] = useState(true);
    const [newCollapseStyle, setNewCollapseStyle] = useState(true);
    const [useCustomTrigger, setUseCustomTrigger] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [cssVar, setCssVar] = useState(false);
    const style = newCollapseStyle ? {
        fontSize: 10, marginLeft: -12, color: '#fff', margin: '0 auto',
    } : {};
    const trigger = collapsed ? <div style={style}>展开</div> : <div style={style}>收起</div>;
    const themeVar = {
        cssVar: cssVar && {
            prefix: '',
        },
    };
    return (
        <BrandProvider theme={themeVar}>
            <Layout>
                <Header style={{display: 'flex', alignItems: 'center'}}>
                    <div className="demo-logo" style={{color: '#fff'}}>测试sider收缩样式</div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={items}
                        style={{flex: 1, minWidth: 0}}
                    />
                </Header>

                <Layout>
                    <Sider
                        width={200}
                        style={{background: colorBgContainer}}
                        newCollapseStyle={newCollapseStyle}
                        collapsible={collapsible}
                        trigger={useCustomTrigger && trigger}
                        onCollapse={setCollapsed}
                    >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%', borderRight: 0}}
                            items={items2}
                        />
                    </Sider>

                    <Layout style={{padding: '0 24px 24px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                columnGap: 12,
                                padding: 24,
                                background: colorBgContainer,
                                borderRadius: borderRadiusLG,
                            }}
                        >
                            <button
                                onClick={() => setCollapsible(v => !v)}
                            >
                                切换{!collapsible ? '' : '不'}可收起状态
                            </button>
                            <button
                                onClick={() => setNewCollapseStyle(v => !v)}
                            >
                                切换{!newCollapseStyle ? '新' : '旧'}收起样式
                            </button>
                            <button
                                onClick={() => setUseCustomTrigger(v => !v)}
                            >
                                切换{!useCustomTrigger ? '' : '不'}使用自定义trigger
                            </button>

                            <button
                                onClick={() => setCssVar(v => !v)}
                            >
                                切换{!cssVar ? '' : '不'}使用cssVar
                            </button>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </BrandProvider>

    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/layout-cn/">Antd Layout API</a>
        </>
    );
};

