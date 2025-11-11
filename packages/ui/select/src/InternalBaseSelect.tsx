import React, {useRef, useState, useEffect} from 'react';
import {Select as AntdSelect} from 'antd';
import type {BaseOptionType, DefaultOptionType, SelectProps as AntdSelectProps} from 'antd/es/select';
import type {BaseSelectRef} from 'rc-select';
import classNames from 'classnames';
import {IconDownOutlined, IconCheckSquareFilled, IconCloseOutlined} from '@osui/icons';
import {useBrandContext} from '@osui/brand-provider';
import Tooltip from '@osui/tooltip';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {adjustAntdProps} from './utils';
import './index.less';

const clsPrefix = 'osui-select';

type TagRenderProps = Parameters<
  NonNullable<SelectProps<string>['tagRender']>
>[0];

interface ExtendedTagRenderProps extends TagRenderProps {
  maxTagTextLength?: number;
}
const EllipsisTag = ({label, closable, disabled, onClose, maxTagTextLength}: ExtendedTagRenderProps) => {
    const textRef = useRef(null);
    const [isOverflow, setIsOverflow] = useState(false);

    useEffect(
        () => {
            const el = textRef.current as unknown as HTMLElement;
            if (el) {
                if (typeof label === 'string' && maxTagTextLength && label.length > maxTagTextLength) {
                    setIsOverflow(true);
                } else {
                    // 判断内容是否超出容器宽度
                    setIsOverflow(el.scrollWidth > el.clientWidth);
                }
            }
        },
        [label]
    );

    const displayText = typeof label === 'string' && label.length > maxTagTextLength
        ? label.slice(0, maxTagTextLength) + '...'
        : label;

    const TagContent = (
        <span
            className={classNames(
                'ant-select-selection-item',
                {
                    'ant-select-selection-item-disabled': disabled,
                }
            )}
        >
            <span ref={textRef} className="ant-select-selection-item-content">
                {displayText}
            </span>
            {closable && (
                <span className="ant-select-selection-item-remove">
                    <IconCloseOutlined className={`${clsPrefix}-remove-icon`} onClick={onClose} />
                </span>
            )}
        </span>
    );

    return isOverflow ? (
        <Tooltip title={label}>{TagContent}</Tooltip>
    ) : (
        TagContent
    );
};

export interface SelectProps<
    ValueType = any,
    OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType
> extends AntdSelectProps<ValueType, OptionType> {
    noBorder?: boolean;
    displayTagsInPopover?: boolean;
}

function InternalSelect<ValueType = any, OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType>(
    props: SelectProps<ValueType, OptionType>,
    ref?: React.Ref<BaseSelectRef>
): React.ReactElement | null {
    const {className, loading, listHeight, noBorder, maxTagTextLength, ...restProps} = props;
    const {brand} = useBrandContext();
    // 暂时用，后面需要透传下去
    const {mode, popupClassName} = restProps;

    const isMultiple = mode === 'multiple' || mode === 'tags';

    const adjustedProps = adjustAntdProps(restProps, [
        {
            targetProp: 'suffixIcon',
            shouldOverride: !loading, // 只有在loading时，使用antd的loading icon，非loading时覆盖
            override: <IconDownOutlined />,
        },
        {
            targetProp: 'popupClassName',
            shouldOverride: true, // 只有在多选时，加上popupClassName
            override: (
                isMultiple
                    ? classNames(`${clsPrefix}-multiple-dropdown`, `${clsPrefix}-dropdown`, popupClassName)
                    : classNames(`${clsPrefix}-dropdown`, popupClassName)
            ),
            alwaysOverride: true,
        },
        {
            targetProp: 'menuItemSelectedIcon',
            shouldOverride: isMultiple, // 只有在多选时，加上menuItemSelectedIcon
            override: <IconCheckSquareFilled className={`${clsPrefix}-check-icon`} />,
        },
        {
            targetProp: 'showArrow',
            shouldOverride: isMultiple, // 只有在多选时，加上menuItemSelectedIcon
            override: true,
        },
        {
            targetProp: 'allowClear',
            shouldOverride: isMultiple, // 只有在多选时，加上allowClear
            override: true,
        },
        {
            targetProp: 'removeIcon',
            shouldOverride: true, // 只有在多选时，加上removeIcon
            override: <IconCloseOutlined className={`${clsPrefix}-remove-icon`} />,
        },
    ]);

    const innerListHeight = listHeight ?? (brand === 'icloud' ? 320 : 256);

    return (
        <AntdSelect
            ref={ref}
            className={classNames(
                clsPrefix,
                {[`${clsPrefix}-no-border`]: noBorder},
                className
            )}
            loading={loading}
            listHeight={innerListHeight}
            optionRender={option => {
                if (option.data.disabled) {
                    return (
                        <Tooltip title={option.data.disabledReason}>
                            <span>{option.data.label}</span>
                        </Tooltip>
                    );
                }
                return <span>{option.data.label}</span>;
            }}
            tagRender={option => {
                return (
                    <EllipsisTag {...option} maxTagTextLength={maxTagTextLength} />
                );
            }}
            maxTagPlaceholder={option => {
                return (
                    <Tooltip title={<>剩余{option.length}项未展示</>}>
                        <span>+{option.length}</span>
                    </Tooltip>
                );
            }}
            {...adjustedProps}
            maxTagTextLength={null}
        />
    );
}

const Select = React.forwardRef(InternalSelect) as unknown as (<
    ValueType = any,
    OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType,
>(
    props: React.PropsWithChildren<SelectProps<ValueType, OptionType>> & React.RefAttributes<BaseSelectRef>,
) => React.ReactElement) & {
    displayName?: string;
    SECRET_COMBOBOX_MODE_DO_NOT_USE: string;
    Option: typeof AntdSelect.Option;
    OptGroup: typeof AntdSelect.OptGroup;
};

hoistNonReactStatics(Select, AntdSelect);

export default Select;
