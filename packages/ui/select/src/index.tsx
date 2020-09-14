import React from 'react';
import {Select as AntSelect} from 'antd';
import {SelectProps} from 'antd/es/select';
import classNames from 'classnames';
import {IconDownArrow, IconChecked} from '@osui/icons';
import {adjustAntdProps} from './utils';
import './index.less';

const clsPrefix = 'osui-select';

export interface OSUISelectProps<T> extends SelectProps<T> {
    noBorder?: boolean;
}

type OSUISelectFC = <T>(props: OSUISelectProps<T>) => React.ReactElement | null;

export interface OSUISelectType extends OSUISelectFC {
    Option: typeof AntSelect.Option;
    OptGroup: typeof AntSelect.OptGroup;
}

function InternalOSUISelect<R, T>(props: OSUISelectProps<T>, ref: React.Ref<R>): React.ReactElement | null {
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
        <AntSelect
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

const OSUISelect: OSUISelectType = React.forwardRef(InternalOSUISelect) as unknown as OSUISelectType;

OSUISelect.Option = AntSelect.Option;
OSUISelect.OptGroup = AntSelect.OptGroup;

export default OSUISelect;
