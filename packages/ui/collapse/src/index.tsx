import React, {useCallback} from 'react';
import {Collapse as AntdCollapse} from 'antd';
import {CollapseProps as AntdCollapseProps, CollapsePanelProps as AntdCollapsePanelProps} from 'antd/es/collapse';
import {IconRightArrow, IconDownArrow} from '@osui/icons';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-collapse';

interface CollapseProps extends AntdCollapseProps {
    /**
     * @description 嵌套的场景下，用于标记Collapse是Panel的子，
     */
    levelChild?: boolean;
}

interface CollapseInterface extends React.FC<CollapseProps> {
    Panel: typeof CollapsePanel;
}

const Collapse: CollapseInterface = ({className, levelChild, ...restProps}) => {
    const defaultProps = {
        className: classNames(
            clsPrefix,
            className,
            {
                [`${clsPrefix}-level-child`]: levelChild,
            }
        ),
        ...restProps,
    };

    const expandIcon = useCallback(
        panelProps => {
            return (
                panelProps.isActive
                    ? <span className="icon-wrapper"><IconDownArrow /> </span>
                    : <span className="icon-wrapper"><IconRightArrow /></span>
            );
        },
        []
    );
    return <AntdCollapse {...defaultProps} expandIcon={expandIcon} />;
};

interface CollapsePanelProps extends AntdCollapsePanelProps {
    /**
     * @description 嵌套的场景下，指明是第几层，从而控制缩进，目前只支持1, 2
     */
    level?: 1 | 2;
}

const CollapsePanel: React.FC<CollapsePanelProps> = ({className, level, ...props}) => {
    const classes = classNames(
        className,
        {
            [`${clsPrefix}-level-${level}`]: level,
        }
    );

    return <AntdCollapse.Panel className={classes} {...props} />;
};

Collapse.Panel = CollapsePanel;

export default Collapse;
