import React, {useCallback} from 'react';
import {Collapse as AntdCollapse} from 'antd';
import {CollapseProps as AntdCollapseProps} from 'antd/es/collapse';
import {IconRightArrow, IconDownArrow} from '@osui/icons';
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

    const expandIcon = useCallback(
        panelProps => {
            return panelProps.isActive ? <IconDownArrow /> : <IconRightArrow />;
        },
        []
    );
    return <AntdCollapse {...defaultProps} expandIcon={expandIcon} />;
};

Collapse.Panel = AntdCollapse.Panel;

export default Collapse;
