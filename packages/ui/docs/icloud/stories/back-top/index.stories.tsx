import React from 'react';
import BackTop from '@osui/back-top';

export default {
    title: '验收中/BackTop 回到顶部',
};

export const Demo = () => {
    return (
        <div style={{padding: 30, height: 1800}}>
            <BackTop style={{paddingRight: '200px'}} />
            <BackTop type="circle" style={{paddingRight: '120px'}} />
            <BackTop transparent />
            <p>BackTop 回到顶部</p>
            <p>往下滚才能看到我哟</p>
        </div>
    );
};
