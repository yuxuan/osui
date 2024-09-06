import React, {useCallback, useState} from 'react';
import type {DisplayValueType} from 'rc-select/lib/BaseSelect';
import Popover from '@osui/popover';
import Tag from '@osui/tag';
import BrandProvider from '@osui/brand-provider';
import Select from '../../src';

export default () => {
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
        <BrandProvider>
            <p>不适用属性，直接手动实现方式</p>
            <Select
                allowClear
                mode="multiple"
                style={{width: 240}}
                value={selectedValue}
                onChange={handleChange}
                maxTagCount="responsive"
                maxTagPlaceholder={renderMaxTagPlaceholder}
                options={
                    [
                        {value: 'jack', label: 'Jack'},
                        {value: 'lucy', label: 'Lucy'},
                        {value: 'disabled', label: 'Disabled', disabled: true},
                        {value: 'Yiminghe', label: 'yiminghe'},
                        {value: 'a', label: 'a', disabled: true},
                        {value: 'b', label: 'b', disabled: true},
                        {value: 'c', label: 'c', disabled: true},
                    ]
                }
            />
        </BrandProvider>
    );
};
