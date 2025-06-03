/* eslint-disable import/no-extraneous-dependencies */
import React, {useState} from 'react';
import Button from '@osui/button';
import BrandProvider from '@osui/brand-provider';
import {version} from 'antd';
import Space from '../src';

export default {
    title: '布局/Space 间距',
};

export const Demo = () => {
    const [cssVar, setCssVar] = useState(false);
    const theme = {
        cssVar: cssVar && {
            prefix: 'tna',
            key: 'tluafed',
        },
    };

    return (
        <BrandProvider brand="icloud" theme={theme}>
            <button
                onClick={() => setCssVar(v => !v)}
            >
                切换{cssVar ? '不' : ''}使用cssVar
            </button>
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
        <BrandProvider>
            {version}
            <p>水平+垂直</p>
            <Space direction="horizontal">
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Space direction="vertical">
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button>6</Button>
                </Space>
            </Space>
            <p />
            <p>水平+垂直</p>
            <Space direction="horizontal">
                <Button>1</Button>
                <Button>2</Button>
                <Space direction="vertical">
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button>6</Button>
                </Space>
                <Button>3</Button>
            </Space>
            <p />
            <p>垂直+水平</p>
            <Space direction="vertical">
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Space direction="horizontal">
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button>6</Button>
                </Space>
            </Space>
            <p />
            <p>垂直+水平</p>
            <Space direction="vertical">
                <Button>1</Button>
                <Button>2</Button>
                <Space direction="horizontal">
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button>6</Button>
                </Space>
                <Button>3</Button>
            </Space>

            <p>垂直+水平+垂直</p>
            <Space direction="vertical">
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Space direction="horizontal">
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button>6</Button>
                    <Space direction="vertical">
                        <Button>7</Button>
                        <Button>8</Button>
                        <Button>9</Button>
                    </Space>
                </Space>
            </Space>
        </BrandProvider>
    );
};
