import {Carousel as AntdCarousel, CarouselProps, ConfigProvider} from 'antd';
// import './index.less';
import React, {useContext} from 'react';
import {useStyle} from './style';
export type {CarouselProps} from 'antd';

export default function Carousel(props: CarouselProps) {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('carousel', props.prefixCls);
    const antPrefix = getPrefixCls('');
    const wrapSSROsui = useStyle('', prefixCls, cssVar, antPrefix);

    return wrapSSROsui(<AntdCarousel {...props} />);
}
