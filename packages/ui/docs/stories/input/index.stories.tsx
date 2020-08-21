
import React from 'react';
import { IconSearch } from '@osui/icons';
import '@osui/theme/dist/theme/vars.css';
import Input from '@osui/input';
const { TextArea } = Input;

export default {
    title: 'OSUI-Input',
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
            <TextArea style={{ width: 500, height: 150 }} placeholder="请输入" />
        </>);
};
