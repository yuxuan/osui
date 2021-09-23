import React from 'react';
import {TimePicker as AntdTimePicker} from 'antd';
import type {TimePickerProps, TimeRangePickerProps} from 'antd';
import classNames from 'classnames';
import hoistNonReactStatics from 'hoist-non-react-statics';
import './index.less';

const clsPrefix = 'osui-time-picker';

type OSUITimePickerInterface = typeof AntdTimePicker & {
    RangePicker: typeof AntdTimePicker.RangePicker;
};

const OSUITimePicker = React.forwardRef(
    ({popupClassName, ...props}: TimePickerProps, ref) => {
        const innerPopupClassName = classNames(`${clsPrefix}-dropdown`, popupClassName);
        return (
            <AntdTimePicker ref={ref} popupClassName={innerPopupClassName} {...props} />
        );
    }
) as OSUITimePickerInterface;

hoistNonReactStatics(OSUITimePicker, AntdTimePicker);

const OSUITimePickerRange = React.forwardRef(
    ({popupClassName, ...props}: TimeRangePickerProps, ref) => {
        const innerPopupClassName = classNames(`${clsPrefix}-dropdown`, popupClassName);
        return (
            <AntdTimePicker.RangePicker ref={ref} popupClassName={innerPopupClassName} {...props} />
        );
    }
);

OSUITimePicker.RangePicker = OSUITimePickerRange;

export type {TimePickerProps, TimeRangePickerProps};
export default OSUITimePicker as unknown as typeof AntdTimePicker;


