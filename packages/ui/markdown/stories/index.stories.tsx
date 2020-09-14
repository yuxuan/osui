import React from 'react';
import Markdown from '../src/Markdown';

export default {
    title: 'Markdown',
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
