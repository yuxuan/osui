import React from 'react';
import OSUIBadge from '../src';

export default {
    title: 'OSUI-Badge',
};

export const Demo = () => {
    return (
        <div style={{padding: 30}}>
            <span style={{marginRight: 30}}>
                <OSUIBadge count={5} />
            </span>
            <span style={{marginRight: 30}}>
                <OSUIBadge count={15} />
            </span>
            <span style={{marginRight: 30}}>
                <OSUIBadge count={105} />
            </span>
            <span>
                <OSUIBadge dot />
            </span>
        </div>
    );
};
