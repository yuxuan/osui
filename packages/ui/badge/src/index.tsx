import React, {useContext} from 'react';
import {Badge as AntdBadge, ConfigProvider} from 'antd';
import {BadgeProps as AntdBadgeProps} from 'antd/es/badge';
import classNames from 'classnames';
import hoistNonReactStatics from 'hoist-non-react-statics';
// import './index.less';
import {useStyle} from './style';

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
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('badge', props.prefixCls);
    const antPrefixCls = getPrefixCls('');
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefixCls);

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

    return wrapSSROsui(<AntdBadge {...props} className={innerClassName} status={innerStatus} />);
};

hoistNonReactStatics(OSUIBadge, AntdBadge);

export default OSUIBadge;
