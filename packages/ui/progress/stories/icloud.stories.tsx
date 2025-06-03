/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import BrandProvider from '@osui/brand-provider';
import Progress from '../src';

export default {
    title: '反馈/Progress 进度条',
};

export const Demo = () => {
    const Wrapper = ({title, children}) => (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <span style={{width: '100px'}}>{title}</span>
            {children}
        </div>
    );
    return (
        <BrandProvider brand="icloud">
            <p>说明：progress icon目前不支持替换</p>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p>注意：已完成的状态需要加<code>status="normal"</code></p>
            <div style={{padding: 30}}>
                <Wrapper title="初始状态"><Progress percent={0} showInfo={false} /></Wrapper>
                <Wrapper title="进行中状态"><Progress percent={40} showInfo={false} status="active" /></Wrapper>
                <Wrapper title="已完成"><Progress percent={100} showInfo={false} status="normal" /></Wrapper>
                <Wrapper title="完成常驻"><Progress percent={100} showInfo={false} /></Wrapper>
                <Wrapper title="报错状态"><Progress percent={40} status="exception" showInfo={false} /></Wrapper>
                <Wrapper title="报错状态"><Progress percent={40} status="exception" showInfo={false} /></Wrapper>
            </div>
        </BrandProvider>
    );
};

export const Status = () => {
    return (
        <BrandProvider brand="icloud">
            <div style={{padding: 30}}>
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
            <div style={{padding: 30}}>
                <Progress percent={40} status="exception" />
                <Progress percent={100} />
            </div>
        </BrandProvider>
    );
};

export const Circle = () => {
    const Wrapper = ({title, children}) => (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <span style={{width: '100px'}}>{title}</span>
            {children}
        </div>
    );
    return (
        <BrandProvider brand="icloud">
            <div style={{padding: 30}}>
                <Wrapper title="初始状态"><Progress type="circle" percent={0} showInfo={false} /></Wrapper>
                <br />
                <Wrapper title="进行中状态"><Progress type="circle" percent={40} showInfo={false} /></Wrapper>
                <br />
                <Wrapper title="已完成"><Progress type="circle" percent={100} showInfo={false} status="normal" /></Wrapper>
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
    const Wrapper = ({title, children}) => (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <span style={{width: '100px'}}>{title}</span>
            {children}
        </div>
    );
    return (
        <BrandProvider brand="icloud">
            <div style={{padding: 30}}>
                <Wrapper title="初始状态"><Progress type="circle" percent={0} /></Wrapper>
                <br />
                <Wrapper title="进行中状态"><Progress type="circle" percent={40} /></Wrapper>
                <br />
                <Wrapper title="已完成"><Progress type="circle" percent={100} status="normal" /></Wrapper>
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

export const ProgressAction = () => {
    return (
        <>
            <p>待补充组件：含操作的进度条</p>
            <p>见设计文档</p>
        </>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/progress-cn/">Antd Progress API</a>
        </>
    );
};

