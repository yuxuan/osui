import React, {useContext} from 'react';
import {TimePicker as AntdTimePicker, ConfigProvider} from 'antd';
import type {TimePickerProps, TimeRangePickerProps} from 'antd';
import classNames from 'classnames';
import hoistNonReactStatics from 'hoist-non-react-statics';
// import './index.less';
import {useStyle} from './style';

const clsPrefix = 'osui-time-picker';

type OSUITimePickerInterface = typeof AntdTimePicker & {
    RangePicker: typeof AntdTimePicker.RangePicker;
};

const OSUITimePicker = React.forwardRef(
    ({popupClassName, ...props}: TimePickerProps, ref) => {
        const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
        const cssVar = theme?.cssVar;
        const prefixCls = getPrefixCls('picker-time', props.prefixCls);
        const antPrefix = getPrefixCls('');
        const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefix);
        const innerPopupClassName = classNames(`${clsPrefix}-dropdown`, popupClassName);
        return wrapSSROsui(
            <AntdTimePicker ref={ref} popupClassName={innerPopupClassName} {...props} />
        );
    }
) as OSUITimePickerInterface;

hoistNonReactStatics(OSUITimePicker, AntdTimePicker);

const OSUITimePickerRange = React.forwardRef(
    ({popupClassName, ...props}: TimeRangePickerProps, ref) => {
        const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
        const cssVar = theme?.cssVar;
        const prefixCls = getPrefixCls('picker-time', props.prefixCls);
        const antPrefix = getPrefixCls('');
        const wrapSSROsui = useStyle(`${clsPrefix}`, prefixCls, cssVar, antPrefix);
        const innerPopupClassName = classNames(`${clsPrefix}-dropdown`, popupClassName);
        return wrapSSROsui(
            <AntdTimePicker.RangePicker ref={ref} popupClassName={innerPopupClassName} {...props} />
        );
    }
);

OSUITimePicker.RangePicker = OSUITimePickerRange;

export type {TimePickerProps, TimeRangePickerProps};
export default OSUITimePicker as unknown as typeof AntdTimePicker;


