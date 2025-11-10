/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Divider from '@osui/divider';
import Flex from '@osui/flex';
import {OutlinedAppstore, OutlinedSetting, OutlinedSmile, OutlinedCloud} from 'acud-icon';
import BrandProvider from '../../brand-provider';
import Segmented from '../src';

export default {
    title: '数据展示/[new_dev]分段控制器 Segmented',
};

export const Demo = () => {

    return (
        <BrandProvider>
            <Divider>基础控制器</Divider>
            <Flex gap="middle" vertical>
                <Flex gap="small" align="center">
                    <div style={{width: 100}}>白底</div>
                    <Segmented options={['全部', '我的数据']} />
                </Flex>
                <Flex gap="small" align="center">
                    <div style={{width: 100}}>灰底</div>
                    <Segmented grayBackground options={['全部', '我的数据']} />
                </Flex>
            </Flex>

            <Divider>图标控制器</Divider>
            <Flex gap="middle" vertical>
                <Flex gap="small" align="center">
                    <div style={{width: 100}}>白底</div>
                    <Segmented
                        options={[
                            {
                                label: '全部', value: 'all',
                                icon: <OutlinedAppstore style={{verticalAlign: '-0.25em'}} width={16} height={16} />,
                            },
                            {
                                label: '我的数据', value: 'my',
                                icon: <OutlinedSetting style={{verticalAlign: '-0.25em'}} width={16} height={16} />,
                            },
                        ]}
                    />
                </Flex>
                <Flex gap="small" align="center">
                    <div style={{width: 100}}>灰底</div>
                    <Segmented
                        grayBackground
                        options={[
                            {
                                label: '全部', value: 'all',
                                icon: <OutlinedAppstore style={{verticalAlign: '-0.25em'}} width={16} height={16} />,
                            },
                            {
                                label: '我的数据', value: 'my',
                                icon: <OutlinedSetting style={{verticalAlign: '-0.25em'}} width={16} height={16} />,
                            },
                        ]}
                    />
                </Flex>
            </Flex>

            <Divider>胶囊控制器</Divider>
            <Flex gap="middle" vertical>
                <Flex gap="small" align="center">
                    <div style={{width: 100}}>白底</div>
                    <Segmented
                        shape="round"
                        options={[{label: '浅色', value: 'light'}, {label: '深色', value: 'dark'}]}
                    />
                </Flex>
                <Flex gap="small" align="center">
                    <div style={{width: 100}}>灰底</div>
                    <Segmented
                        grayBackground
                        shape="round"
                        options={[{label: '浅色', value: 'light'}, {label: '深色', value: 'dark'}]}
                    />
                </Flex>
            </Flex>

            <Divider>图标胶囊控制器</Divider>
            <Flex gap="middle" vertical>
                <Flex gap="small" align="center">
                    <div style={{width: 100}}>白底</div>
                    <Segmented
                        shape="round"
                        options={[{
                            label: '浅色', value: 'light',
                            icon: <OutlinedSmile style={{verticalAlign: '-0.25em'}} width={16} height={16} />,
                        },
                            {
                            label: '深色', value: 'dark',
                            icon: <OutlinedCloud style={{verticalAlign: '-0.25em'}} width={16} height={16} />,
                        }]}
                    />
                </Flex>
                <Flex gap="small" align="center">
                    <div style={{width: 100}}>灰底</div>
                    <Segmented
                        grayBackground
                        shape="round"
                        options={[{
                            label: '浅色', value: 'light',
                            icon: <OutlinedSmile style={{verticalAlign: '-0.25em'}} width={16} height={16} />,
                        },
                            {
                            label: '深色', value: 'dark',
                            icon: <OutlinedCloud style={{verticalAlign: '-0.25em'}} width={16} height={16} />,
                        }]}
                    />
                </Flex>
            </Flex>

            <Divider>分段控制器尺寸</Divider>
            <Flex gap="middle" vertical>
                <Flex gap="small" align="center">
                    <div style={{width: 100}}>特殊尺寸</div>
                    <Segmented size="huge" shape="round" options={['组件', '模型', '智能体']} />
                </Flex>
                <Flex gap="small" align="center">
                    <div style={{width: 100}}>大尺寸</div>
                    <Segmented size="large" shape="round" options={['组件', '模型', '智能体']} />
                </Flex>
                <Flex gap="small" align="center">
                    <div style={{width: 100}}>常规尺寸</div>
                    <Segmented size="middle" shape="round" options={['组件', '模型', '智能体']} />
                </Flex>
                <Flex gap="small" align="center">
                    <div style={{width: 100}}>小尺寸</div>
                    <Segmented size="small" shape="round" options={['组件', '模型', '智能体']} />
                </Flex>
            </Flex>

            <Divider>适配</Divider>
            <Flex gap="middle" vertical>
                <Flex gap="small" align="center">
                    <div style={{width: 100}}>自适应</div>
                    <Segmented options={['全部', '我的数据']} />
                </Flex>
                <Flex gap="small" align="center">
                    <div style={{width: 100}}>等分</div>
                    <div style={{width: 200}}>
                        <Segmented block shape="round" options={['组件', '模型', '智能体']} />
                    </div>
                </Flex>
            </Flex>
        </BrandProvider>
    );
};
