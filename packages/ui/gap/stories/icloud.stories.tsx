/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Button from '@osui/button';
import BrandProvider from '@osui/brand-provider';
import Gap from '../src';

export default {
    title: '布局/Gap 间隔',
    component: Gap,
};

export const Demo = () => {
    return (
        <BrandProvider>
            <div style={{display: 'flex'}}>
                <Button>确认</Button>
                <Gap orientation="horizontal" factor={2} />
                <Button>取消</Button>
            </div>
            <Gap orientation="vertical" factor={4} />
            <div style={{display: 'flex'}}>
                <Button>确认</Button>
                <Gap.FlexFit />
                <Button>取消</Button>
            </div>
        </BrandProvider>
    );
};
