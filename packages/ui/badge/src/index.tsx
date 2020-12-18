import React from 'react';
import {Badge as AntdBadge} from 'antd';
import {BadgeProps as AntdBadgeProps} from 'antd/es/badge';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-badge';

const Badge: React.FC<AntdBadgeProps> = props => {
    return (<AntdBadge {...props} className={classNames(props.className, clsPrefix)} />);
};

export default Badge;
