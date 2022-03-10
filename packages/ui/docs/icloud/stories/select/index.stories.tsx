/* eslint-disable import/no-extraneous-dependencies */
import React, {useCallback, useState} from 'react';
import Space from '@osui/space';
import BrandProvider from '@osui/brand-provider';
import {Popover, Tag} from '@osui/ui';
import Select from '@osui/select';

export default {
    title: '数据录入/Select 选择器',
};

export const Demo = () => {
    const Option = Select.Option;
    function handleChange(value: string) {
        console.log(`selected ${value}`);
    }

    return (
        <>
            <BrandProvider brand="icloud">
                <h2>基础下拉</h2>
                <p>placeholder</p>
                <Select placeholder="请选择" style={{width: 240}} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
                <br />
                <br />
                <p>有默认值</p>
                <Select defaultValue="lucy" style={{width: 240}} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
                <br />
                <br />
                <p>disabled</p>
                <Select defaultValue="lucy" style={{width: 240}} disabled>
                    <Option value="lucy">Lucy</Option>
                </Select>
                <br />
                <br />
                <p>loading</p>
                <Select defaultValue="lucy" style={{width: 240}} loading>
                    <Option value="lucy">Lucy</Option>
                </Select>
                <br />
                <br />
                <p>无边框样式</p>
                <Select defaultValue="lucy" style={{width: 240}} noBorder>
                    <Option value="lucy">Lucy</Option>
                </Select>
                <br />
                <br />
                <p>内容为空</p>
                <Select defaultValue="lucy" style={{width: 240}} />
            </BrandProvider>
        </>
    );
};


export const Size = () => {
    const Option = Select.Option;
    function handleChange(value: string) {
        console.log(`selected ${value}`);
    }

    return (
        <Space>
            <Select placeholder="small size" style={{width: 240}} size="small">
                <Option value="lucy">Lucy</Option>
            </Select>
            <Select placeholder="default size" style={{width: 240}} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                    Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <Select placeholder="large size" style={{width: 240}} onChange={handleChange} size="large">
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                    Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
        </Space>
    );
};

export const MultipleDemo = () => {
    const Option = Select.Option;
    function handleChange(value: string) {
        console.log(`selected ${value}`);
    }

    return (
        <>
            <BrandProvider>
                <h2>无限制下拉多选</h2>
                <p>默认多选使用方式：</p>
                <Select mode="multiple" placeholder="请选择" style={{width: 240}} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
                <br />
                <br />
                <p>有默认值</p>
                <Select
                    allowClear={false}
                    mode="multiple"
                    defaultValue="lucy"
                    style={{width: 240}}
                    onChange={handleChange}
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                    <Option value="a">a</Option>
                    <Option value="b">b</Option>
                    <Option value="c">c</Option>
                </Select>
                <br />
                <br />
                <p>可清除样式</p>
                <Select
                    allowClear
                    mode="multiple"
                    defaultValue="lucy"
                    style={{width: 240}}
                    onChange={handleChange}
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
                <br />
                <br />
                <p>禁用</p>
                <Select
                    disabled
                    closable
                    allowClear={false}
                    mode="multiple"
                    value={['luck', 'jack']}
                    style={{width: 240}}
                    onChange={handleChange}
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                    <Option value="a">a</Option>
                    <Option value="b">b</Option>
                    <Option value="c">c</Option>
                </Select>
                <br />
                <br />
                <p>禁用</p>
                <Select
                    closable
                    allowClear={false}
                    mode="multiple"
                    defaultValue={['lucy', 'jack']}
                    style={{width: 240}}
                    onChange={handleChange}
                >
                    <Option value="jack" disabled>Jack</Option>
                    <Option value="lucy" disabled>Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                    <Option value="a">a</Option>
                    <Option value="b">b</Option>
                    <Option value="c">c</Option>
                </Select>
                <br />
                <br />
                <p>有限制下拉多选</p>
                <p>待补充</p>
                <p>含搜索功能的下拉多选</p>
                <p>待补充</p>
                <p>复合内容选择器</p>
                <p>待补充</p>
                <p>含搜索功能下拉单选</p>
                <p>待补充</p>
            </BrandProvider>
        </>
    );
};

export const MultipleDisplayInPopup = () => {
    const Option = Select.Option;
    console.log(Option);
    function handleChange(value: string) {
        console.log(`selected ${value}`);
    }
    return (
        <>
            <BrandProvider>
                <Select
                    displayTagsInPopover
                    allowClear={false}
                    mode="multiple"
                    defaultValue="lucy"
                    style={{width: 240}}
                    onChange={handleChange}
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                    <Option value="a">a</Option>
                    <Option value="b">b</Option>
                    <Option value="c">c</Option>
                </Select>
            </BrandProvider>
        </>
    );
};

export const MulipleDisplayInPopupByHand = () => {
    const Option = Select.Option;
    const [selectedValue, setSelectedValue] = useState<string[]>([]);
    const handleChange = useCallback(
        value => {
            setSelectedValue(value);
        },
        [setSelectedValue]
    );
    const handleClose = useCallback(
        tag => {
            const newSelectedValue = selectedValue.filter(v => v !== tag.value);
            setSelectedValue(newSelectedValue);
        },
        [selectedValue, setSelectedValue]
    );
    const renderMaxTagPlaceholder = useCallback(
        args => {
            if (!args.length) {
                return null;
            }
            const TagContent = (
                // 点击关闭时不要触发select open
                <div onMouseDown={e => e.stopPropagation()} onClick={e => e.stopPropagation()}>
                    {
                        args.map(
                            (tag: any) => (
                                <Tag
                                    key={tag.key ?? tag.value}
                                    closable
                                    // eslint-disable-next-line react/jsx-no-bind
                                    onClose={() => {
                                        handleClose(tag);
                                    }}
                                >
                                    {tag.value}
                                </Tag>
                            )
                        )
                    }
                </div>
            );
            return (
                <Popover content={TagContent}>
                    {`${args.length}+...`}
                </Popover>
            );
        },
        [handleClose]
    );
    return (
        <>
            <p>不适用属性，直接手动实现方式</p>
            <Select
                allowClear
                mode="multiple"
                style={{width: 240}}
                value={selectedValue}
                onChange={handleChange}
                maxTagCount="responsive"
                maxTagPlaceholder={renderMaxTagPlaceholder}
            >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                    Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
                <Option value="a">a</Option>
                <Option value="b">b</Option>
                <Option value="c">c</Option>
            </Select>
        </>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/select-cn/">Antd Select API</a>
        </>
    );
};

export const TestCase = () => {
    const Option = Select.Option;
    return (
        <>
            <p>最短的时候</p>
            <Select defaultValue="lucy">
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                    Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>

            <p>下拉内容10条</p>
            <BrandProvider brand="icloud">
                <Select defaultValue="lucy" style={{width: 240}}>
                    <Option value="lucy1">Lucy1</Option>
                    <Option value="lucy2">Lucy2</Option>
                    <Option value="lucy3">Lucy3</Option>
                    <Option value="lucy4">Lucy4</Option>
                    <Option value="lucy5">Lucy5</Option>
                    <Option value="lucy6">Lucy6</Option>
                    <Option value="lucy7">Lucy7</Option>
                    <Option value="lucy8">Lucy8</Option>
                    <Option value="lucy9">Lucy9</Option>
                    <Option value="lucy10">Lucy10</Option>
                    <Option value="lucy11">Lucy11</Option>
                    <Option value="lucy12">Lucy12</Option>
                </Select>
            </BrandProvider>

            <p>下拉内容10条 关闭virtual</p>
            <BrandProvider brand="icloud">
                <Select defaultValue="lucy" style={{width: 240}} virtual={false}>
                    <Option value="lucy1">Lucy1</Option>
                    <Option value="lucy2">Lucy2</Option>
                    <Option value="lucy3">Lucy3</Option>
                    <Option value="lucy4">Lucy4</Option>
                    <Option value="lucy5">Lucy5</Option>
                    <Option value="lucy6">Lucy6</Option>
                    <Option value="lucy7">Lucy7</Option>
                    <Option value="lucy8">Lucy8</Option>
                    <Option value="lucy9">Lucy9</Option>
                    <Option value="lucy10">Lucy10</Option>
                    <Option value="lucy11">Lucy11</Option>
                    <Option value="lucy12">Lucy12</Option>
                </Select>
            </BrandProvider>

            <p>多选</p>
            <p>antd issue: https://github.com/ant-design/ant-design/issues/19828</p>
            <Select
                showSearch
                mode="multiple"
                showArrow={false}
                placeholder="筛选代码库"
                maxTagCount={0}
                maxTagPlaceholder={() => null}
                style={{width: 240}}
            >
                <Option value="lucy1">Lucy221</Option>
                <Option value="lucy2">Lucy2</Option>
                <Option value="lucy3">Lucy3</Option>
                <Option value="lucy4">Lucy4</Option>
                <Option value="lucy5">Lucy5</Option>
                <Option value="lucy6">Lucy6</Option>
                <Option value="lucy7">Lucy7</Option>
                <Option value="lucy8">Lucy8</Option>
                <Option value="lucy9">Lucy9</Option>
                <Option value="lucy10">Lucy10</Option>
                <Option value="lucy11">Lucy11</Option>
                <Option value="lucy12">Lucy12</Option>
            </Select>

            <p></p>
            <p>可选择时，里面内容的颜色应该是placeholder</p>
            <Select
                showSearch
                style={{width: 200}}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                filterSort={(optionA, optionB) =>
                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                }
            >
                <Option value="1">Not Identified</Option>
                <Option value="2">Closed</Option>
                <Option value="3">Communicated</Option>
                <Option value="4">Identified</Option>
                <Option value="5">Resolved</Option>
                <Option value="6">Cancelled</Option>
            </Select>
        </>
    );

};
