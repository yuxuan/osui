
import React from 'react';
import { IconSearch } from '@osui/icons';
import Input from '../src';
const { TextArea } = Input;

export default {
    title: '通过验收/Input 输入框',
};

export const Demo = () => {
    return (
        <>
            <h2></h2>
            <Input style={{ width: 200 }} placeholder="请输入" />
            <br />
            <br />
            <Input
                style={{ width: 200 }}
                placeholder="请输入搜索关键字"
                suffix={
                    <IconSearch />
                }
            />
            <br />
            <br />
            <Input
                disabled
                style={{ width: 200 }}
                placeholder="请输入搜索关键字"
            />
            <br />
            <br />
            <TextArea style={{ width: 500, height: 150 }} placeholder="请输入" />
            <br />
            <br />
            <Input.Password style={{ width: 500 }} placeholder="请输入" />
        </>);
};

export const Size = () => {
    return (
        <>
            <Input style={{ width: 200 }} placeholder="small size" size="small" />
            <br />
            <br />
            <Input style={{ width: 200 }} placeholder="default size" />
            <br />
            <br />
            <Input style={{ width: 200 }} placeholder="large size" size="large" />
        </>);
};
