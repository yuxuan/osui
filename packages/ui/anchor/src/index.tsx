import React from 'react';
import {Anchor as AntdAnchor, AnchorProps} from 'antd';
import classNames from 'classnames';
import hoistNonReactStatics from 'hoist-non-react-statics';
import './index.less';

const clsPrefix = 'osui-anchor-wrapper';

const OSUIAnchor = ({className, ...props}: AnchorProps) => {
    const innerClassName = classNames(clsPrefix, className);
    return (
        <AntdAnchor className={innerClassName} {...props} />
    );
};

hoistNonReactStatics(OSUIAnchor, AntdAnchor);

export type {AnchorProps, AnchorLinkProps} from 'antd';
export default OSUIAnchor as unknown as typeof AntdAnchor;
