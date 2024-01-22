import React, {useState, useMemo} from 'react';
import {difference, isEqual} from 'lodash';
import Select from '@osui/select';

const excludeAll = values => values && values.filter(v => v !== 'all');

const options = [
    {label: '全部', value: 'all'},
    {label: '张效益', value: 'zhangxiaoyi'},
    {label: '王二嘎', value: 'wangerga'},
    {label: '李三三', value: '李三三'},
    {label: '赵四生', value: '赵四生'},
];

const Selector = ({onChange, value, ...props}) => {
    const valueIn = value === 'all' ? ['all'] : value;
    const [valueState, setValueState] = useState(valueIn);
    const allValues = options?.map(i => i.value);
    const valueWithoutAll = excludeAll(allValues);
    // 是否是全选由select，deselect来控制
    const handleDeselect = value => {
        if (value === 'all') {
            setValueState([]);
        }
    };
    const handleSelect = value => {
        if (value === 'all') {
            setValueState(allValues);
        }
    };
    const innerValue = useMemo(
        () => {
            if (!value || !value.length || !valueState.length) {
                return [];
            }
            // 默认第一次的值
            if (isEqual(value, ['all'])) {
                return allValues;
            }
            // 不是全部都选了
            if (allValues.length !== valueState.length) {
                // 没有选全部，其余的都选了
                if (difference(valueWithoutAll, valueState).length === 0) {
                    return allValues;
                }
                return excludeAll(valueState);
            }
            // 剩下的情况选什么就是什么了
            return valueState;
        },
        [allValues, value, valueState, valueWithoutAll]
    );
    const handleChange = value => {
        setValueState(value);
        onChange(value);
    };
    return (
        <Select
            {...props}
            mode="multiple"
            value={innerValue}
            onChange={handleChange}
            options={options}
            onSelect={handleSelect}
            onDeselect={handleDeselect}
        />
    );
};

export default () => {
    const [value, setState] = useState(['all']);
    const handleChange = value => {
        setState(value);
        console.log(value);
    };
    return (<Selector value={value} onChange={handleChange} />);
};
