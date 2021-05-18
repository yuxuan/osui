import React, {FC} from 'react';
import {Space as AntdSpace} from 'antd';
import {SpaceProps} from 'antd/lib/space';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-space';

const Space: FC<SpaceProps> = ({className, size = 'small', ...props}) => {
    return (
        <AntdSpace className={classNames(clsPrefix, `${clsPrefix}-${size}`, className)} size={size} {...props} />
    );
};
export default Space;
