import {useState, useMemo} from 'react';
import Select from '@osui/Select';
import Checkbox from '@osui/checkbox';
import Space from '@osui/space';
import Dropdown from '@osui/dropdown';
import type {ColumnsType} from 'antd/es/table';
import {DragInsertTable} from './DragInsertTable';

interface RowData {
    key: number;
    name: string;
    desc: string;
    status?: string;
    type?: string;
    required?: boolean;
}

const options = [
    {
        label: '类型一',
        value: '1',
    },
    {
        label: '类型二',
        value: '2',
    },
];

const items = [
    {label: '菜单项一', key: 'item-1'},
    {label: '菜单项二', key: 'item-2'},
];

const DragInsertTableDemo = () => {
    const [data, setData] = useState<RowData[]>([
        {
            key: Date.now(),
            name: '张三',
            desc: '测试',
            type: '1',
            required: false,
        },
        {
            key: Date.now() + 1,
            name: '李四',
            desc: '测试',
            type: '2',
            required: true,
        },
    ]);

    const columns: ColumnsType<RowData> = useMemo(
        () => {
            const updateRowData = (key: number, updates: Partial<RowData>) => {
                setData(prevData =>
                    prevData.map(item =>
                        (item.key === key ? {...item, ...updates} : item)
                    )
                );
            };

            return [
                {
                    title: '序号',
                    dataIndex: 'key',
                    width: 90,
                },
                {
                    title: '文本类型',
                    dataIndex: 'type',
                    width: 200,
                    render: (_: any, record: RowData) => (
                        <Select
                            options={options}
                            style={{width: '100%'}}
                            value={record.type}
                            onChange={value => updateRowData(record.key, {type: value})}
                        />
                    ),
                },
                {
                    title: '非空',
                    width: 80,
                    render: (_: any, record: RowData) => (
                        <Checkbox
                            checked={record.required}
                            onChange={e => updateRowData(record.key, {required: e.target.checked})}
                        />
                    ),
                },
                {
                    title: '文本类型',
                    render: (_: any, record: RowData) => (
                        <Select
                            options={options}
                            style={{width: '100%'}}
                            value={record.type}
                            onChange={value => updateRowData(record.key, {type: value})}
                        />
                    ),
                },
                {
                    title: '操作',
                    width: 120,
                    render: () => (
                        <Space>
                            <Dropdown menu={{items}}>
                                <a>操作</a>
                            </Dropdown>
                            <Dropdown menu={{items}}>
                                <a>操作</a>
                            </Dropdown>
                            <Dropdown menu={{items}}>
                                <a>操作</a>
                            </Dropdown>
                        </Space>
                    ),
                },
            ];
        },
        []
    );

    return (
        <DragInsertTable<RowData>
            rowKey="key"
            columns={columns}
            dataSource={data}
            enableDrag
            enableInsert
            createNewRow={() => ({
                key: Date.now(),
                name: '',
                desc: '',
                type: undefined,
                required: false,
            })}
            onInsertChange={newData => {
                setData(newData);
            }}
            onDragDropChange={newData => {
                setData(newData);
            }}
        />
    );
};

export default DragInsertTableDemo;

