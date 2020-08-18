import * as React from 'react';
import Markdown from '../src/Markdown';

export default {
    title: 'OSUI-Markdown',
};

const content = `
# Writing template strings in Markdown

## Writing template strings in Markdown

adsfasdfasdf

asdfasdf

\`\`\`jsx
<Markdown content={content} />
\`\`\`
`;

export const Demo = () => (
    <Markdown content={content} />
);
