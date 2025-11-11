/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import BrandProvider from '@osui/brand-provider';
import Form from '@osui/form';
import Cascader from '../src';

export default {
    title: '数据录入/级联选择 Cascader',
};

const han = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];

export const Demo = () => {
    const options = [
        {
            value: '文本一',
            label: '文本一',
            children: [
                {
                    value: '操作一',
                    label: '操作一',
                    children: [
                        {
                            value: 'xihu',
                            label: 'West Lake',
                        },
                        {
                            value: 'xihu2',
                            label: 'West Lake2',
                        },
                    ],
                },
            ],
        },
        {
            value: '文本二',
            label: '文本二',
            children: [
                {
                    value: 'nanjing',
                    label: 'Nanjing',
                    children: [
                        {
                            value: 'zhonghuamen',
                            label: 'Zhong Hua Men',
                        },
                    ],
                },
            ],
        },
        {
            value: '文本三',
            label: '文本三',
            disabled: true,
            children: [
            ],
        },
    ];

    function onChange(value) {
        console.log(value);
    }

    return (
        <BrandProvider>
            <h3>基础级联选择器</h3>
            <p>默认</p>
            <Cascader
                options={options}
                onChange={onChange}
                placeholder="请选择"
            />
            <p></p>
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
                    <Cascader
                        options={options}
                        onChange={onChange}
                        placeholder="请选择"
                        showSearch
                    />
                </Form.Item>
            </Form>
            <p></p>
            <p>禁用</p>
            <Cascader
                disabled
                options={options}
                onChange={onChange}
                placeholder="请选择"
            />
            <p></p>
            <h3>可搜索级联选择器</h3>
            <p>默认</p>
            <Cascader
                options={options}
                onChange={onChange}
                placeholder="请选择"
                showSearch
            />
            <p></p>
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
                    <Cascader
                        options={options}
                        onChange={onChange}
                        placeholder="请选择"
                        showSearch
                    />
                </Form.Item>
            </Form>
            <p></p>
            <p>禁用</p>
            <Cascader
                disabled
                options={options}
                onChange={onChange}
                placeholder="请选择"
                showSearch
            />
            <p></p>
            <h3>多选级联选择器</h3>
            <p>默认</p>
            <Cascader
                multiple
                options={options}
                onChange={onChange}
                placeholder="请选择"
                showCheckedStrategy={Cascader.SHOW_CHILD}
                showSearch
            />
            <p></p>
            <p>超出限制</p>
            <Cascader
                multiple
                options={options}
                onChange={onChange}
                placeholder="请选择"
                showCheckedStrategy={Cascader.SHOW_CHILD}
                showSearch
                maxTagCount="responsive"
                maxTagTextLength={7}
            />
        </BrandProvider>
    );
};

export const OldDemo = () => {
    const options = [
        {
            value: '操作命令一',
            label: '操作命令一',
            children: [
                {
                    value: '操作命令一',
                    label: '操作命令一',
                    children: [
                        {
                            value: 'xihu',
                            label: 'West Lake',
                        },
                    ],
                },
            ],
        },
        {
            value: '操作命令二',
            label: '操作命令二',
            children: [
                {
                    value: 'nanjing',
                    label: 'Nanjing',
                    children: [
                        {
                            value: 'zhonghuamen',
                            label: 'Zhong Hua Men',
                        },
                    ],
                },
            ],
        },
    ];

    function onChange(value) {
        console.log(value);
    }

    return (
        <BrandProvider>
            <p>基本样式</p>
            <Cascader
                options={options}
                onChange={onChange}
                placeholder="Please select"
                showSearch
            />
            <p></p>
            <p>禁用状态</p>
            <Cascader
                disabled
                options={options}
                onChange={onChange}
                placeholder="Please select"
                showSearch
            />
        </BrandProvider>
    );
};

export const Load = () => {
    const optionLists = han.map(index => ({
        value: `操作命令${index}`,
        label: `操作命令${index}`,
        isLeaf: false,
    }));

    const LazyOptions = () => {
        const [options, setOptions] = React.useState(optionLists);

        const onChange = (value, selectedOptions) => {
            console.log(value, selectedOptions);
        };

        const loadData = selectedOptions => {
            const targetOption = selectedOptions[selectedOptions.length - 1];
            targetOption.loading = true;

            // load options lazily
            setTimeout(() => {
                targetOption.loading = false;
                targetOption.children = [
                    {
                        label: '操作命令一',
                        value: 'dynamic1',
                    },
                    {
                        label: '操作命令二',
                        value: 'dynamic2',
                    },
                ];
                setOptions([...options]);
            }, 1000);
        };

        return (
            <Cascader
                placeholder="Please select"
                options={options}
                loadData={loadData}
                onChange={onChange}
                changeOnSelect
            />
        );
    };
    return (
        <BrandProvider>
            <LazyOptions />
        </BrandProvider>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/cascader-cn/">Antd Cascader API</a>
        </>
    );
};

