import React from 'react';
import {TreeSelect as AntdTreeSelect, TreeSelectProps as AntdTreeSelectProps} from 'antd';
import classNames from 'classnames';
import {IconDownOutlined} from '@osui/icons';
import hoistNonReactStatics from 'hoist-non-react-statics';
import type {BaseSelectRef} from 'rc-select';
import type {BaseOptionType, DefaultOptionType} from 'antd/es/select';
import './index.less';

const clsPrefix = 'osui-tree-select';

const InternalTreeSelect = <OptionType extends BaseOptionType | DefaultOptionType = BaseOptionType>(
    {className, dropdownClassName, ...props}: AntdTreeSelectProps<OptionType>,
    ref: React.Ref<BaseSelectRef>
) => {
    const innerClassName = classNames(className, clsPrefix);
    const innerDropdownClassName = classNames(dropdownClassName, `${clsPrefix}-dropdown`);
    const innerSwitcherIcon = props.switcherIcon ?? (
        <span role="img" aria-label="caret-down">
            <IconDownOutlined className={classNames(`${clsPrefix}-switcherIcon`)} />
        </span>
    );
    return (
        <AntdTreeSelect
            ref={ref}
            className={innerClassName}
            dropdownClassName={innerDropdownClassName}
            {...props}
            switcherIcon={innerSwitcherIcon}
        />
    );
};

const TreeSelectRef = React.forwardRef(InternalTreeSelect) as <
    ValueType = any,
    OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType,
>(
    props: React.PropsWithChildren<AntdTreeSelectProps<ValueType, OptionType>> & {
        ref?: React.Ref<BaseSelectRef>;
    },
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

export type {TreeSelectProps} from 'antd';

export default TreeSelect;

export {highlightMatchText} from './helpers';
