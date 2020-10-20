import React from 'react';
import Input from '@osui/input';
import Button from '@osui/button';
import Checkbox from '@osui/checkbox';
import Radio from '@osui/radio';
import {InputNumber} from 'antd';
import Form from '../src';

export default {
    title: '1-Form',
};

export const Demo = () => {
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
                label="用户名"
                name="username"
                rules={[
                    {
                        required: true,
                        message: '请输入用户名',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="密码"
                name="password"
                rules={[
                    {
                        required: true,
                        message: '请输入密码',
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
                    提交
                </Button>
            </Form.Item>
        </Form>
    );
};

export const BasicDemo = () => {
    const formItemLayout = {
        labelCol: {
            span: 5,
        },
        wrapperCol: {
            span: 12,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 6,
            span: 18,
        },
    };
    const onFinish = values => {
        console.log('Success:', values);
    };
    const onFinishFailed = values => {
        console.log('Success:', values);
    };
    return (
        <Form {...formItemLayout} onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Form.Item
                label="主题(topic)"
                name="topic"
                extra="支持以大小写字母数字开头和结尾，可包含短横线的组合，不支持汉字与特殊字符，创建后不可更改"
                validateMessageLayout="inline"
                rules={[
                    {
                        required: true,
                        message: '必填字段',
                    },
                    {
                        max: 10,
                        message: '最多不超过10个字',
                    },
                    {
                        type: 'number',
                        message: '只能是数字',
                    },
                ]}
            >
                <Input placeholder="请输入主题（Topic）" />
            </Form.Item>
            <Form.Item
                label="ACL账户"
                name="account"
                validateMessageLayout="inline"
                rules={[
                    {
                        required: true,
                        message: '必填字段',
                    },
                ]}
            >
                <Radio.Group onChange={e => console.log(e.target.value)}>
                    <Radio.Button value={1}>已有ACL账户</Radio.Button>
                    <Radio.Button value={2}>创建ACL账户</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                label="ACL账户名称"
                extra="用于发布/订阅请求鉴权"
                name="accountName"
                validateMessageLayout="inline"
                rules={[
                    {
                        required: true,
                        message: '必填字段',
                    },
                ]}
            >
                <Input placeholder="请输入ACL账户名" />
            </Form.Item>
            <Form.Item
                label={<><div>ACL账户密码</div><div>账户密码</div></>}
                name="password"
                extra="字符需满足大于6位"
                validateMessageLayout="inline"
                rules={[
                    {
                        required: true,
                        message: '必填字段',
                    },
                    {
                        min: 6,
                        message: '最少6位',
                    },
                ]}
            >
                <Input.Password placeholder="请输入ACL账户密码" />
            </Form.Item>
            <Form.Item
                label="Queue名称"
                name="queueletName"
                extra="建议**-Queue格式，支持字母、数字组合，不支持汉字与特殊字符，创建后不可更改"
                validateMessageLayout="inline"
                rules={[
                    {
                        required: true,
                        message: '必填字段',
                    },
                    {
                        validator(_, value) {
                            return /[0-9a-zA-Z]/.test(value) ? Promise.resolve() : Promise.reject(Error('支持字母、数字组合'));
                        },
                    },
                ]}
            >
                <Input placeholder="" />
            </Form.Item>
            <Form.Item
                label="Queuelet数量"
                name="queueletAmount"
                extra="设置queue数量后会按照该数量均分pipe对应的pipelet，生成queue"
                validateMessageLayout="inline"
                rules={[
                    {
                        required: true,
                        message: '必填字段',
                    },
                ]}
            >
                <InputNumber defaultValue={6} />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export const ValidateMessageDemo = () => {
    const formItemLayout = {
        labelCol: {
            span: 5,
        },
        wrapperCol: {
            span: 12,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 6,
            span: 18,
        },
    };
    const onFinish = values => {
        console.log('Success:', values);
    };
    const onFinishFailed = values => {
        console.log('Success:', values);
    };
    return (
        <Form {...formItemLayout} onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Form.Item
                label="Username"
                name="username"
                extra="由大小写字母、数字以及-_/.特殊字符组成"
                validateMessageLayout="inline"
                rules={[
                    {
                        required: true,
                        message: '必填字段',
                    },
                    {
                        max: 10,
                        message: '最多不超过10个字',
                    },
                    {
                        type: 'number',
                        message: '只能是数字',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item label="Warning" name="what" validateStatus="warning">
                <Input />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};
