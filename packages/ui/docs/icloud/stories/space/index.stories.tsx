import React from 'react';
import Button from '@osui/button';
import BrandProvider from '@osui/brand-provider';
import {version} from 'antd';
import Space from '@osui/space';

export default {
    title: '布局/Space 间距',
};

export const Demo = () => {
    return (
        <BrandProvider brand="icloud">
            <p>水平方向</p>
            <Space size="small">
                <Button size="small">取消</Button>
                <Button type="primary" size="small">
                    确定
                </Button>
            </Space>
            <br />
            <br />
            <Space size="middle">
                <Button>取消</Button>
                <Button type="primary">确定</Button>
            </Space>
            <br />
            <br />
            <Space size="large">
                <Button size="large">取消</Button>
                <Button size="large" type="primary">
                    确定
                </Button>
            </Space>
            <p />
            <p>垂直方向</p>
            <Space size="small" direction="vertical">
                <Button size="small">取消</Button>
                <Button type="primary" size="small">
                    确定
                </Button>
            </Space>
            <br />
            <br />
            <Space size="middle" direction="vertical">
                <Button>取消</Button>
                <Button type="primary">确定</Button>
            </Space>
            <br />
            <br />
            <Space size="large" direction="vertical">
                <Button size="large">取消</Button>
                <Button size="large" type="primary">
                    确定
                </Button>
            </Space>
        </BrandProvider>
    );
};

export const Api = () => {
    return (
        <>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://ant.design/components/space-cn/"
            >
                Antd Space API
            </a>
        </>
    );
};

export const TestCase = () => {
    return (
        <>
            {version}
        </>
    );
};
