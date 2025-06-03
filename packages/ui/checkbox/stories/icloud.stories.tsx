/* eslint-disable import/no-extraneous-dependencies */
import React, {useState} from 'react';
import BrandProvider from '@osui/brand-provider';
import Checkbox from '../src';

const Group = Checkbox.Group;

export default {
    title: '数据录入/Checkbox 复选框',
};

export const Demo = () => {
    const [cssVar, setCssVar] = useState(false);
    const theme = {
        cssVar: cssVar && {
            prefix: 'tna',
            key: 'tluafed',
        },
    };
    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }

    const plainOptions = ['Apple', 'Pear', 'Orange'];
    const options = [
        {label: 'Apple', value: 'Apple'},
        {label: 'Pear', value: 'Pear'},
        {label: 'Orange', value: 'Orange'},
    ];
    const optionsWithDisabled = [
        {label: 'Apple', value: 'Apple'},
        {label: 'Pear', value: 'Pear'},
        {label: 'Orange', value: 'Orange', disabled: false},
    ];
    return (
        <BrandProvider theme={theme}>
            <div style={{padding: 30}}>
                <button
                    onClick={() => setCssVar(v => !v)}
                >
                    切换{cssVar ? '不' : ''}使用cssVar
                </button>

                <h3>1、基础用法</h3>
                <p>默认状态</p>
                <section>
                    <Checkbox>Checkbox</Checkbox>
                    <Checkbox disabled>Checkbox</Checkbox>
                </section>
                <p />
                <p>选中状态</p>
                <section>
                    <Checkbox defaultChecked>Checkbox</Checkbox>
                    <Checkbox defaultChecked disabled>Checkbox</Checkbox>
                </section>
                <p />
                <p>部分选中状态</p>
                <Checkbox indeterminate>Checkbox</Checkbox>
                <Checkbox indeterminate disabled>Checkbox</Checkbox>
                <p />
                <h3>2、组合</h3>
                <Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
                <br />
                <br />
                <Group options={options} defaultValue={['Pear']} onChange={onChange} />
                <br />
                <br />
                <Group
                    options={optionsWithDisabled}
                    disabled
                    defaultValue={['Apple']}
                    onChange={onChange}
                />
            </div>
        </BrandProvider>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/checkbox-cn/">Antd Checkbox API</a>
        </>
    );
};

