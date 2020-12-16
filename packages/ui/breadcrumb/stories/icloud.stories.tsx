import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Menu from '@osui/menu';
import Breadcrumb from '../src';

export default {
    title: '待验收/Breadcrumb 面包屑',
};

export const Demo = () => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item>一级页面名称</Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="">二级页面名称</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="">三级页面名称</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="">四级页面名称</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="">末级页面名称</a>
            </Breadcrumb.Item>
        </Breadcrumb>
    );
};

export const Ellipsis = () => {
    return (
        <>
            <p>当showEllipsis为true，且长度超过5个时，展示【...】</p>
            <p>点击【...】可以从后面展示被隐藏的面包屑</p>
            <p>Demo: </p>
            <br />
            <Breadcrumb showEllipsis>
                <Breadcrumb.Item>一级页面名称</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">二级页面名称</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">三级页面名称</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>四级页面名称</Breadcrumb.Item>
                <Breadcrumb.Item>五级页面名称</Breadcrumb.Item>
                <Breadcrumb.Item>六级页面名称</Breadcrumb.Item>
                <Breadcrumb.Item>末级页面名称</Breadcrumb.Item>
            </Breadcrumb>
        </>
    );
};

export const Routes = () => {
    const routes = [
        {
            path: 'index1',
            breadcrumbName: 'home',
        },
        {
            path: 'index2',
            breadcrumbName: 'home2',
        },
        {
            path: 'index3',
            breadcrumbName: 'home3',
        },
        {
            path: 'index4',
            breadcrumbName: 'home4',
        },
        {
            path: 'index5',
            breadcrumbName: 'home5',
        },
        {
            path: 'first6',
            breadcrumbName: 'first',
            children: [
                {
                    path: '/general',
                    breadcrumbName: 'General',
                },
                {
                    path: '/layout',
                    breadcrumbName: 'Layout',
                },
                {
                    path: '/navigation',
                    breadcrumbName: 'Navigation',
                },
            ],
        },
        {
            path: 'second',
            breadcrumbName: 'second',
        },
    ];

    function itemRender(route, params, routes, paths) {
        const last = routes.indexOf(route) === routes.length - 1;
        return last ? (
            <span>{route.breadcrumbName}</span>
        ) : (
            <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
        );
    }

    return (
        <BrowserRouter>
            <p>支持routes</p>
            <Breadcrumb itemRender={itemRender} routes={routes} showEllipsis />
        </BrowserRouter>
    );
};


export const Dropdown = () => {

    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                    General
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                    Layout
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                    Navigation
                </a>
            </Menu.Item>
        </Menu>
    );

    return (
        <Breadcrumb>
            <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="">Component</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item overlay={menu}>
                <a href="">General</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Button</Breadcrumb.Item>
        </Breadcrumb>
    );
};
