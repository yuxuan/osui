import React, {useState} from 'react';
import {Row} from 'antd';
import {IconGitFilter, IconBranchFilter} from '@osui/icons';
import MenuDropdown from '@osui/menu-dropdown';
import ToggleButton from '../src';

export default {
    title: 'ToggleButton',
    component: 'ToggleButton',
};

export const Demo = () => {
    return (
        <>
            <Row style={{marginBottom: 20}}>
                <ToggleButton num={18}>筛选普通样式</ToggleButton>
            </Row>
            <Row style={{marginBottom: 20}}>
                <ToggleButton hasArrow >筛选带箭头</ToggleButton>
            </Row>
            <Row style={{marginBottom: 20}}>
                <ToggleButton hasShowNumber num={18}>筛选带数值</ToggleButton>
            </Row>
            <Row style={{marginBottom: 20}}>
                <ToggleButton hasArrow beforeIcon={<IconGitFilter />}>筛选带icon</ToggleButton>
            </Row>
            <Row style={{marginBottom: 20}}>
                <ToggleButton hasArrow beforeIcon={<IconBranchFilter />}>筛选带icon</ToggleButton>
            </Row>
        </>
    );
};

export const MenuDemo = () => {
    const [visible, setVisible] = useState(false);

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
        setVisible(false);
    };
    return (
        <>
            <MenuDropdown
                trigger={['click']}
                onMenuClick={handleMenuClick}
                placement="bottomCenter"
                data={data}
                onVisibleChange={visible => {setVisible(visible);}}
            >
                <ToggleButton isOn={visible}>筛选普通样式</ToggleButton>
            </MenuDropdown>
        </>
    );
};
