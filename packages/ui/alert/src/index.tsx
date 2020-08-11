import * as React from 'react';
import {Alert as AntdAlert} from 'antd';
import {AlertProps as AntdAlertProps} from 'antd/lib/alert';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-alert';

export type AlertProps = AntdAlertProps;

const Alert: React.FC<AlertProps> = props => {
    return <AntdAlert {...props} className={classNames(clsPrefix, props.className)} />;
};

export default Alert;
