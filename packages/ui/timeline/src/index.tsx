import * as React from 'react';
import {Timeline as AntdTimeline} from 'antd';
import {TimelineProps as AntdTimelineProps, TimeLineItemProps as AntdTimelineItemProps} from 'antd/es/timeline';
import classNames from 'classnames';

const clsPrefix = 'osui-timeline';

export type TimelineProps = AntdTimelineProps;
export type TimelineItemProps = AntdTimelineItemProps;

interface TimelineType extends React.FC<TimelineProps> {
    Item: React.FC<TimelineItemProps>;
}

const Timeline: TimelineType = props => {
    return <AntdTimeline className={classNames(clsPrefix, props.className)} {...props} />;
};

Timeline.Item = AntdTimeline.Item;

export default Timeline;
