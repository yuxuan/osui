import React, {useImperativeHandle, useRef, useContext, useMemo} from 'react';
import {Table as AntdTable, ConfigProvider} from 'antd';
import type {Reference} from 'rc-table';
import classNames from 'classnames';
import {useBrandContext} from '@osui/brand-provider';
import {IconRightOutlined} from '@osui/icons';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {TableProps as AntdTableProps} from 'antd/es/table';
import useCustomSortForCustomIcons from './useCustomHeadIcons';
import useTablePaginationStylePatch from './useTablePaginationStylePatch';
import './index.less';

const clsPrefix = 'osui-table';
const icloudLocale = {'jump_to': '跳转至', 'page': '', 'jump_to_confirm': 'Go'};

const osuiExpandIcon: Exclude<TableProps<any>['expandable'], undefined>['expandIcon'] =
    ({expanded, onExpand, record}) => (expanded
        ? (
            <IconRightOutlined
                onClick={(e: any) => onExpand(record, e)}
                style={{transform: 'rotate(90deg)'}}
            />
        )
        : (<IconRightOutlined onClick={(e: any) => onExpand(record, e)} />));

interface TableProps<T> extends AntdTableProps<T> {
    noRowBorder?: boolean;
    noBorder?: boolean;
}

function Table<RecordType extends Record<string, any>>(
    props: TableProps<RecordType>,
    ref: React.Ref<Reference> | undefined
) {
    const domRef = useRef<Reference>(null);
    const containerDomRef = useRef<HTMLDivElement>(null);
    const {brand} = useBrandContext();
    const {pagination: paginationIn} = props;

    const mergePagination = useMemo(
        () => {
            const goButton = <button>{icloudLocale.jump_to_confirm}</button>;
            if (!(paginationIn === false || paginationIn === null)) {
                const pagination = paginationIn || {};
                return {
                    ...paginationIn,
                    locale: {
                        ...icloudLocale,
                        ...(pagination && pagination.locale ? pagination.locale : {}),
                    },
                    showQuickJumper: pagination.showQuickJumper || {goButton},
                };
            }
            return paginationIn;
        },
        [paginationIn]
    );
    const antdContext = useContext(ConfigProvider.ConfigContext);
    const prefixCls = antdContext.getPrefixCls();

    useTablePaginationStylePatch(domRef, prefixCls, containerDomRef);

    const className = classNames(
        clsPrefix,
        {[`${clsPrefix}-icloud`]: brand === 'icloud'},
        // 表格row是否没有border
        {[`${clsPrefix}-no-row-border`]: props?.noRowBorder},
        // 表格是否没有border
        {[`${clsPrefix}-no-border`]: props?.noBorder}
    );

    // 替换 antd 默认的 筛选 和 排序图标
    const {columns, setSortedInfo} = useCustomSortForCustomIcons(props.columns || [], prefixCls);

    const handleChange: TableProps<any>['onChange'] = (pagination, filters, sorter, extra) => {
        if (Array.isArray(sorter)) {
            setSortedInfo(sorter);
        } else {
            setSortedInfo([sorter]);
        }
        if (props.onChange) {
            props.onChange(pagination, filters, sorter, extra);
        }
    };

    useImperativeHandle(ref, () => domRef.current!);

    return (
        <div className={className} ref={containerDomRef}>
            <AntdTable
                {...props}
                ref={domRef}
                columns={columns}
                pagination={mergePagination}
                // todo 新方式疑似添加了expandIcon，就必须设置 expandedRowRender
                expandIcon={props.expandIcon || osuiExpandIcon}
                onChange={handleChange}
            />
        </div>
    );
}

const ForwardTable = React.forwardRef(Table) as <RecordType extends Record<string, any> = any>(
    props: React.PropsWithChildren<TableProps<RecordType>> & { ref?: React.Ref<HTMLDivElement> },
) => React.ReactElement;

hoistNonReactStatics(ForwardTable, AntdTable);

export type {
    TableColumnProps,
    TableColumnsType,
    TableColumnType,
    TableColumnGroupType,
    TableProps,
    TablePaginationConfig,
} from 'antd';

export type {ExpandableConfig} from 'antd/es/table/interface';

type InternalTableType = typeof ForwardTable;

export interface TableInterface extends InternalTableType {
    defaultProps?: Partial<TableProps<any>>;
    SELECTION_COLUMN: typeof AntdTable.SELECTION_COLUMN;
    EXPAND_COLUMN: typeof AntdTable.EXPAND_COLUMN;
    SELECTION_ALL: 'SELECT_ALL';
    SELECTION_INVERT: 'SELECT_INVERT';
    SELECTION_NONE: 'SELECT_NONE';
    Column: typeof AntdTable.Column;
    ColumnGroup: typeof AntdTable.ColumnGroup;
    Summary: typeof AntdTable.Summary;
}

export default ForwardTable as TableInterface;
