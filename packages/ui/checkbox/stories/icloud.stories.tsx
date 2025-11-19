/* eslint-disable import/no-extraneous-dependencies */
import React, {useState} from 'react';
import BrandProvider from '@osui/brand-provider';
import Divider from '@osui/divider';
import {Flex} from 'antd';
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
    const optionsWithDisabled = [
        {label: 'Apple', value: 'Apple'},
        {label: 'Pear', value: 'Pear'},
        {label: 'Orange', value: 'Orange', disabled: true},
    ];

    const [indeterminate1, setindeterminate1] = useState(true);
    const [indeterminate2, setindeterminate2] = useState(true);
    return (
        <BrandProvider>
            <div style={{padding: 30}}>
                <Divider>基础用法</Divider>
                <h3>常规</h3>
                <p style={{display: 'flex', gap: 80, paddingLeft: 20}}>
                    <span>未选</span>
                    <Flex gap={16}>
                        <Checkbox />
                        <Checkbox disabled />
                    </Flex>
                </p>
                <p style={{display: 'flex', gap: 80, paddingLeft: 20}}>
                    <span>已选</span>
                    <Flex gap={16}>
                        <Checkbox defaultChecked />
                        <Checkbox defaultChecked disabled />
                    </Flex>
                </p>
                <p style={{display: 'flex', gap: 80, paddingLeft: 20}}>
                    <span>半选</span>
                    <Flex gap={16}>
                        <Checkbox indeterminate={indeterminate1} onChange={e => setindeterminate1(e.target.checked)} />
                        <Checkbox indeterminate disabled />
                    </Flex>
                </p>
                <h3>带文字</h3>
                <p style={{display: 'flex', gap: 80, paddingLeft: 20}}>
                    <span>未选</span>
                    <Flex gap={16}>
                        <Checkbox>选项一</Checkbox>
                        <Checkbox disabled>选项二</Checkbox>
                    </Flex>
                </p>
                <p style={{display: 'flex', gap: 80, paddingLeft: 20}}>
                    <span>已选</span>
                    <Flex gap={16}>
                        <Checkbox defaultChecked>选项一</Checkbox>
                        <Checkbox defaultChecked disabled>选项二</Checkbox>
                    </Flex>
                </p>
                <p style={{display: 'flex', gap: 80, paddingLeft: 20}}>
                    <span>半选</span>
                    <Flex gap={16}>
                        <Checkbox indeterminate={indeterminate2} onChange={e => setindeterminate2(e.target.checked)}>
                            选项一
                        </Checkbox>
                        <Checkbox indeterminate disabled>选项二</Checkbox>
                    </Flex>
                </p>

                <Divider>多选组合</Divider>
                <p>横向</p>
                <Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
                <p />
                <Group
                    options={optionsWithDisabled}
                    disabled
                    defaultValue={['Apple']}
                    onChange={onChange}
                />
                <p />
                <p>竖向</p>
                <Group
                    options={optionsWithDisabled}
                    defaultValue={['Apple']}
                    onChange={onChange}
                    style={{flexDirection: 'column'}}
                />

                <Divider>卡片多选</Divider>
                <p>默认</p>
                <Group defaultValue={['a']}>
                    <Checkbox.Card
                        value={'a'}
                        title="自动规则打分"
                        description="使用百度智能云 IAM 进行身份管理和访问权限控制，不兼容 OpenAI SDK"
                    />
                    <Checkbox.Card
                        value={'b'}
                        title="自动规则打分"
                        description="使用百度智能云 IAM 进行身份管理和访问权限控制，不兼容 OpenAI SDK"
                    />
                </Group>
                <p></p>
                <p>禁用</p>
                <Group defaultValue={['a']}>
                    <Checkbox.Card
                        value={'a'}
                        title="自动规则打分"
                        description="使用百度智能云 IAM 进行身份管理和访问权限控制，不兼容 OpenAI SDK"
                        disabled
                    />
                    <Checkbox.Card
                        value={'b'}
                        title="自动规则打分"
                        description="使用百度智能云 IAM 进行身份管理和访问权限控制，不兼容 OpenAI SDK"
                        disabled
                    />
                </Group>
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

