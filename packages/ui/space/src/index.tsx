import React, {FC} from 'react';
import {Space as AntdSpace} from 'antd';
import {SpaceProps} from 'antd/lib/space';
import useFlexGapSupport from 'antd/lib/_util/hooks/useFlexGapSupport';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-space';

const Space: FC<SpaceProps> = ({className, size = 'small', ...props}) => {
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

export default Space;
