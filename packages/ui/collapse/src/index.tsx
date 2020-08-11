import * as React from 'react';
import {Collapse as AntdCollapse} from 'antd';
import {CollapseProps as AntdCollapseProps} from 'antd/lib/collapse';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-collapse';

export type CollapseProps = AntdCollapseProps;

interface CollapseInterface extends React.FC<CollapseProps> {
    Panel: typeof AntdCollapse.Panel;
}

const Collapse: CollapseInterface = ({className, ...restProps}) => {
    const defaultProps = {
        ghost: true,
        ...restProps,
        className: classNames(clsPrefix, className),
    };
    return <AntdCollapse {...defaultProps} />;
};

Collapse.Panel = AntdCollapse.Panel;

export default Collapse;
