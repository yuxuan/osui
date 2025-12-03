import type {ColumnsType} from 'antd/es/table';
import Space from '@osui/space';
import Badge from '@osui/badge';
import React from 'react';
import Table from '../../src';

interface DataType {
  key: React.Key;
  name: string;
  platform: string;
  version: string;
  upgradeNum: number;
  creator: string;
  createdAt: string;
}

interface ExpandedDataType {
  key: React.Key;
  date: string;
  name: string;
  upgradeNum: string;
}

const ChildTableDemo: React.FC = () => {
    const expandedRowRender = () => {
        const columns: ColumnsType<ExpandedDataType> = [
            {title: 'Date', dataIndex: 'date', key: 'date'},
            {title: 'Name', dataIndex: 'name', key: 'name'},
            {
                title: 'Status',
                key: 'state',
                render: () => <Badge status="success" text="Finished" />,
            },
            {title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum'},
            {
                title: 'Action',
                dataIndex: 'operation',
                key: 'operation',
                render: () => (
                    <Space size="middle">
                        <a>Pause</a>
                        <a>Stop</a>
                    </Space>
                ),
            },
        ];

        const data = [];
        for (let i = 0; i < 3; ++i) {
            data.push({
                key: i.toString(),
                date: '2014-12-24 23:12:00',
                name: 'This is production name',
                upgradeNum: 'Upgraded: 56',
            });
        }
        return <Table columns={columns} dataSource={data} pagination={false} />;
    };

    const columns: ColumnsType<DataType> = [
        {title: 'Name', dataIndex: 'name', key: 'name'},
        {title: 'Platform', dataIndex: 'platform', key: 'platform'},
        {title: 'Version', dataIndex: 'version', key: 'version'},
        {title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum'},
        {title: 'Creator', dataIndex: 'creator', key: 'creator'},
        {title: 'Date', dataIndex: 'createdAt', key: 'createdAt'},
        {title: 'Action', key: 'operation', render: () => <a>Publish</a>},
    ];

    const data: DataType[] = [];
    for (let i = 0; i < 3; ++i) {
        data.push({
            key: i.toString(),
            name: 'Screem',
            platform: 'iOS',
            version: '10.3.4.5654',
            upgradeNum: 500,
            creator: 'Jack',
            createdAt: '2014-12-24 23:12:00',
        });
    }

    return (
        <>
            <Table
                columns={columns}
                expandable={{expandedRowRender, defaultExpandedRowKeys: ['0']}}
                dataSource={data}
            />
        </>
    );
};

export default ChildTableDemo;
