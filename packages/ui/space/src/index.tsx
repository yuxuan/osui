import {Space as AntdSpace} from 'antd';
import {ConfigContext} from 'antd/lib/config-provider';
import {SpaceProps} from 'antd/lib/space';
import useFlexGapSupport from 'antd/lib/_util/hooks/useFlexGapSupport';
import classNames from 'classnames';
import React, {FC, useContext} from 'react';
import './index.less';

const clsPrefix = 'osui-space';

const Space: FC<SpaceProps> = ({className, ...props}) => {
    const {space} = useContext(ConfigContext);
    const size = props.size || space?.size || 'small';
    const supportFlexGap = useFlexGapSupport();
    const innerClassName = classNames(
        clsPrefix,
        `${clsPrefix}-${size}`,
        {[`${clsPrefix}-use-gap`]: supportFlexGap},
        className
    );
    return (
        <AntdSpace className={innerClassName} size={size} {...props} />
    );
};

export type {SpaceProps} from 'antd';
export default Space;
