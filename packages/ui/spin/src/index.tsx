import React, {useContext} from 'react';
import {Spin as AntdSpin, ConfigProvider, SpinProps, theme} from 'antd';
export type {SpinProps} from 'antd';
import LoadingIcon from './icon';
// import './index.less';
import {useStyle} from './style';

const {useToken} = theme;

const Spin: React.FC<React.PropsWithChildren<SpinProps>> = props => {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('spin', props.prefixCls);
    const antPrefix = getPrefixCls('');
    const wrapSSROsui = useStyle('', prefixCls, cssVar, antPrefix);
    const {hashId} = useToken();

    const innerIndicator = props.indicator ?? <LoadingIcon className={hashId} />;
    return wrapSSROsui(<AntdSpin {...props} indicator={innerIndicator} />);
};

export default Spin;
