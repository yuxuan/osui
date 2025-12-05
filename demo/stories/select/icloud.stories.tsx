/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import BrandProvider from '@osui/brand-provider';
import Divider from '@osui/divider';
import Form from '@osui/form';
import Input from '@osui/input';
import Select from '@osui/select';
import {
    SelectUsers,
    MulipleDisplayInPopupByHand,
    MultipleDisplayInPopup,
    Multiple,
    Size,
    Basic,
    TestCase,
    SelectAll,
} from './icloud-demo';

export default {
    title: '数据录入/[new_dev]选择器 Select',
};

export const Demo = () => {
    const options = [
        {label: '选项1', value: '1'},
        {label: '选项2', value: '2'},
        {label: '选项3', value: '3'},
        {label: '选项4', value: '4', disabled: true},
        {label: '选项5超级长超级长超级长超级长超级长', value: '5'},
    ];

    return (
        <BrandProvider>
            <Divider>基本选择器</Divider>
            <p>默认</p>
            <Select style={{width: 240}} options={options} />
            <p />
            <p>报错</p>
            <Form
                name="demo"
                labelAlign="left"
                wrapperCol={{span: 12}}
            >
                <Form.Item
                    label="报错"
                    name="name"
                    validateStatus="error"
                    help={['报错文案']}
                    rules={[{required: true, message: '必填'}]}
                >
                    <Select style={{width: 240}} options={options} />
                </Form.Item>
            </Form>
            <p />
            <p>禁用</p>
            <Select disabled style={{width: 240}} options={options} />
            <Divider>多选</Divider>
            <p>默认</p>
            <Select
                mode="multiple"
                style={{width: 240}}
                options={options}
            />
            <p />
            <p>限制个数和长度</p>
            <Select
                mode="multiple"
                style={{width: 240}}
                maxTagCount="responsive"
                maxTagTextLength={5}
                options={options}
                defaultValue={['1', '2', '4']}
            />
            <p />
            <p>禁用</p>
            <Select
                mode="multiple"
                disabled
                maxTagCount={2}
                style={{width: 240}}
                options={options}
                defaultValue={['1', '2', '3']}
                placeholder={'请选择'}
            />
            <Divider>可搜索</Divider>
            <p>默认</p>
            <Select showSearch optionFilterProp="label" style={{width: 240}} options={options} />
            <p />
            <p>报错</p>
            <Form
                name="demo"
                labelAlign="left"
                wrapperCol={{span: 12}}
            >
                <Form.Item
                    label="报错"
                    name="name"
                    validateStatus="error"
                    help={['报错文案']}
                    rules={[{required: true, message: '必填'}]}
                >
                    <Select showSearch optionFilterProp="label" style={{width: 240}} options={options} />
                </Form.Item>
            </Form>
            <p />
            <p>禁用</p>
            <Select showSearch disabled style={{width: 240}} options={options} placeholder={'请选择'} />
            <Divider>条件选择</Divider>
            <p>默认</p>
            <Input.Group compact>
                <div
                    style={{
                        width: '76px',
                        height: '32px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'var(--component-color-grayB-active)',
                        color: 'var(--text-color-tertiary)',
                        border: '1px solid var(--component-color-border)',
                    }}
                >
                    主题名称
                </div>
                <Select style={{width: 240}} options={options} />
            </Input.Group>
            <p />
            <p>禁用</p>
            <Input.Group compact>
                <div
                    style={{
                        width: '76px',
                        height: '32px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'var(--component-color-grayB-active)',
                        color: 'var(--text-color-tertiary)',
                        border: '1px solid var(--component-color-border)',
                    }}
                >
                    主题名称
                </div>
                <Select disabled style={{width: 240}} options={options} placeholder={'请选择'} />
            </Input.Group>
        </BrandProvider>
    );
};

export const Demo2 = () => {
    const options = [
        {label: '选项1', value: '1'},
        {label: '选项2', value: '2'},
        {label: '选项3', value: '3'},
        {label: '选项4', value: '4', disabled: true},
        {label: '选项5超级长超级长超级长超级长超级长', value: '5'},
    ];

    return (
        <BrandProvider>
            <Divider>基本选择器</Divider>
            <p>默认</p>
            <Select style={{width: 240}} options={options} />
            <p />
            <p>报错</p>
            <Form
                name="demo"
                labelAlign="left"
                wrapperCol={{span: 12}}
            >
                <Form.Item
                    label="报错"
                    name="name"
                    validateStatus="error"
                    help={['报错文案']}
                    rules={[{required: true, message: '必填'}]}
                >
                    <Select style={{width: 240}} options={options} />
                </Form.Item>
            </Form>
            <p />
            <p>禁用</p>
            <Select disabled style={{width: 240}} options={options} />
            <Divider>多选</Divider>
            <p>默认</p>
            <Select
                mode="multiple"
                style={{width: 240}}
                options={options}
            />
            <p />
            <p>限制个数和长度</p>
            <Select
                mode="multiple"
                style={{width: 240}}
                maxTagCount="responsive"
                maxTagTextLength={5}
                options={options}
                defaultValue={['1', '2', '4']}
            />
            <p />
            <p>禁用</p>
            <Select
                mode="multiple"
                disabled
                maxTagCount={2}
                style={{width: 240}}
                options={options}
                defaultValue={['1', '2', '3']}
                placeholder={'请选择'}
            />
            <Divider>可搜索</Divider>
            <p>默认</p>
            <Select showSearch optionFilterProp="label" style={{width: 240}} options={options} />
            <p />
            <p>报错</p>
            <Form
                name="demo"
                labelAlign="left"
                wrapperCol={{span: 12}}
            >
                <Form.Item
                    label="报错"
                    name="name"
                    validateStatus="error"
                    help={['报错文案']}
                    rules={[{required: true, message: '必填'}]}
                >
                    <Select showSearch optionFilterProp="label" style={{width: 240}} options={options} />
                </Form.Item>
            </Form>
            <p />
            <p>禁用</p>
            <Select showSearch disabled style={{width: 240}} options={options} placeholder={'请选择'} />
            <Divider>条件选择</Divider>
            <p>默认</p>
            <Input.Group compact>
                <div
                    style={{
                        width: '76px',
                        height: '32px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'var(--component-color-grayB-active)',
                        color: 'var(--text-color-tertiary)',
                        border: '1px solid var(--component-color-border)',
                    }}
                >
                    主题名称
                </div>
                <Select style={{width: 240}} options={options} />
            </Input.Group>
            <p />
            <p>禁用</p>
            <Input.Group compact>
                <div
                    style={{
                        width: '76px',
                        height: '32px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'var(--component-color-grayB-active)',
                        color: 'var(--text-color-tertiary)',
                        border: '1px solid var(--component-color-border)',
                    }}
                >
                    主题名称
                </div>
                <Select disabled style={{width: 240}} options={options} placeholder={'请选择'} />
            </Input.Group>
        </BrandProvider>
    );
};

export const BasicDemo = Basic;
export const SizeDemo = Size;
export const MultipleDemo = Multiple;
export const MultipleDisplayInPopupDemo = MultipleDisplayInPopup;
export const MulipleDisplayInPopupByHandDemo = MulipleDisplayInPopupByHand;
export const SelectUsersDemo = SelectUsers;
export const TestCaseDemo = TestCase;
export const SelectAllDemo = SelectAll;


export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/select-cn/">Antd Select API</a>
        </>
    );
};


