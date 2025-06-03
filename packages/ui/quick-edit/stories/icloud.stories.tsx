import React, {useState} from 'react';
import BrandProvider from '@osui/brand-provider';
import {QuickEditInput, QuickEditSelect} from '../src';

export default {
    title: '数据录入/QuickEdit 快速编辑',
};

export const Demo = () => {

    const App = () => {
        // `useInputValue` is a shortcut to pick target value from event.
        const [textValue, setTextValue] = useState('default');
        const [selectValue, setSelectValue] = useState('Jack');
        const [cssVar, setCssVar] = useState(false);
        const theme = {
            cssVar: cssVar && {
                prefix: 'tna',
                key: 'tluafed',
            },
        };

        const style = {width: 240};

        return (
            <BrandProvider theme={theme}>
                <button
                    onClick={() => setCssVar(v => !v)}
                >
                    切换{cssVar ? '不' : ''}使用cssVar
                </button>
                <h2>输入框的快速编辑</h2>
                <QuickEditInput
                    withConfirm
                    style={style}
                    wrapClassName="abc"
                    value={textValue}
                    onChange={value => setTextValue(value)}
                />
                <h2>下拉选择器的快速编辑</h2>
                <QuickEditSelect
                    withConfirm
                    style={style}
                    wrapClassName="abc"
                    value={selectValue}
                    onChange={value => setSelectValue(value)}
                >
                    <QuickEditSelect.Option value="Jack">Jack</QuickEditSelect.Option>
                    <QuickEditSelect.Option value="Marry">Marry</QuickEditSelect.Option>
                    <QuickEditSelect.Option value="Tom">Tom</QuickEditSelect.Option>
                </QuickEditSelect>

            </BrandProvider>
        );
    };

    return <App />;
};

export const FEDemo = () => {

    const App = () => {
        // `useInputValue` is a shortcut to pick target value from event.
        const [textEmptyValue, setTextEmptyValue] = useState('');
        const [textValue, setTextValue] = useState('什么是快乐星球');
        const [selectValue, setSelectValue] = useState('什么是快乐星球');
        const [cssVar, setCssVar] = useState(false);
        const theme = {
            cssVar: cssVar && {
                prefix: 'tna',
                key: 'tluafed',
            },
        };

        const style = {display: 'flex', alignItems: 'center'};

        return (
            <BrandProvider theme={theme}>
                <button
                    onClick={() => setCssVar(v => !v)}
                >
                    切换{cssVar ? '不' : ''}使用cssVar
                </button>
                <h2>前端说明</h2>
                <p>当没有内容的时候，可以加上showEditIcon</p>
                <div style={style}>
                    <div>点我：</div>
                    <QuickEditInput
                        withConfirm
                        showEditIcon
                        wrapClassName="abc"
                        value={textEmptyValue}
                        onChange={value => setTextEmptyValue(value)}
                    />
                </div>
                <br />
                <p>目前都是不带withConfirm的</p>
                <div style={style}>
                    <div>点我：</div>
                    <QuickEditInput
                        wrapClassName="abc"
                        value={textValue}
                        onChange={value => setTextValue(value)}
                    />
                </div>
                <br />
                <br />
                <p>Select需要点一下外面才会提交</p>
                <div style={style}>
                    <div>点我：</div>
                    <QuickEditSelect
                        wrapClassName="abc"
                        value={selectValue}
                        onChange={value => setSelectValue(value)}
                    >
                        <QuickEditSelect.Option value="干饭">干饭</QuickEditSelect.Option>
                        <QuickEditSelect.Option value="睡觉">睡觉</QuickEditSelect.Option>
                        <QuickEditSelect.Option value="玩游戏">玩游戏</QuickEditSelect.Option>
                        <QuickEditSelect.Option value="写代码">写代码</QuickEditSelect.Option>
                    </QuickEditSelect>
                </div>

            </BrandProvider>
        );
    };

    return <App />;
};
