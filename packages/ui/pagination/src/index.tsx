import React from 'react';
import Button, {ButtonProps} from '@osui/button';
import {Pagination as AntdPagination} from 'antd';
import {PaginationProps as AntdPaginationProps} from 'antd/es/pagination';
import classNames from 'classnames';
import {IconRightOutlined, IconLeftOutlined} from '@osui/icons';
import {useBrandContext} from '@osui/brand-provider';
import './index.less';

const clsPrefix = 'osui-pagination';

export interface PaginationProps extends AntdPaginationProps {
    goButtonProps?: ButtonProps;
}

const itemRender: AntdPaginationProps['itemRender'] = (current, type, originalElement) => {
    if (type === 'prev') {
        return <IconLeftOutlined />;
    }
    if (type === 'next') {
        return <IconRightOutlined />;
    }
    return originalElement;
};

export const customPaginationProps = (brand: 'osc'|'icloud'|undefined, goButtonProps?: ButtonProps) => {
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
                            {...goButtonProps}
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
                            {...goButtonProps}
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
    const goButtonProps = {...props.goButtonProps, disabled: props.disabled ?? props.goButtonProps?.disabled};
    return (
        <AntdPagination
            {...props}
            className={classNames(props.className, clsPrefix)}
            itemRender={props.itemRender ?? customPaginationProps(brand, goButtonProps).itemRender}
            locale={props.locale ?? customPaginationProps(brand, goButtonProps).locale}
            showQuickJumper={
                customPaginationProps(brand, goButtonProps).showQuickJumper(props.showQuickJumper, props.size)
            }
        />
    );
};

export default Pagination;
