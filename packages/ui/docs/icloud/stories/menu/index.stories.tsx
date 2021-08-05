import React from 'react';
import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import Menu from '@osui/menu';

export default {
    title: '导航/Menu 导航菜单',
    component: Menu,
};

export const Demo = () => {
    const {SubMenu} = Menu;

    class Sider extends React.Component {
        handleClick = e => {
            console.log('click ', e);
            this.setState({
                current: e.key,
            });
        };

        render() {
            return (
                <>
                    <Menu
                        onClick={this.handleClick}
                        style={{width: 256}}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                    >
                        <SubMenu
                            key="sub1"
                            icon={<MailOutlined />}
                            title="Navigation One"
                        >
                            <Menu.Item key="1">Option 1</Menu.Item>
                            <Menu.Item key="2">Option 2</Menu.Item>
                            <Menu.Item key="3">Option 3</Menu.Item>
                            <Menu.Item key="4">Option 4</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            icon={<AppstoreOutlined />}
                            title="Navigation Two"
                        >
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu
                            key="sub4"
                            icon={<SettingOutlined />}
                            title="Navigation Three"
                        >
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </>
            );
        }
    }

    return <Sider />;
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
