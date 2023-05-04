import React from 'react';
import {Slider as AntdSlider} from 'antd';
import {
    SliderMarks as AntdSliderMarks,
    HandleGeneratorFn as AntdHandleGeneratorFn,
    SliderBaseProps as AntdSliderBaseProps,
    SliderSingleProps as AntdSliderSingleProps,
    SliderRangeProps as AntdSliderRangeProps,
} from 'antd/es/slider';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-slider';

export type SliderMarks = AntdSliderMarks;
export type HandleGeneratorFn = AntdHandleGeneratorFn;
export type SliderBaseProps = AntdSliderBaseProps;

const Slider = React.forwardRef<unknown, AntdSliderSingleProps | AntdSliderRangeProps>(
    ({className, ...props}, ref: any) => {
        const innerClassName = classNames(
            clsPrefix,
            className
        );
        return <AntdSlider ref={ref} className={innerClassName} {...props} />;
    }
);

export type {SliderSingleProps} from 'antd';
export default Slider;

