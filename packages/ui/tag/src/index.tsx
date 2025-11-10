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
    size?: 'small' | 'medium' | 'default';
    color?: keyof typeof colorMap;
}

export interface TagType extends React.ForwardRefExoticComponent<TagProps & React.RefAttributes<HTMLElement>> {
    CheckableTag: typeof CheckableTag;
    TagTab: typeof TagTab;
}

const colorMap: Record<string, string> = {
    // by category
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
    error: 'red',
    processing: 'brand',
};

const sizeMap = {
    small: 'small',
    medium: 'medium',
    default: 'medium',
};


const Tag = React.forwardRef<HTMLSpanElement, TagProps>((props, ref) => {
    const {closeIcon, color, solid, round, outlined, disabled, size = 'default', ...restProps} = props;
    let patchedIcon = null;
    if (closeIcon === false || closeIcon === undefined) {
        patchedIcon = null;
    }
    else {
        patchedIcon = <IconCloseOutlined />;
    }
    const curSize = sizeMap[size] || sizeMap.default;
    const curColor = props.color && (colorMap[props.color] ? colorMap[props.color] : props.color);
    const classnames = classNames(
        clsPrefix,
        {[`${clsPrefix}-solid`]: solid},
        {[`${clsPrefix}-round`]: round},
        {[`${clsPrefix}-outlined`]: outlined},
        {[`${clsPrefix}-disabled`]: disabled},
        {[`${clsPrefix}-${curColor}`]: color},
        {[`${clsPrefix}-${curSize}`]: size},
        props.className
    );

    return <AntdTag ref={ref} {...restProps} color={color} closeIcon={patchedIcon} className={classnames} />;
}) as TagType;

export type CheckableTagProps = TagProps & AntdCheckableTagProps;

// antd 没有ref forward
const CheckableTag: React.FC<CheckableTagProps> = props => {
    return (
        <AntdTag.CheckableTag
            className={classNames(`${clsPrefix}-checkable`, props.className)}
            {...props}
        />
    );
};

const TagTab = (props: CheckableTagProps) => {
    const {disabled, onChange, className, ...restProps} = props;

    const classnames = classNames(
        `${clsPrefix}-tagtab`,
        {[`${clsPrefix}-disabled`]: disabled},
        className
    );

    return (
        <AntdTag.CheckableTag
            className={classnames}
            onChange={checked => {
                // 新增disabled判断
                if (disabled) {
                    return;
                }
                onChange?.(checked);
            }}
            {...restProps}
        />
    );
};

Tag.CheckableTag = CheckableTag;
Tag.TagTab = TagTab;

export default Tag;
