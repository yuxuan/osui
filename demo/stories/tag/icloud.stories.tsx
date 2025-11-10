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
import Tag from '@osui/tag';

export default {
    title: '数据展示/[new_dev]标签 Tag',
};

export const Demo = () => {
    const list1 = [
        {lable: '语言大模型', value: '1', icon: <ClockCircleOutlined style={{marginRight: 4}} />},
        {lable: '语言大模型', value: '2', icon: <ClockCircleOutlined style={{marginRight: 4}} />},
        {lable: '语言大模型', value: '3', icon: <ClockCircleOutlined style={{marginRight: 4}} />},
        {lable: '语言大模型', value: '4', icon: <ClockCircleOutlined style={{marginRight: 4}} />},
        {lable: '语言大模型', value: '5', icon: <ClockCircleOutlined style={{marginRight: 4}} />},
        {lable: '语言大模型', value: '8', icon: <ClockCircleOutlined style={{marginRight: 4}} />},
    ];
    const list2 = [
        {lable: '语言大模型', value: '1', icon: <ClockCircleOutlined style={{marginRight: 4}} />},
        {lable: '语言大模型', value: '2', icon: <ClockCircleOutlined style={{marginRight: 4}} />},
        {lable: '语言大模型', value: '3', icon: <ClockCircleOutlined style={{marginRight: 4}} />},
        {lable: '语言大模型', value: '4', icon: <ClockCircleOutlined style={{marginRight: 4}} />},
        {lable: '语言大模型', value: '5', icon: <ClockCircleOutlined style={{marginRight: 4}} />},
        {lable: '语言大模型', value: '6', icon: <ClockCircleOutlined style={{marginRight: 4}} />},
        {lable: '语言大模型', value: '7', icon: <ClockCircleOutlined style={{marginRight: 4}} />},
        {lable: '语言大模型', value: '8', icon: <ClockCircleOutlined style={{marginRight: 4}} />},
    ];
    const list3 = [
        {lable: '语言大模型', value: '1'},
        {lable: '语言大模型', value: '2'},
        {lable: '语言大模型', value: '3'},
        {lable: '语言大模型', value: '4'},
        {lable: '语言大模型', value: '5'},
        {lable: '语言大模型', value: '6'},
        {lable: '语言大模型', value: '7'},
        {lable: '语言大模型', value: '8'},
    ];
    const list4 = [
        {lable: '语言大模型', value: '1', icon: <ClockCircleOutlined style={{marginRight: 4}} />, disabled: true},
        {lable: '语言大模型', value: '2', icon: <ClockCircleOutlined style={{marginRight: 4}} />, disabled: true},
    ];
    const list5 = [
        {lable: '教育培训', value: '1'},
        {lable: '教育培训', value: '2'},
        {lable: '教育培训', value: '3'},
        {lable: '教育培训', value: '4'},
        {lable: '教育培训', value: '5'},
    ];
    const [tags1, setTags1] = React.useState<string[]>(['1']);
    const [tags2, setTags2] = React.useState<string[]>(['1']);
    const [tags3, setTags3] = React.useState<string[]>(['1']);
    const [tags4, setTags4] = React.useState<string[]>(['1']);
    const [tags5, setTags5] = React.useState<string[]>(['1']);
    const TagtabDemo = ({tagsData, selectedTags, setSelectedTags}: any) => {
        const handleChange = (tag: string, checked: boolean) => {
            const nextSelectedTags = checked
                ? [tag]
                : [tag];
            setSelectedTags(nextSelectedTags);
        };

        return (
            <>
                {tagsData.map<React.ReactNode>(tag => (
                    <Tag.TagTab
                        key={tag.value}
                        checked={selectedTags.includes(tag.value)}
                        disabled={tag.disabled}
                        onChange={checked => handleChange(tag.value, checked)}
                    >
                        {tag.icon}
                        {tag.lable}
                    </Tag.TagTab>
                ))}
            </>
        );
    };

    const CheckableTagDemo = ({tagsData, selectedTags, setSelectedTags}: any) => {
        const handleChange = (tag: string, checked: boolean) => {
            const nextSelectedTags = checked
                ? [...selectedTags, tag]
                : selectedTags.filter(t => t !== tag);
            setSelectedTags(nextSelectedTags);
        };

        return (
            <>
                {tagsData.map<React.ReactNode>(tag => (
                    <Tag.CheckableTag
                        key={tag.value}
                        checked={selectedTags.includes(tag.value)}
                        onChange={checked => handleChange(tag.value, checked)}
                    >
                        {tag.lable}
                    </Tag.CheckableTag>
                ))}
            </>
        );
    };

    return (
        <BrandProvider brand="icloud">
            <Divider>胶囊形</Divider>
            <p>常规</p>
            <p>
                <span>S：</span>
                <Tag color="success" size="small" round>成功</Tag>
                <Tag color="processing" size="small" round>运行中/待运行</Tag>
                <Tag color="error" size="small" round>失败</Tag>
                <Tag color="default" size="small" round>常规/停止</Tag>
                <Tag color="warning" size="small" round>异常</Tag>
            </p>
            <p>
                <span>M：</span>
                <Tag color="success" size="medium" round>成功</Tag>
                <Tag color="processing" size="medium" round>运行中/待运行</Tag>
                <Tag color="error" size="medium" round>失败</Tag>
                <Tag color="default" size="medium" round>常规/停止</Tag>
                <Tag color="warning" size="medium" round>异常</Tag>
            </p>
            <p>后置icon</p>
            <p>
                <span>S：</span>
                <Tag color="success" size="small" round>成功<QuestionCircleOutlined style={{marginLeft: 4}} /></Tag>
                <Tag color="processing" size="small" round>
                    运行中/待运行<QuestionCircleOutlined style={{marginLeft: 4}} />
                </Tag>
                <Tag color="error" size="small" round>失败<QuestionCircleOutlined style={{marginLeft: 4}} /></Tag>
                <Tag color="default" size="small" round>常规/停止<QuestionCircleOutlined style={{marginLeft: 4}} /></Tag>
                <Tag color="warning" size="small" round>异常<QuestionCircleOutlined style={{marginLeft: 4}} /></Tag>
            </p>
            <p>
                <span>M：</span>
                <Tag color="success" size="medium" round>成功<QuestionCircleOutlined style={{marginLeft: 4}} /></Tag>
                <Tag color="processing" size="medium" round>
                    运行中/待运行<QuestionCircleOutlined style={{marginLeft: 4}} />
                </Tag>
                <Tag color="error" size="medium" round>失败<QuestionCircleOutlined style={{marginLeft: 4}} /></Tag>
                <Tag color="default" size="medium" round>常规/停止<QuestionCircleOutlined style={{marginLeft: 4}} /></Tag>
                <Tag color="warning" size="medium" round>异常<QuestionCircleOutlined style={{marginLeft: 4}} /></Tag>
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
                <Tag size="small">小号文案说明</Tag>
                <Tag size="medium" color="default">大号文案说明</Tag>
            </p>

            <Divider>多选标签</Divider>
            <p>默认、选中、hover</p>
            <p><CheckableTagDemo tagsData={list5} selectedTags={tags5} setSelectedTags={setTags5} /></p>

            <Divider>tag-tab 切换标签</Divider>
            <p>默认、选中、hover</p>
            <p>
                <TagtabDemo tagsData={list1} selectedTags={tags1} setSelectedTags={setTags1} />
            </p>
            <p>禁用</p>
            <p>
                <TagtabDemo tagsData={list4} selectedTags={tags4} setSelectedTags={setTags4} />
            </p>
            <Divider>tag-tab 切换标签 组合样式</Divider>
            <p>前置icon</p>
            <p>
                <TagtabDemo tagsData={list2} selectedTags={tags2} setSelectedTags={setTags2} />
            </p>
            <p>纯文字</p>
            <p>
                <TagtabDemo tagsData={list3} selectedTags={tags3} setSelectedTags={setTags3} />
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
            <Tag color="var(--theme-primary-color)">标签</Tag>
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

const StyledInput = styled(Input as any)`
    width: 60px;
`;

export const Add = () => {
    const [inputValue, setInputValue] = useState('');
    const [editInputValue, setEditInputValue] = useState('');
    const [inputVisible, setInputVisible] = useState(false);
    const [tags, setTags] = useState(['Unremovable', 'Tag 2', 'Tag 3']);
    const [editInputIndex, setEditInputIndex] = useState(-1);

    const inputFocus = useCallback(
        (element: HTMLInputElement | null) => element && element.focus(),
        []
    );

    const handleClose = useCallback(
        (removedTag: any) => {
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
        (e: any) => {
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
        (e: any) => {
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

        handleChange(tag: any, checked: any) {
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

