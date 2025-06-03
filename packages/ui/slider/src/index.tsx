import React, {useContext} from 'react';
import {Slider as AntdSlider, ConfigProvider} from 'antd';
import {
    SliderMarks as AntdSliderMarks,
    HandleGeneratorFn as AntdHandleGeneratorFn,
    SliderBaseProps as AntdSliderBaseProps,
    SliderSingleProps as AntdSliderSingleProps,
    SliderRangeProps as AntdSliderRangeProps,
} from 'antd/es/slider';
import classNames from 'classnames';
// import './index.less';
import {useStyle} from './style';

const clsPrefix = 'osui-slider';

export type SliderMarks = AntdSliderMarks;
export type HandleGeneratorFn = AntdHandleGeneratorFn;
export type SliderBaseProps = AntdSliderBaseProps;

const Slider = React.forwardRef<unknown, AntdSliderSingleProps | AntdSliderRangeProps>(
    ({className, ...props}, ref: any) => {
        const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
        const cssVar = theme?.cssVar;
        const prefixCls = getPrefixCls('slider', props.prefixCls);
        const antPrefix = getPrefixCls('');
        const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefix);
        const innerClassName = classNames(
            clsPrefix,
            className
        );
        return wrapSSROsui(
            <AntdSlider
                ref={ref}
                className={innerClassName}
                {...props}
            />
        );
    }
);

export type {SliderSingleProps} from 'antd';
export default Slider;

