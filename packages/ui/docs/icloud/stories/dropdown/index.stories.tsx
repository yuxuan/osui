import React from 'react';
import Menu from '@osui/menu';
import {IconDownOutlined} from '@osui/icons';
import FlexCentered from '@osui/flex-centered';
import Dropdown from '@osui/dropdown';

export default {
    title: '数据录入/Dropdown 下拉菜单',
    component: Dropdown,
};

export const Demo = () => {

    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                    1st
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                    2nd
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
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
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/dropdown-cn/">Antd Dropdown API</a>
        </>
    );
};

