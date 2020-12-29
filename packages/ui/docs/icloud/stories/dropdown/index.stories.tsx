import React from 'react';
import Menu from '@osui/menu';
import Dropdown from '@osui/dropdown';

export default {
    title: '通过验收/Dropdown 下拉菜单',
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
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Hover me
            </a>
        </Dropdown>
    );
};
