import React from 'react';
import { useInputValue } from '@huse/input-value';
import Input from '@osui/input';
import HighlightText from '@osui/highlight-text';

export default {
    title: 'highlight-text',
};

export function Demo() {
    const keyword = useInputValue('hello');

    return (
        <div className="App">
            <h1>Type keyword, highlight it</h1>
            <Input {...keyword} />
            <br />
            <HighlightText mark={keyword.value}>Hello CodeSandbox</HighlightText>
        </div>
    );
}
