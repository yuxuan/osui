import React, {useCallback} from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {RefSelectProps} from 'antd/es/select';
import {Select as AntdSelect} from 'antd';
import {useDerivedState} from '@huse/derived-state';
import Tag from '@osui/tag';
import Popover from '@osui/popover';
import Select from './InternalBaseSelect';

const DisplayTagsInPopoverSelect = React.forwardRef((
    props: React.ComponentProps<typeof Select>,
    ref: React.Ref<RefSelectProps> | undefined
) => {
    const [selectedValue, setSelectedValue] = useDerivedState<string[]>(props.value as string[]);
    const handleChange = useCallback(
        (value, option) => {
            setSelectedValue(value);
            props.onChange?.(value, option);
        },
        [props, setSelectedValue]
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
        <Select
            ref={ref}
            {...props}
            value={selectedValue}
            onChange={handleChange}
            maxTagCount="responsive"
            maxTagPlaceholder={renderMaxTagPlaceholder}
        />
    );
});

function EnhancedInternalSelect(
    props: React.ComponentProps<typeof Select>,
    ref: React.Ref<RefSelectProps> | undefined
): React.ReactElement | null {
    const {displayTagsInPopover, ...restProps} = props;
    if (displayTagsInPopover) {
        return <DisplayTagsInPopoverSelect {...restProps} ref={ref} />;
    }
    return <Select {...restProps} ref={ref} />;
}

const EnhancedSelect = React.forwardRef(EnhancedInternalSelect);

hoistNonReactStatics(EnhancedSelect, AntdSelect);

export default EnhancedSelect as unknown as typeof Select;
