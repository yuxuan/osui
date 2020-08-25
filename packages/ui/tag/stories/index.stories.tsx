import React from 'react';
import {Divider} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import Tag from '../src';

export default {
    title: 'OSUI-Tag',
};

export const Demo = () => {
    return (
        <>
            {/* success */}
            <Divider orientation="left">基本</Divider>
            <Tag>标签</Tag>
            <Tag className={'osui-tag-dome-dashed'}>
                <PlusOutlined style={{fontSize: '12px', marginRight: '4px'}} />
                标签
            </Tag>
            <Tag
                closable
                onClose={(e: any) => {
                    e.preventDefault();
                    console.log('Clicked! But prevent default.');
                }}
            >
                标签
            </Tag>
        </>
    );
};
