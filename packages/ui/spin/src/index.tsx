import React from 'react';
import {Spin as AntdSpin, SpinProps} from 'antd';
export type {SpinProps} from 'antd';
import LoadingIcon from './icon';
import './index.less';

const Spin: React.FC<React.PropsWithChildren<SpinProps>> = props => {
    const innerIndicator = props.indicator ?? <LoadingIcon />;
    return <AntdSpin indicator={innerIndicator} {...props} />;
};

export default Spin;
