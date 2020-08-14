/**
 * @file Right-dropdown 右键菜单
 * @author yangpeng
 * */

import * as React from 'react';
import {Dropdown as AntdDropdown, Menu} from 'antd';
import {DropDownProps as AntdDropdownProps} from 'antd/lib/Dropdown';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-right-dropdown';

export type DropdownProps = AntdDropdownProps;

const RightDropdown: React.FC<DropdownProps> = props => {
    const { SubMenu } = Menu;

    const menuDate = [
        {
            title: '新建 Pull Request',
            value: 'newPr',
        },
        {
            title: '新建分支',
            value: 'newBranch',
        },
        {
            title: '新建组件',
            value: 'newComponents',
        },
        {
            title: '新建项目',
            child: [
                {
                    title: '计划 Project',
                    value: 'project',
                },
                {
                    title: '文档 DOC',
                    value: 'doc',
                },
                {
                    title: '流水线 Pipe',
                    value: 'pipe',
                },
                {
                    title: '制品库 Repo',
                    value: 'repo',
                },
                {
                    title: '测试用例 Test',
                    value: 'test',
                },
            ],
        },
    ];

    const menu = (
        <Menu {...props}>
            {
                menuDate.map(item => {
                    if (item.child && item.child.length > 0) {
                        return (<SubMenu title={item.title}>
                            {item.child.map(({title, value}) => {
                                return <Menu.Item key={value}>{title}</Menu.Item>;
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
        trigger={['contextMenu']}
        className={classNames(clsPrefix, props.className)}
        {...props}
    />);
};

export default RightDropdown;
