import React, {useReducer} from 'react';
import {Breadcrumb as AntdBreadcrumb} from 'antd';
import {BreadcrumbProps as AntdBrandcrumbProps} from 'antd/lib/breadcrumb';
import classNames from 'classnames';

import './index.less';

const clsPrefix = 'osui-breadcrumb';

type onEllipsisClickType = () => void;

const Ellipsis = ({onClick}: {onClick: onEllipsisClickType}) => (
    <span className={`${clsPrefix}-ellipsis`} onClick={onClick}>
        ...
    </span>
);

interface EllipsisConfig {
    shownLastItems: number; // 已经展示出来的最后的items数
    onEllipsisClick: onEllipsisClickType;
    maxItemLength: number;
    headItemLength: number;
    tailItemLength: number;
}
type GetItemRenderWithEllipsis = (
    render: AntdBrandcrumbProps['itemRender'],
    config: EllipsisConfig,
) => AntdBrandcrumbProps['itemRender'];

const getItemRenderWithEllipsis: GetItemRenderWithEllipsis = (render, config) => (route, params, routes, paths) => {
    const {shownLastItems, onEllipsisClick, headItemLength} = config;

    const index = routes.indexOf(route);
    // 当展示前两个item 且 总长度 - 展示出来后n个 > 2 时，展示 ...
    if (index === headItemLength && routes.length - shownLastItems > headItemLength) {
        return <Ellipsis onClick={onEllipsisClick} />;
    }
    // 隐藏掉 2 到 展示出来后n个之间的 item
    if (index > headItemLength && index < routes.length - shownLastItems) {
        return null;
    }

    return render && render(route, params, routes, paths);
};

const getChildrenWithEllipsis = (
    children: React.ReactNode | React.ReactNode[],
    config: EllipsisConfig
) => {
    const {shownLastItems, onEllipsisClick, maxItemLength, headItemLength} = config;
    // 如果不是array，或者children长度小于maxItemLenght时，直接展示children
    if (!Array.isArray(children) || children.length <= maxItemLength) {
        return children;
    }
    // 如果剩余最后两个item没展示时，去掉Ellipsis，展示所有
    if (children.length - shownLastItems <= headItemLength) {
        return children;
    }
    // 展示 第一个，第二个， ... 倒数两个
    return [
        ...children.slice(0, headItemLength),
        <AntdBreadcrumb.Item key="_ellipsis">
            <Ellipsis onClick={onEllipsisClick} />
        </AntdBreadcrumb.Item>,
        ...children.slice(-shownLastItems),
    ];
};

export interface BreadcrumbProps extends AntdBrandcrumbProps {
    /**
     * @description 是否展示 ...
     */
    showEllipsis?: boolean;
    /**
     * @description 配合showEllipsis使用，当showEllipsis为true时，超过这个数字则会展示 ...
     */
    maxItemLength?: number;
    /**
     * @description 面包屑过长时头部items个数 ...
     */
    headItemLength?: number;
    /**
     * @description 面包屑过长时尾部items个数 ...
     */
    tailItemLength?: number;
}

export interface BreadcrumbInterface extends React.FC<BreadcrumbProps> {
    Item: typeof AntdBreadcrumb.Item;
    Separator: typeof AntdBreadcrumb.Separator;
}

const Breadcrumb: BreadcrumbInterface = props => {
    const {
        children,
        routes,
        itemRender,
        showEllipsis,
        className,
        maxItemLength = 5,
        headItemLength = 2,
        tailItemLength = 2,
        ...restProps
    } = props;

    const [shownLastItems, doPop] = useReducer<React.Reducer<number, void>>(
        (index: number) => {
            // step
            if (children && Array.isArray(children) && children.length - index > 1) {
                return index + 1;
            }
            if (routes && routes.length - index > 1) {
                return index + 1;
            }
            return 0;
        },
        tailItemLength
    );

    const isShowEllipsis = showEllipsis
        && (
            (routes && routes.length > maxItemLength)
            || (children && Array.isArray(children) && children.length > maxItemLength)
        );

    const config = {
        shownLastItems,
        onEllipsisClick: (doPop as onEllipsisClickType),
        maxItemLength,
        headItemLength,
        tailItemLength,
    };

    return (
        <AntdBreadcrumb
            className={classNames(clsPrefix, className)}
            itemRender={
                isShowEllipsis && itemRender
                    ? getItemRenderWithEllipsis(itemRender, config)
                    : itemRender
            }
            routes={routes}
            {...restProps}
        >
            {isShowEllipsis && children
                ? getChildrenWithEllipsis(children, config)
                : children}
        </AntdBreadcrumb>
    );
};

Breadcrumb.Item = AntdBreadcrumb.Item;
Breadcrumb.Separator = AntdBreadcrumb.Separator;

export type {BreadcrumbItemProps} from 'antd';

export default Breadcrumb;
