import React, {useContext} from 'react';
import {Timeline as AntdTimeline, ConfigProvider} from 'antd';
import {TimelineProps as AntdTimelineProps, TimelineItemProps as AntdTimelineItemProps} from 'antd/es/timeline';
import classNames from 'classnames';
// import './index.less';
import {useStyle} from './style';

const clsPrefix = 'osui-timeline';

export type TimelineProps = AntdTimelineProps;
export type TimelineItemProps = AntdTimelineItemProps;

export interface TimelineType extends React.FC<TimelineProps> {
    Item: React.FC<TimelineItemProps>;
}

const Timeline: TimelineType = props => {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('timeline', props.prefixCls);
    const antPrefix = getPrefixCls('');
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefix);

    return wrapSSROsui(
        <AntdTimeline
            className={classNames(clsPrefix, props.className)}
            {...props}
        />
    );
};

Timeline.Item = AntdTimeline.Item;

export default Timeline;
