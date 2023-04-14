import classNames from 'classnames';
import enUS from './en_US';
import React,{useState} from 'react';
import { ConfigContext } from 'antd/es/config-provider';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import useLocale from 'antd/es/locale/useLocale';
import { MiddleSelect, MiniSelect } from './Select';
import { Pagination as AntdPagination } from 'antd';
import PaginationSizeChange, { PaginationProps as RcPaginationProps } from './rc-pagination/PaginationSizeChange';
import { PaginationProps as AntdPaginationProps } from 'antd/es/pagination';
import {IconRightOutlined, IconLeftOutlined} from '@osui/icons';
import './index.less';
export interface PaginationProps extends RcPaginationProps {
    showQuickJumper?: boolean | { goButton?: React.ReactNode };
    size?: 'default' | 'small';
    responsive?: boolean;
    role?: string;
    totalBoundaryShowSizeChanger?: number;
    rootClassName?: string;
}

export type PaginationPosition = 'top' | 'bottom' | 'both';

export type PaginationAlign = 'start' | 'center' | 'end';

export interface PaginationConfig extends Omit<PaginationProps, 'rootClassName'> {
    position?: PaginationPosition;
    align?: PaginationAlign;
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

export const icloud = {
    itemRender,
    locale: {'jump_to': '跳转至', 'page': '', jump_to_confirm: 'Go'},
};

const clsPrefix = 'osui-pagination';

const Pagination: React.FC<PaginationProps> = (props) => {
    const {
        prefixCls: customizePrefixCls,
        selectPrefixCls: customizeSelectPrefixCls,
        className,
        rootClassName,
        size,
        locale: customLocale,
        selectComponentClass,
        responsive,
        showSizeChanger,
        // onShowSizeChange: customizeOnShowSizeChange,
        onChange: customizeOnChange,
        pageSize: customizePageSize,
        current: customizeCurrent,
        defaultCurrent,
        showQuickJumper,
        itemRender,
        ...restProps
    } = props;
    const { xs } = useBreakpoint(responsive);

    const { getPrefixCls, direction, pagination = {} } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls('pagination', customizePrefixCls);

    // Style
    //   const [wrapSSR, hashId] = useStyle(prefixCls);

    const mergedShowSizeChanger = showSizeChanger ?? pagination.showSizeChanger;

    const [contextLocale] = useLocale('Pagination', enUS);

    const locale = { ...contextLocale, ...icloud.locale, ...customLocale };

    const isSmall = size === 'small' || !!(xs && !size && responsive);
    const selectPrefixCls = getPrefixCls('select', customizeSelectPrefixCls);
    const extendedClassName = classNames(
        {
        [`${prefixCls}-mini`]: isSmall,
        [`${prefixCls}-rtl`]: direction === 'rtl',
        },
        className,
        rootClassName,
        // hashId,
        clsPrefix,
    );

    const [pageSize, setPageSize] = useState(customizePageSize || 10);
    const [current, setCurrent] = useState(customizeCurrent || defaultCurrent || 1);

    const onChange = (page: number, size: number) => {
        if (page !== current) {
            setCurrent(page);
        }
        if (pageSize !== size) {
            setPageSize(size);
        }
        if (customizeOnChange) {
            customizeOnChange(page, size);
        }
    }

    return (
        <PaginationSizeChange
            {...restProps}
            showQuickJumper={showQuickJumper}
            // onShowSizeChange={onShowSizeChange}
            onChange={onChange}
            prefixCls={prefixCls}
            selectPrefixCls={selectPrefixCls}
            className={extendedClassName}
            selectComponentClass={selectComponentClass || (isSmall ? MiniSelect : MiddleSelect)}
            locale={locale}
            showSizeChanger={mergedShowSizeChanger}
            pageSize={customizePageSize || pageSize}
            current={customizeCurrent || current}
            size={size}
        >
             <AntdPagination
                {...restProps}
                // onShowSizeChange={onShowSizeChange}
                onChange={onChange}
                prefixCls={prefixCls}
                selectPrefixCls={selectPrefixCls}
                className={extendedClassName}
                selectComponentClass={selectComponentClass || (isSmall ? MiniSelect : MiddleSelect)}
                locale={locale}
                // showSizeChanger={mergedShowSizeChanger}
                pageSize={customizePageSize || pageSize}
                current={customizeCurrent || current}
                showSizeChanger={false}
                // showQuickJumper
                itemRender={itemRender ?? icloud.itemRender}
            />
        </PaginationSizeChange>
    );
};

if (process.env.NODE_ENV !== 'production') {
  Pagination.displayName = 'OsuiPagination';
}

export default Pagination;

export { Pagination };
