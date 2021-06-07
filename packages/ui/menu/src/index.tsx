import React from 'react';
import {Menu as AntdMenu} from 'antd';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {MenuProps as AntdMenuProps} from 'antd/lib/menu';
import {SubMenuProps as AntdSubMenuProps} from 'antd/lib/menu/SubMenu';
import classNames from 'classnames';
import {IconRightOutlined} from '@osui/icons';
import './index.less';

const clsPrefix = 'osui-menu';

export interface MenuInterface extends React.FC<AntdMenuProps> {
    SubMenu: typeof SubMenu;
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

hoistNonReactStatics(Menu, AntdMenu);
Menu.SubMenu = SubMenu;

export default Menu as unknown as typeof AntdMenu;
