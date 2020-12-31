import React, {useContext} from 'react';
import {Table as AntdTable} from 'antd';
import {ConfigContext} from 'antd/es/config-provider';
import {TableProps as AntdTableProps, TablePaginationConfig as AntdTablePaginationConfig} from 'antd/es/table';
import {PaginationProps} from 'antd/es/pagination';
import classNames from 'classnames';
import {customPaginationProps} from '@osui/pagination';
import '@osui/pagination/es/index.less';
import './index.less';

const clsPrefix = 'osui-table';

interface TableProps<T> extends AntdTableProps<T> {
    noRowBorder?: boolean;
    noBorder?: boolean;
}

const paginationPostion = (position: AntdTablePaginationConfig['position']) => {
    if (position !== null && Array.isArray(position)) {
        const topPos = position.find(p => p.includes('top'));
        const bottomPos = position.find(p => p.includes('bottom'));
        // 已知bug：当top和bottom一起出现的时候，top会覆盖bottom，因为antd是单独渲染的，现在渲染的是同一个
        if (topPos) {
            return topPos.toLowerCase().replace('top', '');
        }
        if (bottomPos) {
            return bottomPos.toLowerCase().replace('bottom', '');
        }
    }
    return 'right';
};
// Record的用法是因为用object报错提示
function Table<RecordType extends Record<string, any>>(
    {
        className,
        bordered,
        // 表格row是否没有border
        noRowBorder = false,
        // 表格是否没有border
        noBorder = false,
        pagination,
        ...props
    }: TableProps<RecordType>
) {
    const {getPrefixCls} = useContext(ConfigContext);
    const antPrefix = getPrefixCls('table');
    // antd的bordered只控制column的border，当noBorder=true时，所有border都没有，包括头部
    // 当noRowBorder时，保留头部border，没有row的border
    const internalBordered = noBorder === true ? false : bordered;
    const internalClassNames = classNames(
        clsPrefix,
        className,
        { [`${clsPrefix}-no-row-border`]: noRowBorder },
        { [`${clsPrefix}-no-border`]: noBorder }
    );

    const innerPagination = {
        ...pagination,
        className: classNames(
            `${antPrefix}-pagination`,
            `${antPrefix}-pagination-${paginationPostion(pagination && pagination.position || ['bottomRight'])}`,
            'osui-pagination',
            pagination && pagination.className
        ),
        itemRender: customPaginationProps.itemRender,
        showQuickJumper: customPaginationProps.showQuickJumper(
            pagination && pagination.showQuickJumper, props.size as PaginationProps['size']
        ),
        locale: customPaginationProps.locale,
    };
    return (
        <AntdTable<RecordType>
            {...props}
            className={internalClassNames}
            bordered={internalBordered}
            pagination={innerPagination}
        />
    );
}

Table.SELECTION_ALL = AntdTable.SELECTION_ALL;
Table.SELECTION_INVERT = AntdTable.SELECTION_INVERT;
Table.Column = AntdTable.Column;
Table.ColumnGroup = AntdTable.ColumnGroup;
Table.Summary = AntdTable.Summary;

export default Table;
