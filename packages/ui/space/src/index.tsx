import React, {FC, useContext} from 'react';
import {ConfigProvider, Space as AntdSpace} from 'antd';
import {SpaceProps} from 'antd/es/space';
import classNames from 'classnames';
// import './index.less';
import {useStyle} from './style';

const clsPrefix = 'osui-space';

const Space: FC<SpaceProps> = ({className, ...props}) => {
    const {space, getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('space', props.prefixCls);
    const antPrefix = getPrefixCls('');
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefix);

    const size = props.size || space?.size || 'small';
    const innerClassName = classNames(
        clsPrefix,
        `${clsPrefix}-${size}`,
        className
    );
    return wrapSSROsui(
        <AntdSpace className={innerClassName} size={size} {...props} />
    );
};

export type {SpaceProps} from 'antd';
export default Space;
