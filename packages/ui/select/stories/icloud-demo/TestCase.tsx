import React from 'react';
import BrandProvider from '@osui/brand-provider';
import Select from '../../src';

export default () => {
    const Option = Select.Option;
    return (
        <BrandProvider brand="icloud">
            <p>最短的时候</p>
            <Select defaultValue="lucy">
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                    Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>

            <p>下拉内容10条</p>
            <Select defaultValue="lucy" style={{width: 240}}>
                <Option value="lucy1">Lucy1</Option>
                <Option value="lucy2">Lucy2</Option>
                <Option value="lucy3">Lucy3</Option>
                <Option value="lucy4">Lucy4</Option>
                <Option value="lucy5">Lucy5</Option>
                <Option value="lucy6">Lucy6</Option>
                <Option value="lucy7">Lucy7</Option>
                <Option value="lucy8">Lucy8</Option>
                <Option value="lucy9">Lucy9</Option>
                <Option value="lucy10">Lucy10</Option>
                <Option value="lucy11">Lucy11</Option>
                <Option value="lucy12">Lucy12</Option>
            </Select>


            <p>下拉内容10条 关闭virtual</p>
            <Select defaultValue="lucy" style={{width: 240}} virtual={false}>
                <Option value="lucy1">Lucy1</Option>
                <Option value="lucy2">Lucy2</Option>
                <Option value="lucy3">Lucy3</Option>
                <Option value="lucy4">Lucy4</Option>
                <Option value="lucy5">Lucy5</Option>
                <Option value="lucy6">Lucy6</Option>
                <Option value="lucy7">Lucy7</Option>
                <Option value="lucy8">Lucy8</Option>
                <Option value="lucy9">Lucy9</Option>
                <Option value="lucy10">Lucy10</Option>
                <Option value="lucy11">Lucy11</Option>
                <Option value="lucy12">Lucy12</Option>
            </Select>

            <p>多选</p>
            <p>antd issue: https://github.com/ant-design/ant-design/issues/19828</p>
            <Select
                showSearch
                mode="multiple"
                showArrow={false}
                placeholder="筛选代码库"
                maxTagCount={0}
                maxTagPlaceholder={() => null}
                style={{width: 240}}
            >
                <Option value="lucy1">Lucy221</Option>
                <Option value="lucy2">Lucy2</Option>
                <Option value="lucy3">Lucy3</Option>
                <Option value="lucy4">Lucy4</Option>
                <Option value="lucy5">Lucy5</Option>
                <Option value="lucy6">Lucy6</Option>
                <Option value="lucy7">Lucy7</Option>
                <Option value="lucy8">Lucy8</Option>
                <Option value="lucy9">Lucy9</Option>
                <Option value="lucy10">Lucy10</Option>
                <Option value="lucy11">Lucy11</Option>
                <Option value="lucy12">Lucy12</Option>
            </Select>

            <p></p>
            <p>可选择时，里面内容的颜色应该是placeholder</p>
            <Select
                showSearch
                style={{width: 200}}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                filterSort={
                    (optionA, optionB) => optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                }
            >
                <Option value="1">Not Identified</Option>
                <Option value="2">Closed</Option>
                <Option value="3">Communicated</Option>
                <Option value="4">Identified</Option>
                <Option value="5">Resolved</Option>
                <Option value="6">Cancelled</Option>
            </Select>
        </BrandProvider>
    );
};
