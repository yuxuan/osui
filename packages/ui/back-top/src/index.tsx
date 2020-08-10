import * as React from 'react';
import { BackTop as AntdBackTop } from 'antd';
import {BackTopProps as AntdBackTopProps} from 'antd/lib/back-top';
import classNames from 'classnames';
import {IconBackTop} from '@osui/icons';
import './index.less';

const clsPrefix = 'osui-back-top';

export type BackTopProps = AntdBackTopProps;

const OscBackTop: React.FC<BackTopProps> = props => {
    return (
        <AntdBackTop {...props} className={classNames(props.className, clsPrefix)}>
            <IconBackTop />
        </AntdBackTop>
    );
};

export default OscBackTop;
