import * as React from 'react';
import OscBackTop from '../src';

export default {
    title: 'OSUI-BackTop',
};

export const Demo = () => {
    return (
        <div style={{padding: 30, height: 1800}}>
            {/* default */}
            <OscBackTop style={{ right: 200 }} />
            {/* circle */}
            <OscBackTop className={'osui-back-top-circle'} />
            <p>BackTop 回到顶部</p>
        </div>);
};
