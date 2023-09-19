import React from 'react';
import BrandProvider from '@osui/brand-provider';
import Empty from '../../src';

export default () => {
    return (
        <BrandProvider>
            <Empty type="error" description="404 Not Found" size="large" />
        </BrandProvider>
    );
};

