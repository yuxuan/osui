/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import BrandProvider from '@osui/brand-provider';
import Divider from '@osui/divider';
import Flex from '@osui/flex';
import Segmented from '../src';

export default {
    title: '数据展示/分段控制器 Segmented',
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
                    <Segmented options={['全部', '我的数据']} />
                </Flex>
            </Flex>

            <Divider>图标控制器</Divider>
            <Flex gap="middle" vertical>
                <Flex gap="small" align="center">
                    <div style={{width: 100}}>白底</div>
                    <Segmented
                        options={[{label: '全部', value: 'all', icon: '+'}, {label: '我的数据', value: 'my', icon: '-'}]}
                    />
                </Flex>
                <Flex gap="small" align="center">
                    <div style={{width: 100}}>灰底</div>
                    <Segmented
                        options={[{label: '全部', value: 'all', icon: '+'}, {label: '我的数据', value: 'my', icon: '-'}]}
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
                        options={[{label: '浅色', value: 'light', icon: '+'}, {label: '深色', value: 'dark', icon: '-'}]}
                    />
                </Flex>
                <Flex gap="small" align="center">
                    <div style={{width: 100}}>灰底</div>
                    <Segmented
                        shape="round"
                        options={[{label: '浅色', value: 'light', icon: '+'}, {label: '深色', value: 'dark', icon: '-'}]}
                    />
                </Flex>
            </Flex>

            <Divider>分段控制器尺寸</Divider>
            <Flex gap="middle" vertical>
                <Flex gap="small" align="center">
                    <div style={{width: 100}}>特殊尺寸</div>
                    <Segmented options={['组件', '模型', '智能体']} />
                </Flex>
                <Flex gap="small" align="center">
                    <div style={{width: 100}}>大尺寸</div>
                    <Segmented size="large" options={['组件', '模型', '智能体']} />
                </Flex>
                <Flex gap="small" align="center">
                    <div style={{width: 100}}>常规尺寸</div>
                    <Segmented options={['组件', '模型', '智能体']} />
                </Flex>
                <Flex gap="small" align="center">
                    <div style={{width: 100}}>小尺寸</div>
                    <Segmented size="small" options={['组件', '模型', '智能体']} />
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
                    <Segmented block options={['组件', '模型', '智能体']} />
                </Flex>
            </Flex>
        </BrandProvider>
    );
};
