import React, {useCallback} from 'react';
import {Collapse as AntdCollapse} from 'antd';
import {CollapseProps as AntdCollapseProps, CollapsePanelProps as AntdCollapsePanelProps} from 'antd/es/collapse';
import {IconRightOutlined, IconDownOutlined} from '@osui/icons';
import {useBrandContext} from '@osui/brand-provider';
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

const Collapse: CollapseInterface = ({className, levelChild, ghost, expandIcon, ...restProps}) => {
    const { brand } = useBrandContext();

    const defaultProps = {
        className: classNames(
            clsPrefix,
            className,
            {
                [`${clsPrefix}-level-child`]: levelChild,
            }
        ),
        // osc主题时ghost默认为true
        // eslint-disable-next-line no-negated-condition
        ghost: ghost ?? brand === 'osc',
        ...restProps,
    };

    const innerExpandIcon = useCallback(
        panelProps => {
            return (
                panelProps.isActive
                    ? <span className="icon-wrapper"><IconDownOutlined /> </span>
                    : <span className="icon-wrapper"><IconRightOutlined /></span>
            );
        },
        []
    );
    return <AntdCollapse {...defaultProps} expandIcon={expandIcon ?? innerExpandIcon} />;
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
