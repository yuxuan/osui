import React, { useReducer } from 'react';
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import { BreadcrumbProps as AntdBrandcrumbProps } from 'antd/es/breadcrumb';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-breadcrumb';

const Ellipsis = ({onClick}: {onClick: () => void}) => (
    <span className={`${clsPrefix}-ellipsis`} onClick={onClick}>...</span>
);

interface EllipsisConfig {
    shownLastItems: number; // 已经展示出来的最后的items数
    onEllipsisClick: () => void;
    maxItemLength: number;
}
type GetItemRenderWithEllipsis = (
    render: AntdBrandcrumbProps['itemRender'],
    config: EllipsisConfig
) => AntdBrandcrumbProps['itemRender'];

const getItemRenderWithEllipsis: GetItemRenderWithEllipsis = (render, config) => (route, params, routes, paths) => {
    const {shownLastItems, onEllipsisClick} = config;

    const index = routes.indexOf(route);
    // 当展示第一个item 且 总长度 - 展示出来后n个 > 1 时，展示 ...
    if (index === 1 && routes.length - shownLastItems > 1) {
        return <Ellipsis onClick={onEllipsisClick} />;
    }
    // 隐藏掉 1 到 展示出来后n个之间的 item
    if (index > 1 && index < routes.length - shownLastItems) {
        return null;
    }

    return render && render(route, params, routes, paths);
};

const getChildrenWithEllipsis = (children: React.ReactNode | React.ReactNode[], config: EllipsisConfig) => {
    const {shownLastItems, onEllipsisClick, maxItemLength} = config;
    // 如果不是array，或者children长度小于maxItemLenght时，直接展示children
    if (!Array.isArray(children) || children.length <= maxItemLength) {
        return children;
    }
    // 如果剩余最后一个item没展示时，去掉Ellipsis，展示所有
    if (children.length - shownLastItems <= 1) {
        return children;
    }
    // 展示 第一个 ... 倒数两个
    return [
        children[0],
        <AntdBreadcrumb.Item key="_ellipsis"><Ellipsis onClick={onEllipsisClick} /></AntdBreadcrumb.Item>,
        ...children.slice(-shownLastItems),
    ];
};

interface BreadcrumbProps extends AntdBrandcrumbProps {
    /**
     * @description 是否展示 ...
     */
    showEllipsis?: boolean;
    /**
     * @description 配合showEllipsis使用，当showEllipsis为true时，超过这个数字则会展示 ...
     */
    maxItemLength?: number;
}

interface BreadcrumbDecorator extends React.FC<BreadcrumbProps> {
    Item: typeof AntdBreadcrumb.Item;
    Separator: typeof AntdBreadcrumb.Separator;
}

const Breadcrumb: BreadcrumbDecorator = props => {
    const {children, routes, itemRender, showEllipsis, className, maxItemLength = 5, ...restProps} = props;

    const [shownLastItems, doPop] = useReducer<React.Reducer<number, void>>(
        (index: number) => {
            if (children && Array.isArray(children) && children.length - index > 1) {
                return index + 1;
            }
            if (routes && routes.length - index > 1) {
                return index + 1;
            }
            return 0;
        },
        2
    );

    const isShowEllipsis = showEllipsis
        && (
            (routes && routes.length > maxItemLength)
            || (children && Array.isArray(children) && children.length > maxItemLength)
        );

    const config = {shownLastItems, onEllipsisClick: doPop, maxItemLength};

    return (
        <AntdBreadcrumb
            className={classNames(clsPrefix, className)}
            itemRender={
                (isShowEllipsis && itemRender)
                    ? getItemRenderWithEllipsis(itemRender, config)
                    : itemRender
            }
            routes={routes}
            {...restProps}
        >
            {(isShowEllipsis && children) ? getChildrenWithEllipsis(children, config) : children}
        </AntdBreadcrumb>
    );
};

Breadcrumb.Item = AntdBreadcrumb.Item;
Breadcrumb.Separator = AntdBreadcrumb.Separator;

export default Breadcrumb;
