import React, {useContext} from 'react';
import {DatePicker as AntdDatePicker, ConfigProvider} from 'antd';
import classNames from 'classnames';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {useStyle} from './style';

const clsPrefix = 'osui-picker';

type BaseDatePickerType = typeof AntdDatePicker;

function attachOSUIClassName(Component: any) {
    const ComponentOut = React.forwardRef<any, any>(
        (props, ref) => {
            const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
            const cssVar = theme?.cssVar;
            const prefixCls = getPrefixCls('picker', props.prefixCls);
            const antPrefix = getPrefixCls('');
            const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefix);
            return wrapSSROsui(
                <Component
                    ref={ref}
                    {...props}
                    className={classNames(clsPrefix, props.className)}
                    popupClassName={classNames(`${clsPrefix}-dropdown`, props.popupClassName)}
                />
            );
        }
    );
    return ComponentOut;
}

interface DatePickerInterface extends BaseDatePickerType {
    MonthPicker: typeof AntdDatePicker.MonthPicker;
    WeekPicker: typeof AntdDatePicker.WeekPicker;
    QuarterPicker: typeof AntdDatePicker.QuarterPicker;
    YearPicker: typeof AntdDatePicker.YearPicker;
    TimePicker: typeof AntdDatePicker.TimePicker;
    RangePicker: typeof AntdDatePicker.RangePicker;
}

const DatePicker = attachOSUIClassName(AntdDatePicker) as unknown as DatePickerInterface;

// 确保所有的NonReactStatics都提升上来
hoistNonReactStatics(DatePicker, AntdDatePicker);

// 覆盖
// eslint-disable-next-line max-len
DatePicker.MonthPicker = attachOSUIClassName(AntdDatePicker.MonthPicker) as unknown as typeof AntdDatePicker.MonthPicker;
// eslint-disable-next-line max-len
DatePicker.WeekPicker = attachOSUIClassName(AntdDatePicker.WeekPicker) as unknown as typeof AntdDatePicker.WeekPicker;
// eslint-disable-next-line max-len
DatePicker.YearPicker = attachOSUIClassName(AntdDatePicker.YearPicker) as unknown as typeof AntdDatePicker.YearPicker;
// eslint-disable-next-line max-len
DatePicker.QuarterPicker = attachOSUIClassName(AntdDatePicker.QuarterPicker) as unknown as typeof AntdDatePicker.QuarterPicker;
// eslint-disable-next-line max-len
DatePicker.TimePicker = attachOSUIClassName(AntdDatePicker.TimePicker) as unknown as typeof AntdDatePicker.TimePicker;
// eslint-disable-next-line max-len
DatePicker.RangePicker = attachOSUIClassName(AntdDatePicker.RangePicker) as unknown as typeof AntdDatePicker.RangePicker;


export type {DatePickerProps} from 'antd';
export default DatePicker;
