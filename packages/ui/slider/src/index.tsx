import React from 'react';
import {Slider as AntdSlider} from 'antd';
import {
    SliderMarks as AntdSliderMarks,
    HandleGeneratorFn as AntdHandleGeneratorFn,
    SliderBaseProps as AntdSliderBaseProps,
    SliderSingleProps as AntdSliderSingleProps,
    SliderRangeProps as AntdSliderRangeProps,
    Visibles as AntdVisibles,
} from 'antd/es/slider';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-slider';

export type SliderMarks = AntdSliderMarks;
export type HandleGeneratorFn = AntdHandleGeneratorFn;
export type SliderBaseProps = AntdSliderBaseProps;
export type Visibles = AntdVisibles;

export interface SliderSingleProps extends AntdSliderSingleProps {
    type?: 'icloud';
}
export interface SliderRangeProps extends AntdSliderRangeProps {
    type?: 'icloud';
}


const Slider = React.forwardRef<unknown, SliderSingleProps | SliderRangeProps>(
    ({className, type, ...props}, ref: any) => {
        const innerClassName = classNames(
            className,
            clsPrefix,
            {[`${clsPrefix}-icloud`]: type && type === 'icloud'}
        );
        return <AntdSlider ref={ref} className={innerClassName} {...props} />;
    }
);

export default Slider;

