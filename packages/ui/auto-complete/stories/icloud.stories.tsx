import React, { useState } from 'react';
import Divider from '@osui/divider';
import AutoComplete from '../src';

export default {
    title: '通过验收/AutoComplete 自动完成',
    component: AutoComplete,
};

export const Demo = () => {
    const [value, setValue] = useState('');
    const [options, setOptions] = useState([]);

    const mockVal = (str, repeat = 1) => {
        return {
            value: str.repeat(repeat),
        };
    };

    const onSearch = (searchText: string) => {
        setOptions(
            searchText ? [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)] : []
        );
    };

    const onSelect = (data: any) => {
        console.log('onSelect', data);
    };

    const onChange = (data: any) => {
        setValue(data);
    };

    return (
        <>
            <p>AutoComplete的场景是，输入内容即为value，本质是Input，下拉展示的内容可以设置自动完成的数据源。</p>
            <p>和Select Search的区别是，Select Search只是筛选select里面的内容，最终还是要选中某个选项的</p>
            <AutoComplete
                options={options}
                style={{
                    width: 200,
                }}
                onSelect={onSelect}
                onSearch={onSearch}
                placeholder="input here"
            />
            <br />
            <br />
            <Divider orientation="left">受控型</Divider>
            <p>通过onChange来改变value</p>
            <AutoComplete
                value={value}
                options={options}
                style={{
                    width: 200,
                }}
                onSelect={onSelect}
                onSearch={onSearch}
                onChange={onChange}
                placeholder="control mode"
            />
        </>
    );
};
