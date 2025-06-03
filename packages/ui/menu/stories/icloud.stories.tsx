/* eslint-disable import/no-extraneous-dependencies */
import React, {useState} from 'react';
import {AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import BrandProvider from '@osui/brand-provider';
import Menu, {MenuProps} from '../src';

export default {
    title: '导航/Menu 导航菜单',
    component: Menu,
};

export const Demo = () => {

    const items: MenuProps['items'] = [
        {
            label: 'Navigation One',
            key: 'mail',
            icon: <MailOutlined />,
        },
        {
            label: 'Navigation Two',
            key: 'app',
            icon: <AppstoreOutlined />,
            disabled: true,
        },
        {
            label: 'Navigation Three - Submenu',
            key: 'SubMenu',
            icon: <SettingOutlined />,
            children: [
                {
                    label: 'Option 1',
                    key: 'setting:1',
                },
                {
                    label: 'Option 2',
                    key: 'setting:2',
                    children: [
                        {
                            label: 'Option 3',
                            key: 'setting:3',
                        },
                        {
                            label: 'Option 4',
                            key: 'setting:4',
                        },
                    ],
                },
            ],
        },
        {
            label: (
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                    Navigation Four - Link
                </a>
            ),
            key: 'alipay',
        },
    ];

    const App: React.FC = () => {
        const [current, setCurrent] = useState('mail');

        const onClick: MenuProps['onClick'] = e => {
            console.log('click ', e);
            setCurrent(e.key);
        };

        return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
    };

    return <App />;
};

export const Vertical = () => {
    const [cssVar, setCssVar] = useState(false);
    const theme = {
        cssVar: cssVar && {
            prefix: 'tna',
            key: 'tluafed',
        },
    };


    const items: MenuProps['items'] = [
        {
            label: 'Navigation One',
            key: 'mail',
            icon: <MailOutlined />,
            children: [
                {
                    label: 'Option 1',
                    key: 'setting:1',
                },
                {
                    label: 'Option 2',
                    key: 'setting:2',
                    // children: [
                    //     {
                    //         label: 'Option 3',
                    //         key: 'setting:3',
                    //     },
                    //     {
                    //         label: 'Option 4',
                    //         key: 'setting:4',
                    //     },
                    // ],
                },
                {
                    label: 'Option 3',
                    key: 'setting:3',
                },
                {
                    label: 'Option 4',
                    key: 'setting:4',
                },
            ],
        },
        {
            label: 'Navigation Two',
            key: 'app',
            icon: <AppstoreOutlined />,
            disabled: true,
        },
        {
            label: 'Navigation Three - Submenu',
            key: 'SubMenu',
            icon: <SettingOutlined />,
        },
        {
            label: (
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                    Navigation Four - Link
                </a>
            ),
            key: 'alipay',
        },
    ];

    const App: React.FC = () => {
        const [current, setCurrent] = useState('mail');

        const onClick: MenuProps['onClick'] = e => {
            console.log('click ', e);
            setCurrent(e.key);
        };

        return (
            <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="inline"
                style={{width: 256}}
                defaultOpenKeys={['mail']}
                items={items}
            />
        );
    };

    return (
        <BrandProvider theme={theme}>
            <button
                onClick={() => setCssVar(v => !v)}
            >
                切换{cssVar ? '不' : ''}使用cssVar
            </button>
            <App />
            <p>纵向测导航见：@baidu/icloud-ui-page-layout</p>
        </BrandProvider>
    );
};


export const Api = () => {
    return (
        <>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://ant.design/components/menu-cn/"
            >
                Antd Menu API
            </a>
        </>
    );
};

export const TestCase = () => {
    const {SubMenu} = Menu;

    // eslint-disable-next-line react/no-multi-comp
    class App extends React.Component {
        state = {
            current: 'mail',
        };

        handleClick = e => {
            console.log('click ', e);
            this.setState({current: e.key});
        };

        render() {
            const {current} = this.state;
            return (
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                >
                    <Menu.Item key="mail" icon={<MailOutlined />}>
                        Navigation One
                    </Menu.Item>
                    <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
                        Navigation Two
                    </Menu.Item>
                    <SubMenu
                        key="SubMenu"
                        icon={<SettingOutlined />}
                        title="Navigation Three - Submenu"
                    >
                        <Menu.ItemGroup title="Item 1">
                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="Item 2">
                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item key="alipay">
                        <a
                            href="https://ant.design"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Navigation Four - Link
                        </a>
                    </Menu.Item>
                </Menu>
            );
        }
    }

    return <App />;
};
