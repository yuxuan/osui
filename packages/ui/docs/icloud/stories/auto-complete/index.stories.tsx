import React, { useState } from 'react';
import AutoComplete from '@osui/auto-complete';

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
