import React, {useState, useMemo, useCallback} from 'react';
import type {SorterResult, SortOrder, ColumnType} from 'antd/es/table/interface';
import {
    IconFilterOutlined,
    IconTableSortOutlined,
} from '@osui/icons';
import ArrowDownOutlined from '@ant-design/icons/ArrowDownOutlined';
import ArrowUpOutlined from '@ant-design/icons/ArrowUpOutlined';
import classNames from 'classnames';

const clsPrefix = 'osui-table';
const ASCEND = 'ascend';
const DESCEND = 'descend';

type DataType = Record<string, string | number>;

const getNextOrder: (isSorted: boolean, order: SortOrder | undefined) => SortOrder = (isSorted, order) => {
    if (!isSorted) {
        return ASCEND;
    }
    switch (order) {
        case null: return ASCEND;
        case ASCEND: return DESCEND;
        case DESCEND: return null;
        default: return ASCEND;
    }
};

const getSortIcon: (order: SortOrder | undefined) => any = sortOrder => {
    switch (sortOrder) {
        case ASCEND: return ArrowUpOutlined;
        case DESCEND: return ArrowDownOutlined;
        default: return IconTableSortOutlined;
    }
};

function getMultiplePriority<RecordType>(column: ColumnType<RecordType>): number | false {
    if (typeof column.sorter === 'object' && typeof column.sorter.multiple === 'number') {
        return column.sorter.multiple;
    }
    return false;
}

type SortedInfoItem = SorterResult<DataType>;
type SortedInfo = SortedInfoItem[];

const getIsSorted = (list: SortedInfo, column: any) => {
    return list.find(item => (item.field || item.columnKey) === column?.dataIndex);
};

const useCustomHeadIcons: <T extends {
    title?: React.ReactNode;
    sorter?: boolean | any;
}>(columns: T[], prefixCls: string) => {
    columns: T[];
    sortedInfo: SortedInfo;
    setSortedInfo: (sortInfo: SortedInfo) => void;
} = (columns, prefixCls) => {
    const [sortedInfo, setSortedInfo] = useState<SortedInfo>([{}]);
    const onClick = useCallback(
        column => {
            const isSortedItem = getIsSorted(sortedInfo, column);
            const target = {
                field: column.title,
                order: getNextOrder(!!isSortedItem, null),
            };
            if (sortedInfo.length === 0) {
                setSortedInfo([target]);
            } else {
                const isMultipleSort = getMultiplePriority(column) && getMultiplePriority(sortedInfo[0].column || {});
                if (isMultipleSort) {
                    // 此处偷懒，antd 会去重
                    setSortedInfo([target]);
                } else {
                    setSortedInfo(list => ([...list, target]));
                }
            }
        },
        [sortedInfo]
    );

    const newColumns = useMemo(
        () => columns.map(column => {
            const isSortedItem = getIsSorted(sortedInfo, column);
            const Icon = getSortIcon(isSortedItem ? isSortedItem?.order : undefined);

            const title = (
                <>
                    {column.title}
                    <span className={classNames(
                        `${prefixCls}-table-column-sorter`,
                        `${prefixCls}-table-column-sorter-full`,
                        `${clsPrefix}-column-custom-sorter`
                    )}
                    >
                        <span className={`${prefixCls}-table-column-sorter-inner`}>
                            {Icon && <Icon
                                onClick={() => onClick(column)}
                                className={classNames(
                                    {
                                        'osui-icon': true,
                                        [`${prefixCls}-table-column-sorter-down`]:
                                            !!isSortedItem && isSortedItem.order === DESCEND,
                                        [`${prefixCls}-table-column-sorter-up`]:
                                            !!isSortedItem && isSortedItem.order === ASCEND,
                                        active: !!isSortedItem && isSortedItem.order,
                                    }
                                )}
                            />
                            }
                        </span>
                    </span>
                </>
            );

            return {
                filterIcon: <IconFilterOutlined />,
                ...column,
                ...(column.sorter ? {title} : {}),
            };
        }),
        [columns, sortedInfo]
    );

    return {
        sortedInfo,
        setSortedInfo,
        columns: newColumns,
    };
};

export default useCustomHeadIcons;

