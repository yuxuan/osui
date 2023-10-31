import React from 'react';
import TextOverflowTooltip from '@osui/text-overflow-tooltip';

export default {
    title: '数据展示/TextOverflowTooltip',
};

export const Demo = () => {
    return (
        <TextOverflowTooltip width={50} title="Hover me">
            Hover me
        </TextOverflowTooltip>
    );
};
