/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {IconInfoCircleFilled} from '@osui/icons-icloud';
import Gap from '@osui/gap';
import Button from '@osui/button';
import PageHeader from '../src';

export default {
    title: '导航/PageHeader 页头',
    component: PageHeader,
};

export const Demo = () => {
    return (
        <>
            <h3>一、基础页头</h3>
            <PageHeader
                title="标题标题标题标题标题标题标题标题"
                subTitle="补充备注补充备注补充备注"
                extra={
                    <div style={{display: 'flex', alignItems: 'center', color: 'var(--color-gray-7)'}}>
                        <IconInfoCircleFilled /><Gap orientation="horizontal" factor={1} />帮助文档
                    </div>
                }
            />
            <p></p>
            <p></p>
            <p></p>
            <PageHeader
                title="标题"
                subTitle="按使用流量计费"
                extra={
                    <>
                        <Button>价格计算器</Button>
                    </>
                }
            />
            <p></p>
            <p></p>
            <p></p>
            <p>noPadding: padding可以根据排版需要自行设置</p>
            <PageHeader noPadding title="Title" />
        </>
    );
};
