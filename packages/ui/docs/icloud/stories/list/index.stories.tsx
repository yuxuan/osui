import React from 'react';
import Avatar from '@osui/avatar';
import List from '@osui/list';


export default {
    title: '验收中/List 列表',
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
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={<a href="https://ant.design">{item.title}</a>}
                        description="列表示例"
                    />
                </List.Item>
            )}
        />
    );
};
