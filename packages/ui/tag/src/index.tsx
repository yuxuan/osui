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

export type CheckableTagProps = AntdCheckableTagProps;

interface TagInterface extends React.FC<TagProps> {
    CheckableTag: typeof AntdTag.CheckableTag;
}

const Tag: TagInterface = props => {
    const {closeIcon} = props;
    const patchedIcon = closeIcon ?? <IconCloseOutlined />;
    const classnames = classNames(
        clsPrefix,
        props.className,
        {[`${clsPrefix}-solid`]: props.solid},
        {[`${clsPrefix}-round`]: props.round}
    );

    return <AntdTag {...props} closeIcon={patchedIcon} className={classnames} />;
};

const CheckableTag: React.FC<CheckableTagProps> = props => {
    return <AntdTag.CheckableTag className={classNames(`${clsPrefix}-checkable`, props.className)} {...props} />;
};

Tag.CheckableTag = CheckableTag;

export default Tag;
