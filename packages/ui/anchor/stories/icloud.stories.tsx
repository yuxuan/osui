/* eslint-disable import/no-extraneous-dependencies */
import React, {useState} from 'react';
import Divider from '@osui/divider';
import BrandProvider from '@osui/brand-provider';
import Anchor from '../src';

export default {
    title: '其它/Anchor 锚点',
    component: Anchor,
};

export const Demo = () => {
    const {Link} = Anchor;
    const [cssVar, setCssVar] = useState(false);
    const theme = {
        cssVar: cssVar && {
            prefix: 'tna',
            key: 'tluafed',
        },
    };

    return (
        <BrandProvider brand="icloud" theme={theme}>
            <p>通过点击锚点可快速找到某类信息在当前页面的位置。</p>
            <h3>一、使用场景</h3>
            <p>
                适用于页面过长，需要准确定位内容信息的情况，一般出现在页面顶部或底部，可作为页面内导航的一种。
                需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。
            </p>
            <p><strong>FE说明：</strong>页面内的导航见Menu，本组件只包含设计稿中其它样式的展示</p>
            <button
                onClick={() => setCssVar(v => !v)}
            >
                切换{cssVar ? '不' : ''}使用cssVar
            </button>
            <Divider>展示</Divider>
            <Anchor>
                <Link href="#components-anchor-demo-basic" title="Basic demo" />
                <Link href="#components-anchor-demo-static" title="Static demo" />
                <Link href="#API" title="API">
                    <Link href="#Anchor-Props" title="Anchor Props" />
                    <Link href="#Link-Props" title="Link Props" />
                </Link>
            </Anchor>
        </BrandProvider>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/anchor-cn/">Antd Anchor API</a>
        </>
    );
};

