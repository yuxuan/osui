/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import TextOverflowTooltip from '../src';

export default {
    title: '设计文档/TextOverflowTooltip',
};

export const Demo = () => {
    return (
        <TextOverflowTooltip width={50} title="Hover me">
            Hover me
        </TextOverflowTooltip>
    );
};
