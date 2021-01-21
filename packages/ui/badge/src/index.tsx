import React from 'react';
import { Badge as AntdBadge } from 'antd';
import { BadgeProps as AntdBadgeProps } from 'antd/es/badge';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-badge';

export interface BadgeProps extends AntdBadgeProps {
    type?: 'success' | 'warning' | 'error';
}

const Badge: React.FC<BadgeProps> = props => {
    const innerClassName = classNames(
        props.className,
        clsPrefix,
        {[`${clsPrefix}-type-${props.type}`]: props.type}
    );

    return (<AntdBadge {...props} className={innerClassName} />);
};

export default Badge;
