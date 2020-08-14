import * as React from 'react';
import {Divider} from 'antd';
import RightDropdown from '../src';

export default {
    title: 'OSUI-Right-dropdown',
};

export const Demo = () => {

    // Dropdown点击事件
    const click = (e: any) => {
        console.log('Dropdown点击事件');
        console.log(e);
    };

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

    // 菜单点击事件
    const handleMenuClick = (e: any) => {
        console.log('获取Menu点击的key值:' + e.key);
        console.log(e);
    };

    return (
        <div style={{padding: 30}}>
            <Divider orientation="left">基本</Divider>

            <RightDropdown
                //  @ts-ignore
                trigger={['contextMenu']}
                menuDate={menuDate}
                onClick={click}
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
            </RightDropdown>
        </div>);
};
