import React from 'react';
import Menu from '@osui/menu';
import Dropdown from '@osui/dropdown';

export default {
    title: 'Dropdown',
    component: Dropdown,
};

export const Demo = () => {

    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                    1st menu item
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                    2nd menu item
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                    3rd menu item
                </a>
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Hover me
            </a>
        </Dropdown>
    );
};

export const DropdownSubMenuGroupDemo = () => {
    const { SubMenu } = Menu;

    const menu = (
        <Menu>
            <Menu.ItemGroup title="Item 1">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                    1st menu item
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                    2nd menu item
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                    3rd menu item
                </a>
            </Menu.Item>
            <SubMenu key="sub1" title="Navigation One">
                <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="12">Option 1</Menu.Item>
                    <Menu.Item key="22">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                    <Menu.Item key="32">Option 3</Menu.Item>
                    <Menu.Item key="42">Option 4</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
        </Menu>
    );

    return (
        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Hover me
            </a>
        </Dropdown>
    );
}