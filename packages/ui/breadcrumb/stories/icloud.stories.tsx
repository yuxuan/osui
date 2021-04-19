import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Menu from '@osui/menu';
import TextOverflowTooltip from '@osui/text-overflow-tooltip';
import Divider from '@osui/divider';
import Breadcrumb from '../src';

export default {
    title: '导航/Breadcrumb 面包屑',
};

export const Demo = () => {
    return (
        <>
            <p>产品页面层级较多，用户路径较长，无法仅通过使用返回按钮解决回到首页/列表页诉求，建议层级≥3时全局使用，用户可通过面包屑返回/到达目标页面</p>
            <Divider>展示</Divider>
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
            <h3>一、使用场景</h3>
            <p>面包屑能够作为用户路径的记录，可点击切换至对应页面，至多展示5级面包屑内容，超过部分展示一级与末尾2级，中间省略号显示，可从后之前逐级展开内容</p>
            <p>当showEllipsis为true，且长度超过5个时，展示【...】</p>
            <p>点击【...】可以从后面展示被隐藏的面包屑</p>
            <Divider>展示</Divider>
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
            <p>单层级字符数超过20个时省略文字内容，可hover展示详情：</p>
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
};

export const Api = () => {
    return (
        <>
            <a href="https://ant.design/components/breadcrumb-cn/">Antd Breadcrumb API</a>
        </>
    );
};

