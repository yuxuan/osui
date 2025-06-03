/* eslint-disable import/no-extraneous-dependencies */
import React, {useState} from 'react';
import BrandProvider from '@osui/brand-provider';
import Markdown from '../src/Markdown';

export default {
    title: '业务/Markdown',
};

const content = `
# Writing template strings in Markdown

## Writing template strings in Markdown

adsfasdfasdf

**asdfasdf**

## test ul ol
* 1
* 2
* 1. 1.1

1. 1
2. 2
3. * 3.1


\`\`\`jsx
<Markdown content={content} />
\`\`\`
`;

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

            <Markdown content={content} />
        </BrandProvider>
    );
};
