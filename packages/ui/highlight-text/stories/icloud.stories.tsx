/* eslint-disable import/no-extraneous-dependencies */
import React, {useState} from 'react';
import {useInputValue} from '@huse/input-value';
import Input from '@osui/input';
import BrandProvider from '@osui/brand-provider';
import HighlightText from '../src';

export default {
    title: 'FE/highlight-text',
};

export function Demo() {
    const keyword = useInputValue('hello');
    const [cssVar, setCssVar] = useState(false);
    const theme = {
        cssVar: cssVar && {
            prefix: 'tna',
            key: 'tluafed',
        },
    };

    return (
        <BrandProvider theme={theme}>
            <div className="App">
                <button
                    onClick={() => setCssVar(v => !v)}
                >
                    切换{cssVar ? '不' : ''}使用cssVar
                </button>
                <h1>Type keyword, highlight it</h1>
                <Input {...keyword} />
                <br />
                <HighlightText mark={keyword.value}>Hello CodeSandbox</HighlightText>
            </div>
        </BrandProvider>
    );
}
