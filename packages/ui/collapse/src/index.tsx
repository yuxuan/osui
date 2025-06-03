import React, {useCallback, useContext} from 'react';
import {Collapse as AntdCollapse, ConfigProvider} from 'antd';
import {CollapseProps as AntdCollapseProps, CollapsePanelProps as AntdCollapsePanelProps} from 'antd/es/collapse';
import {IconRightOutlined, IconDownOutlined} from '@osui/icons';
import classNames from 'classnames';
import hoistNonReactStatics from 'hoist-non-react-statics';
// import './index.less';
// import './patch.less';
import {useStyle} from './style';

const clsPrefix = 'osui-collapse';

export interface CollapseProps extends AntdCollapseProps {
    /**
     * @description 嵌套的场景下，用于标记Collapse是Panel的子，
     */
    levelChild?: boolean;
}

export interface CollapseInterface extends React.FC<CollapseProps> {
    Panel: typeof CollapsePanel;
}

const Collapse: CollapseInterface = ({className, levelChild, ghost, expandIcon, ...restProps}) => {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('colla', restProps.prefixCls);
    const antPrefix = getPrefixCls('');
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefix);

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
        ghost: ghost,
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
    return wrapSSROsui(
        <AntdCollapse
            {...defaultProps}
            expandIcon={expandIcon ?? innerExpandIcon}
        />
    );
};

interface CollapsePanelProps extends AntdCollapsePanelProps {
    /**
     * @description 嵌套的场景下，指明是第几层，从而控制缩进，目前只支持1, 2
     */
    level?: 1 | 2;
}

const CollapsePanel: React.FC<CollapsePanelProps> = ({className, level, ...props}) => {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('alert', props.prefixCls);
    const antPrefix = getPrefixCls('');
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefix);
    const classes = classNames(
        className,
        {
            [`${clsPrefix}-level-${level}`]: level,
        }
    );

    return wrapSSROsui(
        <AntdCollapse.Panel
            className={classes}
            {...props}
        />
    );
};

hoistNonReactStatics(Collapse, AntdCollapse);

Collapse.Panel = CollapsePanel;

export type {CollapsePanelProps} from 'antd';
export default Collapse;
