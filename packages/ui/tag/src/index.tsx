import * as React from 'react';
import {Tag as AntdTag} from 'antd';
import {TagProps as AntdTagProps} from 'antd/lib/Tag';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-tag';

export type TagProps = AntdTagProps;

const Tag: React.FC<TagProps> = props => {
    return <AntdTag className={classNames(clsPrefix, props.className)} {...props} />;
};

Tag.CheckableTag = AntdTag.CheckableTag;

export default Tag;
