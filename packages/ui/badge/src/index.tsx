import React from 'react';
import {Badge as AntdBadge} from 'antd';
import {BadgeProps as AntdBadgeProps} from 'antd/lib/badge';
import classNames from 'classnames';
import hoistNonReactStatics from 'hoist-non-react-statics';
import './index.less';

const clsPrefix = 'osui-badge';

export interface BadgeProps extends Omit<AntdBadgeProps, 'status'> {
    /**
     * @description 来展示徽标的不同状态
     */
    type?: 'success' | 'warning' | 'error';
    /**
     * @description 是否仅展示count
     */
    countOnly?: boolean;
    /**
     *
     */
    status?: 'success' | 'processing' | 'error' | 'default'| 'warning' | 'inactive' | 'active';
}

const OSUIBadge: React.FC<BadgeProps> = props => {
    const innerClassName = classNames(
        clsPrefix,
        {
            [`${clsPrefix}-type-${props.type}`]: props.type,
            [`${clsPrefix}-count-only`]: props.countOnly,
        },
        props.className
    );

    const statusMap = {
        success: 'success',
        processing: 'processing',
        error: 'error',
        warning: 'warning',
        default: 'default',
        inactive: 'default',
        active: 'active',
    } as const;

    const innerStatus = (props.status && statusMap[props.status]) as AntdBadgeProps['status'];

    return (<AntdBadge {...props} className={innerClassName} status={innerStatus} />);
};

hoistNonReactStatics(OSUIBadge, AntdBadge);

export default OSUIBadge;
