/* eslint-disable max-lines */
/* eslint-disable react/no-multi-comp */
/* eslint-disable import/no-extraneous-dependencies */
import React, {useRef, useEffect} from 'react';
import Switch from '@osui/switch';
import Radio from '@osui/radio';
import Form from '@osui/form';
import Space from '@osui/space';
import {IconDownOutlined} from '@osui/icons';
import BrandProvider from '@osui/brand-provider';
import {TableProps} from 'antd/es/table';
import {version} from 'antd';
import Table from '@osui/table';

const Blockquote = ({children}) => (
    <blockquote style={{
        background: 'var(--color-brand-1)',
        borderRadius: '3px',
        borderLeft: '5px solid var(--color-brand-6)',
        margin: '30px 0',
        padding: '30px',
    }}
    >
        {children}
    </blockquote>
);


export default {
    title: '数据展示/Table 表格',
};

export const Demo = () => {
    const ref = useRef(null);

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
    ];


    useEffect(
        () => {
            console.log('Demo table ref: ', ref.current);
        }
    );

    return (
        <div style={{padding: 30}}>
            <BrandProvider
                brand="icloud"
                theme={{
                    components: {
                        Table: {
                            paddingXS: 5.5,
                        },
                    },
                }}
            >
                <Table
                    ref={ref}
                    columns={columns}
                    dataSource={data}
                    pagination={{
                        showSizeChanger: true,
                        showQuickJumper: true,
                        // showQuickJumper: {
                        //     goButton:  <button>Go</button>
                        // },
                        // simple: true,
                        defaultPageSize: 1,
                        pageSizeOptions: [1, 2, 10, 100],
                        // position: ['bottomRight', 'topRight']
                        position: ['bottomLeft', 'topRight'],
                    }}
                />
                <br />
                <p>小表格</p>
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={{
                        showSizeChanger: true,
                        showQuickJumper: true,
                        // showQuickJumper: {
                        //     goButton:  <button>Go</button>
                        // },
                        simple: true,
                        defaultPageSize: 1,
                        pageSizeOptions: [1, 2, 10, 100],
                        // position: ['bottomRight', 'topRight']
                        position: ['bottomLeft', 'topRight'],
                    }}
                    size="small"
                />
                <br />
                <p>暂无数据</p>
                <Table columns={columns} />
            </BrandProvider>
        </div>
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
    ];

    return (
        <div style={{padding: 30}}>
            <BrandProvider brand="icloud">
                <div>Antd的bordered=false，没有列border</div>
                <Table columns={columns} dataSource={data} bordered={false} />
                <div style={{paddingBottom: 30}} />
                <div>noRowBorder，head保留border</div>
                <Table columns={columns} dataSource={data} noRowBorder />
                <div style={{paddingBottom: 30}} />
                <div>noBorder，全部没有border</div>
                <Table columns={columns} dataSource={data} noBorder />
            </BrandProvider>
        </div>
    );
};

export const ExpandableDemo = () => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render(text) {
                return (<div>{text}</div>);
            },
        },
        {
            title: 'Age',
            dataIndex: 'age',
            sorter: {
                compare: (a, b) => a.age - b.age,
                multiple: 3,
            },
        },
        {
            title: 'Address',
            dataIndex: 'address',
            filters: [
                {
                    text: 'London',
                    value: 'London',
                },
                {
                    text: 'New York',
                    value: 'New York',
                },
            ],
            onFilter: (value, record) => record.address.indexOf(value) === 0,
            filterMultiple: true,
        },
        {
            title: 'Action',
            key: 'action',
            sorter: {
                multiple: true,
            },
            render: () => (
                <Space size="small">
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    const data = [];
    for (let i = 1; i <= 100; i++) {
        data.push({
            key: i,
            name: 'John Brown',
            age: `${Math.floor(Math.random() * 10)}2`,
            address: `New York No. ${i} Lake Park`,
            description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
        });
    }

    const expandable = {
        expandedRowRender: record => <p>{record.description}</p>,
    };

    return (
        <>
            <BrandProvider brand="icloud">
                <Table
                    columns={columns}
                    dataSource={data}
                    expandable={expandable}
                    filterDropdownTrigger={['hover']}
                />
            </BrandProvider>
        </>
    );
};

export const TreeTableDemo = () => {

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render(text) {
                return (<div>{text}</div>);
            },
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            width: '12%',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            width: '30%',
            key: 'address',
        },
    ];

    const data = [
        {
            key: 1,
            name: 'John Brown sr.',
            age: 60,
            address: 'New York No. 1 Lake Park',
            children: [
                {
                    key: 11,
                    name: 'John Brown',
                    age: 42,
                    address: 'New York No. 2 Lake Park',
                },
                {
                    key: 12,
                    name: 'John Brown jr.',
                    age: 30,
                    address: 'New York No. 3 Lake Park',
                    children: [
                        {
                            key: 121,
                            name: 'Jimmy Brown',
                            age: 16,
                            address: 'New York No. 3 Lake Park',
                        },
                    ],
                },
                {
                    key: 13,
                    name: 'Jim Green sr.',
                    age: 72,
                    address: 'London No. 1 Lake Park',
                    children: [
                        {
                            key: 131,
                            name: 'Jim Green',
                            age: 42,
                            address: 'London No. 2 Lake Park',
                            children: [
                                {
                                    key: 1311,
                                    name: 'Jim Green jr.',
                                    age: 25,
                                    address: 'London No. 3 Lake Park',
                                },
                                {
                                    key: 1312,
                                    name: 'Jimmy Green sr.',
                                    age: 18,
                                    address: 'London No. 4 Lake Park',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            key: 2,
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
    ];

    // rowSelection objects indicates the need for row selection
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        onSelect: (record, selected, selectedRows) => {
            console.log(record, selected, selectedRows);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
            console.log(selected, selectedRows, changeRows);
        },
    };

    function TreeData() {
        const [checkStrictly, setCheckStrictly] = React.useState(false);
        return (
            <>
                <BrandProvider brand="icloud">
                    <Space align="center" style={{marginBottom: 16}}>
                        CheckStrictly: <Switch checked={checkStrictly} onChange={setCheckStrictly} />
                    </Space>
                    <Table
                        columns={columns}
                        rowSelection={{...rowSelection, checkStrictly}}
                        dataSource={data}
                    />
                </BrandProvider>
            </>
        );
    }
    return (
        <TreeData />
    );
};

export const CheckboxDemo = () => {

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            fixed: true,
        },
        {
            title: 'Age',
            dataIndex: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
    ];

    const data = [];
    for (let i = 0; i < 46; i++) {
        data.push({
            key: i,
            name: `Edward King ${i}`,
            age: 32,
            address: `London, Park Lane no. ${i}`,
        });
    }

    class App extends React.Component {
        state = {
            selectedRowKeys: [], // Check here to configure the default column
        };

        onSelectChange = selectedRowKeys => {
            console.log('selectedRowKeys changed: ', selectedRowKeys);
            this.setState({selectedRowKeys});
        };

        render() {
            const {selectedRowKeys} = this.state;
            const rowSelection = {
                selectedRowKeys,
                onChange: this.onSelectChange,
                selections: [
                    Table.SELECTION_ALL,
                    Table.SELECTION_INVERT,
                    Table.SELECTION_NONE,
                    {
                        key: 'odd',
                        text: 'Select Odd Row',
                        onSelect: changeableRowKeys => {
                            let newSelectedRowKeys = [];
                            newSelectedRowKeys = changeableRowKeys.filter((key, index) => {
                                if (index % 2 !== 0) {
                                    return false;
                                }
                                return true;
                            });
                            this.setState({selectedRowKeys: newSelectedRowKeys});
                        },
                    },
                    {
                        key: 'even',
                        text: 'Select Even Row',
                        onSelect: changeableRowKeys => {
                            let newSelectedRowKeys = [];
                            newSelectedRowKeys = changeableRowKeys.filter((key, index) => {
                                if (index % 2 !== 0) {
                                    return true;
                                }
                                return false;
                            });
                            this.setState({selectedRowKeys: newSelectedRowKeys});
                        },
                    },
                ],
            };
            return <Table rowSelection={rowSelection} columns={columns} dataSource={data} />;
        }
    }

    return (
        <BrandProvider brand="icloud">
            <App />
        </BrandProvider>
    );
};


export const CompleteDemo = () => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            sorter: (a, b) => a.age - b.age,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            filters: [
                {
                    text: 'London',
                    value: 'London',
                },
                {
                    text: 'New York',
                    value: 'New York',
                },
            ],
            filterMultiple: false,
            onFilter: (value, record) => record.address.indexOf(value) === 0,
        },
        {
            title: 'Action',
            key: 'action',
            sorter: true,
            render: () => (
                <Space size="small" align="center">
                    <a>Delete</a>
                    <a className="ant-dropdown-link">
                        More actions <IconDownOutlined />
                    </a>
                </Space>
            ),
        },
    ];

    const data = [];
    for (let i = 1; i <= 100; i++) {
        data.push({
            key: i,
            name: 'John Brown',
            age: `${i}2`,
            address: `New York No. ${i} Lake Park`,
            description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
        });
    }

    const expandable = {
        expandedRowRender: record => <p>{record.description}</p>,
    };
    const title = () => 'Here is title';
    const showHeader = true;
    const footer = () => 'Here is footer';
    const pagination = {position: 'bottom', showQuickJumper: true};

    class Demo extends React.Component {
        state: TableProps<any> = {
            bordered: false,
            loading: false,
            pagination,
            size: 'default' as TableProps<any>['size'],
            expandable,
            title: undefined,
            showHeader,
            footer,
            rowSelection: {},
            scroll: undefined,
            hasData: true,
            tableLayout: undefined,
            top: 'none',
            bottom: 'bottomRight',
        };

        handleToggle = prop => enable => {
            this.setState({[prop]: enable});
        };

        handleSizeChange = e => {
            this.setState({size: e.target.value});
        };

        handleTableLayoutChange = e => {
            this.setState({tableLayout: e.target.value});
        };

        handleExpandChange = enable => {
            this.setState({expandable: enable ? expandable : undefined});
        };

        handleEllipsisChange = enable => {
            this.setState({ellipsis: enable});
        };

        handleTitleChange = enable => {
            this.setState({title: enable ? title : undefined});
        };

        handleHeaderChange = enable => {
            this.setState({showHeader: enable ? showHeader : false});
        };

        handleFooterChange = enable => {
            this.setState({footer: enable ? footer : undefined});
        };

        handleRowSelectionChange = enable => {
            this.setState({rowSelection: enable ? {} : undefined});
        };

        handleYScrollChange = enable => {
            this.setState({yScroll: enable});
        };

        handleXScrollChange = e => {
            this.setState({xScroll: e.target.value});
        };

        handleDataChange = hasData => {
            this.setState({hasData});
        };

        render() {
            const {xScroll, yScroll, ...state} = this.state;

            const scroll = {};
            if (yScroll) {
                scroll.y = 240;
            }
            if (xScroll) {
                scroll.x = '100vw';
            }

            const tableColumns = columns.map(item => ({...item, ellipsis: state.ellipsis}));
            if (xScroll === 'fixed') {
                tableColumns[0].fixed = true;
                tableColumns[tableColumns.length - 1].fixed = 'right';
            }

            return (
                <>
                    <BrandProvider brand="icloud">
                        <Blockquote>
                            以下表头控制区域，纯粹为了前端功能展示，不是设计规范内容。
                            <br />
                            说明： 规范要求expandIcon在checkbox后面，需要用户使用时自行添加expandIconColumnIndex=1，组件库无法内置
                        </Blockquote>
                        <Form
                            layout="inline"
                            className="components-table-demo-control-bar"
                            style={{marginBottom: 16}}
                        >
                            <Form.Item label="Bordered">
                                <Switch checked={state.bordered} onChange={this.handleToggle('bordered')} />
                            </Form.Item>
                            <Form.Item label="loading">
                                <Switch checked={state.loading} onChange={this.handleToggle('loading')} />
                            </Form.Item>
                            <Form.Item label="Title">
                                <Switch checked={!!state.title} onChange={this.handleTitleChange} />
                            </Form.Item>
                            <Form.Item label="Column Header">
                                <Switch checked={!!state.showHeader} onChange={this.handleHeaderChange} />
                            </Form.Item>
                            <Form.Item label="Footer">
                                <Switch checked={!!state.footer} onChange={this.handleFooterChange} />
                            </Form.Item>
                            <Form.Item label="Expandable">
                                <Switch checked={!!state.expandable} onChange={this.handleExpandChange} />
                            </Form.Item>
                            <Form.Item label="Checkbox">
                                <Switch checked={!!state.rowSelection} onChange={this.handleRowSelectionChange} />
                            </Form.Item>
                            <Form.Item label="Fixed Header">
                                <Switch checked={!!yScroll} onChange={this.handleYScrollChange} />
                            </Form.Item>
                            <Form.Item label="Has Data">
                                <Switch checked={!!state.hasData} onChange={this.handleDataChange} />
                            </Form.Item>
                            <Form.Item label="Ellipsis">
                                <Switch checked={!!state.ellipsis} onChange={this.handleEllipsisChange} />
                            </Form.Item>
                            <Form.Item label="Size">
                                <Radio.Group value={state.size} onChange={this.handleSizeChange}>
                                    <Radio.Button value="default">Default</Radio.Button>
                                    <Radio.Button value="middle">Middle</Radio.Button>
                                    <Radio.Button value="small">Small</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item label="Table Scroll">
                                <Radio.Group value={xScroll} onChange={this.handleXScrollChange}>
                                    <Radio.Button value={undefined}>Unset</Radio.Button>
                                    <Radio.Button value="scroll">Scroll</Radio.Button>
                                    <Radio.Button value="fixed">Fixed Columns</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item label="Table Layout">
                                <Radio.Group value={state.tableLayout} onChange={this.handleTableLayoutChange}>
                                    <Radio.Button value={undefined}>Unset</Radio.Button>
                                    <Radio.Button value="fixed">Fixed</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item label="Pagination Top">
                                <Radio.Group
                                    value={this.state.top}
                                    onChange={e => {
                                        this.setState({top: e.target.value});
                                    }}
                                >
                                    <Radio.Button value="topLeft">TopLeft</Radio.Button>
                                    <Radio.Button value="topCenter">TopCenter</Radio.Button>
                                    <Radio.Button value="topRight">TopRight</Radio.Button>
                                    <Radio.Button value="none">None</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item label="Pagination Bottom">
                                <Radio.Group
                                    value={this.state.bottom}
                                    onChange={e => {
                                        this.setState({bottom: e.target.value});
                                    }}
                                >
                                    <Radio.Button value="bottomLeft">BottomLeft</Radio.Button>
                                    <Radio.Button value="bottomCenter">BottomCenter</Radio.Button>
                                    <Radio.Button value="bottomRight">BottomRight</Radio.Button>
                                    <Radio.Button value="none">None</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                        </Form>
                        <Table
                            {...this.state}
                            pagination={{
                                position: [this.state.top, this.state.bottom],
                                showQuickJumper: true,
                            }}
                            columns={tableColumns}
                            dataSource={state.hasData ? data : null}
                            scroll={scroll}
                            expandIconColumnIndex={1}
                        />
                    </BrandProvider>
                </>
            );
        }
    }

    return <Demo />;
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/table-cn/">Antd Table API</a>
        </>
    );
};


export const TestCase = () => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render(text) {
                return <div>{text}</div>;
            },
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            width: '12%',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            width: '30%',
            key: 'address',
        },
    ];

    const data = [
        {
            key: 1,
            name: 'John Brown sr.',
            age: 60,
            address: 'New York No. 1 Lake Park',
            children: [
                {
                    key: 11,
                    name: 'John Brown',
                    age: 42,
                    address: 'New York No. 2 Lake Park',
                },
                {
                    key: 12,
                    name: 'John Brown jr.',
                    age: 30,
                    address: 'New York No. 3 Lake Park',
                    children: [
                        {
                            key: 121,
                            name: 'Jimmy Brown',
                            age: 16,
                            address: 'New York No. 3 Lake Park',
                        },
                    ],
                },
                {
                    key: 13,
                    name: 'Jim Green sr.',
                    age: 72,
                    address: 'London No. 1 Lake Park',
                    children: [
                        {
                            key: 131,
                            name: 'Jim Green',
                            age: 42,
                            address: 'London No. 2 Lake Park',
                            children: [
                                {
                                    key: 1311,
                                    name: 'Jim Green jr.',
                                    age: 25,
                                    address: 'London No. 3 Lake Park',
                                },
                                {
                                    key: 1312,
                                    name: 'Jimmy Green sr.',
                                    age: 18,
                                    address: 'London No. 4 Lake Park',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            key: 2,
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
    ];

    // rowSelection objects indicates the need for row selection
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(
                `selectedRowKeys: ${selectedRowKeys}`,
                'selectedRows: ',
                selectedRows
            );
        },
        onSelect: (record, selected, selectedRows) => {
            console.log(record, selected, selectedRows);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
            console.log(selected, selectedRows, changeRows);
        },
    };

    function TreeData() {
        const [checkStrictly] = React.useState(false);
        return (
            <Table
                columns={columns}
                rowSelection={{...rowSelection, checkStrictly}}
                dataSource={data}
            />
        );
    }

    return (
        <BrandProvider brand="icloud">
            {version}
            <TreeData />
        </BrandProvider>
    );
};

export const TestCase2 = () => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            filters: [{text: '1', value: 'name'}],
            filterDropdownVisible: true,
            filterMode: 'tree' as 'tree',
            filterSearch: true,
        },
    ];

    const dynamicData = [];
    for (let i = 0; i < 15; i += 1) {
        dynamicData.push({
            key: i,
            name: i,
        });
    }
    // 会有一个warning
    const pagination = {total: 100, pageSize: 10, current: 2};
    return (
        <Table
            columns={columns}
            dataSource={dynamicData}
            pagination={pagination}
            getPopupContainer={
                node => {
                    // 这个会被调用
                    console.log(1);
                    return node.parentNode as HTMLElement;
                }
            }
        />
    );
};

