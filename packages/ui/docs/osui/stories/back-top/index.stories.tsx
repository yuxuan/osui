import React from 'react';
import BackTop from '@osui/back-top';

export default {
    title: 'BackTop',
};

export const Demo = () => {
    return (
        <div style={{padding: 30, height: 1800}}>
            <BackTop style={{right: 200}} />
            <BackTop type="circle" />
            <p>BackTop 回到顶部</p>
            <p>往下滚才能看到我哟</p>
        </div>
    );
};
