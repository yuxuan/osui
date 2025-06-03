/* eslint-disable react/prefer-stateless-function */
import React, {useContext} from 'react';
import {Anchor as AntdAnchor, AnchorProps, ConfigProvider} from 'antd';
import classNames from 'classnames';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {useStyle} from './style';
// import './index.less';

const clsPrefix = 'osui-anchor-wrapper';

const OSUIAnchor = ({className, ...props}: AnchorProps) => {

    const innerClassName = classNames(clsPrefix, className);
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('alert', props.prefixCls);
    const antPrefixCls = getPrefixCls('');
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefixCls);
    return wrapSSROsui(
        // 这里antd的ref应该有问题
        <AntdAnchor className={innerClassName} {...props} />
    );
};

hoistNonReactStatics(OSUIAnchor, AntdAnchor);

export type {AnchorProps, AnchorLinkProps} from 'antd';
export default OSUIAnchor as unknown as typeof AntdAnchor;
