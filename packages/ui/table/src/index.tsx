/* eslint-disable complexity */
import React, {useContext, useMemo} from 'react';
import {Table as AntdTable, ConfigProvider} from 'antd';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {
    TableProps as AntdTableProps,
    TablePaginationConfig as AntdTablePaginationConfig,
} from 'antd/lib/table';
import {ExpandableConfig, ExpandType} from 'antd/lib/table/interface';
import classNames from 'classnames';
import {customPaginationProps, PaginationProps} from '@osui/pagination';
import {useBrandContext} from '@osui/brand-provider';
import {IconDownOutlined, IconRightOutlined} from '@osui/icons';
import '@osui/pagination/lib/index.less';
import './index.less';
import './patch.less';

const clsPrefix = 'osui-table';

interface TableProps<T> extends AntdTableProps<T> {
    noRowBorder?: boolean;
    noBorder?: boolean;
}

const paginationPosition = (position: AntdTablePaginationConfig['position']) => {
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

// 用于控制expandable
const expandableConfig = (
    expandable: ExpandableConfig<any> = {}
): ExpandableConfig<any> => (
    {
        ...expandable,
        columnWidth: '12px',
        expandIcon: (
            expandable.expandIcon ?? (
                ({expanded, onExpand, record, expandable}) => {
                    // 参考 rc-table 的判断
                    // https://github.com/react-component/table/blob/e0bab6985a67ddb11affd056dd5cbb0503f671f4/src/Body/BodyRow.tsx#L80
                    if (!expandable) {
                        return;
                    }

                    return expanded
                        ? (
                            <IconDownOutlined
                                className={`${clsPrefix}-icloud-expandableIcon`}
                                // eslint-disable-next-line react/jsx-no-bind
                                onClick={(e: any) => onExpand(record, e)}
                            />
                        )
                        : (
                            <IconRightOutlined
                                className={`${clsPrefix}-icloud-expandableIcon`}
                                // eslint-disable-next-line react/jsx-no-bind
                                onClick={(e: any) => onExpand(record, e)}
                            />
                        );
                })
        ),
    }
);

function Table<RecordType extends Record<string, any>>(
    {
        className,
        bordered,
        // 表格row是否没有border
        noRowBorder = false,
        // 表格是否没有border
        noBorder = false,
        pagination,
        expandable,
        ...props
    }: TableProps<RecordType>,
    ref: React.Ref<HTMLDivElement> | undefined
) {
    const {brand} = useBrandContext();
    const {getPrefixCls} = useContext(ConfigProvider.ConfigContext);
    const antPrefix = getPrefixCls('table');
    // antd的bordered只控制column的border，当noBorder=true时，所有border都没有，包括头部
    // 当noRowBorder时，保留头部border，没有row的border
    const internalBordered = noBorder === true ? false : bordered;
    const internalClassNames = classNames(
        clsPrefix,
        className,
        {[`${clsPrefix}-no-row-border`]: noRowBorder},
        {[`${clsPrefix}-no-border`]: noBorder},
        // icloud-patch
        {[`${clsPrefix}-icloud`]: brand === 'icloud'}
    );

    // ==================== pagination ====================
    // 允许传入null
    const innerPagination: PaginationProps = useMemo(
        () => {
            if (!(pagination === false || pagination === null)) {
                return {
                    ...pagination,
                    className: classNames(
                        `${antPrefix}-pagination`,
                        /* eslint-disable-next-line max-len */
                        `${antPrefix}-pagination-${paginationPosition(pagination && pagination.position || ['bottomRight'])}`,
                        'osui-pagination',
                        pagination && pagination.className
                    ),
                    itemRender: customPaginationProps(brand).itemRender,
                    locale: customPaginationProps(brand).locale,
                };
            }
            return pagination as PaginationProps;
        },
        [pagination, antPrefix, brand]
    );

    // ==================== expandable ====================
    const {childrenColumnName = 'children'} = props;
    // 判断是不是treeData，ref：https://github.com/ant-design/ant-design/blob/master/components/table/Table.tsx#L167
    const expandType: ExpandType = useMemo<ExpandType>(
        () => {
            const rawData = props.dataSource || [];
            if (rawData.some(item => (item as any)?.[childrenColumnName])) {
                return 'nest';
            }

            if (props.expandedRowRender || (expandable && expandable.expandedRowRender)) {
                return 'row';
            }

            return null;
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [props.dataSource, childrenColumnName]
    );
    const innerExpandable = useMemo(
        () => {
            if (brand === 'icloud') {
                if (expandable || expandType === 'nest') {
                    return expandableConfig(expandable);
                }
            }
            return expandable;
        },
        [expandable, brand, expandType]
    );

    return (
        <AntdTable<RecordType>
            ref={ref}
            {...props}
            className={internalClassNames}
            bordered={internalBordered}
            pagination={innerPagination}
            expandable={innerExpandable}
        />
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

export type {ExpandableConfig} from 'antd/lib/table/interface';

type InternalTableType = typeof ForwardTable;

interface TableInterface extends InternalTableType {
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
