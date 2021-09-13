import React from 'react';
import {Tree as AntdTree} from 'antd';
import {TreeProps as AntdTreeProps} from 'antd/lib/tree';
import classNames from 'classnames';
import {IconDownOutlined} from '@osui/icons';
import './index.less';

const clsPrefix = 'osui-tree';

export interface TreeProps extends AntdTreeProps {
    size?: 'small' | 'middle' | 'large';
}
interface CompoundedComponent extends React.ForwardRefExoticComponent<TreeProps & React.RefAttributes<any>> {
    TreeNode: typeof AntdTree.TreeNode;
    DirectoryTree: typeof AntdTree.DirectoryTree;
}


const Tree = React.forwardRef<any, TreeProps>(({className, size, blockNode, switcherIcon, ...props}, ref) => {
    const innerClassName = classNames(
        className,
        clsPrefix,
        {[`${clsPrefix}-${size}`]: size}
    );
    const innerBlockNode = blockNode ?? true;
    const innerSwitcherIcon = switcherIcon ?? (
        <span role="img" aria-label="caret-down">
            <IconDownOutlined className={classNames(`${clsPrefix}-switcherIcon`)} />
        </span>
    );
    return (
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

export type { TreeNodeProps, TreeDataNode } from 'antd';
export default Tree;
