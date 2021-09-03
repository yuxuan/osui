import React, {useMemo, useCallback} from 'react';
import {AutoComplete as AntdAutoComplete} from 'antd';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {useDerivedState} from '@huse/derived-state';
import type {AutoCompleteProps as AntdAutoCompleteProps} from 'antd/lib/auto-complete';
import type {RefSelectProps, OptionType} from 'antd/lib/select';
import HighlightText from '@osui/highlight-text';
import {adjustAntdProps} from '@osui/select/lib/utils';
import {IconDownOutlined} from '@osui/icons';
import classNames from 'classnames';
import '@osui/select/lib/index.less';
import './index.less';

const clsPrefix = 'osui-auto-complete';

export interface AutoCompleteProps extends AntdAutoCompleteProps {
    highlightKeyword?: boolean;
    loading?: boolean;
}

const AutoComplete: React.ForwardRefRenderFunction<RefSelectProps, AutoCompleteProps> = (
    {
        className,
        options,
        highlightKeyword = true,
        value: keyword,
        dropdownClassName,
        onSearch,
        loading,
        ...props
    },
    ref
) => {
    const [derivedKeyword, setDerivedKeyword] = useDerivedState(keyword);
    // osui-select的className是因为，auto-complete实际上就是select
    const innerClassName = classNames(className, clsPrefix, 'osui-select');
    const innerDropdownClassName = classNames(dropdownClassName, `${clsPrefix}-dropdown`);
    const innerOptions = useMemo(
        () => {
            if (highlightKeyword) {
                return options?.map(
                    ({label, value, key, ...option}) => (
                        // 如果传入了label还是会以传入的label为主
                        {
                            label: label ?? (
                                <HighlightText mark={derivedKeyword}>{value}</HighlightText>
                            ),
                            value,
                            ...option,
                        }
                    )
                );
            }
            return options;
        },
        [options, highlightKeyword, derivedKeyword]
    );

    const handleSearch = useCallback(
        (value: string) => {
            onSearch && onSearch(value);
            setDerivedKeyword(value);
        },
        [setDerivedKeyword, onSearch]
    );

    // 暂时用，后面需要透传下去
    const adjustedProps = adjustAntdProps(props, [
        {
            targetProp: 'suffixIcon',
            shouldOverride: !loading, // 只有在loading时，使用antd的loading icon，非loading时覆盖
            override: <IconDownOutlined />,
        },
    ]);

    return (
        <AntdAutoComplete
            ref={ref}
            className={innerClassName}
            options={innerOptions}
            value={keyword}
            dropdownClassName={innerDropdownClassName}
            onSearch={handleSearch}
            loading={loading}
            {...adjustedProps}
            {...props}
        />
    );
};

const RefAutoComplete = React.forwardRef<RefSelectProps, AutoCompleteProps>(AutoComplete);

hoistNonReactStatics(RefAutoComplete, AntdAutoComplete);

type RefAutoCompleteWithOption = typeof RefAutoComplete & {
    Option: OptionType;
};

export default RefAutoComplete as RefAutoCompleteWithOption;

