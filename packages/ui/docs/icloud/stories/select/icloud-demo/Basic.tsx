/* eslint-disable no-console */
import React from 'react';
import BrandProvider from '@osui/brand-provider';
import Select from '@osui/select';

export default () => {
    const Option = Select.Option;
    function handleChange(value: string) {
        console.log(`selected ${value}`);
    }

    return (
        <>
            <BrandProvider brand="icloud">
                <h2>基础下拉</h2>
                <p>placeholder</p>
                <Select placeholder="请选择" style={{width: 240}} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
                <br />
                <br />
                <p>有默认值</p>
                <Select defaultValue="lucy" style={{width: 240}} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
                <br />
                <br />
                <p>disabled</p>
                <Select defaultValue="lucy" style={{width: 240}} disabled>
                    <Option value="lucy">Lucy</Option>
                </Select>
                <br />
                <br />
                <p>loading</p>
                <Select defaultValue="lucy" style={{width: 240}} loading>
                    <Option value="lucy">Lucy</Option>
                </Select>
                <br />
                <br />
                <p>无边框样式</p>
                <Select defaultValue="lucy" style={{width: 240}} noBorder>
                    <Option value="lucy">Lucy</Option>
                </Select>
                <br />
                <br />
                <p>内容为空</p>
                <Select defaultValue="lucy" style={{width: 240}} />
            </BrandProvider>
        </>
    );
};
