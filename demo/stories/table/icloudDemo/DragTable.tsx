import React, {useContext, useMemo} from 'react';
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
import {OutlinedDrag} from 'acud-icon';
import Table from '@osui/table';

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

interface DragTableProps<T> extends TableProps<T> {
    /** rowKey 要求字符串或 number */
    rowKey: string;
    /** 是否启用拖拽列（默认启动） */
    enableDrag?: boolean;
    /** 覆盖拖拽图标列 */
    dragColumn?: ColumnsType<T>[number];
    onDragDropChange?: (newData: any) => void;
}

/** 可拖拽 Row */
const DragRow: React.FC<any> = props => {
    const {
        attributes,
        listeners,
        setNodeRef,
        setActivatorNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({id: props['data-row-key']});

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
            <tr {...props} ref={setNodeRef} style={style} {...attributes} />
        </RowContext.Provider>
    );
};

/** 可复用拖拽表格组件 */
export function DragTable<T extends {[key: string]: any}>(
    props: DragTableProps<T>
) {
    const {
        dataSource = [],
        onDragDropChange,
        rowKey,
        enableDrag = true,
        dragColumn,
        ...rest
    } = props;
    const [internalData, setInternalData] = React.useState<T[]>(dataSource as T[]);

    React.useEffect(() => {
        setInternalData(dataSource as T[]);
    }, [dataSource]);

    /** 拖拽结束处理 */
    const onDragEnd = ({active, over}: DragEndEvent) => {
        if (!over || active.id === over.id) {
            return;
        }

        const oldIndex = internalData.findIndex(i => i[rowKey] === active.id);
        const newIndex = internalData.findIndex(i => i[rowKey] === over.id);

        const newData = arrayMove(internalData, oldIndex, newIndex);

        setInternalData(newData);
        onDragDropChange?.(newData as any);
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

    return (
        <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
            <SortableContext
                items={internalData.map(i => i[rowKey])}
                strategy={verticalListSortingStrategy}
            >
                <Table
                    {...rest}
                    rowKey={rowKey}
                    dataSource={internalData}
                    columns={mergedColumns}
                    components={enableDrag ? {body: {row: DragRow}} : undefined}
                />
            </SortableContext>
        </DndContext>
    );
}
