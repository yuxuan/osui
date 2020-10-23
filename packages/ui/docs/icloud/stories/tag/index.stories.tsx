import React from 'react';
import {Divider} from 'antd';
import {IconAdd} from '@osui/icons';
import Tag from '@osui/tag';

export default {
    title: '待验收/Tag 标签',
};

export const Demo = () => {
    return (
        <>
            {/* success */}
            <Divider orientation="left">基本</Divider>
            <Tag>标签</Tag>
            <Tag className={'osui-tag-dome-dashed'}>
                <IconAdd style={{fontSize: '12px', marginRight: '4px'}} />
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
            <br />
            <br />
            <Tag
                color="blue"
                closable
            >
                blue
            </Tag>
            <Tag
                color="purple"
                closable
            >
                purple
            </Tag>
            <Tag
                color="red"
                closable
            >
                red
            </Tag>
            <Tag
                color="green"
                closable
            >
                green
            </Tag>
            <Tag
                color="yellow"
                closable
            >
                yellow
            </Tag>

        </>
    );
};
