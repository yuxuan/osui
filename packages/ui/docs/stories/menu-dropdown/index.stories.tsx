import React from 'react';
import {Divider, Button} from 'antd';
import MenuDropdown from '@osui/menu-dropdown';

export default {
    title: 'OSUI-Menu-dropdown',
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
                handleMenuClick={handleMenuClick}
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
                handleMenuClick={handleMenuClick}
                placement="bottomCenter"
                data={data}
            >
                <Button>bottomCenter</Button>
            </MenuDropdown>
        </div>);
};
