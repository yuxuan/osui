import React from 'react';
import BrandProvider from '@osui/brand-provider';
import Progress from '@osui/progress';

export default {
    title: '验收中/Progress 进度条',
};

export const Demo = () => {
    const Wrapper = ({ title, children }) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ width: '100px' }}>{title}</span>
            {children}
        </div>
    );
    return (
        <BrandProvider brand="icloud">
            <div style={{ padding: 30 }}>
                <Wrapper title="初始状态"><Progress percent={0} showInfo={false} /></Wrapper>
                <Wrapper title="进行中状态"><Progress percent={40} showInfo={false} /></Wrapper>
                <Wrapper title="完成常驻"><Progress percent={100} showInfo={false} /></Wrapper>
                <Wrapper title="报错状态"><Progress percent={40} status="exception" showInfo={false} /></Wrapper>
                <Wrapper title="报错状态"><Progress percent={40} status="active" showInfo={false} /></Wrapper>
            </div>
        </BrandProvider>
    );
};

export const Status = () => {
    return (
        <BrandProvider brand="icloud">

            <div style={{ padding: 30 }}>
                <Progress percent={0} />
                <Progress percent={40} />
                <Progress percent={90} />
            </div>
        </BrandProvider>
    );
};

export const StatusIcon = () => {
    return (
        <BrandProvider brand="icloud">

            <div style={{ padding: 30 }}>
                <Progress percent={40} status="exception" />
                <Progress percent={100} />
            </div>
        </BrandProvider>
    );
};

export const Circle = () => {
    const Wrapper = ({ title, children }) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ width: '100px' }}>{title}</span>
            {children}
        </div>
    );
    return (
        <BrandProvider brand="icloud">
            <div style={{ padding: 30 }}>
                <Wrapper title="初始状态"><Progress type="circle" percent={0} showInfo={false} width={108} /></Wrapper>
                <br />
                <Wrapper title="进行中状态"><Progress type="circle" percent={40} showInfo={false} /></Wrapper>
                <br />
                <Wrapper title="完成常驻"><Progress type="circle" percent={100} showInfo={false} /></Wrapper>
                <br />
                <Wrapper title="报错状态">
                    <Progress type="circle" percent={40} status="exception" showInfo={false} />
                </Wrapper>
            </div>
        </BrandProvider>
    );
};


export const CircleInfo = () => {
    const Wrapper = ({ title, children }) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ width: '100px' }}>{title}</span>
            {children}
        </div>
    );
    return (
        <BrandProvider brand="icloud">
            <div style={{ padding: 30 }}>
                <Wrapper title="初始状态"><Progress type="circle" percent={0} width={108} /></Wrapper>
                <br />
                <Wrapper title="进行中状态"><Progress type="circle" percent={40} /></Wrapper>
                <br />
                <Wrapper title="完成常驻"><Progress type="circle" percent={100} /></Wrapper>
                <br />
                <Wrapper title="报错状态">
                    <Progress type="circle" percent={40} status="exception" />
                </Wrapper>
            </div>
        </BrandProvider>
    );
};
