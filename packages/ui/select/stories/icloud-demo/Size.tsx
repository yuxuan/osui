import React from 'react';
import Space from '@osui/space';
import BrandProvider from '@osui/brand-provider';
import Select from '../../src';

export default function Size() {
    function handleChange(value: string) {
        console.log(`selected ${value}`);
    }

    return (
        <BrandProvider>
            <Space>
                <Select
                    options={[
                        {label: 'Jack', value: 'jack'},
                        {label: 'Lucy', value: 'lucy'},
                        {label: 'disabled', value: 'disabled', disabled: true},
                        {label: 'Yiminghe', value: 'yiminghe'},
                    ]}
                    placeholder="small size"
                    style={{width: 240}}
                    size="small"
                />
                <Select
                    options={[
                        {label: 'Jack', value: 'jack'},
                        {label: 'Lucy', value: 'lucy'},
                        {label: 'disabled', value: 'disabled', disabled: true},
                        {label: 'Yiminghe', value: 'yiminghe'},
                    ]}
                    placeholder="default size"
                    style={{width: 240}}
                    onChange={handleChange}
                />
                <Select
                    options={[
                        {label: 'Jack', value: 'jack'},
                        {label: 'Lucy', value: 'lucy'},
                        {label: 'disabled', value: 'disabled', disabled: true},
                        {label: 'Yiminghe', value: 'yiminghe'},
                    ]}
                    placeholder="large size"
                    style={{width: 240}}
                    onChange={handleChange}
                    size="large"
                />
            </Space>
        </BrandProvider>
    );
}
