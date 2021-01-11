/**
 * @file Menu-dropdown 右键菜单
 * @author yangpeng, huoyuxuan
 * */

import React, {useState, useCallback} from 'react';
import Dropdown from '@osui/dropdown';
import Menu from '@osui/menu';
import {DropDownProps as AntdDropdownProps} from 'antd/es/dropdown';
import {MenuItemProps} from 'antd/es/menu/MenuItem';
import classNames from 'classnames';
import {IconRightOutlined} from '@osui/icons';
import {ActionToggleButton} from '@osui/toggle-button';
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
    onMenuClick?: MenuItemProps['onClick'];
}

const MenuDropdown: React.FC<MenuDropdownProps> = props => {
    const { SubMenu } = Menu;
    const { data, onMenuClick, onVisibleChange, ...rest } = props;

    const menu = (
        <Menu {...rest} onClick={onMenuClick}>
            {
                data && data.map(item => {
                    if (item.children && item.children.length > 0) {
                        return (
                            <SubMenu
                                key={item.key}
                                title={item.title}
                                popupClassName={classNames(`${clsPrefix}-menu`, props.className)}
                                // @ts-ignore 这个没有暴露出来
                                expandIcon={<IconRightOutlined className={`${clsPrefix}-expand-icon`} />}
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
        <Dropdown
            {...rest}
            overlay={menu}
            className={classNames(clsPrefix, props.className)}
            onVisibleChange={onVisibleChange}
        />
    );
};

export const ActionMenuDropdown: React.FC<MenuDropdownProps> = ({
    onMenuClick,
    onVisibleChange,
    ...props
}) => {
    const [actionOn, setActionOn] = useState(false);
    const handleClick = useCallback(
        e => {
            setActionOn(false);
            onMenuClick && onMenuClick(e);
        },
        [onMenuClick]
    );
    const handleVisibleChange = useCallback(
        visible => {
            setActionOn(visible);
            onVisibleChange && onVisibleChange(visible);
        },
        [onVisibleChange]
    );
    return (
        <MenuDropdown
            trigger={['click']}
            onMenuClick={handleClick}
            onVisibleChange={handleVisibleChange}
            {...props}
        >
            <ActionToggleButton isOn={actionOn} />
        </MenuDropdown>
    );
};

export default MenuDropdown;
