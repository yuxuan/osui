import React from 'react';
import BrandProvider from '@osui/brand-provider';
import Select from '../../src';

export default () => {
    const Option = Select.Option;
    console.log(Option);
    function handleChange(value: string) {
        console.log(`selected ${value}`);
    }
    return (
        <>
            <BrandProvider>
                <Select
                    displayTagsInPopover
                    allowClear={false}
                    mode="multiple"
                    defaultValue="lucy"
                    style={{width: 240}}
                    onChange={handleChange}
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                    <Option value="a">a</Option>
                    <Option value="b">b</Option>
                    <Option value="c">c</Option>
                </Select>
            </BrandProvider>
        </>
    );
};
