/**
 * @file Tag组件
 * @author yangpeng
 * */

import React from 'react';
import {Tag as AntdTag} from 'antd';
import {TagProps as AntdTagProps, CheckableTagProps as AntdCheckableTagProps} from 'antd/es/tag';
import classNames from 'classnames';
import {IconCloseOutlined} from '@osui/icons';
import './index.less';

const clsPrefix = 'osui-tag';

export interface TagProps extends AntdTagProps {
    solid?: boolean;
    round?: boolean;
    outlined?: boolean;
    disabled?: boolean;
}

export interface TagType extends React.ForwardRefExoticComponent<TagProps & React.RefAttributes<HTMLElement>> {
    CheckableTag: typeof CheckableTag;
}

const colorMap = {
    // by category
    brand: 'blue',
    info: 'blue',
    success: 'green',
    warning: 'yellow',
    danger: 'red',
    // by color
    orange: 'yellow',
    yellow: 'yellow',
    blue: 'blue',
    green: 'green',
    red: 'red',
};

const Tag = React.forwardRef<HTMLSpanElement, TagProps>((props, ref) => {
    const {closeIcon, color, solid, round, outlined, disabled, ...restProps} = props;
    const patchedIcon = closeIcon ?? <IconCloseOutlined />;
    const classnames = classNames(
        clsPrefix,
        {[`${clsPrefix}-solid`]: solid},
        {[`${clsPrefix}-round`]: round},
        {[`${clsPrefix}-outlined`]: outlined},
        {[`${clsPrefix}-disabled`]: disabled},
        {[`${clsPrefix}-${color}`]: colorMap[props.color as keyof typeof colorMap] ?? props.color},
        props.className
    );

    return <AntdTag ref={ref} {...restProps} color={color} closeIcon={patchedIcon} className={classnames} />;
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
