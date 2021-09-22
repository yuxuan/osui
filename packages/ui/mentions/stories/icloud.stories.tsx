/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Mentions from '../src';

export default {
    title: '数据录入/Mentions 提及',
    component: Mentions,
};

export const Demo = () => {

    const {Option} = Mentions;

    function onChange(value) {
        console.log('Change:', value);
    }

    function onSelect(option) {
        console.log('select', option);
    }

    return (
        <>
            <p>见业务组件库icloud-ui的用户选择器</p>
            <p></p>
            <p></p>
            <p>以下为Antd原生demo</p>
            <Mentions
                style={{width: '100%'}}
                onChange={onChange}
                onSelect={onSelect}
                defaultValue="@afc163"
            >
                <Option value="afc163">afc163</Option>
                <Option value="zombieJ">zombieJ</Option>
                <Option value="yesmeck">yesmeck</Option>
            </Mentions>
        </>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/mentions-cn/">Antd Mentions API</a>
        </>
    );
};

