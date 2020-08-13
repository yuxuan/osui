import * as React from 'react';
import Tooltip from '../src';

export default {
    title: 'OSUI-Tag',
};

export const Demo = () => {
    return (
        <div style={{padding: 30}}>
            <Tooltip title="prompt text">
                <span>Tooltip will show on mouse enter.</span>
            </Tooltip>
        </div>);
};
