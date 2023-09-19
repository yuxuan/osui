/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Button from '@osui/button';
import Gap from '@osui/gap';
import Divider from '@osui/divider';
import BrandProvider from '@osui/brand-provider';
import FlexCentered from '../src';


export default {
    title: '布局/FlexCentered',
};

export const Demo = () => {
    return (
        <BrandProvider>
            <Divider orientation="left">横向水平居中</Divider>
            <FlexCentered>
                <Button type="primary">Primary</Button>
                <Gap orientation="horizontal" factor={2} />
                <Button>Default</Button>
                <Gap orientation="horizontal" factor={2} />
                <Button type="dashed">Dashed</Button>
                <Gap orientation="horizontal" factor={2} />
                <Button type="link">Link</Button>
            </FlexCentered>
        </BrandProvider>

    );
};
