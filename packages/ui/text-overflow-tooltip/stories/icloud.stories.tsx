/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import BrandProvider from '@osui/brand-provider';
import TextOverflowTooltip from '../src';

export default {
    title: '设计文档/TextOverflowTooltip',
};

export const Demo = () => {
    return (
        <BrandProvider>
            <TextOverflowTooltip width={50} title="Hover me">
                Hover me
            </TextOverflowTooltip>
        </BrandProvider>
    );
};
