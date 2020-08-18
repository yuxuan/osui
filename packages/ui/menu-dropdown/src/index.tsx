/**
 * @file Menu-dropdown 右键菜单
 * @author yangpeng, huoyuxuan
 * */

import * as React from 'react';
import {Dropdown as AntdDropdown, Menu} from 'antd';
import {DropDownProps as AntdDropdownProps} from 'antd/es/dropdown';
import {MenuItemProps} from 'antd/es/menu/MenuItem';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-menu-dropdown';

interface MenuDropdownData {
    key: string;
    title: React.ReactNode;
    disabled?: boolean;
    children?: MenuDropdownData[];
}
export interface MenuDropdownProps extends Omit<AntdDropdownProps, 'overlay'> {
    data?: MenuDropdownData[];
    className?: string;
    handleMenuClick?: MenuItemProps['onClick'];
}

const MenuDropdown: React.FC<MenuDropdownProps> = props => {
    const { SubMenu } = Menu;
    const { data, handleMenuClick, ...rest } = props;

    const menu = (
        <Menu {...rest} onClick={handleMenuClick} >
            {
                data && data.map(item => {
                    if (item.children && item.children.length > 0) {
                        return (
                            <SubMenu
                                key={item.key}
                                title={item.title}
                                popupClassName={classNames(`${clsPrefix}-menu`, props.className)}
                            >
                                {item.children.map((item: MenuDropdownData) => {
                                    return (
                                        <Menu.Item key={item.key} disabled={item.disabled}>{item.title}</Menu.Item>
                                    );
                                })}
                            </SubMenu>
                        );
                    } else {
                        return <Menu.Item key={item.key} disabled={item.disabled}>{item.title}</Menu.Item>;
                    }
                })
            }
        </Menu>
    );

    return (
        <AntdDropdown
            {...rest}
            overlay={menu}
            className={classNames(clsPrefix, props.className)}
        />
    );
};

export default MenuDropdown;
