import React, {useContext} from 'react';
import {InputNumber as AntdInputNumber, ConfigProvider, theme} from 'antd';
import {InputNumberProps as AntdInputNumberProps} from 'antd/es/input-number';
import classNames from 'classnames';
// import './index.less';
import {useStyle} from './style';
import {useStyle as useNumberStyle} from './style/inputNumber';
const {useToken} = theme;

const clsPrefix = 'osui-input-number';

type ValueType = string| number;

interface InputNumberProps<T extends ValueType=ValueType> extends AntdInputNumberProps<T> {
    tailLabel?: React.ReactNode;
}

function InputNumberDom<T extends ValueType=ValueType>(
    {tailLabel, className, ...props}: InputNumberProps<T>,
    ref: React.Ref<HTMLInputElement> | undefined
) {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('osui-input-number-compact', props.prefixCls);
    const antPrefix = getPrefixCls('', props.prefixCls);
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefix);
    const wrapNumbeerSSROsui = useNumberStyle(clsPrefix, prefixCls, cssVar, antPrefix);
    const innerClassName = classNames(clsPrefix, className);
    const {hashId} = useToken();

    return wrapSSROsui(wrapNumbeerSSROsui(
        <>
            <AntdInputNumber ref={ref} className={innerClassName} {...props} />
            {typeof tailLabel === 'string' ? (
                <span className={`${clsPrefix}-tail-label ${hashId}`}>{tailLabel}</span>
            ) : tailLabel}
        </>
    ));
}

export type {InputNumberProps};

const InputNumber = React.forwardRef(InputNumberDom);

export default InputNumber as (<T extends ValueType = ValueType>(
    props: React.PropsWithChildren<InputNumberProps<T>> & {
    ref?: React.Ref<HTMLInputElement>;
},
) => React.ReactElement) & { displayName?: string };

