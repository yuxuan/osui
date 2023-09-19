/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import BrandProvider from '@osui/brand-provider';
import Segmented from '../src';

export default {
    title: '数据展示/Segmented',
};

export const Demo = () => {

    return (
        <BrandProvider>
            <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
        </BrandProvider>
    );
};
