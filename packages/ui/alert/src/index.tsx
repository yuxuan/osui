import * as React from 'react';
import {Alert as AntdAlert} from 'antd';
import {AlertProps as AntdAlertProps} from 'antd/lib/alert';
import {CheckCircleFilled, InfoCircleFilled} from '@ant-design/icons';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-alert';

export type AlertProps = AntdAlertProps;

const Alert: React.FC<AlertProps> = props => {
    let {icon} = props;
    const {type} = props;
    if (props.description && !icon) { // 描述存在，并且没有传递icon，则添加默认icon
        icon = type === 'success' ? <CheckCircleFilled /> : <InfoCircleFilled />;
    }
    return <AntdAlert {...props} icon={icon} className={classNames(clsPrefix, props.className)} />;
};

export default Alert;
