/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import BrandProvider from '@osui/brand-provider';
import Divider from '@osui/divider';
import Checkbox from '../src';

const Group = Checkbox.Group;

export default {
    title: '数据录入/[new_dev]复选框 Checkbox',
    component: Checkbox,
};

export const Demo = () => {
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
        <BrandProvider>
            <div style={{padding: 30}}>
                <Divider>基础用法</Divider>
                <h3>常规</h3>
                <p style={{display: 'flex', gap: 80, paddingLeft: 20}}>
                    <span>未选</span>
                    <section>
                        <Checkbox />
                        <Checkbox disabled />
                    </section>
                </p>
                <p style={{display: 'flex', gap: 80, paddingLeft: 20}}>
                    <span>已选</span>
                    <section>
                        <Checkbox defaultChecked />
                        <Checkbox defaultChecked disabled />
                    </section>
                </p>
                <p style={{display: 'flex', gap: 80, paddingLeft: 20}}>
                    <span>半选</span>
                    <section>
                        <Checkbox indeterminate />
                        <Checkbox indeterminate disabled />
                    </section>
                </p>
                <h3>带文字</h3>
                <p style={{display: 'flex', gap: 80, paddingLeft: 20}}>
                    <span>未选</span>
                    <section>
                        <Checkbox>选项一</Checkbox>
                        <Checkbox disabled>选项二</Checkbox>
                    </section>
                </p>
                <p style={{display: 'flex', gap: 80, paddingLeft: 20}}>
                    <span>已选</span>
                    <section>
                        <Checkbox defaultChecked>选项一</Checkbox>
                        <Checkbox defaultChecked disabled>选项二</Checkbox>
                    </section>
                </p>
                <p style={{display: 'flex', gap: 80, paddingLeft: 20}}>
                    <span>半选</span>
                    <section>
                        <Checkbox indeterminate>选项一</Checkbox>
                        <Checkbox indeterminate disabled>选项二</Checkbox>
                    </section>
                </p>

                <Divider>多选组合</Divider>
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

                <Divider>卡片多选</Divider>
                <p>默认</p>
                <p style={{display: 'flex', gap: 80, paddingLeft: 20}}>
                    <span>未选</span>
                    <section>
                        <Checkbox />
                        <Checkbox disabled />
                    </section>
                </p>
                <p style={{display: 'flex', gap: 80, paddingLeft: 20}}>
                    <span>已选</span>
                    <section>
                        <Checkbox defaultChecked />
                        <Checkbox defaultChecked disabled />
                    </section>
                </p>
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

