import React, {useState} from 'react';
import BrandProvider from '@osui/brand-provider';
import Spin from '../src';

export default {
    title: '反馈/Spin 加载中',
    component: Spin,
};

export const Demo = () => {
    const [cssVar, setCssVar] = useState(false);

    return (
        <BrandProvider>
            <div>
                <button
                    onClick={() => setCssVar(v => !v)}
                >
                    切换{cssVar ? '不' : ''}使用cssVar
                </button>
            </div>

            <Spin size="small" />
            <br />
            <br />
            <Spin />
            <br />
            <br />
            <Spin size="large" />
        </BrandProvider>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/spin-cn/">Antd Spin API</a>
        </>
    );
};

