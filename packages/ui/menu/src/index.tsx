import React, {useContext} from 'react';
import {Menu as AntdMenu, ConfigProvider} from 'antd';
import {MenuProps, MenuRef} from 'antd/es/menu';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {SubMenuProps as AntdSubMenuProps} from 'antd/es/menu/SubMenu';
import classNames from 'classnames';
import {IconRightOutlined} from '@osui/icons';
// import './index.less';
import {useStyle} from './style';

const clsPrefix = 'osui-menu';

export interface MenuInterface extends React.FC<MenuProps> {
    SubMenu: typeof SubMenu;
}

const Menu = ({className, expandIcon, rootClassName, ...props}: MenuProps) => {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('menu', props.prefixCls);
    const antPrefix = getPrefixCls('');
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefix);
    const innerClassName = classNames(clsPrefix, className);
    const innerRootClassName = classNames(clsPrefix, rootClassName);
    const innerExpandIcon = expandIcon ?? <IconRightOutlined />;
    return wrapSSROsui(
        <AntdMenu
            className={innerClassName}
            rootClassName={innerRootClassName}
            expandIcon={innerExpandIcon}
            {...props}
        />
    );
};

const SubMenu: React.FC<AntdSubMenuProps> = ({popupClassName, ...props}) => {
    const innerPopupClassName = classNames(`${clsPrefix}-submenu`, popupClassName);
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('menu');
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar);
    return wrapSSROsui(
        <AntdMenu.SubMenu
            popupClassName={innerPopupClassName}
            {...props}
        />
    );
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
