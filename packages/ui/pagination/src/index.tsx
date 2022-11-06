import React from 'react';
import {PaginationProps as AntdPaginationProps} from 'antd/es/pagination';
import classNames from 'classnames';
import {IconRightOutlined, IconLeftOutlined} from '@osui/icons';
import {useBrandContext} from '@osui/brand-provider';
import Button from '@osui/button';
import {SizeType} from 'antd/es/config-provider/SizeContext';
import 'antd/es/pagination/style';
import AntdPagination from './antd-pagination';
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
        locale: {'jump_to': '去第', 'page': '页'},
    };
    const icloud = {
        itemRender,
        locale: {'jump_to': '跳转至', 'page': ''},
    };
    return brand === 'osc' ? osc : icloud;
};

const toButtonSizeProps = (size?: string): SizeType => {
    if (size === 'default') {
        return 'middle' as SizeType;
    }
    return size as SizeType;
};
const Pagination: React.FC<PaginationProps> = props => {
    const {brand} = useBrandContext();
    let innerShowQuickJumber = props.showQuickJumper;
    if (brand === 'icloud') {
        innerShowQuickJumber = {
            goButton: (
                <Button
                    className={`${clsPrefix}-go-button`}
                    size={toButtonSizeProps(props.size)}
                    disabled={props.disabled}
                >
                    Go
                </Button>
            ),
        };
    }
    return (
        <AntdPagination
            {...props}
            className={classNames(props.className, clsPrefix)}
            itemRender={props.itemRender ?? customPaginationProps(brand).itemRender}
            locale={props.locale ?? customPaginationProps(brand).locale}
            showQuickJumper={innerShowQuickJumber}
        />
    );
};

export default Pagination;
