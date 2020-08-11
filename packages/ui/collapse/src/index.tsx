import * as React from 'react';
import { Collapse as AntdCollapse } from 'antd';
import { CollapseProps as AntdCollapseProps } from 'antd/lib/Collapse';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-collapse';

export type CollapseProps = AntdCollapseProps;

const Collapse: React.FC<CollapseProps> = props => {
    const defaultProps = {
        ...props,
        ghost: true,
        className: classNames(clsPrefix, props.className),
    };
    return <AntdCollapse {...defaultProps} />;
};

Collapse.Panel = AntdCollapse.Panel;

export default Collapse;
