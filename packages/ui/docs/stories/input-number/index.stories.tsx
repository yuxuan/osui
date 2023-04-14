/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Form from '@osui/form';
import Input from '@osui/input';
import FlexCentered from '@osui/flex-centered';
import InputNumber from '@osui/input-number';

export default {
    title: '数据录入/InputNumber 数字输入框',
    component: InputNumber,
};

export const Demo = () => {
    const onChange = value => {
        console.log('changed', value);
    };
    return (
        <>
            <h3>基础数字输入框</h3>
            <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
            <br />
            <br />
            <p>禁用样式</p>
            <InputNumber disabled min={1} max={10} defaultValue={3} onChange={onChange} />
            <p></p>
            <h3>加强数组输入框</h3>
            <p>待补充</p>
            <p></p>
            <h3>格式化数组输入框</h3>
            <InputNumber
                defaultValue={1000}
                formatter={value => `¥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={value => value!.replace(/\$\s?|(,*)/g, '')}
                onChange={onChange}
            />
            <p></p>
            <InputNumber
                defaultValue={'100'}
                min={0}
                max={100}
                formatter={value => `${value}%`}
                parser={value => value!.replace('%', '')}
                onChange={onChange}
            />
            <p></p>
            <h3>报错</h3>
            <p>需要确认报错是右侧对齐还是紧挨着组件</p>
            <Form name="demo" wrapperCol={{span: 12}}>
                <Form.Item
                    validateMessageLayout="inline"
                    label="磁盘大小"
                    validateStatus="error"
                    help={'格式错误，请按提示规则录入'}
                >
                    <InputNumber tailLabel="GB" />
                </Form.Item>
                <Form.Item
                    validateMessageLayout="inline"
                    label="测试测试"
                    validateStatus="error"
                    help={'格式错误，请按提示规则录入'}
                >
                    <Input />
                </Form.Item>
            </Form>
        </>
    );
};

const InputNumberCompact = InputNumber.InputNumberCompact;

export const InputNumberStrongDemo = () => {
    return (
        <>
            <InputNumberCompact />
            <br />
            <br />
            <InputNumberCompact disabled />
            <p></p>
            <h3>报错</h3>
            <p>需要确认报错是右侧对齐还是紧挨着组件</p>
            <Form name="demo" wrapperCol={{span: 12}}>
                <Form.Item
                    validateMessageLayout="inline"
                    label="磁盘大小"
                    validateStatus="error"
                    help={'格式错误，请按提示规则录入'}
                >
                    <FlexCentered>
                        <InputNumberCompact tailLabel="GB" />
                    </FlexCentered>
                </Form.Item>
                <Form.Item
                    validateMessageLayout="inline"
                    label="测试测试"
                    validateStatus="error"
                    help={'格式错误，请按提示规则录入'}
                >
                    <InputNumberCompact />
                </Form.Item>
            </Form>
        </>
    );
};


export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/input-number-cn/">Antd InputNumber API</a>
        </>
    );
};

