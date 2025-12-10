import React from 'react';
import {Timeline as AntdTimeline} from 'antd';
import {TimelineProps as AntdTimelineProps, TimelineItemProps as AntdTimelineItemProps} from 'antd/es/timeline';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-timeline';

export type TimelineProps = AntdTimelineProps & {
    variant?: 'filled' | 'outlined';
    orientation?: 'vertical' | 'horizontal';
};
export type TimelineItemProps = AntdTimelineItemProps;

export interface TimelineType extends React.FC<TimelineProps> {
    Item: React.FC<TimelineItemProps>;
}

const Timeline: TimelineType = ({
    className,
    variant = 'filled',
    orientation = 'vertical',
    ...restProps
}) => {
    return (
        <AntdTimeline
            className={classNames(
                clsPrefix,
                {[`${clsPrefix}-timeline-filled`]: variant === 'filled'},
                {[`${clsPrefix}-timeline-horizontal`]: orientation === 'horizontal'},
                className
            )}
            {...restProps}
        />
    );
};

Timeline.Item = AntdTimeline.Item;

export default Timeline;
