import React from 'react';
import Menu from '@osui/menu';
import {IconDownOutlined} from '@osui/icons';
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
        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{display: 'flex'}}>
                Hover me
                <IconDownOutlined style={{paddingLeft: '5px'}} />
            </a>
        </Dropdown>
    );
};
