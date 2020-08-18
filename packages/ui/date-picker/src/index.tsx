import * as React from 'react';
import {DatePicker as AntdDatePicker} from 'antd';
import {
    MonthPickerProps as AntdMonthPickerProps,
    WeekPickerProps as AntdWeekPickerProps,
    RangePickerProps as AntdRangePickerProps,
    DatePickerProps as AntdDatePickerProps,
} from 'antd/es/date-picker';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-picker';

export interface DatePickerInterface extends React.FC<AntdDatePickerProps> {
    MonthPicker: React.FC<AntdMonthPickerProps>;
    WeekPicker: React.FC<AntdWeekPickerProps>;
    RangePicker: React.FC<AntdRangePickerProps>;
}

const DatePicker: DatePickerInterface = React.forwardRef<any, AntdDatePickerProps>(
    (props, ref) => {
        return (
            <AntdDatePicker
                ref={ref}
                {...props}
                className={classNames(clsPrefix, props.className)}
                dropdownClassName={classNames(`${clsPrefix}-dropdown`, props.dropdownClassName)}
            />
        );
    }
) as unknown as DatePickerInterface;

const MonthPicker: React.FC<AntdMonthPickerProps> = React.forwardRef<any, AntdMonthPickerProps>(
    (props, ref) => {
        return (
            <AntdDatePicker.MonthPicker
                ref={ref}
                {...props}
                className={classNames(clsPrefix, props.className)}
                dropdownClassName={classNames(`${clsPrefix}-dropdown`, props.dropdownClassName)}
            />
        );
    }
);


const WeekPicker: React.FC<AntdWeekPickerProps> = React.forwardRef<any, AntdWeekPickerProps>(
    (props, ref) => {
        return (
            <AntdDatePicker.WeekPicker
                ref={ref}
                {...props}
                className={classNames(clsPrefix, props.className)}
                dropdownClassName={classNames(`${clsPrefix}-dropdown`, props.dropdownClassName)}
            />
        );
    }
);

const RangePicker: React.FC<AntdRangePickerProps> = React.forwardRef<any, AntdRangePickerProps>(
    (props, ref) => {
        return (
            <AntdDatePicker.RangePicker
                ref={ref}
                className={classNames(clsPrefix, props.className)}
                dropdownClassName={classNames(`${clsPrefix}-dropdown`, props.dropdownClassName)}
                {...props}
            />
        );
    }
);

DatePicker.MonthPicker = MonthPicker;
DatePicker.WeekPicker = WeekPicker;
DatePicker.RangePicker = RangePicker;

export default DatePicker;
