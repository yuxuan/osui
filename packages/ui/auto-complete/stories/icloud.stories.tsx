import React, { useState } from 'react';
import Divider from '@osui/divider';
import Markdown from '@osui/markdown';
import AutoComplete from '../src';

export default {
    title: '数据录入/AutoComplete 自动完成',
    component: AutoComplete,
};

export const Demo1 = () => {
    const defaultOptions = [
        {value: '一'},
        {value: '二'},
        {value: '三'},
        {value: '四'},
    ];
    const [value, setValue] = useState('');
    const [options, setOptions] = useState(defaultOptions);

    const mockVal = (str, repeat = '一') => {
        return {
            value: `${str}${repeat}`,
        };
    };

    const onSearch = (searchText: string) => {
        setOptions(
            searchText ? [
                mockVal(searchText, '一'),
                mockVal(searchText, '二'),
                mockVal(searchText, '三'),
                mockVal(searchText, '四'),
                mockVal(searchText, '五'),
                mockVal(searchText, '六'),
                mockVal(searchText, '七'),
                mockVal(searchText, '八'),
                mockVal(searchText, '九'),
                mockVal(searchText, '十'),
            ] : []
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
            <p>通过输入关键信息即时联想，选择选项后即完成</p>
            <h3>使用场景</h3>
            <p>需要自动完成时，使用该输入框，用户输入内容，联想相关结果，点击即可选择</p>
            <p><strong>FE说明：</strong>AutoComplete的场景是，输入内容即为value，本质是Input，下拉展示的内容可以设置自动完成的数据源。</p>
            <p><strong>FE说明：</strong>和Select Search的区别是，Select Search只是筛选select里面的内容，最终还是要选中某个选项的</p>
            <Divider>展示</Divider>
            <Divider orientation="left">含推荐功能的输入框</Divider>
            <p>支持输入，同时支持选择推荐内容</p>
            <p>推荐的内容，就是默认的options</p>
            <AutoComplete
                highlightKeyword
                options={options}
                style={{
                    width: 200,
                }}
                onSelect={onSelect}
                onSearch={onSearch}
                placeholder="input here"
            />
            <Divider orientation="left">受控型</Divider>
            <p>通过onChange来改变value</p>
            <AutoComplete
                value={value}
                options={options}
                style={{width: 200}}
                onSelect={onSelect}
                onSearch={onSearch}
                onChange={onChange}
                placeholder="control mode"
            />
            <p>含推荐和搜索联想功能的输入框感觉也是这个</p>
        </>
    );
};


export const Demo2 = () => {
    const [options, setOptions] = useState([]);

    const mockVal = (str, repeat = '一') => {
        return {
            value: `${str}${repeat}`,
        };
    };

    const onSearch = (searchText: string) => {
        setOptions(
            searchText ? [
                mockVal(searchText, '一'),
                mockVal(searchText, '二'),
                mockVal(searchText, '三'),
                mockVal(searchText, '四'),
                mockVal(searchText, '五'),
                mockVal(searchText, '六'),
                mockVal(searchText, '七'),
                mockVal(searchText, '八'),
                mockVal(searchText, '九'),
                mockVal(searchText, '十'),
            ] : []
        );
    };

    const onSelect = (data: any) => {
        console.log('onSelect', data);
    };

    return (
        <>
            <Divider>展示</Divider>
            <Divider orientation="left">含搜索联想功能的输入框</Divider>
            <p>就是没有defaultOptions</p>
            <p>通过onSearch来展示选项</p>
            <AutoComplete
                options={options}
                style={{
                    width: 200,
                }}
                onSelect={onSelect}
                onSearch={onSearch}
                placeholder="input here"
            />
        </>
    );
};

export const NewProps = () => {
    const content = `
| 参数 | 说明 | 类型 | 默认值
| --- | --- | --- | --- |
| highlightKeyword | 是否在搜索结果内高亮搜索的keyword | boolean | - |
`;
    const content2 = `
### 说明：
\`highlightKeyword\`只能使用在AutoComplete使用options属性的方式，如果使用children的方式，需要自行根据HighlightText组件使用
`;
    return (
        <>
            <h3>新增参数</h3>
            <Markdown content={content} />
            <br />
            <br />
            <Markdown content={content2} />
        </>
    );
};


export const Api = () => {
    return (
        <>
            <a href="https://ant.design/components/auto-complete-cn/">Antd AutoComplete API</a>
        </>
    );
};

