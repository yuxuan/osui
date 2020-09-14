import React from 'react';
import OSUIBadge from '@osui/badge';

export default {
    title: 'Badge',
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
