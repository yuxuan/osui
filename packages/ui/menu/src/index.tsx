import React from 'react';
import {Menu as AntdMenu} from 'antd';
import {MenuProps as AntdMenuProps} from 'antd/es/menu';
import {SubMenuProps as AntdSubMenuProps} from 'antd/es/menu/SubMenu';
import classNames from 'classnames';
import {IconRightOutlined} from '@osui/icons';
import './index.less';

const clsPrefix = 'osui-menu';

export interface MenuInterface extends React.FC<AntdMenuProps> {
    Item: typeof AntdMenu.Item;
    SubMenu: typeof SubMenu;
    ItemGroup: typeof AntdMenu.ItemGroup;
}

const Menu: MenuInterface = ({className, expandIcon, ...props}) => {
    const innerClassName = classNames(className, clsPrefix);
    const innerExpandIcon = expandIcon ?? <IconRightOutlined />;
    return <AntdMenu className={innerClassName} expandIcon={innerExpandIcon} {...props} />;
};

const SubMenu: React.FC<AntdSubMenuProps> = ({popupClassName, ...props}) => {
    const innerPopupClassName = classNames(popupClassName, `${clsPrefix}-submenu`);
    return <AntdMenu.SubMenu popupClassName={innerPopupClassName} {...props} />;
};

Menu.Item = AntdMenu.Item;
Menu.SubMenu = SubMenu;
Menu.ItemGroup = AntdMenu.ItemGroup;

export default Menu;
