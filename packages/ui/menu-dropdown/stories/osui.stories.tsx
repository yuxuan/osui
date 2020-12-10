import React from 'react';
import {Divider} from 'antd';
import Table from '@osui/table';
import Button from '@osui/button';
import MenuDropdown, {ActionMenuDropdown} from '../src';

export default {
    title: 'MenuDropdown',
    component: MenuDropdown,
};

export const Demo = () => {
    // 菜单数据
    const data = [
        {
            title: '新建 Pull Request',
            key: 'newPr',
        },
        {
            title: '新建分支',
            key: 'newBranch',
        },
        {
            title: '新建组件',
            key: 'newComponents',
        },
        {
            title: '新建项目',
            key: 'newProject',
            children: [
                {
                    title: '计划 Project',
                    key: 'project',
                },
                {
                    title: '文档 DOC',
                    key: 'doc',
                },
                {
                    title: '流水线 Pipe',
                    key: 'pipe',
                },
                {
                    title: '制品库 Repo',
                    key: 'repo',
                },
                {
                    title: '测试用例 Test',
                    key: 'test',
                },
            ],
        },
    ];

    // 菜单点击事件
    const handleMenuClick = (e: any) => {
        console.log(`获取Menu点击的key值: ${e.key}`);
        console.log(e);
    };

    return (
        <div style={{padding: 30}}>
            <Divider orientation="left">基本</Divider>
            <MenuDropdown
                trigger={['contextMenu']}
                data={data}
                onMenuClick={handleMenuClick}
            >
                <div
                    style={{
                        width: '140px',
                        textAlign: 'center',
                        height: 200,
                        lineHeight: '200px',
                        background: '#f7f7f7',
                        color: '#777',
                    }}
                >
                    Right Click on here
                </div>
            </MenuDropdown>
        </div>);
};


export const ButtonDemo = () => {
    // 菜单数据
    const data = [
        {
            title: '新建 Pull Request',
            key: 'newPr',
        },
        {
            title: '新建分支',
            key: 'newBranch',
        },
        {
            title: '新建组件',
            key: 'newComponents',
        },
        {
            title: '新建项目',
            key: 'newProject',
            children: [
                {
                    title: '计划 Project',
                    key: 'project',
                },
                {
                    title: '文档 DOC',
                    key: 'doc',
                },
                {
                    title: '流水线 Pipe',
                    key: 'pipe',
                },
                {
                    title: '制品库 Repo',
                    key: 'repo',
                },
                {
                    title: '测试用例 Test',
                    key: 'test',
                },
            ],
        },
    ];

    // 菜单点击事件
    const handleMenuClick = (e: any) => {
        console.log(`获取Menu点击的key值: ${e.key}`);
        console.log(e);
    };

    return (
        <div style={{padding: 30}}>
            <Divider orientation="left">基本</Divider>
            <MenuDropdown
                trigger={['click']}
                onMenuClick={handleMenuClick}
                placement="bottomCenter"
                data={data}
            >
                <Button>bottomCenter</Button>
            </MenuDropdown>
        </div>);
};


export const TableAction = () => {
    const menuData = [
        {
            title: '编辑',
            key: 'edit',
        },
        {
            title: '删除',
            key: 'delete',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (<ActionMenuDropdown data={menuData} />),
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
    ];

    return (
        <div style={{ padding: 30 }}>
            <Table columns={columns} dataSource={data} />
        </div>);
};
