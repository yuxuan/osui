/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Avatar from '@osui/avatar';
import BrandProvider from '@osui/brand-provider';
import List from '../src';


export default {
    title: '数据展示/List 列表',
    component: List,
};

export const Demo = () => {

    const data = [
        {
            title: 'Title 1',
        },
        {
            title: 'Title 2',
        },
        {
            title: 'Title 3',
        },
        {
            title: 'Title 4',
        },
    ];

    return (
        <BrandProvider>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a target="_blank" rel="noreferrer" href="https://ant.design">{item.title}</a>}
                            description="列表示例"
                        />
                    </List.Item>
                )}
            />
        </BrandProvider>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/list-cn/">Antd List API</a>
        </>
    );
};

