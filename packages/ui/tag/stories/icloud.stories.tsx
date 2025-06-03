/* eslint-disable import/no-extraneous-dependencies */
import React, {useCallback, useState} from 'react';
import Divider from '@osui/divider';
import Input from '@osui/input';
import Tooltip from '@osui/tooltip';
import {PlusOutlined} from '@ant-design/icons';
import {IconPlusOutlined} from '@osui/icons';
import {ClockCircleOutlined} from '@ant-design/icons';
import styled from '@emotion/styled';
import BrandProvider from '@osui/brand-provider';
import Tag from '../src';

export default {
    title: '数据展示/Tag 标签',
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
            {/* success */}
            <button
                onClick={() => setCssVar(v => !v)}
            >
                切换{cssVar ? '不' : ''}使用cssVar
            </button>
            <Divider orientation="left">基本</Divider>
            <Tag>标签</Tag>
            <Tag className={'osui-tag-dome-dashed'} icon={<IconPlusOutlined />}>
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
            <Tag color="blue">标签</Tag>
            <Tag color="green">标签</Tag>
            <Tag color="yellow">标签</Tag>
            <Tag color="red">标签</Tag>
            <Tag color="#108ee9">#108ee9</Tag>
            <Tag color="#87d068">#87d068</Tag>
            <br />
            <br />
            <Tag color="blue" solid>标签</Tag>
            <Tag color="green" solid>标签</Tag>
            <Tag color="yellow" solid>标签</Tag>
            <Tag color="red" solid>标签</Tag>
            <br />
            <br />
            <Tag color="blue" solid icon={<ClockCircleOutlined />}>标签</Tag>
            <Tag color="green" solid icon={<ClockCircleOutlined />}>标签</Tag>
            <Tag color="yellow" solid icon={<ClockCircleOutlined />}>标签</Tag>
            <Tag color="red" solid icon={<ClockCircleOutlined />}>标签</Tag>
            <br />
            <br />
            <Tag color="blue" round>标签</Tag>
            <Tag color="green" round>标签</Tag>
            <Tag color="yellow" round>标签</Tag>
            <Tag color="red" round>标签</Tag>
            <Tag color="purple" round>标签</Tag>
            <br />
            <br />
            <Tag color="blue" outlined>标签</Tag>
            <Tag color="green" outlined>标签</Tag>
            <Tag color="yellow" outlined>标签</Tag>
            <Tag color="red" outlined>标签</Tag>
            <Tag color="purple" outlined>标签</Tag>
            <br />
            <br />
            <p>禁用</p>
            <Tag outlined disabled>标签</Tag>
            <Tag solid disabled>标签</Tag>
        </BrandProvider>
    );
};

const StyledInput = styled(Input)`
    width: 60px;
`;

export const Add = () => {
    const [inputValue, setInputValue] = useState('');
    const [editInputValue, setEditInputValue] = useState('');
    const [inputVisible, setInputVisible] = useState(false);
    const [tags, setTags] = useState(['Unremovable', 'Tag 2', 'Tag 3']);
    const [editInputIndex, setEditInputIndex] = useState(-1);

    const inputFocus = useCallback(
        element => element && element.focus(),
        []
    );

    const handleClose = useCallback(
        removedTag => {
            const localtags = tags.filter(tag => tag !== removedTag);
            console.log(localtags);
            setTags(localtags);
        },
        [tags]
    );

    const showInput = useCallback(
        () => {
            setInputVisible(true);
        }
        , []
    );

    const handleInputChange = useCallback(
        e => {
            setInputValue(e.target.value);
        }
        , []
    );

    const handleInputConfirm = useCallback(
        () => {
            if (inputValue && !tags.includes(inputValue)) {
                setTags([...tags, inputValue]);
            }
            setInputVisible(false);
            setInputValue('');
        }
        , [inputValue, tags]
    );

    const handleEditInputChange = useCallback(
        e => {
            setEditInputValue(e.target.value);
        }
        , []
    );

    const handleEditInputConfirm = useCallback(
        () => {
            const newTags = [...tags];
            newTags[editInputIndex] = editInputValue;
            setTags(newTags);
            setEditInputIndex(-1);
            setEditInputValue('');
        }
        , [editInputIndex, editInputValue, tags]
    );

    return (
        <BrandProvider>
            {tags.map((tag, index) => {
                if (editInputIndex === index) {
                    return (
                        <StyledInput
                            ref={inputFocus}
                            key={tag}
                            size="small"
                            className="tag-input"
                            value={editInputValue}
                            onChange={handleEditInputChange}
                            onBlur={handleEditInputConfirm}
                            onPressEnter={handleEditInputConfirm}
                        />
                    );
                }

                const isLongTag = tag.length > 20;

                const tagElem = (
                    <Tag
                        className="edit-tag"
                        key={tag}
                        closable={index !== 0}
                        onClose={() => handleClose(tag)}
                    >
                        <span
                            onDoubleClick={e => {
                                if (index !== 0) {
                                    setEditInputIndex(index);
                                    setEditInputValue(tag);
                                    e.preventDefault();
                                }
                            }}
                        >
                            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                        </span>
                    </Tag>
                );
                return isLongTag ? (
                    <Tooltip title={tag} key={tag}>
                        {tagElem}
                    </Tooltip>
                ) : (
                    tagElem
                );
            })}
            {inputVisible && (
                <StyledInput
                    ref={inputFocus}
                    type="text"
                    size="small"
                    className="tag-input"
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputConfirm}
                    onPressEnter={handleInputConfirm}
                />
            )}
            {!inputVisible && (
                <Tag className="site-tag-plus" outlined color="blue" onClick={showInput}>
                    <PlusOutlined /> 添加
                </Tag>
            )}
        </BrandProvider>
    );


};

export const Checkable = () => {
    const {CheckableTag} = Tag;

    const tagsData = ['Movies', 'Books', 'Music', 'Sports'];

    class HotTags extends React.Component {
        state = {
            selectedTags: ['Books'],
        };

        handleChange(tag, checked) {
            const {selectedTags} = this.state;
            const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
            console.log('You are interested in: ', nextSelectedTags);
            this.setState({selectedTags: nextSelectedTags});
        }

        render() {
            const {selectedTags} = this.state;
            return (
                <>
                    <span style={{marginRight: 8}}>Categories:</span>
                    {tagsData.map(tag => (
                        <CheckableTag
                            key={tag}
                            checked={selectedTags.includes(tag)}
                            onChange={checked => this.handleChange(tag, checked)}
                        >
                            {tag}
                        </CheckableTag>
                    ))}
                </>
            );
        }
    }

    return (
        <BrandProvider>
            <HotTags />
        </BrandProvider>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/tag-cn/">Antd Tag API</a>
        </>
    );
};

