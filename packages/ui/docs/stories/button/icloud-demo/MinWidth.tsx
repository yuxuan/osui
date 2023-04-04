import React from 'react';
import Space from '@osui/space';
import BrandProvider from '@osui/brand-provider';
import {IconHomeOutlined} from '@osui/icons';
import Button from '@osui/button';

export default function MinWidth() {
    return (
        <BrandProvider>
            <p>min-width会判断是不是一到三个字，这个是默认行为</p>
            <Space>
                <Button>是</Button>
                <Button>否</Button>
            </Space>
            <br />
            <br />
            <Space>
                <Button>是的</Button>
                <Button>否的</Button>
            </Space>
            <br />
            <br />
            <Space>
                <Button>是的呢</Button>
                <Button>否的呢</Button>
            </Space>
            <br />
            <br />
            <Space>
                <Button>真是的呢</Button>
                <Button>真否的呢</Button>
            </Space>
            <br />
            <br />
            <p>取消min-width</p>
            <Space>
                <Button minWidth={false}>是</Button>
                <Button minWidth={false}>否</Button>
            </Space>
            <br />
            <br />
            <p>以下情况默认不带min-width</p>
            <Space>
                <Button icon={<IconHomeOutlined />} />
                <Button><IconHomeOutlined /></Button> &#60;- 这种使用方式是错误的，不要这么用
            </Space>
            <br />
            <br />
            <Space>
                <Button type="link">确认</Button>
                <Button type="text">取消</Button>
            </Space>
            <br />
            <br />
            <p>其他奇奇怪怪的情况</p>
            <Space>
                <Button type="dashed">取消</Button>
                <Button type="strong">取消</Button>
                <Button type="primary">取消</Button>
            </Space>
            <br />
            <br />
            <p>取消min-width</p>
            <Space>
                <Button type="primary" minWidth={false}>取消</Button>
            </Space>
        </BrandProvider>
    );
}
