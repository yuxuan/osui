import * as React from 'react';
import {Divider} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import Tag from '../src';

export default {
    title: 'OSUI-Tag',
};

export const Demo = () => {

    const { CheckableTag } = Tag;

    const tagsData = ['Movies', 'Books', 'Music', 'Sports'];

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedTags, setSelectedTags] = React.useState(['Books']);

    const handleChange = (tag: string, checked: any) => {
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
        console.log('You are interested in: ', nextSelectedTags);
        setSelectedTags(nextSelectedTags);
    };

    return (
        <div style={{padding: 30}}>
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

            {/* 焦点状态 */}
            <Divider orientation="left">可选择状态</Divider>
            {tagsData.map(tag => (
                <CheckableTag
                    key={tag}
                    checked={selectedTags.includes(tag)}
                    onChange={(checked: any) => handleChange(tag, checked)}
                >
                    {tag}
                </CheckableTag>
            ))}

            {/* 多彩标签 */}
            <Divider orientation="left">多彩标签(已修改属性，其他可用原生)</Divider>
            <Tag color="blue">blue</Tag>
            <Tag color="green">red</Tag>
            <Tag color="purple">purple</Tag>
            <Tag color="red">red</Tag>
            <Tag color="teal">teal</Tag>
            <Tag color="yellow">yellow</Tag>

            <Divider orientation="left">自定义颜色</Divider>
            <Tag color="#f50">#f50</Tag>
            <Tag color="#2db7f5">#2db7f5</Tag>

            <Tag color="success">success</Tag>
            <Tag color="processing">processing</Tag>
            <Tag color="error">error</Tag>
            <Tag color="warning">warning</Tag>
        </div>);
};
