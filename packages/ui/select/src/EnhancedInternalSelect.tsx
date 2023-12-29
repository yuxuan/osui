import React, {useCallback, forwardRef} from 'react';
import {RefSelectProps} from 'antd/es/select';
import {Select as AntdSelect} from 'antd';
import {useDerivedState} from '@huse/derived-state';
import Tag from '@osui/tag';
import Popover from '@osui/popover';
import hoistNonReactStatics from 'hoist-non-react-statics';
import Select from './InternalBaseSelect';

type ForwardRefReturn = React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
> | null;

type DefaultType = string[];

const DisplayTagsInPopoverSelect = forwardRef(<T = DefaultType>(
    props: React.ComponentProps<typeof Select<T>>,
    ref: React.Ref<RefSelectProps> | undefined
) => {
    const [selectedValue, setSelectedValue] = useDerivedState<T | undefined>(props.value as T);
    const handleChange = useCallback(
        (value, option) => {
            setSelectedValue(value);
            props.onChange?.(value, option);
        },
        [props, setSelectedValue]
    );
    const handleClose = useCallback(
        tag => {
            const newSelectedValue = Array.isArray(selectedValue)
                ? (selectedValue.filter(v => v !== tag.value) as T)
                : selectedValue === tag.value
                    ? selectedValue
                    : undefined;
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
        <Select
            ref={ref}
            {...props}
            value={selectedValue}
            onChange={handleChange}
            maxTagCount="responsive"
            maxTagPlaceholder={renderMaxTagPlaceholder}
        />
    );
}) as <T = DefaultType>(
    props: React.ComponentProps<typeof Select<T>>,
    ref: React.Ref<RefSelectProps> | undefined
) => ForwardRefReturn;

function EnhancedInternalSelect<T = DefaultType>(
    props: React.ComponentProps<typeof Select<T>>,
    ref: React.Ref<RefSelectProps> | undefined
): React.ReactElement | null {
    const {displayTagsInPopover, ...restProps} = props;
    if (displayTagsInPopover) {
        return <DisplayTagsInPopoverSelect<T> {...restProps} ref={ref} />;
    }
    return <Select {...restProps} ref={ref} />;
}

const EnhancedSelect = React.forwardRef(EnhancedInternalSelect) as <T = DefaultType>(
    props: React.ComponentProps<typeof Select<T>>,
    ref: React.Ref<RefSelectProps> | undefined
) => ForwardRefReturn;

hoistNonReactStatics(EnhancedSelect, AntdSelect);

export default EnhancedSelect;
