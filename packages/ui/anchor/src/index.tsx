/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {Anchor as AntdAnchor, AnchorProps} from 'antd';
import classNames from 'classnames';
import hoistNonReactStatics from 'hoist-non-react-statics';
import './index.less';

const clsPrefix = 'osui-anchor-wrapper';

const OSUIAnchor = React.forwardRef(
    ({className, ...props}: AnchorProps, ref) => {
        const innerClassName = classNames(clsPrefix, className);
        return (
            // 这里antd的ref应该有问题
            <AntdAnchor ref={ref as any} className={innerClassName} {...props} />
        );
    }
);

hoistNonReactStatics(OSUIAnchor, AntdAnchor);

export type {AnchorProps, AnchorLinkProps} from 'antd';
export default OSUIAnchor as unknown as typeof AntdAnchor;
