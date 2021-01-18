import React from 'react';
import {Pagination as AntdPagination} from 'antd';
import {PaginationProps as AntdPaginationProps} from 'antd/es/pagination';
import classNames from 'classnames';
import {IconRightOutlined, IconLeftOutlined} from '@osui/icons';
import {useBrandContext} from '@osui/brand-provider';
import Button from '@osui/button';
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
        showQuickJumper: (
            showQuickJumper: PaginationProps['showQuickJumper'],
            size: PaginationProps['size']
        ) => (
            showQuickJumper === true // 只有true的时候覆盖
                ? ({
                    goButton: (
                        <Button
                            size={size === 'default' ? 'middle' : size}
                            className={`${clsPrefix}-osc-jumper`}
                        >
                            确定
                        </Button>
                    ),
                })
                : showQuickJumper
        ),
    };
    const icloud = {
        itemRender,
        locale: {'jump_to': '跳转至', 'page': ''},
        showQuickJumper: (
            showQuickJumper: PaginationProps['showQuickJumper'],
            size: PaginationProps['size']
        ) => (
            showQuickJumper === true // 只有true的时候覆盖
                ? ({
                    goButton: (
                        <Button
                            size={size === 'default' ? 'middle' : size}
                            className={`${clsPrefix}-icloud-jumper`}
                        >
                            Go
                        </Button>
                    ),
                })
                : showQuickJumper
        ),
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
            showQuickJumper={
                customPaginationProps(brand).showQuickJumper(props.showQuickJumper, props.size)
            }
        />
    );
};

export default Pagination;
