import React, {useRef} from 'react';
import { Table as AntdTable , } from 'antd';
import classNames from 'classnames';
import { useBrandContext } from '@osui/brand-provider';
import useTablePaginationStylePatch from './useTablePaginationStylePatch';
import './index.less';

const clsPrefix = 'osui-table';
const icloudLocale =  { 'jump_to': '跳转至', 'page': '', jump_to_confirm: 'Go' };

const Table: typeof AntdTable = (props) => {
    const domRef = useRef<HTMLDivElement | null>(null);
    const { brand } = useBrandContext();
    const { pagination = {} } = props;
    let locale = {
        ...icloudLocale,
    };
    let showQuickJumper: false | { goButton: {} | null; } | undefined = { goButton: <button>Go</button> };
    if (pagination) {
        locale = {
            ...locale,
            ...(pagination && pagination.locale ? pagination.locale : {}),
        };
        showQuickJumper = pagination.showQuickJumper && {
            ...showQuickJumper,
            ...(typeof pagination.showQuickJumper === 'boolean' ? {} : pagination.showQuickJumper),
        };
    }

    useTablePaginationStylePatch(domRef);

    const className = classNames(
        clsPrefix,
        { [`${clsPrefix}-icloud`]: brand === 'icloud' },
    );

    return (
        <div  className={className} >
            <AntdTable {...props} ref={domRef} pagination={{
                ...pagination,
                locale,
                showQuickJumper,
            }} />
        </div>
    );
}

Table.SELECTION_COLUMN = AntdTable.SELECTION_COLUMN;
Table.EXPAND_COLUMN = AntdTable.EXPAND_COLUMN;
Table.SELECTION_ALL = AntdTable.SELECTION_ALL;
Table.SELECTION_INVERT = AntdTable.SELECTION_INVERT;
Table.SELECTION_NONE = AntdTable.SELECTION_NONE;
Table.Column = AntdTable.Column;
Table.ColumnGroup = AntdTable.ColumnGroup;
Table.Summary = AntdTable.Summary;
export default Table;
