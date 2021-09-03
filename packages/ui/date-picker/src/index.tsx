import React from 'react';
import {DatePicker as AntdDatePicker} from 'antd';
import classNames from 'classnames';
import hoistNonReactStatics from 'hoist-non-react-statics';
import './index.less';

const clsPrefix = 'osui-picker';

type ComponentType = typeof AntdDatePicker
    | typeof AntdDatePicker.MonthPicker
    | typeof AntdDatePicker.WeekPicker
    | typeof AntdDatePicker.QuarterPicker
    | typeof AntdDatePicker.YearPicker
    | typeof AntdDatePicker.TimePicker
    | typeof AntdDatePicker.RangePicker;

function attachOSUIClassName<T extends ComponentType>(Component: T) {
    const ComponentOut = React.forwardRef<any, any>(
        (props, ref) => {
            return (
                <Component
                    ref={ref}
                    {...props}
                    className={classNames(clsPrefix, props.className)}
                    dropdownClassName={classNames(`${clsPrefix}-dropdown`, props.dropdownClassName)}
                />
            );
        }
    );
    return ComponentOut as unknown as T;
}

type DatePickerInterface = typeof AntdDatePicker & {
    MonthPicker: typeof AntdDatePicker.MonthPicker;
    WeekPicker: typeof AntdDatePicker.WeekPicker;
    QuarterPicker: typeof AntdDatePicker.QuarterPicker;
    YearPicker: typeof AntdDatePicker.YearPicker;
    TimePicker: typeof AntdDatePicker.TimePicker;
    RangePicker: typeof AntdDatePicker.RangePicker;
};

const DatePicker = attachOSUIClassName(AntdDatePicker) as unknown as DatePickerInterface;

// 确保所有的NonReactStatics都提升上来
hoistNonReactStatics(DatePicker, AntdDatePicker);

// 覆盖
DatePicker.MonthPicker = attachOSUIClassName(AntdDatePicker.MonthPicker);
DatePicker.WeekPicker = attachOSUIClassName(AntdDatePicker.WeekPicker);
DatePicker.QuarterPicker = attachOSUIClassName(AntdDatePicker.QuarterPicker);
DatePicker.YearPicker = attachOSUIClassName(AntdDatePicker.YearPicker);
DatePicker.TimePicker = attachOSUIClassName(AntdDatePicker.TimePicker);
DatePicker.RangePicker = attachOSUIClassName(AntdDatePicker.RangePicker);


export type { DatePickerProps } from 'antd';
export default DatePicker;
