import React, {useCallback, useState} from 'react';
import type {DisplayValueType} from 'rc-select/lib/BaseSelect';
import {Popover, Tag} from '@osui/ui';
import Select from '../../src';

export default () => {
    const Option = Select.Option;
    const [selectedValue, setSelectedValue] = useState<string[]>([]);
    const handleChange = useCallback(
        (value: string[]) => {
            setSelectedValue(value);
        },
        [setSelectedValue]
    );
    const handleClose = useCallback(
        (tag: DisplayValueType) => {
            const newSelectedValue = selectedValue.filter(v => v !== tag.value);
            setSelectedValue(newSelectedValue);
        },
        [selectedValue, setSelectedValue]
    );
    const renderMaxTagPlaceholder = useCallback(
        (args: DisplayValueType[]) => {
            if (!args.length) {
                return null;
            }
            const TagContent = (
                // 点击关闭时不要触发select open
                <div onMouseDown={e => e.stopPropagation()} onClick={e => e.stopPropagation()}>
                    {args.map(
                        (tag: DisplayValueType) => (
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
                    )}
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
