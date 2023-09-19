import React from 'react';
import {Progress as AntdProgress} from 'antd';
import {ProgressProps as AntdProgressProps} from 'antd/es/progress';
import classNames from 'classnames';
import {useBrandContext} from '@osui/brand-provider';
import './index.less';

const clsPrefix = 'osui-progress';

export type ProgressProps = AntdProgressProps;

const Progress: React.FC<ProgressProps> = ({className, strokeWidth, strokeLinecap, ...props}) => {
    const {brand} = useBrandContext();
    const innerStrokeWidth = strokeWidth ?? (brand === 'icloud' ? 8 : strokeWidth);
    const innerStrokeLinecap = strokeLinecap ?? (brand === 'icloud' ? 'square' : 'round');

    return (
        <AntdProgress
            className={classNames(clsPrefix, className)}
            strokeWidth={innerStrokeWidth}
            strokeLinecap={innerStrokeLinecap}
            {...props}
        />
    );
};

export default Progress;
