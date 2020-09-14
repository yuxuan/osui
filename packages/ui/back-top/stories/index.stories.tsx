import React from 'react';
import BackTop from '../src';

export default {
    title: 'BackTop',
};

export const Demo = () => {
    return (
        <div style={{padding: 30, height: 1800}}>
            {/* default */}
            <BackTop style={{right: 200}} />
            {/* circle */}
            <BackTop type="circle" />
            <p>BackTop 回到顶部</p>
            <p>往下滚才能看到我哟</p>
        </div>
    );
};
