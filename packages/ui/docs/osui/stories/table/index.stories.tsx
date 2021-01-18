import BrandProvider from '@osui/brand-provider';
import React from 'react';
import Table from '@osui/table';

export default {
    title: 'Table',
};

export const Demo = () => {

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
        {
            key: '4',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '5',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '6',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
        {
            key: '7',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '8',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '9',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
    ];


    return (
        <BrandProvider brand="osc">
            <div style={{padding: 30}}>
                <p>正常</p>
                <Table columns={columns} dataSource={data} />
                <div style={{ paddingBottom: 30 }} />
                <p>没有pagination</p>
                <Table columns={columns} dataSource={data} pagination={false} />
                <div style={{ paddingBottom: 30 }} />
                <p>没有横线</p>
                <Table columns={columns} dataSource={data} noRowBorder />
                <div style={{ paddingBottom: 30 }} />
                <p>没有border</p>
                <Table
                    columns={columns}
                    dataSource={data}
                    noBorder
                    pagination={{pageSize: 3, showQuickJumper: true}}
                />
            </div>
        </BrandProvider>
    );
};

export const Border = () => {

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
        {
            key: '4',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '5',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '6',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
        {
            key: '7',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '8',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '9',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
    ];

    return (
        <div style={{ padding: 30 }}>
            <BrandProvider brand="osc">
                <div>Antd的bordered=false，没有列border</div>
                <Table columns={columns} dataSource={data} bordered={false} />
                <div style={{ paddingBottom: 30 }} />
                <div>noRowBorder，head保留border</div>
                <Table columns={columns} dataSource={data} noRowBorder />
                <div style={{ paddingBottom: 30 }} />
                <div>noBorder，全部没有border</div>
                <Table columns={columns} dataSource={data} noBorder />
            </BrandProvider>
        </div>);
};
