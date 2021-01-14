import React from 'react';
import TextOverflowTooltip from '../src';

export default {
    title: 'TextOverflowTooltip',
};

export const Demo = () => {
    return (
        <TextOverflowTooltip width={50} title="Hover me">
            Hover me
        </TextOverflowTooltip>
    );
};
