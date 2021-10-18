/**
 * @file Tag组件
 * @author yangpeng
 * */

import React from 'react';
import {Tag as AntdTag} from 'antd';
import {TagProps as AntdTagProps, CheckableTagProps as AntdCheckableTagProps} from 'antd/lib/tag';
import classNames from 'classnames';
import {IconCloseOutlined} from '@osui/icons';
import './index.less';

const clsPrefix = 'osui-tag';

export interface TagProps extends AntdTagProps {
    solid?: boolean;
    round?: boolean;
}

export interface TagType extends React.ForwardRefExoticComponent<TagProps & React.RefAttributes<HTMLElement>> {
    CheckableTag: typeof CheckableTag;
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>((props, ref) => {
    const {closeIcon, color} = props;
    const patchedIcon = closeIcon ?? <IconCloseOutlined />;
    const classnames = classNames(
        clsPrefix,
        {[`${clsPrefix}-solid`]: props.solid},
        {[`${clsPrefix}-round`]: props.round},
        {[`${clsPrefix}-${color}`]: props.color},
        props.className
    );

    return <AntdTag ref={ref} {...props} closeIcon={patchedIcon} className={classnames} />;
}) as TagType;

export type CheckableTagProps = AntdCheckableTagProps;

// antd 没有ref forward
const CheckableTag: React.FC<CheckableTagProps> = props => {
    return (
        <AntdTag.CheckableTag
            className={classNames(`${clsPrefix}-checkable`, props.className)}
            {...props}
        />
    );
};

Tag.CheckableTag = CheckableTag;

export default Tag;
