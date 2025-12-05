import React, {useContext, useMemo, useState} from 'react';
import type {DragEndEvent} from '@dnd-kit/core';
import {DndContext} from '@dnd-kit/core';
import {restrictToVerticalAxis} from '@dnd-kit/modifiers';
import {
    SortableContext,
    verticalListSortingStrategy,
    useSortable,
} from '@dnd-kit/sortable';
import {SyntheticListenerMap} from '@dnd-kit/core/dist/hooks/utilities';
import {CSS} from '@dnd-kit/utilities';
import {arrayMove} from '@dnd-kit/sortable';
import type {TableProps, ColumnsType} from 'antd/es/table';
import {OutlinedDrag, OutlinedPlusNew} from 'acud-icon';
import styled from '@emotion/styled';
import Table from '@osui/table';

const AddItem = styled.div`
    width: 100%;
    position: absolute;
    z-index: 2;
    .table-insert-icon-box {
        position: absolute;
        width: 16px;
        height: 16px;
        top: -8px;
        left: -8px;
        background: var(--component-color-white);
        border: 1px solid var(--border-color-level2);
        border-radius: var(--radius-2xs);
        cursor: pointer;
        fontsize: 14;
        zindex: 10;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &:hover {
        border-bottom: 1px solid var(--brand-color);
        .table-insert-icon-box {
            background: var(--brand-color-light);
            border: none;
            color: var(--icon-brand-color);
        }
    }
`;

interface RowContextProps {
    setActivatorNodeRef?: (element: HTMLElement | null) => void;
    listeners?: SyntheticListenerMap;
}

const RowContext = React.createContext<RowContextProps>({});

/** 拖拽手柄 */
const DragHandle: React.FC = () => {
    const {setActivatorNodeRef, listeners} = useContext(RowContext);
    return (
        <OutlinedDrag
            style={{cursor: 'grab', fontSize: 18}}
            ref={setActivatorNodeRef}
            {...listeners}
        />
    );
};

interface DragInsertTableProps<T> extends TableProps<T> {
    /** rowKey 要求字符串或 number */
    rowKey: string;
    /** 是否启用拖拽列（默认启动） */
    enableDrag?: boolean;
    /** 覆盖拖拽图标列 */
    dragColumn?: ColumnsType<T>[number];
    /** 拖拽结束回调 */
    onDragDropChange?: (newData: T[]) => void;
    /** 插入行回调 */
    onInsertChange?: (newData: T[]) => void;
    /** 创建新行的函数 */
    createNewRow?: () => T;
    /** 是否启用插入功能（默认启用） */
    enableInsert?: boolean;
}

/** 可拖拽且可插入的 Row */
const DragInsertRow: React.FC<any> = props => {
    const {
        attributes,
        listeners,
        setNodeRef,
        setActivatorNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({id: props['data-row-key']});

    const record = props['data-row-key'];
    const {hoverKey, setHoverKey, onInsert, value, rowKey, isAnyDragging} = props;

    const style: React.CSSProperties = {
        ...props.style,
        transform: CSS.Translate.toString(transform),
        transition,
        ...(isDragging ? {position: 'relative', zIndex: 9999} : {}),
    };

    const contextValue = useMemo(
        () => ({setActivatorNodeRef, listeners}),
        [setActivatorNodeRef, listeners]
    );

    return (
        <RowContext.Provider value={contextValue}>
            <>
                {hoverKey === record && onInsert && !isAnyDragging && (
                    <AddItem
                        onMouseEnter={() => setHoverKey(record)}
                        onMouseLeave={() => setHoverKey(null)}
                    >
                        <div className="table-insert-icon-box">
                            <OutlinedPlusNew
                                onClick={e => {
                                    e.stopPropagation();
                                    const index = value.findIndex(
                                        (item: any) => item[rowKey] === record
                                    );
                                    if (onInsert) {
                                        onInsert(index);
                                    }
                                }}
                            />
                        </div>
                    </AddItem>
                )}
                <tr
                    {...props}
                    ref={setNodeRef}
                    style={style}
                    {...attributes}
                    onMouseEnter={() => !isAnyDragging && setHoverKey?.(record)}
                    onMouseLeave={() => setHoverKey?.(null)}
                />
            </>
        </RowContext.Provider>
    );
};

/** 可拖拽且可插入的表格组件 */
export function DragInsertTable<T extends {[key: string]: any}>(
    props: DragInsertTableProps<T>
) {
    const {
        dataSource = [],
        onDragDropChange,
        onInsertChange,
        rowKey,
        enableDrag = true,
        enableInsert = true,
        dragColumn,
        createNewRow,
        ...rest
    } = props;
    const [internalData, setInternalData] = React.useState<T[]>(dataSource as T[]);
    const [hoverKey, setHoverKey] = useState<string | number | null>(null);
    const [isAnyDragging, setIsAnyDragging] = useState(false);

    React.useEffect(() => {
        setInternalData(dataSource as T[]);
    }, [dataSource]);

    /** 拖拽开始处理 */
    const onDragStart = () => {
        setIsAnyDragging(true);
        setHoverKey(null); // 拖拽开始时清除悬停状态
    };

    /** 拖拽结束处理 */
    const onDragEnd = ({active, over}: DragEndEvent) => {
        setIsAnyDragging(false);
        if (!over || active.id === over.id) {
            return;
        }

        const oldIndex = internalData.findIndex(i => i[rowKey] === active.id);
        const newIndex = internalData.findIndex(i => i[rowKey] === over.id);

        const newData = arrayMove(internalData, oldIndex, newIndex);

        setInternalData(newData);
        onDragDropChange?.(newData);
    };

    /** 插入行处理 */
    const handleInsert = (index: number) => {
        if (!createNewRow) {
            return;
        }
        const newRow = createNewRow();
        const newData = [
            ...internalData.slice(0, index),
            newRow,
            ...internalData.slice(index),
        ];
        setInternalData(newData);
        onInsertChange?.(newData);
    };

    /** 注入拖拽图标列 */
    const mergedColumns: ColumnsType<T> = enableDrag
        ? [
            dragColumn || {
                key: '__sort__',
                width: 40,
                align: 'center',
                render: () => <DragHandle />,
            },
            ...(props.columns || []),
        ]
        : props.columns || [];

    /** 合并 components */
    const mergedComponents = enableDrag || enableInsert
        ? {
            body: {
                row: (rowProps: any) => (
                    <DragInsertRow
                        {...rowProps}
                        rowKey={rowKey}
                        hoverKey={hoverKey}
                        setHoverKey={setHoverKey}
                        onInsert={enableInsert ? handleInsert : undefined}
                        value={internalData}
                        isAnyDragging={isAnyDragging}
                    />
                ),
            },
        }
        : undefined;

    return (
        <DndContext
            modifiers={[restrictToVerticalAxis]}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
        >
            <SortableContext
                items={internalData.map(i => i[rowKey])}
                strategy={verticalListSortingStrategy}
            >
                <Table
                    {...rest}
                    rowKey={rowKey}
                    dataSource={internalData}
                    columns={mergedColumns}
                    components={mergedComponents}
                />
            </SortableContext>
        </DndContext>
    );
}

