import React from 'react';
import {Segmented as AntdSegmented} from 'antd';
import type {SegmentedProps as AntdSegmentedProps} from 'antd';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-segmented';

export interface SegmentedProps<ValueType = string | number> extends Omit<AntdSegmentedProps<ValueType>, 'size'> {
    grayBackground?: boolean;
    size?: 'small' | 'middle' | 'large' | 'huge';
}

function Segmented<ValueType extends string | number = string | number>(
    props: SegmentedProps<ValueType>,
    ref?: React.Ref<HTMLDivElement>
) {
    const {grayBackground, className, size, ...rest} = props;
    return (
        <AntdSegmented
            {...rest}
            ref={ref}
            size={size as any}
            className={classNames(
                clsPrefix,
                {[`${clsPrefix}-gray-bg`]: grayBackground},
                {[`${clsPrefix}-huge`]: size === 'huge'},
                className
            )}
        />
    );
}
export default Segmented;
