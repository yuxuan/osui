import React from 'react';
import {Input as AntdInput} from 'antd';
import {TextAreaProps as AntdTextAreaProps} from 'antd/es/input';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-input';

const TextArea = React.forwardRef<any, AntdTextAreaProps>((props, ref) => {
    return (
        <AntdInput.TextArea
            ref={ref}
            {...props}
            className={classNames(clsPrefix, `${clsPrefix}-textarea`, props.className)}
        />
    );
});

export default TextArea;
