/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Segmented from '../src';

export default {
    title: 'Segmented',
};

export const Demo = () => {

    return <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />;
};
