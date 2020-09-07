/* eslint-disable no-console, max-len, max-lines, react/jsx-no-bind */
import {useState, useCallback} from 'react';
import {Row} from 'antd';
import {IconSearch} from '@osui/icons';
import moment from 'moment';
import * as OSUI from '@osui/ui';

export const BranchDropdown = () => {
    const list = [{
        title: 'Pull Request 中所有变更',
        desc: '李四 提交于3天前',
        id: '0',
    }, {
        title: 'fix: 修复button方法类型方法类型方法类型',
        desc: '李四 提交于3天前',
        id: 'ecc329f',
    }, {
        title: 'fix: 修复branch方法类型方法类型方法类型',
        desc: '李四 提交于3天前',
        id: 'ecc349f',
    }, {
        title: 'fix: 修复select方法类型方法类型方法类型',
        desc: '李四 提交于3天前',
        id: 'ecc359f',
    }, {
        title: 'fix: 修复dropdown方法类型方法类型方法类型',
        desc: '李四 提交于3天前',
        id: 'ecc369f',
    }, {
        title: 'fix: 修复tabs方法类型方法类型方法类型',
        desc: '李四 提交于3天前',
        id: 'ecc339f',
    }];
    const [title, setTitle] = useState('');
    function handleMenuItemClick(item) {
        setTitle(item.title);
    }
    return (
        <div style={{padding: 30}}>
            <p>当前选中的选项是：<span style={{color: '#4C88FF'}}>{title}</span></p>
            <OSUI.BranchDropdown
                list={list}
                handleMenuItemClick={handleMenuItemClick}
            />
        </div>);
};

export const Checkbox = () => {
    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }

    const plainOptions = ['Apple', 'Pear', 'Orange'];
    const options = [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' },
    ];
    const optionsWithDisabled = [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange', disabled: false },
    ];
    const Group = OSUI.Checkbox.Group;
    return (
        <div style={{ padding: 30 }}>
            <p>基础示例</p>
            <OSUI.Checkbox>Checkbox</OSUI.Checkbox>
            <OSUI.Checkbox defaultChecked >Checkbox</OSUI.Checkbox>
            <OSUI.Checkbox disabled>Checkbox</OSUI.Checkbox>
            <OSUI.Checkbox defaultChecked disabled>Checkbox</OSUI.Checkbox>
            <p></p>
            <p>Checkbox组</p>
            <Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
            <br />
            <br />
            <Group options={options} defaultValue={['Pear']} onChange={onChange} />
            <br />
            <br />
            <Group
                options={optionsWithDisabled}
                disabled
                defaultValue={['Apple']}
                onChange={onChange}
            />
        </div>);
};

export const Collapse = () => {
    const text = '开源中国是目前国内最大的开源技术社区，拥有超过400万会员，形成了由开源软件库、代码分享、资讯、协作翻译、讨论区和博客等几大频道内容，为IT开发者提供了一个发现、使用、并交流开源技术的平台。';
    const {Panel} = OSUI.Collapse;

    return (
        <div style={{ padding: 30 }}>
            <p>基础折叠面板</p>
            <OSUI.Collapse defaultActiveKey={['1']}>
                <Panel header="内容标题 1" key="1">
                    {text}
                </Panel>
                <Panel header="内容标题 2" key="2">
                    {text}
                </Panel>
                <Panel header="内容标题 3" key="3" disabled>
                    {text}
                </Panel>
            </OSUI.Collapse>
            <p></p>
            <p>多层级折叠面板</p>
            <OSUI.Collapse defaultActiveKey={['1']}>
                <Panel header="内容标题 1" key="1">
                    <OSUI.Collapse defaultActiveKey="1">
                        <Panel header="内容标题 1-1" key="1">
                            {text}
                        </Panel>
                        <Panel header="内容标题 1-2" key="2">
                            {text}
                        </Panel>
                        <Panel header="内容标题 1-3" key="3" disabled>
                            {text}
                        </Panel>
                    </OSUI.Collapse>
                </Panel>
                <Panel header="内容标题 2" key="2">
                    {text}
                </Panel>
                <Panel header="内容标题 3" key="3">
                    {text}
                </Panel>
            </OSUI.Collapse>
        </div>);
};

export const DatePicker = () => {
    return (
        <div style={{padding: 20}}>
            <h4>日期选择</h4>
            <Row style={{marginBottom: 20}}>
                <OSUI.DatePicker />
            </Row>
            <h4>日期范围选择</h4>
            <Row style={{marginBottom: 20}}>
                <OSUI.DatePicker.RangePicker />
            </Row>
            <h4>日期禁用选择</h4>
            <Row style={{marginBottom: 20}}>
                <OSUI.DatePicker defaultValue={moment('2015-06-06')} disabled />
            </Row>
            <h4>选择月份</h4>
            <Row style={{marginBottom: 20}}>
                <OSUI.DatePicker picker="month" />
            </Row>
            <h4>选择季度</h4>
            <Row style={{marginBottom: 20}}>
                <OSUI.DatePicker picker="quarter" />
            </Row>
            <h4>选择年</h4>
            <Row style={{marginBottom: 20}}>
                <OSUI.DatePicker picker="year" />
            </Row>
        </div>
    );
};

export const DirectoryNavigator = () => {
    const treeData = [{
        title: 'Source',
        key: '0-0',
        children: [{
            title: 'Test',
            key: '0-0-0',
            isLeaf: true,
        },
        {
            title: 'Hello World',
            key: '0-0-1',
            isLeaf: true,
        }],
    },
    {
        title: 'parent 1',
        key: '0-1',
        children: [{
            title: 'leaf 1-0',
            key: '0-1-0',
            isLeaf: true,
        },
        {
            title: 'leaf 1-1',
            key: '0-1-1',
            isLeaf: true,
        }],
    }];

    const onSelect = (keys, event) => {
        console.log('Trigger Select', keys, event);
    };

    const onExpand = () => {
        console.log('Trigger Expand');
    };

    return (
        <DirectoryNavigator
            onSelect={onSelect}
            onExpand={onExpand}
            treeData={treeData}
        />
    );
};

export const Input = () => {
    return (
        <>
            <h2></h2>
            <OSUI.Input style={{ width: 200 }} placeholder="请输入" />
            <br />
            <br />
            <OSUI.Input
                style={{ width: 200 }}
                placeholder="请输入搜索关键字"
                suffix={
                    <IconSearch />
                }
            />
            <br />
            <br />
            <OSUI.Input.TextArea style={{ width: 500, height: 150 }} placeholder="请输入" />
            <br />
            <br />
            <OSUI.Input.Password style={{ width: 500 }} placeholder="请输入" />
        </>);
};


export const Message = () => {

    const success = () => {
        OSUI.message.success('这是一个操作成功的消息！');
    };

    const error = () => {
        OSUI.message.error('这是一个请求错误的消息！');
    };

    const warning = () => {
        OSUI.message.warning('这是一个操作警示的消息！');
    };

    const info = () => {
        OSUI.message.info('这是一个普通提示的消息！');
    };

    const loading = () => {
        OSUI.message.loading('这是一个操作处理中的消息！');
    };

    const maxWidth100 = () => {
        OSUI.message.info({
            maxWidth: 100,
            data: '这是一个最大宽度只有100像素的消息！',
        });
    };

    const titledInfo = () => {
        OSUI.message.info({
            maxWidth: 200,
            data: '这是一个带标题的消息！而且最大宽度只有200px！',
            title: '恭喜你',
        });
    };

    const customizedDuration = () => {
        OSUI.message.info({
            maxWidth: 200,
            data: '默认4.5秒消失！这里自定义了2分钟才消失！',
            title: '自定义Duration',
        }, 120);
    };

    return (
        <>
            <OSUI.Button onClick={success}>Success</OSUI.Button>
            <OSUI.Button onClick={error}>Error</OSUI.Button>
            <OSUI.Button onClick={warning}>Warning</OSUI.Button>
            <OSUI.Button onClick={info}>Info</OSUI.Button>
            <OSUI.Button onClick={loading}>Loading</OSUI.Button>
            <OSUI.Button onClick={maxWidth100}>最大宽度100</OSUI.Button>
            <OSUI.Button onClick={titledInfo}>带标题的提示</OSUI.Button>
            <OSUI.Button onClick={customizedDuration}>自定义消失时间</OSUI.Button>
        </>
    );
};

const Modal = () => {
    const [visible, setVisible] = useState(false);
    const showModal = useCallback(
        () => {
            setVisible(true);
        },
        []
    );
    const closeModal = useCallback(
        () => {
            setVisible(false);
        },
        []
    );
    return (
        <div>
            <OSUI.Button onClick={showModal}>{'Modal M'}</OSUI.Button>
            <OSUI.Modal
                size="m"
                title="Basic Modal"
                visible={visible}
                onOk={closeModal}
                onCancel={closeModal}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </OSUI.Modal>
        </div>
    );
};


export const MultiSelect = () => {
    const onChange = arg => {
        console.log(arg);
    };

    const items = [
        {value: 'lucy', title: 'Lucy'},
        {value: 'jack', title: 'Jack'},
        {value: 'this is a super long name', title: 'This is a super long name'},
    ];

    return (<div>
        <OSUI.MultiSelect
            onChange={onChange}
            defaultValues={['lucy', 'jack']}
        >
            {items.map(item => <OSUI.MultiSelect.Option key={item.value} value={item.value}>{item.title}</OSUI.MultiSelect.Option>)}
        </OSUI.MultiSelect>
        <OSUI.MultiSelect
            onChange={onChange}
            placeholder="请选择"
            style={{marginLeft: 10}}
        >
            {items.map(item => <OSUI.MultiSelect.Option key={item.value} value={item.value}>{item.title}</OSUI.MultiSelect.Option>)}
        </OSUI.MultiSelect>
    </div>
    );
};

export const Popconfirm = () => {
    const text = '确定？';

    function confirm() {
        OSUI.message.info('Click on Yes.');
    }
    return (
        <div className="demo">
            <div style={{ marginLeft: 70, whiteSpace: 'nowrap' }}>
                <OSUI.Popconfirm placement="topLeft" title={text} onConfirm={confirm} okText="确定" cancelText="取消">
                    <OSUI.Button>TL</OSUI.Button>
                </OSUI.Popconfirm>
                <OSUI.Popconfirm placement="top" title={text} onConfirm={confirm} okText="确定" cancelText="取消">
                    <OSUI.Button>Top</OSUI.Button>
                </OSUI.Popconfirm>
                <OSUI.Popconfirm placement="topRight" title={text} onConfirm={confirm} okText="确定" cancelText="取消">
                    <OSUI.Button>TR</OSUI.Button>
                </OSUI.Popconfirm>
            </div>
            <div style={{ width: 70, float: 'left' }}>
                <OSUI.Popconfirm placement="leftTop" title={text} onConfirm={confirm} okText="确定" cancelText="取消">
                    <OSUI.Button>LT</OSUI.Button>
                </OSUI.Popconfirm>
                <OSUI.Popconfirm placement="left" title={text} onConfirm={confirm} okText="确定" cancelText="取消">
                    <OSUI.Button>Left</OSUI.Button>
                </OSUI.Popconfirm>
                <OSUI.Popconfirm placement="leftBottom" title={text} onConfirm={confirm} okText="确定" cancelText="取消">
                    <OSUI.Button>LB</OSUI.Button>
                </OSUI.Popconfirm>
            </div>
            <div style={{ width: 70, marginLeft: 304 }}>
                <OSUI.Popconfirm placement="rightTop" title={text} onConfirm={confirm} okText="确定" cancelText="取消">
                    <OSUI.Button>RT</OSUI.Button>
                </OSUI.Popconfirm>
                <OSUI.Popconfirm placement="right" title={text} onConfirm={confirm} okText="确定" cancelText="取消">
                    <OSUI.Button>Right</OSUI.Button>
                </OSUI.Popconfirm>
                <OSUI.Popconfirm placement="rightBottom" title={text} onConfirm={confirm} okText="确定" cancelText="取消">
                    <OSUI.Button>RB</OSUI.Button>
                </OSUI.Popconfirm>
            </div>
            <div style={{ marginLeft: 70, clear: 'both', whiteSpace: 'nowrap' }}>
                <OSUI.Popconfirm placement="bottomLeft" title={text} onConfirm={confirm} okText="确定" cancelText="取消">
                    <OSUI.Button>BL</OSUI.Button>
                </OSUI.Popconfirm>
                <OSUI.Popconfirm placement="bottom" title={text} onConfirm={confirm} okText="确定" cancelText="取消">
                    <OSUI.Button>Bottom</OSUI.Button>
                </OSUI.Popconfirm>
                <OSUI.Popconfirm placement="bottomRight" title={text} onConfirm={confirm} okText="确定" cancelText="取消">
                    <OSUI.Button>BR</OSUI.Button>
                </OSUI.Popconfirm>
            </div>
        </div>
    );
};

export const Popover = () => {
    const content = (
        <div>
            <p>Content</p>
            <p>Content</p>
        </div>
    );
    return (
        <OSUI.Popover content={content} title="Title">
            <OSUI.Button type="primary">Hover me</OSUI.Button>
        </OSUI.Popover>
    );
};

export const Select = () => {
    const Option = OSUI.Select.Option;

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return () => (
        <>
            <OSUI.Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                    Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
            </OSUI.Select>
            <OSUI.Select defaultValue="lucy" style={{ width: 120 }} disabled>
                <Option value="lucy">Lucy</Option>
            </OSUI.Select>
            <OSUI.Select defaultValue="lucy" style={{ width: 120 }} loading>
                <Option value="lucy">Lucy</Option>
            </OSUI.Select>
            <OSUI.Select defaultValue="lucy" style={{ width: 120 }} allowClear>
                <Option value="lucy">Lucy</Option>
            </OSUI.Select>
        </>
    );
};

const Table = () => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
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
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
                <>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <OSUI.Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </OSUI.Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <>
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];

    return <OSUI.Table columns={columns} dataSource={data} />;
};

const Tooltip = () => {
    const text = <span>prompt text</span>;

    const buttonWidth = 70;

    return (
        <div className="demo">
            <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
                <OSUI.Tooltip placement="topLeft" title={text}>
                    <OSUI.Button>TL</OSUI.Button>
                </OSUI.Tooltip>
                <OSUI.Tooltip placement="top" title={text}>
                    <OSUI.Button>Top</OSUI.Button>
                </OSUI.Tooltip>
                <OSUI.Tooltip placement="topRight" title={text}>
                    <OSUI.Button>TR</OSUI.Button>
                </OSUI.Tooltip>
            </div>
            <div style={{ width: buttonWidth, float: 'left' }}>
                <OSUI.Tooltip placement="leftTop" title={text}>
                    <OSUI.Button>LT</OSUI.Button>
                </OSUI.Tooltip>
                <OSUI.Tooltip placement="left" title={text}>
                    <OSUI.Button>Left</OSUI.Button>
                </OSUI.Tooltip>
                <OSUI.Tooltip placement="leftBottom" title={text}>
                    <OSUI.Button>LB</OSUI.Button>
                </OSUI.Tooltip>
            </div>
            <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
                <OSUI.Tooltip placement="rightTop" title={text}>
                    <OSUI.Button>RT</OSUI.Button>
                </OSUI.Tooltip>
                <OSUI.Tooltip placement="right" title={text}>
                    <OSUI.Button>Right</OSUI.Button>
                </OSUI.Tooltip>
                <OSUI.Tooltip placement="rightBottom" title={text}>
                    <OSUI.Button>RB</OSUI.Button>
                </OSUI.Tooltip>
            </div>
            <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
                <OSUI.Tooltip placement="bottomLeft" title={text}>
                    <OSUI.Button>BL</OSUI.Button>
                </OSUI.Tooltip>
                <OSUI.Tooltip placement="bottom" title={text}>
                    <OSUI.Button>Bottom</OSUI.Button>
                </OSUI.Tooltip>
                <OSUI.Tooltip placement="bottomRight" title={text}>
                    <OSUI.Button>BR</OSUI.Button>
                </OSUI.Tooltip>
            </div>
        </div>
    );
};

export const Drawer = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <div style={{padding: 30}}>
            {/* success */}
            <OSUI.Button type="primary" onClick={showDrawer}>
                Open
            </OSUI.Button>
            <p style={{margin: '20px 0 20px 0'}}>基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭</p>
            <OSUI.Drawer
                title="Basic Drawer"
                placement="right"
                width="450"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </OSUI.Drawer>
        </div>);
};

export const Form = () => {
    const { Option } = OSUI.Select;

    return (
        <OSUI.Form layout="vertical">
            <OSUI.Form.Item
                label="Fail"
                validateStatus="error"
                help="Should be combination of numbers & alphabets"
            >
                <OSUI.Input placeholder="unavailable choice" id="error" />
            </OSUI.Form.Item>

            <OSUI.Form.Item label="Warning" validateStatus="warning">
                <OSUI.Input placeholder="Warning" id="warning" />
            </OSUI.Form.Item>

            <OSUI.Form.Item
                label="Validating"

                validateStatus="validating"
                help="The information is being validated..."
            >
                <OSUI.Input placeholder="I'm the content is being validated" id="validating" />
            </OSUI.Form.Item>

            <OSUI.Form.Item label="Success" validateStatus="success">
                <OSUI.Input placeholder="I'm the content" id="success" />
            </OSUI.Form.Item>

            <OSUI.Form.Item label="Warning" validateStatus="warning">
                <OSUI.Input placeholder="Warning" id="warning2" />
            </OSUI.Form.Item>

            <OSUI.Form.Item
                label="Fail"

                validateStatus="error"
                help="Should be combination of numbers & alphabets"
            >
                <OSUI.Input placeholder="unavailable choice" id="error2" />
            </OSUI.Form.Item>

            <OSUI.Form.Item label="Success" validateStatus="success">
                <OSUI.DatePicker
                    style={{
                        width: '100%',
                    }}
                />
            </OSUI.Form.Item>

            <OSUI.Form.Item label="Error" validateStatus="error">
                <Select allowClear>
                    <Option value="1">Option 1</Option>
                    <Option value="2">Option 2</Option>
                    <Option value="3">Option 3</Option>
                </Select>
            </OSUI.Form.Item>
            <OSUI.Form.Item
                label="inline"
                style={{
                    marginBottom: 0,
                }}
            >
                <OSUI.Form.Item
                    validateStatus="error"
                    help="Please select the correct date"
                    style={{
                        display: 'inline-block',
                        width: 'calc(50% - 90px)',
                    }}
                >
                    <OSUI.DatePicker />
                </OSUI.Form.Item>
                <span
                    style={{
                        display: 'inline-block',
                        width: '24px',
                        lineHeight: '32px',
                        textAlign: 'center',
                    }}
                >
                    -
                </span>
                <OSUI.Form.Item
                    style={{
                        display: 'inline-block',
                        width: 'calc(50% - 12px)',
                    }}
                >
                    <OSUI.DatePicker />
                </OSUI.Form.Item>
            </OSUI.Form.Item>

            <OSUI.Form.Item label="Success" validateStatus="success">
                <OSUI.InputNumber
                    style={{
                        width: '100%',
                    }}
                />
            </OSUI.Form.Item>

            <OSUI.Form.Item label="Success" validateStatus="success" help="hey hey">
                <OSUI.Input allowClear placeholder="with allowClear" />
            </OSUI.Form.Item>

            <OSUI.Form.Item label="Warning" validateStatus="warning" help="hey hey">
                <OSUI.Input.Password placeholder="with input password" />
            </OSUI.Form.Item>

            <OSUI.Form.Item label="Error" validateStatus="error">
                <OSUI.Input.Password allowClear placeholder="with input password and allowClear" />
            </OSUI.Form.Item>
        </OSUI.Form>);
};

export const Markdown = () => {
    const content = `
# Writing template strings in Markdown

## Writing template strings in Markdown

adsfasdfasdf

asdfasdf

\`\`\`jsx
<Markdown content={content} />
\`\`\`
`;
    return (
        <OSUI.Markdown content={content} />
    );
};

export const MenuDropdown = () => {
    // 菜单数据
    const data = [
        {
            title: '新建 Pull Request',
            key: 'newPr',
        },
        {
            title: '新建分支',
            key: 'newBranch',
        },
        {
            title: '新建组件',
            key: 'newComponents',
        },
        {
            title: '新建项目',
            key: 'newProject',
            children: [
                {
                    title: '计划 Project',
                    key: 'project',
                },
                {
                    title: '文档 DOC',
                    key: 'doc',
                },
                {
                    title: '流水线 Pipe',
                    key: 'pipe',
                },
                {
                    title: '制品库 Repo',
                    key: 'repo',
                },
                {
                    title: '测试用例 Test',
                    key: 'test',
                },
            ],
        },
    ];

    // 菜单点击事件
    const handleMenuClick = e => {
        console.log(`获取Menu点击的key值: ${e.key}`);
        console.log(e);
    };

    return (
        <div style={{padding: 30}}>
            <OSUI.MenuDropdown
                trigger={['contextMenu']}
                data={data}
                handleMenuClick={handleMenuClick}
            >
                <div
                    style={{
                        width: '140px',
                        textAlign: 'center',
                        height: 200,
                        lineHeight: '200px',
                        background: '#f7f7f7',
                        color: '#777',
                    }}
                >
                    Right Click on here
                </div>
            </OSUI.MenuDropdown>
        </div>);
};


export const MenuDropdownButtonDemo = () => {
    // 菜单数据
    const data = [
        {
            title: '新建 Pull Request',
            key: 'newPr',
        },
        {
            title: '新建分支',
            key: 'newBranch',
        },
        {
            title: '新建组件',
            key: 'newComponents',
        },
        {
            title: '新建项目',
            key: 'newProject',
            children: [
                {
                    title: '计划 Project',
                    key: 'project',
                },
                {
                    title: '文档 DOC',
                    key: 'doc',
                },
                {
                    title: '流水线 Pipe',
                    key: 'pipe',
                },
                {
                    title: '制品库 Repo',
                    key: 'repo',
                },
                {
                    title: '测试用例 Test',
                    key: 'test',
                },
            ],
        },
    ];

    // 菜单点击事件
    const handleMenuClick = e => {
        console.log(`获取Menu点击的key值: ${e.key}`);
        console.log(e);
    };

    return (
        <div style={{padding: 30}}>
            <OSUI.MenuDropdown
                trigger={['click']}
                handleMenuClick={handleMenuClick}
                placement="bottomCenter"
                data={data}
            >
                <OSUI.Button>bottomCenter</OSUI.Button>
            </OSUI.MenuDropdown>
        </div>);
};


const Everything = () => (
    <div>
        {/* success */}
        <OSUI.Alert
            style={{width: 500}}
            message="恭喜！你所提交的信息已经审核通过，如有问题请联系客服。"
            type="success"
            showIcon
            closable
            closeText="查看详情"
        />
        <br />
        <OSUI.Alert
            style={{width: 500}}
            message="恭喜！你所提交的信息已经审核通过，如有问题请联系客服。"
            type="success"
            showIcon
            closable
        />
        <br />
        <OSUI.Alert
            style={{width: 500}}
            message="已成功！"
            description="你所提交的信息已经审核通过，请及时跟进申请状况。如有问题，请联系审核人员或在线客服。"
            type="success"
            showIcon
        />
        <br />
        {/* warning */}
        <OSUI.Alert
            style={{width: 500}}
            message="系统将于 15 : 00 - 17 : 00 进行升级，请及时保存你的资料！"
            type="warning"
            showIcon
            closable
            closeText="查看详情"
        />
        <br />
        <OSUI.Alert
            style={{width: 500}}
            message="系统将于 15 : 00 - 17 : 00 进行升级，请及时保存你的资料！"
            type="warning"
            showIcon
            closable
        />
        <br />
        <OSUI.Alert
            style={{width: 500}}
            message="请注意！"
            description="你所提交的信息已经审核失败，可以进入个人信箱查看原因，如有疑问，请联系客服人员。"
            type="warning"
            showIcon
        />
        <br />
        {/* error */}
        <OSUI.Alert
            style={{width: 500}}
            message="系统将于 15 : 00 - 17 : 00 进行升级，请及时保存你的资料！"
            type="error"
            showIcon
            closable
            closeText="查看详情"
            shouldStopClose={false}
        />
        <br />
        <OSUI.Alert
            style={{width: 500}}
            message="系统将于 15 : 00 - 17 : 00 进行升级，请及时保存你的资料！"
            type="error"
            showIcon
            closable
        />
        <br />
        <OSUI.Alert
            style={{width: 500}}
            message="请注意！"
            description="你所提交的信息已经审核失败，可以进入个人信箱查看原因，如有疑问，请联系客服人员。"
            type="error"
            showIcon
        />
        <br />
        {/* info */}
        <OSUI.Alert
            style={{width: 500}}
            message="系统将于 15 : 00 - 17 : 00 进行升级，请及时保存你的资料！"
            type="info"
            showIcon
            closable
            closeText="查看详情"
        />
        <br />
        <OSUI.Alert
            style={{width: 500}}
            message="系统将于 15 : 00 - 17 : 00 进行升级，请及时保存你的资料！"
            type="info"
            showIcon
            closable
        />
        <br />
        <OSUI.Alert
            style={{width: 500}}
            message="帮助信息！"
            description="你所提交的信息已经审核失败，可以进入个人信箱查看原因，如有疑问，请联系客服人员。"
            type="info"
            showIcon
        />
        <OSUI.Avatar size="default" pr>a</OSUI.Avatar>
        <OSUI.Avatar pr src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/128/batman-icon.png" />
        <span style={{marginRight: 30}}>
            <OSUI.Badge count={5} />
        </span>
        <span style={{marginRight: 30}}>
            <OSUI.Badge count={15} />
        </span>
        <span style={{marginRight: 30}}>
            <OSUI.Badge count={105} />
        </span>
        <BranchDropdown />
        <OSUI.Button type="default" style={{'margin': '0 20px 20px 0'}}>普通样式</OSUI.Button>
        <OSUI.Button type="default" disabled style={{'margin': '0 20px 20px 0'}}>普通样式</OSUI.Button>
        <OSUI.Button type="default" loading style={{'margin': '0 20px 20px 0'}}>普通样式</OSUI.Button>
        <Checkbox />
        <Collapse />
        <DatePicker />
        <DirectoryNavigator />
        <Drawer />
        <Form />
        <Input />
        <Markdown />
        <MenuDropdown />
        <MenuDropdownButtonDemo />
        <Modal />
        <Popover />
        <Select />
        <Table />
        <Tooltip />
        {/* default */}
        <OSUI.BackTop />
        {/* circle */}
        <OSUI.BackTop type="circle" />
    </div>
);

export default Everything;
