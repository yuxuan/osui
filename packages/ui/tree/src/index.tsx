import React, {useContext} from 'react';
import {Tree as AntdTree, ConfigProvider} from 'antd';
import type {TreeProps as AntdTreeProps, TreeNodeProps, TreeDataNode} from 'antd';
import classNames from 'classnames';
import {IconDownOutlined} from '@osui/icons';
// import './index.less';
import {useStyle} from './style';

const clsPrefix = 'osui-tree';

export interface TreeProps extends AntdTreeProps {
    size?: 'small' | 'middle' | 'large';
}
export interface CompoundedComponent extends React.ForwardRefExoticComponent<TreeProps & React.RefAttributes<any>> {
    TreeNode: typeof AntdTree.TreeNode;
    DirectoryTree: typeof AntdTree.DirectoryTree;
}


const Tree = React.forwardRef<any, TreeProps>(({className, size, blockNode, switcherIcon, ...props}, ref) => {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('tree', props.prefixCls);
    const antPrefix = getPrefixCls('', props.prefixCls);
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefix);
    const innerClassName = classNames(
        clsPrefix,
        {[`${clsPrefix}-${size}`]: size},
        className
    );
    const innerBlockNode = blockNode ?? true;
    const innerSwitcherIcon = switcherIcon ?? (
        <span role="img" aria-label="caret-down">
            <IconDownOutlined className={classNames(`${clsPrefix}-switcherIcon`)} />
        </span>
    );
    return wrapSSROsui(
        <AntdTree
            ref={ref}
            className={innerClassName}
            blockNode={innerBlockNode}
            switcherIcon={innerSwitcherIcon}
            {...props}
        />
    );
}) as CompoundedComponent;

Tree.TreeNode = AntdTree.TreeNode;
Tree.DirectoryTree = AntdTree.DirectoryTree;

export type {TreeNodeProps, TreeDataNode};
export default Tree;
