/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from '../src/Markdown';

export default {
    title: '业务/Markdown',
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
