import React from 'react';
import {Comment as AntdComment} from 'antd';
import type {CommentProps} from 'antd';
import classNames from 'classnames';
import hoistNonReactStatics from 'hoist-non-react-statics';
import './index.less';

const clsPrefix = 'osui-comment';

const OSUIComment = ({className, ...props}: CommentProps) => {
    const innerClassNames = classNames(clsPrefix, className);
    return (<AntdComment className={innerClassNames} {...props} />);
};

hoistNonReactStatics(OSUIComment, AntdComment);

export type {CommentProps};
export default OSUIComment;
