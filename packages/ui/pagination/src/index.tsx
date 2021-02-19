import React from 'react';
import {Pagination as AntdPagination} from 'antd';
import {PaginationProps as AntdPaginationProps} from 'antd/es/pagination';
import classNames from 'classnames';
import {IconRightOutlined, IconLeftOutlined} from '@osui/icons';
import {useBrandContext} from '@osui/brand-provider';
import './index.less';

const clsPrefix = 'osui-pagination';

export type PaginationProps = AntdPaginationProps;

const itemRender: AntdPaginationProps['itemRender'] = (current, type, originalElement) => {
    if (type === 'prev') {
        return <IconLeftOutlined />;
    }
    if (type === 'next') {
        return <IconRightOutlined />;
    }
    return originalElement;
};

export const customPaginationProps = (brand: 'osc'|'icloud'|undefined) => {
    const osc = {
        itemRender,
        locale: { 'jump_to': '去第', 'page': '页' },
    };
    const icloud = {
        itemRender,
        locale: {'jump_to': '跳转至', 'page': '页'},
    };
    return brand === 'osc' ? osc : icloud;
};

const Pagination: React.FC<PaginationProps> = props => {
    const {brand} = useBrandContext();
    return (
        <AntdPagination
            {...props}
            className={classNames(props.className, clsPrefix)}
            itemRender={props.itemRender ?? customPaginationProps(brand).itemRender}
            locale={props.locale ?? customPaginationProps(brand).locale}
        />
    );
};

export default Pagination;
