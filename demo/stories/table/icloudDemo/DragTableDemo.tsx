import type {ColumnsType} from 'antd/es/table';
import Badge from '@osui/badge';
import Switch from '@osui/switch';
import Space from '@osui/space';
import {DragTable} from './DragTable';

interface RowData {
    key: number;
    name: string;
    desc: string;
    status?: string;
}

const columns: ColumnsType<RowData> = [
    {
        title: '项目名称',
        dataIndex: 'name',
    },
    {
        title: '状态',
        dataIndex: 'status',
        render: () => <Badge status="success" text="成功" />,
    },
    {
        title: '描述',
        dataIndex: 'desc',
    },
    {
        title: '开关',
        dataIndex: 'status2',
        render: () => <Switch defaultChecked />,
    },
    {
        title: '链接',
        dataIndex: 'link',
        render: () => <a>项目链接地址点击可跳转</a>,
    },
    {
        title: '操作',
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

export default function DragTableDemo() {
    return (
        <DragTable<RowData>
            rowKey="key"
            columns={columns}
            dataSource={data}
            enableDrag
        />
    );
}
