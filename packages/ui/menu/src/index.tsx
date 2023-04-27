import React from 'react';
import {Menu as AntdMenu} from 'antd';
import {MenuProps, MenuRef} from 'antd/es/menu';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {SubMenuProps as AntdSubMenuProps} from 'antd/es/menu/SubMenu';
import classNames from 'classnames';
import {IconRightOutlined} from '@osui/icons';
import './index.less';

const clsPrefix = 'osui-menu';

export interface MenuInterface extends React.FC<MenuProps> {
    SubMenu: typeof SubMenu;
}

const Menu = ({className, expandIcon, ...props}: MenuProps) => {
    const innerClassName = classNames(clsPrefix, className);
    const innerExpandIcon = expandIcon ?? <IconRightOutlined />;
    return <AntdMenu className={innerClassName} expandIcon={innerExpandIcon} {...props} />;
};

const SubMenu: React.FC<AntdSubMenuProps> = ({popupClassName, ...props}) => {
    const innerPopupClassName = classNames(`${clsPrefix}-submenu`, popupClassName);
    return <AntdMenu.SubMenu popupClassName={innerPopupClassName} {...props} />;
};

hoistNonReactStatics(Menu, AntdMenu);

Menu.SubMenu = SubMenu;

export type {MenuProps, MenuTheme, SubMenuProps, MenuItemProps} from 'antd';

type CompoundedComponent = React.ForwardRefExoticComponent<MenuProps & React.RefAttributes<MenuRef>> & {
    Item: typeof AntdMenu.Item;
    SubMenu: typeof SubMenu;
    Divider: typeof AntdMenu.Divider;
    ItemGroup: typeof AntdMenu.ItemGroup;
};

export default Menu as CompoundedComponent;
