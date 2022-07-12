/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Segmented from '../src';

export default {
    title: '数据展示/Segmented',
};

export const Demo = () => {

    return <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />;
};
