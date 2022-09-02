import React from 'react';
import Input from '@osui/input';
import Button from '@osui/button';
import Checkbox from '@osui/checkbox';
import DatePicker from '@osui/date-picker';
import Select from '@osui/select';
import {Cascader, InputNumber} from 'antd';
import {QuestionCircleOutlined} from '@ant-design/icons';
import Form from '../src';

export default {
    title: 'Form',
};

const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 18,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 6,
        span: 18,
    },
};

export const Demo = () => {
    Form.useLabelLayout('basic', 100);
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Username"
                name="username"
                tooltip={{title: '默认展示预警事件，支持选择下发至其他路径。', icon: <QuestionCircleOutlined />}}
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export const StatusDemo = () => {
    const {Option} = Select;

    return (
        <Form layout="vertical">
            <Form.Item
                label="Fail"
                validateStatus="error"
                help="Should be combination of numbers & alphabets"
            >
                <Input placeholder="unavailable choice" id="error" />
            </Form.Item>

            <Form.Item label="Warning" validateStatus="warning">
                <Input placeholder="Warning" id="warning" />
            </Form.Item>

            <Form.Item
                label="Validating"
                validateStatus="validating"
                help="The information is being validated..."
            >
                <Input placeholder="I'm the content is being validated" id="validating" />
            </Form.Item>

            <Form.Item label="Success" validateStatus="success">
                <Input placeholder="I'm the content" id="success" />
            </Form.Item>

            <Form.Item label="Warning" validateStatus="warning">
                <Input placeholder="Warning" id="warning2" />
            </Form.Item>

            <Form.Item
                label="Fail"
                validateStatus="error"
                help="Should be combination of numbers & alphabets"
            >
                <Input placeholder="unavailable choice" id="error2" />
            </Form.Item>

            <Form.Item label="Success" validateStatus="success">
                <DatePicker
                    style={{
                        width: '100%',
                    }}
                />
            </Form.Item>

            <Form.Item label="Error" validateStatus="error">
                <Select allowClear>
                    <Option value="1">Option 1</Option>
                    <Option value="2">Option 2</Option>
                    <Option value="3">Option 3</Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="Validating"
                validateStatus="validating"
                help="The information is being validated..."
            >
                <Cascader
                    options={[
                        {
                            value: 'xx',
                            label: 'xx',
                        },
                    ]}
                    allowClear
                />
            </Form.Item>

            <Form.Item
                label="inline"
                style={{
                    marginBottom: 0,
                }}
            >
                <Form.Item
                    validateStatus="error"
                    help="Please select the correct date"
                    style={{
                        display: 'inline-block',
                        width: 'calc(50% - 90px)',
                    }}
                >
                    <DatePicker />
                </Form.Item>
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
                <Form.Item
                    style={{
                        display: 'inline-block',
                        width: 'calc(50% - 12px)',
                    }}
                >
                    <DatePicker />
                </Form.Item>
            </Form.Item>

            <Form.Item label="Success" validateStatus="success">
                <InputNumber
                    style={{
                        width: '100%',
                    }}
                />
            </Form.Item>

            <Form.Item label="Success" validateStatus="success" help="hey hey">
                <Input allowClear placeholder="with allowClear" />
            </Form.Item>

            <Form.Item label="Warning" validateStatus="warning" help="hey hey">
                <Input.Password placeholder="with input password" />
            </Form.Item>

            <Form.Item label="Error" validateStatus="error">
                <Input.Password allowClear placeholder="with input password and allowClear" />
            </Form.Item>
        </Form>
    );
};
