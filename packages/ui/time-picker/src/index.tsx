import React from 'react';
import {TimePicker as AntdTimePicker} from 'antd';
import type {TimePickerProps, TimeRangePickerProps} from 'antd';
import classNames from 'classnames';
import hoistNonReactStatics from 'hoist-non-react-statics';
import './index.less';

const clsPrefix = 'osui-time-picker';

const OSUITimePicker = ({popupClassName, ...props}: TimePickerProps) => {
    const innerPopupClassName = classNames(`${clsPrefix}-dropdown`, popupClassName);
    return (
        <AntdTimePicker popupClassName={innerPopupClassName} {...props} />
    );
};

hoistNonReactStatics(OSUITimePicker, AntdTimePicker);

const OSUITimePickerRange = ({popupClassName, ...props}: TimeRangePickerProps) => {
    const innerPopupClassName = classNames(`${clsPrefix}-dropdown`, popupClassName);
    return (
        <AntdTimePicker.RangePicker popupClassName={innerPopupClassName} {...props} />
    );
};

OSUITimePicker.RangePicker = OSUITimePickerRange;

export type {TimePickerProps, TimeRangePickerProps};
export default OSUITimePicker as unknown as typeof AntdTimePicker;


