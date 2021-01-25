import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Menu from '@osui/menu';
import TextOverflowTooltip from '@osui/text-overflow-tooltip';
import Breadcrumb from '@osui/breadcrumb';

export default {
    title: '验收中/Breadcrumb 面包屑',
};

export const Demo = () => {
    return (
        <>
            <p>如果需要蓝色hover，放个<code>a</code>标签</p>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <a href="">一级页面名称</a>
                </Breadcrumb.Item>
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
            <br />
            <p>不同的<code>font-size</code> 12px </p>
            <Breadcrumb style={{fontSize: '12px'}}>
                <Breadcrumb.Item>
                    <a href="">一级页面名称</a>
                </Breadcrumb.Item>
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
        </>
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
            <p>注意：箭头icon目前无法覆盖</p>
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
        <>
            <p>注意：箭头icon目前无法覆盖</p>
            <Breadcrumb>
                <Breadcrumb.Item><a href="">Ant Design</a></Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">Component</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item overlay={menu}>
                    <a href="">General</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Button</Breadcrumb.Item>
            </Breadcrumb>
        </>
    );
};

export const EllipsisText = () => {
    return (
        <>
            <p>当使用TextOverflowTooltip的时候，需要调整一下a标签的布局居中</p>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <a href="">一级页面名称</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="" style={{display: 'inline-flex', 'alignItems': 'center'}}>
                        <TextOverflowTooltip maxWidth={50} title="名字特别长的时候需要hover上去才显示">
                            名字特别长的时候需要hover上去才显示
                        </TextOverflowTooltip>
                    </a>
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
        </>
    );

}