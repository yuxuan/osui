import * as React from 'react';
import {Alert as AntdAlert} from 'antd';
import {AlertProps as AntdAlertProps} from 'antd/lib/alert';
import classNames from 'classnames';

const clsPrefix = 'osui-alert';

export interface AlertProps extends AntdAlertProps {}

const Alert: React.FC<AlertProps> = props => {
    return <AntdAlert className={classNames(clsPrefix, props.className)} {...props} />;
};

export default Alert;
