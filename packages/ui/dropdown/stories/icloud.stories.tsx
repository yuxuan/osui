/* eslint-disable import/no-extraneous-dependencies */
import React, {useState} from 'react';
import {IconDownOutlined} from '@osui/icons';
import FlexCentered from '@osui/flex-centered';
import {MenuProps} from '@osui/menu';
import Button from '@osui/button';
import Space from '@osui/space';
import BrandProvider from '@osui/brand-provider';
import Dropdown from '../src';

export default {
    title: '数据录入/Dropdown 下拉菜单',
};

export const Demo = () => {
    const [cssVar, setCssVar] = useState(false);
    const theme = {
        cssVar: cssVar && {
            prefix: 'tna',
            key: 'tluafed',
        },
    };
    const menu: MenuProps = {
        items: [
            {
                label: '1st menu item',
                key: '1',
            },
            {
                label: '2nd menu item',
                key: '2',
            },
            {
                label: '3rd menu item',
                key: '3',
            },
        ],
        onClick({key}) {
            console.log(`click on items ${key}`);
        },
    };


    return (
        <BrandProvider theme={theme}>
            <button
                onClick={() => setCssVar(v => !v)}
            >
                切换{cssVar ? '不' : ''}使用cssVar
            </button>

            <p>文字下拉</p>
            <Dropdown menu={menu}>
                <a onClick={e => e.preventDefault()}>
                    <FlexCentered>
                        请选择
                        <IconDownOutlined style={{paddingLeft: '5px'}} />
                    </FlexCentered>
                </a>
            </Dropdown>
        </BrandProvider>
    );
};

export const Api = () => {
    return (
        <>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://ant.design/components/dropdown-cn/"
            >
                Antd Dropdown API
            </a>
        </>
    );
};

export const TestCase = () => {
    const handleMenuClick: MenuProps['onClick'] = e => {
        console.log('click', e);
    };
    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('click left button', e);
    };

    const items = [
        {
            label: '1st menu item',
            key: '1',
            children: [
                {
                    label: '2nd menu item',
                    key: '2',
                },
                {
                    label: '3rd menu item',
                    key: '3',
                },
            ],
        },
        {

            label: '11st menu item',
            key: '11',
            children: [
                {
                    type: 'group',
                    label: '2nd menu item',
                    key: '2',
                },
                {
                    label: '3rd menu item',
                    key: '3',
                },
                {
                    type: 'group',
                    label: '4rd menu item',
                    key: '4',
                },
            ],
        },
    ];
    const menuProps = {
        items,
        onClick: handleMenuClick,
    };
    return (
        <BrandProvider>
            <Dropdown.Button open menu={menuProps} onClick={handleButtonClick}>
                Dropdown
            </Dropdown.Button>
        </BrandProvider>
    );
};

export function TestCase2() {
    const menu = {
        items: [
            {
                label: '1st menu item',
                key: '1',
            },
            {
                label: '2nd menu item',
                key: '2',
            },
            {
                label: '3rd menu item',
                key: '3',
            },
        ],
    };

    return (
        <BrandProvider>
            <Space direction="vertical">
                <Space wrap>
                    <Dropdown menu={menu} placement="bottomLeft">
                        <Button>bottomLeft</Button>
                    </Dropdown>
                    {/* <Dropdown overlay={menu} placement="bottom">
                    <Button>bottom</Button>
                </Dropdown> */}
                    <Dropdown menu={menu} placement="bottomRight">
                        <Button>bottomRight</Button>
                    </Dropdown>
                </Space>
                <Space wrap>
                    <Dropdown arrow menu={menu} placement="topLeft">
                        <Button>topLeft</Button>
                    </Dropdown>
                    {/* <Dropdown arrow overlay={menu} placement="top">
                    <Button>top</Button>
                </Dropdown> */}
                    <Dropdown arrow menu={menu} placement="topRight">
                        <Button>topRight</Button>
                    </Dropdown>
                </Space>
            </Space>
        </BrandProvider>
    );
}
