import React from 'react';
import {DropDownProps as AntdDropDownProps} from 'antd/es/dropdown';
import {Menu, Dropdown, Button } from 'antd';
import {IconBranchDropdown, IconDownArrow} from '@osui/icons';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-branch-dropdown';
export type DropdownProps = AntdDropDownProps;

// overlay自己在组件里面覆盖了，所以不需要从外面传
interface DropdownInterface extends Omit<DropdownProps, 'overlay'>{
    classButtonName?: string;
    classDropDownName?: string;
    list: any[];
    handleMenuItemClick: (item: any) => void;
}

const BranchDropdown: React.FC<DropdownInterface> = props => {
    const {
        classButtonName,
        classDropDownName,
        list,
        handleMenuItemClick,
    } = props;

    const [title, setTitle] = React.useState(list[0].title);
    const [desc, setDesc] = React.useState(list[0].desc);

    function handleMenuClick(item: any) {
        const data = list.filter((t: any) => item.key === t.id)[0];
        if (item.key === '0') { // 点击的第一个
            setTitle(data.title);
            setDesc(data.desc);
        } else {
            setTitle(data.id);
            setDesc(data.title);
        }
        handleMenuItemClick(data);
    }
    const menu = (
        <Menu className={classNames(`${clsPrefix}-menu`)} onClick={handleMenuClick} >
            {list.map((item: any) => (<Menu.Item
                key={item.id}
            >
                <IconBranchDropdown />
                <p className="title">
                    <span>{item.title}</span>
                    <em>{item.id === '0' ? '' : item.id }</em>
                </p>
                <p className="desc">{item.desc} </p>
            </Menu.Item>
            ))}
        </Menu>);
    return (
        <Dropdown
            overlay={menu}
            overlayClassName={classNames(`${clsPrefix}`, classDropDownName)}
            {...props}
        >
            <Button className={classNames(`${clsPrefix}-button`, classButtonName)}>
                <IconBranchDropdown />
                <p className="title">{title}</p>
                <p className="desc">{desc}</p>
                <IconDownArrow className="dropdown-arrow-icon" />
            </Button>
        </Dropdown>
    );
};

export default BranchDropdown;
