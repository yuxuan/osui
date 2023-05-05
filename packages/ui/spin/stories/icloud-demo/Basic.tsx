import React from 'react';
import Spin from '../../src';

export default () => {
    return (
        <>
            <Spin size="small" />
            <br />
            <br />
            <Spin />
            <br />
            <br />
            <Spin size="large" />
        </>
    );
};
