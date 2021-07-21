import React from 'react';
import { Badge as AntdBadge } from 'antd';
import { BadgeProps as AntdBadgeProps } from 'antd/lib/badge';
import classNames from 'classnames';
import hoistNonReactStatics from 'hoist-non-react-statics';
import './index.less';

const clsPrefix = 'osui-badge';

export interface BadgeProps extends AntdBadgeProps {
    /**
     * @description 来展示徽标的不同状态
     */
    type?: 'success' | 'warning' | 'error';
    /**
     * @description 是否仅展示count
     */
    countOnly?: boolean;
}

const OSUIBadge: React.FC<BadgeProps> = props => {
    const innerClassName = classNames(
        props.className,
        clsPrefix,
        {
            [`${clsPrefix}-type-${props.type}`]: props.type,
            [`${clsPrefix}-count-only`]: props.countOnly,
        }
    );

    return (<AntdBadge {...props} className={innerClassName} />);
};

hoistNonReactStatics(OSUIBadge, AntdBadge);

export default OSUIBadge;
