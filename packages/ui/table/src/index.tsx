import React from 'react';
import {Table as AntdTable} from 'antd';
import {TableProps as AntdTableProps} from 'antd/es/table';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-table';

// Record的用法是因为用object报错提示
function OSUITable<RecordType extends Record<string, unknown>>(props: AntdTableProps<RecordType>) {
    return <AntdTable<RecordType> {...props} className={classNames(clsPrefix, props.className)} />;
}

export default OSUITable;
