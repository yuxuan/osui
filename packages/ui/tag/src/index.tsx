/**
 * @file Tag组件
 * @author yangpeng
 * */

import * as React from 'react';
import {Tag as AntdTag} from 'antd';
import {TagProps as AntdTagProps, CheckableTagProps as AntdCheckableTagProps} from 'antd/lib/tag';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-tag';

export type TagProps = AntdTagProps;
export type CheckableTagProps = AntdCheckableTagProps;

interface TagInterface extends React.FC<TagProps> {
    CheckableTag: typeof AntdTag.CheckableTag;
}

const Tag: TagInterface = props => {
    return <AntdTag {...props} className={classNames(clsPrefix, props.className)} />;
};

const CheckableTag: React.FC<CheckableTagProps> = props => {
    return <AntdTag.CheckableTag className={classNames(`${clsPrefix}-checkable`, props.className)} {...props} />;
};

Tag.CheckableTag = CheckableTag;

export default Tag;
