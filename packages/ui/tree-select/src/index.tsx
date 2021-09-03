import React from 'react';
import {TreeSelect as AntdTreeSelect} from 'antd';
import {DefaultValueType} from 'rc-tree-select/lib/interface';
import {TreeSelectProps as AntdTreeSelectProps, RefTreeSelectProps} from 'antd/lib/tree-select';
import classNames from 'classnames';
import hoistNonReactStatics from 'hoist-non-react-statics';
import './index.less';

const clsPrefix = 'osui-tree-select';

const InternalTreeSelect = <T extends DefaultValueType>(
    {className, dropdownClassName, ...props}: AntdTreeSelectProps<T>,
    ref: React.Ref<RefTreeSelectProps>
) => {
    const innerClassName = classNames(className, clsPrefix);
    const innerDropdownClassName = classNames(dropdownClassName, `${clsPrefix}-dropdown`);
    return (
        <AntdTreeSelect
            ref={ref}
            className={innerClassName}
            dropdownClassName={innerDropdownClassName}
            {...props}
        />
    );
};

const TreeSelectRef = React.forwardRef(InternalTreeSelect) as <T extends DefaultValueType>(
    props: AntdTreeSelectProps<T> & { ref?: React.Ref<RefTreeSelectProps> },
) => React.ReactElement;

// 提升TreeSelect属性
hoistNonReactStatics(TreeSelectRef, AntdTreeSelect);

// 类型定义
type InternalTreeSelectType = typeof TreeSelectRef;
export interface TreeSelectInterface extends InternalTreeSelectType {
    TreeNode: typeof AntdTreeSelect.TreeNode;
    SHOW_ALL: typeof AntdTreeSelect.SHOW_ALL;
    SHOW_PARENT: typeof AntdTreeSelect.SHOW_PARENT;
    SHOW_CHILD: typeof AntdTreeSelect.SHOW_CHILD;
}
const TreeSelect = TreeSelectRef as TreeSelectInterface;

export type { TreeSelectProps } from 'antd';
export default TreeSelect;
