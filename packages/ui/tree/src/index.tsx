import React from 'react';
import {Tree as AntdTree} from 'antd';
import {TreeProps as AntdTreeProps} from 'antd/es/tree';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-tree';

export interface TreeProps extends AntdTreeProps {
    size?: 'small' | 'middle' | 'large';
}
interface CompoundedComponent extends React.ForwardRefExoticComponent<TreeProps & React.RefAttributes<any>> {
    TreeNode: typeof AntdTree.TreeNode;
    DirectoryTree: typeof AntdTree.DirectoryTree;
}


const Tree = React.forwardRef<any, TreeProps>(({className, size, blockNode, ...props}, ref) => {
    const innerClassName = classNames(
        className,
        clsPrefix,
        {[`${clsPrefix}-${size}`]: size}
    );
    const innterBlockNode = blockNode ?? true;
    return <AntdTree ref={ref} className={innerClassName} blockNode={innterBlockNode} {...props} />;
}) as CompoundedComponent;

Tree.TreeNode = AntdTree.TreeNode;
Tree.DirectoryTree = AntdTree.DirectoryTree;

export default Tree;
