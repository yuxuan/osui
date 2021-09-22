import React from 'react';
import {Card as AntdCard} from 'antd';
import type {CardProps as AntdCardProps} from 'antd';
import classNames from 'classnames';
import hoistNonReactStatics from 'hoist-non-react-statics';
import './index.less';

const clsPrefix = 'osui-card';

export interface CardProps extends AntdCardProps {
    compact?: boolean;
}

const OSUICard = ({className, compact, ...props}: CardProps) => {
    const innerClassName = classNames(
        clsPrefix,
        {[`${clsPrefix}-compact`]: compact},
        className
    );
    return (
        <AntdCard className={innerClassName} {...props} />
    );
};

hoistNonReactStatics(OSUICard, AntdCard);

export default OSUICard as unknown as typeof AntdCard & typeof OSUICard;
