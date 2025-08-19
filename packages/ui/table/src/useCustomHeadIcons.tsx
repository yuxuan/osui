/* eslint-disable complexity */
import React, {useState, useMemo, useCallback} from 'react';
import type {SorterResult, SortOrder, ColumnType} from 'antd/es/table/interface';
import {
    IconFilterOutlined,
} from '@osui/icons';
import {OutlinedUp, OutlinedDown} from 'acud-icon';

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

const SortIcon = (props: {
    onClick: () => void;
    className: string;
    active: SortOrder | undefined | false;
}) => (
    <span
        style={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '16px',
            height: '16px',
            fontSize: '10px',
        }}
        onClick={props.onClick}
    >
        <OutlinedUp
            className={classNames(
                props.className,
                {
                    'active': props.active === ASCEND,
                }
            )}
            style={{height: '8px', fontSize: '10px'}}
        />
        <OutlinedDown
            className={classNames(
                props.className,
                {
                    'active': props.active === DESCEND,
                }
            )}
            style={{height: '8px', fontSize: '10px'}}
        />
    </span>
);

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

const useCustomHeadIcons = <T extends {
    title?: React.ReactNode;
    sorter?: boolean | any;
    originalTitle?: React.ReactNode;
    children?: T[];
}>(columns: T[], prefixCls: string) => {
    const [sortedInfo, setSortedInfo] = useState<SortedInfo>([{}]);
    const onClick = useCallback(
        (column: T) => {
            const isSortedItem = getIsSorted(sortedInfo, column);
            const target: SortedInfoItem = {
                field: column.title as React.Key,
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
    // 处理单个列的通用函数
    const processColumn = useCallback(
        (column: T): T => {
            // 保存原始标题
            if (!column.originalTitle) {
                column.originalTitle = column.title;
            }

            const isSortedItem = getIsSorted(sortedInfo, column);
            const title = (
                <>
                    {column.originalTitle}
                    <span className={classNames(
                        `${prefixCls}-table-column-sorter`,
                        `${prefixCls}-table-column-sorter-full`,
                        `${clsPrefix}-column-custom-sorter`
                    )}
                    >
                        <span className={`${prefixCls}-table-column-sorter-inner`}>
                            <SortIcon
                                onClick={() => onClick(column)}
                                className={classNames(
                                    {
                                        'osui-icon': true,
                                        [`${prefixCls}-table-column-sorter-down`]:
                                            !!isSortedItem && isSortedItem.order === DESCEND,
                                        [`${prefixCls}-table-column-sorter-up`]:
                                            !!isSortedItem && isSortedItem.order === ASCEND,
                                    }
                                )}
                                active={!!isSortedItem && isSortedItem.order}
                            />
                        </span>
                    </span>
                </>
            );

            return {
                filterIcon: <IconFilterOutlined />,
                ...column,
                ...(column.sorter ? {title} : {}),
            };
        },
        [onClick, prefixCls, sortedInfo]
    );

    // 递归处理列及其所有children
    const processColumnsRecursively = useCallback(
        (columns: T[]): T[] => {
            return columns.map(column => {
                const processedColumn = processColumn(column);

                // 如果有children，递归处理
                if (processedColumn.children) {
                    processedColumn.children = processColumnsRecursively(processedColumn.children);
                }

                return processedColumn;
            });
        },
        [processColumn]
    );

    const newColumns = useMemo(
        () => processColumnsRecursively(columns),
        [columns, processColumnsRecursively]
    );

    return {
        sortedInfo,
        setSortedInfo,
        columns: newColumns,
    };
};

export default useCustomHeadIcons;

