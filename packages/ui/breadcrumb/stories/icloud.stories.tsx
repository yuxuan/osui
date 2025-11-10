/* eslint-disable import/no-extraneous-dependencies */
import {BrowserRouter, Link} from 'react-router-dom';
import {OutlinedHome, OutlinedDown} from 'acud-icon';
import Dropdown from '@osui/dropdown';
import TextOverflowTooltip from '@osui/text-overflow-tooltip';
import BrandProvider from '@osui/brand-provider';
import Divider from '@osui/divider';
import Space from '../../space';
import Breadcrumb from '../src';

export default {
    title: '导航/[new_dev]面包屑 Breadcrumb',
};

export const Demo = () => {
    const menuItems = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="/">
                    下拉菜单
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="/">
                    下拉菜单2
                </a>
            ),
        },
    ];
    return (
        <BrandProvider>
            <p>
                面包屑是辅助导航模式，用于识别页面在层次结构内的位置，并根据需要向上返回。
            </p>
            <h3>何时使用</h3>
            <p>
                1.多层级网站: 当你的网站存在两个及以上的页面层级，并且是分类清晰明确的多层级结构时，应当使用面包屑辅助用户进行页面之间的导航。
            </p>
            <p>
                2.当层级内容带有下拉菜单时，建议采用斜杠分隔符样式。
            </p>
            <Divider>基础面包屑</Divider>
            <Breadcrumb
                items={[
                    {title: '首页'},
                    {title: <a href="">上级页面</a>},
                    {title: '上级页面', href: ''},
                    {title: '当前页面'},
                ]}
            />
            <Divider>带前置icon面包屑</Divider>
            <Breadcrumb
                items={[
                    {title: <Space size={4} align="center"><OutlinedHome /> 首页</Space>},
                    {title: <Space size={4} align="center"><OutlinedHome /> 上级页面</Space>, href: ''},
                    {title: <Space size={4} align="center"><OutlinedHome /> 上级页面</Space>, href: ''},
                    {title: '当前页面'},
                ]}
            />
            <Divider>带下拉的面包屑</Divider>
            <Breadcrumb
                itemRender={item => {
                    return <span>{item.title}</span>;
            }}
                items={[
                    {title: '首页'},
                    {title: <Dropdown menu={{items: menuItems}}><a>上级页面1 <OutlinedDown /></a></Dropdown>},
                    {title: <Dropdown menu={{items: menuItems}}><a>上级页面2 <OutlinedDown /></a></Dropdown>},
                    {title: '当前页面'},
                ]}
            />
            <Divider>自定义分隔符的面包屑</Divider>
            <Breadcrumb
                items={[
                    {title: '首页'},
                    {title: <a href="">上级页面</a>},
                    {title: '上级页面', href: ''},
                    {title: '当前页面'},
                ]}
            />
            <br />
            <Breadcrumb
                items={[
                    {title: '首页'},
                    {title: <a href="">上级页面</a>},
                    {title: '上级页面', href: ''},
                    {title: '当前页面'},
                ]}
            />

            <Divider>不同大小</Divider>
            <p>large</p>
            <Breadcrumb
                size="large"
                items={[
                    {title: '首页'},
                    {title: <a href="">上级页面</a>},
                    {title: '上级页面', href: ''},
                    {title: '当前页面'},
                ]}
            />
            <p />
            <p>Medium</p>
            <Breadcrumb
                items={[
                    {title: '首页'},
                    {title: <a href="">上级页面</a>},
                    {title: '上级页面', href: ''},
                    {title: '当前页面'},
                ]}
            />
            <p />
            <p>Small</p>
            <Breadcrumb
                size="small"
                items={[
                    {title: '首页'},
                    {title: <a href="">上级页面</a>},
                    {title: '上级页面', href: ''},
                    {title: '当前页面'},
                ]}
            />
            <br />

            <Divider>面包屑超长</Divider>
            <p>文案超长</p>
            <Breadcrumb
                items={[
                    {title: '首页'},
                    {title: <a href="">上级页面</a>},
                    {
                        title: (
                            <TextOverflowTooltip
                                maxWidth={154}
                                title="上级页面特别长的时候需要hover上去才显示"
                            >
                                上级页面特别长的时候需要hover上去才显示
                            </TextOverflowTooltip>
                        ), href: '',
                        },
                    {
                        title: (
                            <TextOverflowTooltip
                                maxWidth={154}
                                title="当前页面特别长的时候需要hover上去才显示"
                            >
                                当前页面特别长的时候需要hover上去才显示
                            </TextOverflowTooltip>
                        ),
                    },
                ]}
            />
            <br />
            <p>级数超长</p>
            <Breadcrumb
                showEllipsis
                items={[
                    {title: '首页'},
                    {title: <a href="">二级页面</a>},
                    {title: '三级页面', href: ''},
                    {title: '四级页面'},
                    {title: '五级页面'},
                    {title: '六级页面'},
                    {title: '七级页面'},
                    {
                        title: '当前页面',
                    },
                ]}
            />
        </BrandProvider>
    );
};

export const Antd5Demo = () => {
    return (
        <BrandProvider>
            <h1>新用法</h1>
            <p>
                产品页面层级较多，用户路径较长，无法仅通过使用返回按钮解决回到首页/列表页诉求，建议层级≥3时全局使用，用户可通过面包屑返回/到达目标页面
            </p>
            <p>
                如果需要蓝色hover，放个<code>a</code>标签
            </p>
            <Breadcrumb
                items={[
                    {title: '一级页面名称', href: ''},
                    {title: '二级页面名称', href: ''},
                    {title: '三级页面名称', href: ''},
                    {title: '四级页面名称', href: ''},
                    {title: '末级页面名称'},
                ]}
            />
            <br />
        </BrandProvider>
    );
};

export const Ellipsis = () => {
    return (
        <>
            <h3>一、使用场景</h3>
            <p>
                面包屑能够作为用户路径的记录，可点击切换至对应页面，至多展示5级面包屑内容，超过部分展示一级与末尾2级，中间省略号显示，可从后之前逐级展开内容
            </p>
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
            title: 'home',
        },
        {
            path: 'index2',
            title: 'home2',
        },
        {
            path: 'index3',
            title: 'home3',
        },
        {
            path: 'index4',
            title: 'home4',
        },
        {
            path: 'index5',
            title: 'home5',
        },
        {
            path: 'first6',
            title: 'first',
            children: [
                {
                    path: '/general',
                    title: 'General',
                },
                {
                    path: '/layout',
                    title: 'Layout',
                },
                {
                    path: '/navigation',
                    title: 'Navigation',
                },
            ],
        },
        {
            path: 'second',
            title: 'second',
        },
    ];

    function itemRender(route, params, routes, paths) {
        const last = routes.indexOf(route) === routes.length - 1;
        return last ? (
            <span>{route.title}</span>
        ) : (
            <Link to={paths.join('/')}>{route.title}</Link>
        );
    }

    return (
        <BrowserRouter>
            <p>支持routes</p>
            <p>注意：箭头icon目前无法覆盖</p>
            <Breadcrumb itemRender={itemRender} items={routes} showEllipsis />
        </BrowserRouter>
    );
};

export const DropdownDemo = () => {
    const menuItems = [
        {
          key: '1',
          label: (
              <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                  General
              </a>
          ),
        },
        {
          key: '2',
          label: (
              <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                  Layout
              </a>
          ),
        },
        {
          key: '3',
          label: (
              <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                  Navigation
              </a>
          ),
        },
      ];

    return (
        <>
            <p>注意：箭头icon目前无法覆盖menus里面原始的icon</p>
            <p>如果需要覆盖的话，需要传入Dropdown组件</p>
            <Breadcrumb
                items={[
                {
                    title: 'Ant Design',
                },
                {
                    title: <a href="">Component</a>,
                },
                {
                    title: <a href="">General</a>,
                    menu: {items: menuItems},
                },
                {
                    title: <Dropdown menu={{items: menuItems}}><a>Button <OutlinedDown /></a></Dropdown>,
                },
                ]}
            />
        </>
    );
};

export const EllipsisText = () => {
    return (
        <>
            <p>单层级字符数超过154px时省略文字内容，可hover展示详情：</p>
            <p>当使用TextOverflowTooltip的时候，需要调整一下a标签的布局居中</p>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <a href="">一级页面名称</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="" style={{display: 'inline-flex', alignItems: 'center'}}>
                        <TextOverflowTooltip
                            maxWidth={154}
                            title="名字特别长的时候需要hover上去才显示"
                        >
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
            <a
                target="_blank"
                rel="noreferrer"
                href="https://ant.design/components/breadcrumb-cn/"
            >
                Antd Breadcrumb API
            </a>
            <h2>新增参数</h2>
        </>
    );
};

export const TestCase = () => {
    const routes = [
        {
            path: 'index1',
            title: 'home',
        },
        {
            path: 'index2',
            title: 'home2',
        },
        {
            path: 'index3',
            title: 'home3',
        },
        {
            path: 'index4',
            title: 'home4',
        },
        {
            path: 'index5',
            title: 'home5',
        },
        {
            path: 'first6',
            title: 'first',
            children: [
                {
                    path: '/general',
                    title: 'General',
                },
                {
                    path: '/layout',
                    title: 'Layout',
                },
                {
                    path: '/navigation',
                    title: 'Navigation',
                },
            ],
        },
        {
            path: 'second',
            title: 'second',
        },
    ];

    function itemRender(route, params, routes, paths) {
        const last = routes.indexOf(route) === routes.length - 1;
        return last ? (
            <span>{route.title}</span>
        ) : (
            <Link to={paths.join('/')}>{route.title}</Link>
        );
    }
    return (
        <>
            <p>收起时显示5个内容, 默认 2...2</p>
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
                <Breadcrumb.Item>七级页面名称</Breadcrumb.Item>
                <Breadcrumb.Item>八级页面名称</Breadcrumb.Item>
                <Breadcrumb.Item>末级页面名称</Breadcrumb.Item>
            </Breadcrumb>
            <p />
            <p>收起时显示5个内容, 1 ... 3</p>
            <Breadcrumb showEllipsis headItemLength={1} tailItemLength={3}>
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
                <Breadcrumb.Item>七级页面名称</Breadcrumb.Item>
                <Breadcrumb.Item>八级页面名称</Breadcrumb.Item>
                <Breadcrumb.Item>末级页面名称</Breadcrumb.Item>
            </Breadcrumb>
            <p>routes收起时显示5个内容, 1 ... 3</p>
            <BrowserRouter>
                <Breadcrumb
                    showEllipsis
                    items={routes}
                    itemRender={itemRender}
                />
            </BrowserRouter>

            <h1>旧的用法</h1>
            <p>
                产品页面层级较多，用户路径较长，无法仅通过使用返回按钮解决回到首页/列表页诉求，建议层级≥3时全局使用，用户可通过面包屑返回/到达目标页面
            </p>
            <p>
                如果需要蓝色hover，放个<code>a</code>标签
            </p>
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
        </>
    );
};
