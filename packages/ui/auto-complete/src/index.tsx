import React, {useMemo} from 'react';
import {AutoComplete as AntdAutoComplete} from 'antd';
import {AutoCompleteProps as AntdAutoCompleteProps} from 'antd/lib/auto-complete';
import {RefSelectProps, OptionType} from 'antd/lib/select';
import HighlightText from '@osui/highlight-text';
import classNames from 'classnames';

const clsPrefix = 'osui-auto-complete';

export interface AutoCompleteProps extends AntdAutoCompleteProps {
    highlightKeyword?: boolean;
}

const AutoComplete: React.ForwardRefRenderFunction<RefSelectProps, AutoCompleteProps> = (
    {className, options, highlightKeyword = true, value: keyword, ...props},
    ref
) => {
    const innerClassName = classNames(className, clsPrefix);
    const innerOptions = useMemo(
        () => {
            if (highlightKeyword) {
                return options?.map(
                    ({label, value, key, ...option}) => (
                        // 如果传入了label还是会以传入的label为主
                        {
                            label: label ?? (
                                <HighlightText mark={keyword}>{value}</HighlightText>
                            ),
                            value,
                            ...option,
                        }
                    )
                );
            }
            return options;
        },
        [options, highlightKeyword, keyword]
    );

    return (
        <AntdAutoComplete
            ref={ref}
            className={innerClassName}
            options={innerOptions}
            value={keyword}
            {...props}
        />
    );
};

const RefAutoComplete = React.forwardRef<RefSelectProps, AutoCompleteProps>(AutoComplete);

type RefAutoCompleteWithOption = typeof RefAutoComplete & {
    Option: OptionType;
};

(RefAutoComplete as RefAutoCompleteWithOption).Option = AntdAutoComplete.Option;

export default RefAutoComplete as RefAutoCompleteWithOption;
