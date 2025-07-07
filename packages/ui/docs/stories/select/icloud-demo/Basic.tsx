/* eslint-disable no-console */
import React from 'react';
import BrandProvider from '@osui/brand-provider';
import Select from '@osui/select';

export default () => {
    function handleChange(value: string) {
        console.log(`selected ${value}`);
    }

    return (
        <>
            <BrandProvider brand="icloud">
                <h2>基础下拉</h2>
                <p>placeholder</p>
                <Select
                    placeholder="请选择"
                    style={{width: 240}}
                    onChange={handleChange}
                    options={[
                        {label: 'Lucy', value: 'lucy'},
                        {label: 'Jack', value: 'jack'},
                        {label: 'Disabled', value: 'disabled', disabled: true, disabledReason: '已禁用'},
                        {label: 'Yiminghe', value: 'yiminghe'},
                    ]}
                />
                <br />
                <br />
                <p>有默认值</p>
                <Select
                    defaultValue="lucy"
                    style={{width: 240}}
                    onChange={handleChange}
                    open
                    mode="multiple"
                    options={[
                        {label: 'Lucy', value: 'lucy'},
                        {label: 'Jack', value: 'jack'},
                        {label: 'Disabled', value: 'disabled', disabled: true, disabledReason: '已禁用'},
                        {label: 'Yiminghe', value: 'yiminghe'},
                    ]}
                />
                <br />
                <br />
                <p>disabled</p>
                <Select
                    defaultValue="lucy"
                    style={{width: 240}}
                    disabled
                    options={[
                        {label: 'Lucy', value: 'lucy'},
                    ]}
                />
                <br />
                <br />
                <p>loading</p>
                <Select
                    defaultValue="lucy"
                    style={{width: 240}}
                    loading
                    options={[
                        {label: 'Lucy', value: 'lucy'},
                    ]}
                />
                <br />
                <br />
                <p>无边框样式</p>
                <Select
                    defaultValue="lucy"
                    style={{width: 240}}
                    noBorder
                    options={[
                        {label: 'Lucy', value: 'lucy'},
                    ]}
                />
                <br />
                <br />
                <p>内容为空</p>
                <Select defaultValue="lucy" style={{width: 240}} />
                <p>支持disableReason</p>
                <Select
                    defaultValue="lucy"
                    options={[
                        {label: 'Lucy', value: 'lucy', disabled: true, disabledReason: '已禁用'},
                        {label: 'Jack', value: 'jack'},
                    ]}
                    style={{width: 240}}
                />
            </BrandProvider>
        </>
    );
};
