import React from 'react';
import Badge from '@osui/badge';

export default {
    title: 'Badge',
};

export const Demo = () => {
    return (
        <div style={{padding: 30}}>
            <span style={{marginRight: 30}}>
                <Badge count={5} />
            </span>
            <span style={{marginRight: 30}}>
                <Badge count={15} />
            </span>
            <span style={{marginRight: 30}}>
                <Badge count={105} />
            </span>
            <span>
                <Badge dot />
            </span>
        </div>
    );
};
