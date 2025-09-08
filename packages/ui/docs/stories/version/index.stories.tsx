/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {osuiVersion} from '@osui/version';

export default {
    title: 'FE/version',
};

export const Demo = () => {
    return (
        <>
            <h1>OSUI Version: {osuiVersion}</h1>
        </>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/version-cn/">Antd Version API</a>
        </>
    );
};
