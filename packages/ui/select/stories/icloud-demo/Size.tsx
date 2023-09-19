import React from 'react';
import Space from '@osui/space';
import BrandProvider from '@osui/brand-provider';
import Select from '../../src';

export default function Size() {
    const Option = Select.Option;
    function handleChange(value: string) {
        console.log(`selected ${value}`);
    }

    return (
        <BrandProvider>
            <Space>
                <Select placeholder="small size" style={{width: 240}} size="small">
                    <Option value="lucy">Lucy</Option>
                </Select>
                <Select placeholder="default size" style={{width: 240}} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
                <Select placeholder="large size" style={{width: 240}} onChange={handleChange} size="large">
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
            </Space>
        </BrandProvider>
    );
}
