import {useState} from 'react';
import type {TableProps} from 'antd';
import {OutlinedPlusNew} from 'acud-icon';
import Table from '../../src';
import styled from '@emotion/styled';

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

interface InsertTableProps<T> extends TableProps<T> {
    value: T[];
    onInsertChange: (val: T[]) => void;
    createNewRow: () => T;
}

export default function InsertTable<T extends {key: string | number}>({
    value,
    onInsertChange,
    createNewRow,
    ...restProps
}: InsertTableProps<T>) {
    const [hoverKey, setHoverKey] = useState<string | number | null>(null);

    const components = {
        body: {
            row: (props: any) => {
                const {children, ...rest} = props;
                const record = props['data-row-key'];

                return (
                    <>
                        { hoverKey === record && (
                            <AddItem
                                onMouseEnter={() => setHoverKey(record)}
                                onMouseLeave={() => setHoverKey(null)}
                            >
                                <div className="table-insert-icon-box">
                                    <OutlinedPlusNew
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            const index = value.findIndex(
                                                (item) => item.key === record
                                            );
                                            const newRow = createNewRow();
                                            const newData = [
                                                ...value.slice(0, index),
                                                newRow,
                                                ...value.slice(index),
                                            ];
                                            onInsertChange(newData);
                                        }}
                                    />
                                </div>
                            </AddItem>
                        )}
                        <tr
                            onMouseEnter={() => setHoverKey(record)}
                            onMouseLeave={() => setHoverKey(null)}
                            {...rest}
                        >
                            {children}
                        </tr>
                    </>
                );
            },
        },
    };

    return (
        <Table
            {...restProps}
            dataSource={value}
            components={components}
            rowKey="key"
        />
    );
}
