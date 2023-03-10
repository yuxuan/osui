/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Menu from '@osui/menu';
import Button from '@osui/button';
import Space from '@osui/space';
import {IconDownOutlined} from '@osui/icons';
import FlexCentered from '@osui/flex-centered';
import Dropdown from '@osui/dropdown';

export default {
    title: '数据录入/Dropdown 下拉菜单',
};

export const Demo = () => {
    const menu = (
        <Menu>
            <Menu.Item>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.alipay.com/"
                >
                    1st
                </a>
            </Menu.Item>
            <Menu.Item>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.taobao.com/"
                >
                    2nd
                </a>
            </Menu.Item>
            <Menu.Item>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.tmall.com/"
                >
                    3rd
                </a>
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <p>文字下拉</p>
            <Dropdown overlay={menu}>
                <a onClick={e => e.preventDefault()}>
                    <FlexCentered>
                        请选择
                        <IconDownOutlined style={{paddingLeft: '5px'}} />
                    </FlexCentered>
                </a>
            </Dropdown>
        </>
    );
};

export const Api = () => {
    return (
        <>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://ant.design/components/dropdown-cn/"
            >
                Antd Dropdown API
            </a>
        </>
    );
};

export const TestCase = () => {
    const menu = (
        <Menu>
            <Menu.Item key="1">foo</Menu.Item>
        </Menu>
    );
    return (
        <Dropdown.Button
            overlayClassName="className"
            overlayStyle={{color: 'red'}}
            overlay={menu}
            visible
        />
    );
};

export function TestCase2() {
    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    3rd menu item
                </a>
            </Menu.Item>
        </Menu>
    );

    return (
        <Space direction="vertical">
            <Space wrap>
                <Dropdown overlay={menu} placement="bottomLeft">
                    <Button>bottomLeft</Button>
                </Dropdown>
                {/* <Dropdown overlay={menu} placement="bottom">
                    <Button>bottom</Button>
                </Dropdown> */}
                <Dropdown overlay={menu} placement="bottomRight">
                    <Button>bottomRight</Button>
                </Dropdown>
            </Space>
            <Space wrap>
                <Dropdown arrow overlay={menu} placement="topLeft">
                    <Button>topLeft</Button>
                </Dropdown>
                {/* <Dropdown arrow overlay={menu} placement="top">
                    <Button>top</Button>
                </Dropdown> */}
                <Dropdown arrow overlay={menu} placement="topRight">
                    <Button>topRight</Button>
                </Dropdown>
            </Space>
        </Space>
    );
}
