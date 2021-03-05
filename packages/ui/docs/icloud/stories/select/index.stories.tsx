import React from 'react';
import Space from '@osui/space';
import BrandProvider from '@osui/brand-provider';
import Select from '@osui/select';

export default {
    title: '数据录入/Select 选择器',
};

export const Demo = () => {
    const Option = Select.Option;
    function handleChange(value: string) {
        console.log(`selected ${value}`);
    }

    return (
        <BrandProvider brand="icloud">
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
                <Select defaultValue="lucy" style={{ width: 120 }} />
            </Space>
        </BrandProvider>
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
