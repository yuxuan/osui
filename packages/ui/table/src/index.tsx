import React, {useRef, useContext} from 'react';
import {Table as AntdTable ,ConfigProvider} from 'antd';
import classNames from 'classnames';
import {useBrandContext} from '@osui/brand-provider';
import useTablePaginationStylePatch from './useTablePaginationStylePatch';
import {IconRightOutlined} from '@osui/icons';
import useCustomSortForCustomIcons from './useCustomHeadIcons';
import type { TableProps } from 'antd/es/table/InternalTable';
import hoistNonReactStatics from 'hoist-non-react-statics';
import './index.less';

const clsPrefix = 'osui-table';
const icloudLocale = { 'jump_to': '跳转至', 'page': '', jump_to_confirm: 'Go' };

const osuiExpandIcon: TableProps<any>['expandIcon'] = ({ expanded, onExpand, record }) => expanded ? (
    <IconRightOutlined onClick={(e:any) => onExpand(record, e)} style={{ transform: 'rotate(90deg)' }} />
) : (
    <IconRightOutlined onClick={(e:any) => onExpand(record, e)} />
)

const Table: typeof AntdTable = (props) => {
    const domRef = useRef<HTMLDivElement | null>(null);
    const { brand } = useBrandContext();
    const { pagination = {} } = props;
    let locale = {
        ...icloudLocale,
    };
    let showQuickJumper: false | { goButton: {} | null; } | undefined;
    if (pagination) {
        locale = {
            ...locale,
            ...(pagination && pagination.locale ? pagination.locale : {}),
        };
        const goButton = <button>{locale.jump_to_confirm}</button>;
        showQuickJumper = pagination.showQuickJumper && {
            ...{goButton},
            ...(typeof pagination.showQuickJumper === 'boolean' ? {} : pagination.showQuickJumper),
        };
    }

    const antdContext = useContext(ConfigProvider.ConfigContext);
    const prefixCls = antdContext.getPrefixCls()

    useTablePaginationStylePatch(domRef, prefixCls);

    const className = classNames(
        clsPrefix,
        { [`${clsPrefix}-icloud`]: brand === 'icloud' },
    );

    // 替换 antd 默认的 筛选 和 排序图标
    const { columns, setSortedInfo } = useCustomSortForCustomIcons(props.columns || [], prefixCls);

    const handleChange: TableProps<any>['onChange'] = (pagination, filters, sorter, extra) => {
        if (Array.isArray(sorter)) setSortedInfo(sorter);
        else setSortedInfo([sorter]);
        if (props.onChange) {
            props.onChange(pagination, filters, sorter, extra);
        }
    }

    return (
        <div className={className} >
            <AntdTable
                {...props}
                ref={domRef}
                columns={columns}
                pagination={{
                    ...pagination,
                    locale,
                    showQuickJumper,
                }}
                expandIcon={props.expandIcon || osuiExpandIcon}
                onChange={handleChange}
            />
        </div>
    );
}

hoistNonReactStatics(Table, AntdTable);

Table.SELECTION_COLUMN = AntdTable.SELECTION_COLUMN;
Table.EXPAND_COLUMN = AntdTable.EXPAND_COLUMN;
Table.SELECTION_ALL = AntdTable.SELECTION_ALL;
Table.SELECTION_INVERT = AntdTable.SELECTION_INVERT;
Table.SELECTION_NONE = AntdTable.SELECTION_NONE;
Table.Column = AntdTable.Column;
Table.ColumnGroup = AntdTable.ColumnGroup;
Table.Summary = AntdTable.Summary;

export default Table;
