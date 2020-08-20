import React from 'react';
import OSUIAvatar from '../src';

export default {
    title: 'OSUI-Avatar',
};

export const Demo = () => {
    return (
        <div style={{padding: 30}}>
            <div style={{marginBottom: 20}}>
                <p>Avatar 头像</p>
                <OSUIAvatar size="l" style={{marginRight: 20}}>a</OSUIAvatar>
                <OSUIAvatar size="m" style={{marginRight: 20}}>a</OSUIAvatar>
                <OSUIAvatar size="s" style={{marginRight: 20}}>a</OSUIAvatar>
            </div>
            <div>
                <p>PR评审通过 （24尺寸专用）</p>
                <OSUIAvatar size="m" pr="true">a</OSUIAvatar>
            </div>
        </div>
    );
};
