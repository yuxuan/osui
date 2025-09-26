import React from 'react';
import type {Meta} from '@storybook/react';
import BrandProvider from '@osui/brand-provider';
import {Flex} from 'antd';
import Typography from '@osui/typography';
import Splitter from '@osui/splitter';

const meta = {
    title: '布局/分割器 Splitter',
} satisfies Meta<typeof Splitter>;

export default meta;

export const Demo = () => {
    const Desc = (props: { text?: string | number }) => (
        <Flex justify="center" align="center" style={{height: '100%'}}>
            <Typography.Title type="secondary" level={5} style={{whiteSpace: 'nowrap'}}>
                {props.text}
            </Typography.Title>
        </Flex>
    );
    return (
        <BrandProvider>
            <Splitter style={{height: 200, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}>
                <Splitter.Panel defaultSize="40%" min="20%" max="70%">
                    <Desc text="First" />
                </Splitter.Panel>
                <Splitter.Panel>
                    <Desc text="Second" />
                </Splitter.Panel>
            </Splitter>
        </BrandProvider>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/splitter-cn/">Antd Splitter API</a>
        </>
    );
};
