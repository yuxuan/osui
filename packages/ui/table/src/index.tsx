import React, {useImperativeHandle, useRef, useContext, useMemo, useState} from 'react';
import {Table as AntdTable, ConfigProvider} from 'antd';
import type {Reference} from 'rc-table';
import classNames from 'classnames';
import {useBrandContext} from '@osui/brand-provider';
import {IconDownOutlined, IconRightOutlined, IconUpOutlined} from '@osui/icons';
import Spin from '@osui/spin';
import hoistNonReactStatics from 'hoist-non-react-statics';
import type {TableProps as AntdTableProps} from 'antd/es/table';
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
    const {brand, setIsFilteredEmpty} = useBrandContext();

    // Pagination props
    const {pagination: paginationIn} = props;
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const innerSizeChangerConfig = useMemo(
        () => ({
            suffixIcon: (
                dropdownVisible
                    ? <IconUpOutlined className={classNames(`${clsPrefix}-sizeChangerIcon`)} />
                    : <IconDownOutlined className={classNames(`${clsPrefix}-sizeChangerIcon`)} />
            ),
            onDropdownVisibleChange: (visible: boolean) => {
                setDropdownVisible(visible);
            },
        }),
        [dropdownVisible]
    );

    const {pagination: paginationContext} = useContext(ConfigProvider.ConfigContext);
    const showSizeChangerConfig = useMemo(
        () => {
            // 如果明确paginationIn为false，或showSizeChanger为false，则不显示sizeChanger
            if (paginationIn === false || paginationIn === null || paginationIn?.showSizeChanger === false) {
                return false;
            }
            if (typeof paginationIn?.showSizeChanger === 'object'
                || typeof paginationContext?.showSizeChanger === 'object') {
                return {
                    ...(paginationIn?.showSizeChanger as any),
                    ...innerSizeChangerConfig,
                };
            }
            return innerSizeChangerConfig;
        },
        [innerSizeChangerConfig, paginationContext?.showSizeChanger, paginationIn]
    );

    const mergePagination = useMemo(
        () => {
            const goButton = <button>{icloudLocale.jump_to_confirm}</button>;
            if (!(paginationIn === false || paginationIn === null)) {
                const pagination = paginationIn || {};
                // eslint-disable-next-line no-negated-condition
                const showQuickJumper = !(
                    // 不主动关的话，没有传入showQuickJumper，默认是true
                    paginationIn?.showQuickJumper === false || paginationIn?.showQuickJumper === null
                )
                    ? {goButton: (paginationIn?.showQuickJumper as {goButton: React.ReactNode})?.goButton ?? goButton}
                    : false;
                return {
                    ...paginationIn,
                    locale: {
                        ...icloudLocale,
                        ...(pagination && pagination.locale ? pagination.locale : {}),
                    },
                    showQuickJumper,
                    showSizeChanger: showSizeChangerConfig,
                };
            }
            return paginationIn;
        },
        [paginationIn, showSizeChangerConfig]
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
    const {columns, setSortedInfo} = useCustomSortForCustomIcons(
        (props.columns || []) as any,
        prefixCls
    );

    const handleChange: TableProps<any>['onChange'] = (pagination, filters, sorter, extra) => {
        if (pagination || filters) {
            setIsFilteredEmpty(true);
        }
        else {
            setIsFilteredEmpty(false);
        }
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

    // overwrite loading
    const innerLoading = props.loading ? (
        typeof props.loading === 'boolean' ? {indicator: <Spin size="large" />} : props.loading
    ) : props.loading;


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
                loading={innerLoading}
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
