/* eslint-disable import/no-extraneous-dependencies */
import React, {useState} from 'react';
import BrandProvider from '@osui/brand-provider';
import TextOverflowTooltip from '../src';

export default {
    title: '数据展示/TextOverflowTooltip',
};

export const Demo = () => {
    const [cssVar, setCssVar] = useState(false);
    const theme = {
        cssVar: cssVar && {
            prefix: 'tna',
            key: 'tluafed',
        },
    };
    return (
        <BrandProvider theme={theme}>
            <button
                onClick={() => setCssVar(v => !v)}
            >
                切换{cssVar ? '不' : ''}使用cssVar
            </button>
            <div>
                <TextOverflowTooltip width={50} title="Hover me">
                    Hover me
                </TextOverflowTooltip>
            </div>
        </BrandProvider>
    );
};
