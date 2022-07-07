import React, {FC, useContext} from 'react';
import {ConfigProvider, Space as AntdSpace} from 'antd';
import {SpaceProps} from 'antd/lib/space';
import useFlexGapSupport from 'antd/lib/_util/hooks/useFlexGapSupport';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-space';

const Space: FC<SpaceProps> = ({className, ...props}) => {
    const {space} = useContext(ConfigProvider.ConfigContext);
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
