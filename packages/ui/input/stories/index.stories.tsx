
import * as React from 'react';
import { Form, InputNumber } from 'antd';
import { SearchOutlined, ExclamationCircleFilled, WarningFilled } from '@ant-design/icons';
import '@osui/theme/dist/theme/vars.css';
import Input from '../src';
const { TextArea } = Input;

export default {
    title: 'OSUI-Input',
};

const Item = props => {
    return (
        <div className="list_item" style={{ 'margin': '20px 0' }}>
            {props.children}
        </div>
    );
};

export const Demo = () => {
    return (<div style={{ padding: '50px' }}>
        <h2></h2>
        <Item>
            <InputNumber style={{ width: 100 }} min={1} max={10} defaultValue={3} />
        </Item>
        <Item >
            <Input style={{ width: 200 }} placeholder="请输入" />
        </Item>
        <Item>
            <Input
                style={{ width: 200 }}
                placeholder="请输入搜索关键字"
                suffix={
                    <SearchOutlined onClick={() => {
                        console.log(1);
                    }}
                    />
                }
            />
        </Item>
        <Item>
            <TextArea style={{ width: 500, height: 150 }} placeholder="请输入" />
        </Item>
        <Form>
            <Form.Item
                validateStatus="error"
                style={{ width: 200 }}
                help={<div><ExclamationCircleFilled />错误提示</div>}
            >
                <Input />
            </Form.Item>
            <Form.Item
                validateStatus="warning"
                style={{ width: 200 }}
                help={<div><WarningFilled />警告提示</div>}
            >
                <Input />
            </Form.Item>
            <Form.Item
                validateStatus="success"
                style={{ width: 200 }}
                help={<div><WarningFilled />警告提示</div>}
            >
                <Input />
            </Form.Item>
        </Form>
    </div>);
};
