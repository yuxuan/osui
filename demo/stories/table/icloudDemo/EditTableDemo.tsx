import type {ColumnsType} from 'antd/es/table';
import Select from '@osui/Select';
import Checkbox from '@osui/checkbox';
import Space from '@osui/space';
import {DragTable} from './DragTable';

interface RowData {
    key: number;
    name: string;
    desc: string;
    status?: string;
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

const columns: ColumnsType<RowData> = [
    {
        title: '序号',
        dataIndex: 'key',
        width: 90,
    },
    {
        title: '文本类型',
        dataIndex: 'type',
        width: 200,
        render: () => (
            <Select options={options} style={{width: '100%'}} />
        ),
    },
    {
        title: '非空',
        width: 80,
        render: () => (
            <Checkbox />
        ),
    },
    {
        title: '文本类型',
        render: () => (
            <Select options={options} style={{width: '100%'}} />
        ),
    },
    {
        title: '操作',
        width: 120,
        render: () => (
            <Space>
                <a>操作</a>
                <a>操作</a>
                <a>操作</a>
            </Space>
        ),
    },
];

const data = Array.from({length: 20}).map((_, i) => ({
    key: i,
    name: '这里一段关于项目的描述',
    desc: 'ID 名称点击图标可复制',
}));

export default function EditTableDemo() {
    return (
        <DragTable<RowData>
            rowKey="key"
            columns={columns}
            dataSource={data}
            enableDrag
        />
    );
}
