import React from 'react';
import Markdown from '@osui/markdown';

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
