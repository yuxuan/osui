import * as React from 'react';
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
            <Tag color="blue">blue</Tag>
            <Tag color="green">red</Tag>
            <Tag color="purple">purple</Tag>
            <Tag color="red">red</Tag>
            <Tag color="teal">teal</Tag>
            <Tag color="yellow">yellow</Tag>


            <Tag color="#f50">#f50</Tag>
            <Tag color="#2db7f5">#2db7f5</Tag>

            <Tag color="success">success</Tag>
            <Tag color="processing">processing</Tag>
            <Tag color="error">error</Tag>
            <Tag color="warning">warning</Tag>
            <Tag color="default">default</Tag>

        </div>);
};
