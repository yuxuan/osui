import React from 'react';
import Anchor from '@osui/anchor';

export default {
    title: '未实现/Anchor 锚点',
    component: Anchor,
};

export const Demo = () => {
    const { Link } = Anchor;
    return (
        <Anchor>
            <Link href="#components-anchor-demo-basic" title="Basic demo" />
            <Link href="#components-anchor-demo-static" title="Static demo" />
            <Link href="#API" title="API">
                <Link href="#Anchor-Props" title="Anchor Props" />
                <Link href="#Link-Props" title="Link Props" />
            </Link>
        </Anchor>
    );
};
