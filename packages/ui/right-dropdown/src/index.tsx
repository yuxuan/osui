/**
 * @file Menu-dropdown 右键菜单
 * @author yangpeng
 * */

import * as React from 'react';
import {Dropdown as AntdDropdown, Menu} from 'antd';
import {DropDownProps as AntdDropdownProps} from 'antd/lib/Dropdown';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-menu-dropdown';

export type DropdownProps = AntdDropdownProps;

interface MenuDropdownProps extends React.FC<DropdownProps> {
    menuDate?: any[];
    className?: string;
    handleMenuClick?: any;
}

const MenuDropdown: React.FC<MenuDropdownProps> = props => {
    const { SubMenu } = Menu;
    const { menuDate, handleMenuClick } = props;

    const menu = (
        // @ts-ignore
        <Menu {...props} onClick={handleMenuClick} >
            {
                menuDate && menuDate.map(item => {
                    if (item.child && item.child.length > 0) {
                        return (<SubMenu
                            title={item.title}
                            popupClassName={classNames(`${clsPrefix}-menu`, props.className)}
                        >
                            {item.child.map((item: any) => {
                                return <Menu.Item key={item.value}>{item.title}</Menu.Item>;
                            })}
                        </SubMenu>);
                    } else {
                        return <Menu.Item key={item.value}>{item.title}</Menu.Item>;
                    }
                })
            }
        </Menu>
    );

    return (<AntdDropdown
        // @ts-ignore
        overlay={menu}
        className={classNames(clsPrefix, props.className)}
        {...props}
    />);
};

export default MenuDropdown;
