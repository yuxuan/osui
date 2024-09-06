import React from 'react';
import BrandProvider from '@osui/brand-provider';
import Select from '../../src';

export default () => {
    return (
        <BrandProvider brand="icloud">
            <p>最短的时候</p>
            <Select
                defaultValue="lucy"
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

            <p>下拉内容10条</p>
            <Select
                defaultValue="lucy"
                style={{width: 240}}
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


            <p>下拉内容10条 关闭virtual</p>
            <Select
                defaultValue="lucy"
                style={{width: 240}}
                virtual={false}
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

            <p></p>
            <p>可选择时，里面内容的颜色应该是placeholder</p>
            <Select
                showSearch
                style={{width: 200}}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                    String(option?.children ?? '').toLowerCase().includes(input.toLowerCase())}
                filterSort={
                    (optionA, optionB) =>
                        String(optionA?.children ?? '').toLowerCase().localeCompare(
                            String(optionB?.children ?? '').toLowerCase())
                }
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
    );
};
