/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Form from '@osui/form';
import Input from '@osui/input';
import BrandProvider from '@osui/brand-provider';
import InputNumber from '@osui/input-number';

export default {
    title: '数据录入/数字输入框 InputNumber',
    component: InputNumber,
};

const InputNumberCompact = InputNumber.InputNumberCompact;

export const Demo = () => {
    const onChange = value => {
        console.log('changed', value);
    };
    return (
        <BrandProvider>
            <h3>基础数字输入框</h3>
            <p>默认</p>
            <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
            <br />
            <br />
            <p>报错</p>
            <Form name="demo" wrapperCol={{span: 12}}>
                <Form.Item
                    label="磁盘大小"
                    validateStatus="error"
                    help={'格式错误，请按提示规则录入'}
                >
                    <InputNumber />
                </Form.Item>
            </Form>
            <p>禁用</p>
            <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} disabled />
            <br />
            <br />
            <h3>加强数字输入框</h3>
            <p>默认</p>
            <InputNumberCompact min={0} max={10} />
            <br />
            <br />
            <p>报错</p>
            <Form name="demo" wrapperCol={{span: 12}}>
                <Form.Item
                    label="磁盘大小"
                    validateStatus="error"
                    help={'格式错误，请按提示规则录入'}
                >
                    <InputNumberCompact />
                </Form.Item>
            </Form>
            <p>禁用</p>
            <InputNumberCompact disabled />
            <br />
            <br />
            <h2>组件大小</h2>
            <h3>基础数字输入框</h3>
            <p>小</p>
            <InputNumber size="small" />
            <br />
            <br />
            <p>中</p>
            <InputNumber size="middle" />
            <br />
            <br />
            <p>大</p>
            <InputNumber size="large" />
            <br />
            <br />
            <h3>加强数字输入框</h3>
            <p>小</p>
            <InputNumberCompact size="small" />
            <br />
            <br />
            <p>中</p>
            <InputNumberCompact size="middle" />
            <br />
            <br />
            <p>大</p>
            <InputNumberCompact size="large" />
            <br />
            <br />
        </BrandProvider>
    );
};

export const oldDemo = () => {
    const onChange = value => {
        console.log('changed', value);
    };
    return (
        <BrandProvider>
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
        </BrandProvider>
    );
};


const PlusIcon = () => (
    <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1">
        <title>8.Icon图标✨/2.操作/加</title>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round">
            <g stroke="#151B26">
                <line x1="2" y1="8" x2="14" y2="8" />
                <line x1="2" y1="8" x2="14" y2="8" transform="translate(8, 8) rotate(90) translate(-8, -8)" />
            </g>
        </g>
    </svg>
);

const MinusIcon = () => (
    <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1">
        <title>8.Icon图标✨/2.操作/减@2x</title>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round">
            <g stroke="#151B26">
                <line x1="2" y1="8" x2="14" y2="8" />
            </g>
        </g>
    </svg>
);

export const InputNumberStrongDemo = () => {

    return (
        <BrandProvider>
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
                    <InputNumberCompact
                        plusIcon={<PlusIcon />}
                        minusIcon={<MinusIcon />}
                        tailLabel="GB"
                    />
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
        </BrandProvider>
    );
};


export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/input-number-cn/">Antd InputNumber API</a>
        </>
    );
};

