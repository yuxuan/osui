import React from 'react';
import {Select as AntdSelect} from 'antd';
import {SelectProps as AntdSelectProps} from 'antd/es/select';
import classNames from 'classnames';
import {IconDownArrow, IconChecked} from '@osui/icons';
import {adjustAntdProps} from './utils';
import './index.less';

const clsPrefix = 'osui-select';

export interface SelectProps<T> extends AntdSelectProps<T> {
    noBorder?: boolean;
}

type SelectFC = <T>(props: SelectProps<T>) => React.ReactElement | null;

export interface SelectType extends SelectFC {
    Option: typeof AntdSelect.Option;
    OptGroup: typeof AntdSelect.OptGroup;
}

function InternalSelect<R, T>(props: SelectProps<T>, ref: React.Ref<R>): React.ReactElement | null {
    const {className, noBorder, loading, ...restProps} = props;
    // 暂时用，后面需要透传下去
    const {mode, dropdownClassName} = restProps;

    const isMultiple = mode === 'multiple' || mode === 'tags';

    const adjustedProps = adjustAntdProps(restProps, [
        {
            targetProp: 'suffixIcon',
            shouldOverride: !loading, // 只有在loading时，使用antd的loading icon，非loading时覆盖
            override: <IconDownArrow />,
        },
        {
            targetProp: 'dropdownClassName',
            shouldOverride: isMultiple, // 只有在多选时，加上dropdownClassName
            override: classNames(`${clsPrefix}-multiple-dropdown`, dropdownClassName),
            alwaysOverride: true,
        },
        {
            targetProp: 'menuItemSelectedIcon',
            shouldOverride: isMultiple, // 只有在多选时，加上menuItemSelectedIcon
            override: <IconChecked />,
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
    ]);

    return (
        <AntdSelect
            ref={ref}
            className={classNames(
                clsPrefix,
                {[`${clsPrefix}-no-border`]: noBorder},
                className
            )}
            loading={loading}
            {...adjustedProps}
        />
    );
}

const Select: SelectType = React.forwardRef(InternalSelect) as unknown as SelectType;

Select.Option = AntdSelect.Option;
Select.OptGroup = AntdSelect.OptGroup;

export default Select;
