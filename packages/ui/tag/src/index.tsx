/**
 * @file Tag组件
 * @author yangpeng
 * */

import React from 'react';
import {Tag as AntdTag} from 'antd';
import {TagProps as AntdTagProps, CheckableTagProps as AntdCheckableTagProps} from 'antd/es/tag';
import classNames from 'classnames';
import {IconCross} from '@osui/icons';
import './index.less';

const clsPrefix = 'osui-tag';

export type TagProps = AntdTagProps;
export type CheckableTagProps = AntdCheckableTagProps;

interface TagInterface extends React.FC<TagProps> {
    CheckableTag: typeof AntdTag.CheckableTag;
}

const Tag: TagInterface = props => {
    const {closeIcon} = props;
    const patchedIcon = closeIcon || <IconCross />;

    return <AntdTag {...props} closeIcon={patchedIcon} className={classNames(clsPrefix, props.className)} />;
};

const CheckableTag: React.FC<CheckableTagProps> = props => {
    return <AntdTag.CheckableTag className={classNames(`${clsPrefix}-checkable`, props.className)} {...props} />;
};

Tag.CheckableTag = CheckableTag;

export default Tag;
