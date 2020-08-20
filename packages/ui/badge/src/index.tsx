import React from 'react';
import {Badge as AntdBadge} from 'antd';
import {BadgeProps as AntdBadgeProps} from 'antd/es/badge';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-badge';

export interface BadgeProps extends AntdBadgeProps {
    count: number;
}

const OSUIBadge: React.FC<BadgeProps> = props => {
    let number = '';
    if (props.count > 9 && props.count < 100) {
        number = `${clsPrefix}-much`;
    } else if (props.count > 100) {
        number = `${clsPrefix}-super-much`;
    }
    return (<AntdBadge {...props} className={classNames(props.className, clsPrefix, number)} />);
};

export default OSUIBadge;
