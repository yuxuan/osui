/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import BrandProvider from '@osui/brand-provider';
import Divider from '@osui/divider';
import Select from '@osui/select';
import {
    SelectUsers,
    MulipleDisplayInPopupByHand,
    MultipleDisplayInPopup,
    Multiple,
    Size,
    Basic,
    TestCase,
    SelectAll,
} from './icloud-demo';

export default {
    title: '数据录入/选择器 Select',
};

export const BasicDemo = Basic;
export const SizeDemo = Size;
export const MultipleDemo = Multiple;
export const MultipleDisplayInPopupDemo = MultipleDisplayInPopup;
export const MulipleDisplayInPopupByHandDemo = MulipleDisplayInPopupByHand;
export const SelectUsersDemo = SelectUsers;
export const TestCaseDemo = TestCase;
export const SelectAllDemo = SelectAll;

export const Demo = () => {

    const options = [{label: '选项1', value: '1'}, {label: '选项2', value: '2'}];
    return (
        <BrandProvider>
            <Divider>基本选择器</Divider>
            <p>默认</p>
            <Select style={{width: 240}} options={options} />
            <p />
            <p>报错</p>
            <Select status="error" style={{width: 240}} options={options} />
            <p />
            <p>禁用</p>
            <Select disabled style={{width: 240}} options={options} />
            <Divider>多选</Divider>
            <p>默认</p>
            <Select mode="multiple" style={{width: 240}} options={options} />
            <p />
            <p>带全选</p>
            <Select mode="multiple" style={{width: 240}} options={options} />
            <p />
            <p>禁用</p>
            <Select mode="multiple" disabled style={{width: 240}} options={options} />
            <Divider>可搜索</Divider>
            <p>默认</p>
            <Select showSearch style={{width: 240}} options={options} />
            <p />
            <p>报错</p>
            <Select status="error" showSearch style={{width: 240}} options={options} />
            <p />
            <p>禁用</p>
            <Select showSearch disabled style={{width: 240}} options={options} />
            <Divider>条件选择</Divider>
            <p>默认</p>
            <Select style={{width: 240}} options={options} />
            <p />
            <p>禁用</p>
            <Select disabled style={{width: 240}} options={options} />
        </BrandProvider>
    );
};


export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/select-cn/">Antd Select API</a>
        </>
    );
};


