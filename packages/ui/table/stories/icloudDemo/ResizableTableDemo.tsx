import React from 'react';
import {Resizable} from 'react-resizable';
import type {ColumnsType} from 'antd/es/table';
import Table from '../../src';

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}

type ColumnType = NonNullable<ColumnsType<DataType>[number]>;

type ResizableTitleProps = React.ThHTMLAttributes<HTMLTableCellElement> & {
    width?: number;
    onResize?: (e: React.SyntheticEvent<Element>, data: {size: {width: number; height: number}}) => void;
};

const ResizableTitle: React.FC<ResizableTitleProps> = props => {
    const {onResize, width, style, ...restProps} = props;

    if (!width) {
        return <th {...restProps} style={style} />;
    }

    return (
        <Resizable
            width={width}
            height={0}
            onResize={onResize}
            draggableOpts={{enableUserSelectHack: false}}
            handle={
                <span
                    className="react-resizable-handle"
                    onClick={e => e.stopPropagation()}
                />
            }
        >
            <th
                {...restProps}
                style={{
                    ...style,
                    position: 'relative',
                }}
            />
        </Resizable>
    );
};

const ResizableCell: React.FC<ResizableTitleProps> = props => {
    const {onResize, width, style, ...restProps} = props;

    if (!width) {
        return <td {...restProps} style={style} />;
    }

    return (
        <Resizable
            width={width}
            height={0}
            onResize={onResize}
            draggableOpts={{enableUserSelectHack: false}}
            handle={
                <span
                    className="react-resizable-handle"
                    onClick={e => e.stopPropagation()}
                />
            }
        >
            <td
                {...restProps}
                style={{
                    ...style,
                    position: 'relative',
                }}
            />
        </Resizable>
    );
};

const initialColumns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        width: 200,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        width: 120,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        width: 300,
    },
    {
        title: 'Action',
        key: 'action',
        render: () => <a>action</a>,
        width: 120,
    },
];

const data: DataType[] = Array.from({length: 20}).map((_, i) => ({
    key: i,
    name: `John Brown ${i}`,
    age: 25 + (i % 10),
    address: `New York No. ${i} Lake Park`,
}));

const ResizableTableDemo: React.FC = () => {
    const [columns, setColumns] = React.useState<ColumnsType<DataType>>(initialColumns);

    const handleResize =
        (index: number) =>
        (_e: React.SyntheticEvent<Element>, {size}: {size: {width: number; height: number}}) => {
            setColumns(prev => {
                const next = [...prev] as ColumnType[];
                const col = {...(next[index] || {})};
                col.width = Math.max(60, Math.floor(size.width));
                next[index] = col;
                return next as ColumnsType<DataType>;
            });
        };

    const columnsWithResize = React.useMemo(() => {
        return (columns as ColumnType[]).map((col, index) => ({
            ...col,
            onHeaderCell: (column: ColumnType) => ({
                width: (column.width as number) || undefined,
                onResize: handleResize(index),
                style: {userSelect: 'none'},
            }),
            onCell: () => ({
                width: (col.width as number) || undefined,
                onResize: handleResize(index),
                style: {userSelect: 'none'},
            }),
        })) as ColumnsType<DataType>;
    }, [columns]);

    return (
        <>
            <style>
                {`
                    .react-resizable {
                        position: relative;
                    }
                    .react-resizable-handle {
                        position: absolute;
                        right: 0;
                        top: 0;
                        width: 8px;
                        height: 100%;
                        cursor: col-resize;
                        user-select: none;
                        touch-action: none;
                    }
                `}
            </style>
            <Table<DataType>
                bordered
                components={{
                    header: {
                        cell: ResizableTitle as React.FC<any>,
                    },
                    body: {
                        cell: ResizableCell as React.FC<any>,
                    },
                }}
                columns={columnsWithResize}
                dataSource={data}
            />
        </>
    );
};

export default ResizableTableDemo;
