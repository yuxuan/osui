
import React from 'react';
import { IconSearchOutlined } from '@osui/icons';
import Input from '@osui/input';
const { TextArea } = Input;

export default {
    title: 'Input',
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
                    <IconSearchOutlined />
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
