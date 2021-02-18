import React from 'react';
import {Space} from 'antd';
import Select from '@osui/select';

export default {
    title: '通过验收/Select 选择器',
};

export const Demo = () => {
    const Option = Select.Option;
    function handleChange(value: string) {
        console.log(`selected ${value}`);
    }

    return (
        <Space>
            <Select placeholder="请选择" style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                    Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                    Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <Select defaultValue="lucy" style={{ width: 120 }} disabled>
                <Option value="lucy">Lucy</Option>
            </Select>
            <Select defaultValue="lucy" style={{ width: 120 }} loading>
                <Option value="lucy">Lucy</Option>
            </Select>
            <Select defaultValue="lucy" style={{ width: 120 }} noBorder>
                <Option value="lucy">Lucy</Option>
            </Select>
        </Space>
    );
};


export const Size = () => {
    const Option = Select.Option;
    function handleChange(value: string) {
        console.log(`selected ${value}`);
    }

    return (
        <Space>
            <Select placeholder="small size" style={{ width: 120 }} size="small">
                <Option value="lucy">Lucy</Option>
            </Select>
            <Select placeholder="default size" style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                    Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <Select placeholder="large size" style={{ width: 120 }} onChange={handleChange} size="large">
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                    Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
        </Space>
    );
};

export const MultipleDemo = () => {
    const Option = Select.Option;
    function handleChange(value: string) {
        console.log(`selected ${value}`);
    }

    return (
        <>
            <p>默认多选使用方式：</p>
            <Select mode="multiple" defaultValue="lucy" style={{ width: 560 }} onChange={handleChange} allowClear>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                    Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <br />
            <br />
            <p>不带allowClear的做法：</p>
            <Select
                mode="multiple"
                defaultValue="lucy"
                style={{ width: 560 }}
                onChange={handleChange}
                allowClear={false}
            >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                    Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <br />
            <br />
            <p>不带下拉箭头的做法：</p>
            <Select
                mode="multiple"
                defaultValue="lucy"
                style={{ width: 560 }}
                onChange={handleChange}
                allowClear={false}
                showArrow={false}
            >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                    Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
        </>
    );
};


export const Test = () => {
    const SelectSearch = () => {
        const { Option } = Select;

        function onChange(value) {
            console.log(`selected ${value}`);
        }

        function onBlur() {
            console.log('blur');
        }

        function onFocus() {
            console.log('focus');
        }

        function onSearch(val) {
            console.log('search:', val);
        }

        return (
            <Select
                showSearch
                showArrow={false}
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
            </Select>
        );
    };

    const MultiSelect = () => {

        const { Option } = Select;

        const children = [];
        for (let i = 10; i < 36; i++) {
            children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }

        function handleChange(value) {
            console.log(`selected ${value}`);
        }

        return (
            <>
                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    defaultValue={['a10', 'c12']}
                    onChange={handleChange}
                >
                    {children}
                </Select>
                <br />
            </>
        );
    };
}