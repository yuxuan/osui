import React, {useMemo, useCallback} from 'react';
import {AutoComplete as AntdAutoComplete} from 'antd';
import {AutoCompleteProps as AntdAutoCompleteProps} from 'antd/es/';
import HighlightText from '@osui/highlight-text';
import {useDerivedState} from '@huse/derived-state';
import classNames from 'classnames';

const clsPrefix = 'osui-auto-complete';

export interface AutoCompleteProps extends AntdAutoCompleteProps {
    highlightKeyword?: boolean;
}

const AutoComplete: React.FC<AutoCompleteProps> = ({
    className, options, highlightKeyword = true, value: valueProp, onSearch, ...props
}) => {
    const innerClassName = classNames(className, clsPrefix);
    // const [innerOptions, setInnerOptions] = useDerivedState(options);
    const [keyword, setKeyword] = useDerivedState(valueProp);
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

    const handleSearch = useCallback(
        value => {
            setKeyword(value);
            onSearch && onSearch(value);
        },
        [setKeyword, onSearch]
    );
    return (
        <AntdAutoComplete
            className={innerClassName}
            options={innerOptions}
            onSearch={handleSearch}
            value={keyword}
            {...props}
        />
    );
};

export default AutoComplete;
