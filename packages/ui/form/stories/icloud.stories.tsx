/* eslint-disable import/no-extraneous-dependencies */
import React, {useState} from 'react';
import Switch from '@osui/switch';
import Radio from '@osui/radio';
import Button from '@osui/button';
import Input from '@osui/input';
import InputNumber from '@osui/input-number';
import BrandProvider from '@osui/brand-provider';
import Divider from '@osui/divider';
import {version} from 'antd';
import Form from '../src';

export default {
    title: '数据录入/Form 表单',
};

export const Demo = () => {
    const layout = {
        labelCol: {
            span: 4,
        },
        wrapperCol: {
            span: 18,
        },
    };

    const tailLayout = {
        labelCol: {
            span: 4,
        },
    };

    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const [direction, setDirection] = useState<'horizontal'|'vertical'>('horizontal');
    const nextDirection = () => (direction === 'horizontal' ? 'vertical' : 'horizontal');

    return (
        <BrandProvider>
            {version}
            <strong>注意: BrandProvider应该是App级别的，不是组件级别的</strong>
            <p>表单视觉规范要求：label左对齐，与右边内容间距20px；右边自适应，左边保持不动；左边需要以最宽的内容为主</p>
            <p>前端提供了Form.useLabelLayout hook来方便布局。注意：Form.useLabelLayout的侵入性比较强，只满足视觉需求，比如如果你需要align: right，就不要使用了</p>
            <br />
            <br />
            <Divider>展示</Divider>
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                // 可以通过传入labelMaxWidth来控制label的宽度
                labelMaxWidth={80}
                layout={direction}
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    tooltip="helphelphelp"
                    rules={[
                        {
                            required: true,
                            message: '请输入用户名',
                        },
                    ]}
                >
                    <Input placeholder="请输入用户名" />
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
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                    <Button
                        style={{marginLeft: 10, width: 105}}
                        onClick={() => setDirection(nextDirection)}
                    >
                        切换{nextDirection()}
                    </Button>
                </Form.Item>
            </Form>
        </BrandProvider>
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
    const onFinish = values => {
        console.log('Success:', values);
    };
    const onFinishFailed = values => {
        console.log('Success:', values);
    };
    return (
        <BrandProvider brand="icloud">
            <Form name="myForm" {...formItemLayout} onFinish={onFinish} onFinishFailed={onFinishFailed}>
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
                    label="ACL账户密码账户密码"
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
                                return (
                                    /[0-9a-zA-Z]/.test(value)
                                        ? Promise.resolve()
                                        : Promise.reject(Error('支持字母、数字组合'))
                                );
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
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </BrandProvider>
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
        <BrandProvider brand="icloud">
            <Form name="basic" {...formItemLayout} onFinish={onFinish} onFinishFailed={onFinishFailed}>
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
        </BrandProvider>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/form-cn/">Antd Form API</a>
        </>
    );
};


export const TestCase = () => {
    const layout = {
        labelCol: {
            span: 4,
        },
        wrapperCol: {
            span: 18,
        },
    };

    const tailLayout = {
        labelCol: {
            span: 4,
        },
    };

    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <BrandProvider brand="icloud">
            <strong>注意: BrandProvider应该是App级别的，不是组件级别的</strong>
            <p>表单视觉规范要求：label左对齐，与右边内容间距20px；右边自适应，左边保持不动；左边需要以最宽的内容为主</p>
            <p>前端提供了Form.useLabelLayout hook来方便布局。注意：Form.useLabelLayout的侵入性比较强，只满足视觉需求，比如如果你需要align: right，就不要使用了</p>
            <br />
            <br />
            <Divider>展示</Divider>
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                labelMaxWidth={50}
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    extra="支持以大小写字母数字开头和结尾，可包含短横线的组合，不支持汉字与特殊字符，创建后不可更改"
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
                    <Form.Item
                        style={{marginLeft: 0}}
                        name="switch1"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码',
                            },
                        ]}
                    >
                        <Switch />
                    </Form.Item>
                    <Form.Item
                        style={{marginLeft: 0}}
                        name="switch2"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码',
                            },
                        ]}
                    >
                        <Switch />
                    </Form.Item>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </BrandProvider>
    );
};

const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 4},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 20},
    },
};
const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: {span: 24, offset: 0},
        sm: {span: 20, offset: 4},
    },
};

export const TestCaseFormErrorList = () => {
    return (
        <BrandProvider>
            <Form name="dynamic_form_item" {...formItemLayoutWithOutLabel}>
                <Form.List
                    name="names"
                    rules={[
                        {
                            validator: async (_, names) => {
                                if (!names || names.length < 2) {
                                    return Promise.reject(new Error('At least 2 passengers'));
                                }
                            },
                        },
                    ]}
                >
                    {(fields, {add}, {errors}) => (
                        <>
                            {fields.map((field, index) => (
                                <Form.Item
                                    {...(index === 0
                                        ? formItemLayout
                                        : formItemLayoutWithOutLabel)}
                                    label={index === 0 ? 'Passengers' : ''}
                                    required={false}
                                    key={field.key}
                                >
                                    <Form.Item
                                        {...field}
                                        validateTrigger={['onChange', 'onBlur']}
                                        rules={[
                                            {
                                                required: true,
                                                whitespace: true,
                                                message:
                            'Please input passenger\'s name or delete this field.',
                                            },
                                        ]}
                                        noStyle
                                    >
                                        <Input
                                            placeholder="passenger name"
                                            style={{width: '60%'}}
                                        />
                                    </Form.Item>
                                </Form.Item>
                            ))}
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    style={{width: '60%'}}
                                >
                                    Add field
                                </Button>
                                <Button
                                    type="dashed"
                                    onClick={() => {
                                        add('The head item', 0);
                                    }}
                                    style={{width: '60%', marginTop: '20px'}}
                                >
                                    Add field at head
                                </Button>
                                <Form.ErrorList errors={errors} />
                            </Form.Item>
                        </>
                    )}
                </Form.List>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </BrandProvider>
    );
};
