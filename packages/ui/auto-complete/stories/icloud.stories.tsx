import React, {useState, useCallback} from 'react';
import Divider from '@osui/divider';
import Markdown from '@osui/markdown';
import BrandProvider from '@osui/brand-provider';
import AutoComplete from '../src';

const Blockquote = ({children}) => (
    <blockquote style={{
        background: 'var(--color-brand-1)',
        borderRadius: '3px',
        borderLeft: '5px solid var(--color-brand-6)',
        margin: '30px 0',
        padding: '30px',
    }}
    >
        {children}
    </blockquote>
);

export default {
    title: '数据录入/AutoComplete 自动完成',
    component: AutoComplete,
};

export const Demo1 = () => {
    const [cssVar, setCssVar] = useState(false);
    const theme = {
        cssVar: cssVar && {
            prefix: 'tna',
            key: 'tluafed',
        },
    };

    const defaultOptions = [
        {value: '一'},
        {value: '二'},
        {value: '三'},
        {value: '四'},
    ];
    const defaultOtherOptions = [
        {value: '操作命令一'},
        {value: '操作命令二'},
        {value: '操作命令三'},
        {value: '操作命令四'},
    ];
    const [options, setOptions] = useState(defaultOptions);
    const [defaultEmptyOptions, setDefaultEmptyOptions] = useState([]);
    const [otherOptions, setDefaultOtherOptions] = useState(defaultOtherOptions);
    const [onChangeValue, setonChangeValue] = useState();
    const [onSearchValue, setonSearchValue] = useState<string>('');
    const [onSelectValue, setonSelectValue] = useState();

    const mockVal = (str, repeat = '一') => {
        return {
            value: `${str}${repeat}`,
        };
    };

    const onSearch = useCallback(
        searchText => {
            setonSearchValue(searchText);
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
        },
        []
    );
    const defaultEmptyOptionsOnSearch = useCallback(
        searchText => {
            setDefaultEmptyOptions(
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
        },
        []
    );
    const defaultOtherOptionsOnSearch = (searchText: string) => {
        setDefaultOtherOptions(
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
            ] : defaultOtherOptions
        );
    };

    const onSelect = (data: any) => {
        setonSelectValue(data);
        console.log('onSelect', data);
    };

    const onChange = (data: any) => {
        setonChangeValue(data);
    };

    return (
        <BrandProvider brand="icloud" theme={theme}>
            <p>通过输入关键信息即时联想，选择选项后即完成</p>
            <h3>使用场景</h3>
            <p>需要自动完成时，使用该输入框，用户输入内容，联想相关结果，点击即可选择</p>
            <Blockquote>
                <p><strong>FE说明：</strong>AutoComplete的场景是，输入内容即为value，本质是Input，下拉展示的内容可以设置自动完成的数据源。</p>
                <p><strong>FE说明：</strong>和Select Search的区别是，Select Search只是筛选select里面的内容，最终还是要选中某个选项的</p>
            </Blockquote>
            <button
                onClick={() => setCssVar(v => !v)}
            >
                切换{cssVar ? '不' : ''}使用cssVar
            </button>
            <Divider>展示</Divider>
            <h2>含搜索功能的下拉单选</h2>
            <p>本质：传了allowClear、showArrow true。有默认的options，onSearch的时候返回更新的options</p>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <AutoComplete
                    allowClear
                    showArrow
                    options={options}
                    style={{
                        width: 240,
                    }}
                    onChange={onChange}
                    onSelect={onSelect}
                    onSearch={onSearch}
                    placeholder="input here"
                />
                <div style={{width: '100px'}} />
                <div>
                    <p>onChange: {onChangeValue}</p>
                    <p>onSearch: {onSearchValue}</p>
                    <p>onSelect: {onSelectValue}</p>
                </div>
            </div>
            <h2>含推荐功能的输入框</h2>
            <p>本质：传allowClear、showArrow false。有默认的options，不调用onSearch更新options，options是默认建议的</p>
            <p>支持输入，同时支持选择推荐内容</p>
            <p>推荐的内容，就是默认的options</p>
            <p>注意看onChange、onSearch、onSelect的回调</p>
            <AutoComplete
                options={options}
                onChange={onChange}
                onSelect={onSelect}
                style={{
                    width: 240,
                }}
                placeholder="input here"
            />
            <br />
            <br />
            <h2>含搜索联想功能的输入框</h2>
            <p>本质：默认的时候没有options</p>
            <AutoComplete
                options={defaultEmptyOptions}
                onChange={onChange}
                onSelect={onSelect}
                onSearch={defaultEmptyOptionsOnSearch}
                style={{
                    width: 240,
                }}
                placeholder="input here"
            />
            <br />
            <br />
            <h2>含推荐和搜索联想功能的输入框</h2>
            <p>本质：默认有options，搜索时返回新的options，注意searchText为空时要把默认options设置回来</p>
            <AutoComplete
                options={otherOptions}
                onChange={onChange}
                onSelect={onSelect}
                onSearch={defaultOtherOptionsOnSearch}
                style={{
                    width: 240,
                }}
                placeholder="input here"
            />
        </BrandProvider>
    );
};

export const Api = () => {
    const content = `
| 参数 | 说明 | 类型 | 默认值
| --- | --- | --- | --- |
| highlightKeyword | 是否在搜索结果内高亮搜索的keyword | boolean | true |
`;
    const content2 = `
\`highlightKeyword\`只能使用在AutoComplete使用options属性的方式，如果使用children的方式，需要自行根据HighlightText组件使用
`;
    return (
        <>
            <h2>Antd Props</h2>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/auto-complete-cn/">Antd AutoComplete API</a>
            <br />
            <br />
            <h2>新增参数</h2>
            <Markdown content={content} />
            <br />
            <br />
            <Markdown content={content2} />
        </>
    );
};

