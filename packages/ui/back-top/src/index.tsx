import * as React from 'react';
import { BackTop as AntdBackTop } from 'antd';
import {BackTopProps as AntdBackTopProps} from 'antd/lib/back-top';
import classNames from 'classnames';
import './index.less';
// @ts-ignore
import backTop from './backtop.svg';

const clsPrefix = 'osui-back-top';

export type BackTopProps = AntdBackTopProps;

const OscBackTop: React.FC<BackTopProps> = props => {
    return (<AntdBackTop {...props} className={classNames(props.className, clsPrefix)} >
        <img src={backTop} alt={'返回顶部'} />
    </AntdBackTop>);
};

export default OscBackTop;
