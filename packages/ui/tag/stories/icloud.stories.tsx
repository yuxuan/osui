/* eslint-disable import/no-extraneous-dependencies */
import React, {useCallback, useState} from 'react';
import Divider from '@osui/divider';
import Input from '@osui/input';
import Tooltip from '@osui/tooltip';
import {PlusOutlined, QuestionCircleOutlined} from '@ant-design/icons';
import {IconPlusOutlined} from '@osui/icons';
import {ClockCircleOutlined} from '@ant-design/icons';
import styled from '@emotion/styled';
import BrandProvider from '@osui/brand-provider';
import Tag from '../src';

export default {
    title: '数据展示/标签 Tag',
};

export const Demo = () => {

    return (
        <BrandProvider brand="icloud">
            <Divider>胶囊形</Divider>
            <p>常规</p>
            <p>
                <span>S：</span>
                <Tag color="success" round>成功</Tag>
                <Tag color="processing" round>运行中/待运行</Tag>
                <Tag color="error" round>失败</Tag>
                <Tag color="default" round>常规/停止</Tag>
                <Tag color="warning" round>异常</Tag>
            </p>
            <p>
                <span>M：</span>
                <Tag color="success" round>成功</Tag>
                <Tag color="processing" round>运行中/待运行</Tag>
                <Tag color="error" round>失败</Tag>
                <Tag color="default" round>常规/停止</Tag>
                <Tag color="warning" round>异常</Tag>
            </p>
            <p>后置icon</p>
            <p>
                <span>S：</span>
                <Tag color="success" round>成功<QuestionCircleOutlined style={{marginLeft: 4}} /></Tag>
                <Tag color="processing" round>运行中/待运行<QuestionCircleOutlined style={{marginLeft: 4}} /></Tag>
                <Tag color="error" round>失败<QuestionCircleOutlined style={{marginLeft: 4}} /></Tag>
                <Tag color="default" round>常规/停止<QuestionCircleOutlined style={{marginLeft: 4}} /></Tag>
                <Tag color="warning" round>异常<QuestionCircleOutlined style={{marginLeft: 4}} /></Tag>
            </p>
            <p>
                <span>M：</span>
                <Tag color="success" round>成功<QuestionCircleOutlined style={{marginLeft: 4}} /></Tag>
                <Tag color="processing" round>运行中/待运行<QuestionCircleOutlined style={{marginLeft: 4}} /></Tag>
                <Tag color="error" round>失败<QuestionCircleOutlined style={{marginLeft: 4}} /></Tag>
                <Tag color="default" round>常规/停止<QuestionCircleOutlined style={{marginLeft: 4}} /></Tag>
                <Tag color="warning" round>异常<QuestionCircleOutlined style={{marginLeft: 4}} /></Tag>
            </p>
            <Divider>点+文字</Divider>
            详见 Badge徽标数
            <Divider>方形</Divider>
            <p>
                <Tag color="green">模型蒸馏</Tag>
                <Tag color="blue">推理结果集</Tag>
                <Tag color="brand">模型评估</Tag>
                <Tag color="pink">批量推理</Tag>
                <Tag color="yellow">候补颜色</Tag>
            </p>
            <p>文案说明</p>
            <p>
                <Tag>小号文案说明</Tag>
                <Tag color="default">大号文案说明</Tag>
            </p>

            <Divider>多选标签</Divider>
            <p>默认</p>
            <p>
                <Tag.CheckableTag checked={false}>教育培训</Tag.CheckableTag>
            </p>
            <p>选中</p>
            <p>
                <Tag.CheckableTag outlined checked>教育培训</Tag.CheckableTag>
            </p>

            <Divider>切换标签</Divider>
            <p>未选</p>
            <p>
                <Tag.CheckableTag checked={false}>教育培训</Tag.CheckableTag>
                <Tag.CheckableTag checked={false} icon={<ClockCircleOutlined />}>教育培训</Tag.CheckableTag>
            </p>
            <p>默认选中</p>
            <p>
                <Tag.CheckableTag checked>教育培训</Tag.CheckableTag>
                <Tag.CheckableTag checked icon={<ClockCircleOutlined />}>教育培训</Tag.CheckableTag>

            </p>
            <p>禁用</p>
            <p>
                <Tag.CheckableTag disabled checked={false}>教育培训</Tag.CheckableTag>
                <Tag.CheckableTag disabled checked={false} icon={<ClockCircleOutlined />}>教育培训</Tag.CheckableTag>
            </p>
            <p>选中禁用</p>
            <p>
                <Tag.CheckableTag disabled checked>教育培训</Tag.CheckableTag>
                <Tag.CheckableTag disabled checked icon={<ClockCircleOutlined />}>教育培训</Tag.CheckableTag>
            </p>
            <Divider>切换标签 组合样式</Divider>
            <p>前置icon</p>
            <p>
                <Tag.CheckableTag checked>
                    <ClockCircleOutlined style={{marginRight: 4}} />语言大模型
                </Tag.CheckableTag>
                <Tag.CheckableTag checked={false}>
                    <ClockCircleOutlined style={{marginRight: 4}} />语言大模型
                </Tag.CheckableTag>
                <Tag.CheckableTag checked={false}>
                    <ClockCircleOutlined style={{marginRight: 4}} />语言大模型
                </Tag.CheckableTag>
                <Tag.CheckableTag checked={false}>
                    <ClockCircleOutlined style={{marginRight: 4}} />语言大模型
                </Tag.CheckableTag>
            </p>
            <p>纯文字</p>
            <p>
                <Tag.CheckableTag checked>语言大模型</Tag.CheckableTag>
                <Tag.CheckableTag checked={false}>语言大模型</Tag.CheckableTag>
                <Tag.CheckableTag checked={false}>语言大模型</Tag.CheckableTag>
                <Tag.CheckableTag checked={false}>语言大模型</Tag.CheckableTag>
            </p>
        </BrandProvider>
    );
};

export const OldDemo = () => {
    return (
        <BrandProvider brand="icloud">
            {/* success */}
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
        },
        []
    );

    const handleInputChange = useCallback(
        e => {
            setInputValue(e.target.value);
        },
        []
    );

    const handleInputConfirm = useCallback(
        () => {
            if (inputValue && !tags.includes(inputValue)) {
                setTags([...tags, inputValue]);
            }
            setInputVisible(false);
            setInputValue('');
        },
        [inputValue, tags]
    );

    const handleEditInputChange = useCallback(
        e => {
            setEditInputValue(e.target.value);
        },
        []
    );

    const handleEditInputConfirm = useCallback(
        () => {
            const newTags = [...tags];
            newTags[editInputIndex] = editInputValue;
            setTags(newTags);
            setEditInputIndex(-1);
            setEditInputValue('');
        },
        [editInputIndex, editInputValue, tags]
    );

    return (
        <>
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
        </>
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

    return (<HotTags />);
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/tag-cn/">Antd Tag API</a>
        </>
    );
};

