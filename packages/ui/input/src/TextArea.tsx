import React, {useContext} from 'react';
import {Input as AntdInput, ConfigProvider} from 'antd';
import {TextAreaProps as AntdTextAreaProps} from 'antd/es/input';
import classNames from 'classnames';
// import './index.less';
import {useStyle} from './style';

const clsPrefix = 'osui-input';

const TextArea = React.forwardRef<any, AntdTextAreaProps>((props, ref) => {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('input', props.prefixCls);
    const antPrefix = getPrefixCls('', props.prefixCls);
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefix);
    return wrapSSROsui(
        <AntdInput.TextArea
            ref={ref}
            {...props}
            className={classNames(clsPrefix, `${clsPrefix}-textarea`, props.className)}
        />
    );
});

export default TextArea;
