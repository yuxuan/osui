import React from 'react';
import {Input as AntdInput} from 'antd';
import {InputProps as AntdInputProps} from 'antd/lib/input';
import classNames from 'classnames';

const clsPrefix = 'osui-input';

const Password = React.forwardRef<any, AntdInputProps>((props, ref) => {
    return <AntdInput.Password ref={ref} {...props} className={classNames(clsPrefix, props.className)} />;
});

export default Password;
