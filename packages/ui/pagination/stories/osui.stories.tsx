import React from 'react';
import BrandProvider from '@osui/brand-provider';
import Pagination from '../src';

export default {
    title: 'Pagination',
};

export const Demo = () => {
    function onChange(val) {
        console.log(val);
    }

    return (
        <div style={{padding: 30}}>
            <BrandProvider brand="osc">
                <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
                <br />
                <Pagination size="small" total={50} />
                <br />
                <Pagination simple defaultCurrent={2} total={50} />
                <br />
                <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />
            </BrandProvider>
        </div>
    );
};
