import * as React from 'react';
import {Timeline as AntdTimeline} from 'antd';
import {TimelineProps as AntdTimelineProps} from 'antd/lib/timeline';
import classNames from 'classnames';

const clsPrefix = 'osui-timeline';

export type TimelineProps = AntdTimelineProps;

const Timeline: React.FC<TimelineProps> = props => {
    return <AntdTimeline className={classNames(clsPrefix, props.className)} {...props} />;
};

Timeline.Item = AntdTimeline.Item;

export default Timeline;
