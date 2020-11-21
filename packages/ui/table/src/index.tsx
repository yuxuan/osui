import React from 'react';
import {Table as AntdTable} from 'antd';
import {TableProps as AntdTableProps} from 'antd/es/table';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-table';

interface TableProps<T> extends AntdTableProps<T> {
    noRowBorder?: boolean;
    noBorder?: boolean;
}

// Record的用法是因为用object报错提示
function OSUITable<RecordType extends Record<string, any>>(
    {
        className,
        bordered,
        // 表格row是否没有border
        noRowBorder = false,
        // 表格是否没有border
        noBorder = false,
        ...props
    }: TableProps<RecordType>
) {
    // antd的bordered只控制column的border，当noBorder=true时，所有border都没有，包括头部
    // 当noRowBorder时，保留头部border，没有row的border
    const internalBordered = noBorder === true ? false : bordered;
    const internalClassNames = classNames(
        clsPrefix,
        className,
        {[`${clsPrefix}-no-row-border`]: noRowBorder},
        {[`${clsPrefix}-no-border`]: noBorder}
    );
    return <AntdTable<RecordType> {...props} className={internalClassNames} bordered={internalBordered} />;
}

export default OSUITable;
