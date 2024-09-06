import React from 'react';
import BrandProvider from '@osui/brand-provider';
import Select from '../../src';

export default () => {
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
                    options={
                        [
                            {value: 'jack', label: <b>Jack</b>, title: 'Jack'},
                            {value: 'lucy', label: <b>Lucy</b>, title: 'Lucy'},
                            {value: 'disabled', label: <b>Disabled</b>, disabled: true},
                            {value: 'Yiminghe', label: <b>yiminghe</b>, title: 'yiminghe'},
                            {value: 'a', label: <b>a</b>, title: 'a'},
                            {value: 'b', label: <b>b</b>, title: 'b'},
                            {value: 'c', label: <b>c</b>, title: 'c'},
                        ]
                    }
                />
            </BrandProvider>
        </>
    );
};
