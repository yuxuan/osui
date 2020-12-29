import React from 'react';
import BrandProvider from '@osui/brand-provider';
import Button from '@osui/button';
import Gap from '../src';

export default {
    title: 'Gap',
    component: Gap,
};

export const Demo = () => {
    return (
        <BrandProvider brand="osc">
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

