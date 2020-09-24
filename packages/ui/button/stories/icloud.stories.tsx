import React from 'react';
import { IconSearch, IconHome } from '@osui/icons';
import Space from '@osui/space';
import Button from '../src';

export default {
    title: 'Button',
};

export const Demo = () => {
    return (
        <>
            <div>
                <Button type="primary" style={{ 'margin': '0 20px 20px 0' }}>主要按钮</Button>
                <Button type="primary" loading style={{ 'margin': '0 20px 20px 0' }}>主要按钮</Button>
                <Button type="primary" disabled style={{ 'margin': '0 20px 20px 0' }}>主要按钮</Button>
            </div>
            <div>
                <Button type="default" style={{ 'margin': '0 20px 20px 0' }}>次要按钮</Button>
                <Button type="default" loading style={{ 'margin': '0 20px 20px 0' }}>次要按钮</Button>
                <Button type="default" disabled style={{ 'margin': '0 20px 20px 0' }}>次要按钮</Button>
            </div>
            <div>
                <Button type="link" style={{ 'margin': '0 20px 20px 0' }}>文字按钮</Button>
                <Button type="link" loading style={{ 'margin': '0 20px 20px 0' }}>文字按钮</Button>
                <Button type="link" disabled style={{ 'margin': '0 20px 20px 0' }}>文字按钮</Button>
            </div>
            <div>
                <Button icon={<IconSearch />} style={{ 'margin': '0 20px 20px 0' }} />
                <Button loading icon={<IconSearch />} style={{ 'margin': '0 20px 20px 0' }} />
                <Button disabled icon={<IconSearch />} style={{ 'margin': '0 20px 20px 0' }} />
            </div>
            <div>
                <Button type="only-icon" icon={<IconSearch />} style={{ 'margin': '0 20px 20px 0' }} />
                <Button type="only-icon" loading icon={<IconSearch />} style={{ 'margin': '0 20px 20px 0' }} />
                <Button type="only-icon" disabled icon={<IconSearch />} style={{ 'margin': '0 20px 20px 0' }} />
            </div>
            <div>
                <Button icon={<IconHome />} style={{ 'margin': '0 20px 20px 0' }}>
                    图文按钮
                </Button>
                <Button loading icon={<IconHome />} style={{ 'margin': '0 20px 20px 0' }}>
                    图文按钮
                </Button>
                <Button disabled icon={<IconHome />} style={{ 'margin': '0 20px 20px 0' }}>
                    图文按钮
                </Button>
            </div>
        </>
    );
};

export const Group = () => {
    return (
        <Space>
            <Button type="primary">primary</Button>
            <Button>secondary</Button>
        </Space>
    );
};
