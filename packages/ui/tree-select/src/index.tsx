import React, {useContext, useState} from 'react';
import {TreeSelect as AntdTreeSelect, TreeSelectProps as AntdTreeSelectProps, ConfigProvider} from 'antd';
import classNames from 'classnames';
import {IconDownOutlined} from '@osui/icons';
import hoistNonReactStatics from 'hoist-non-react-statics';
import type {BaseSelectRef} from 'rc-select';
import {DataNode} from 'antd/es/tree';
import {useStyle} from './style';

const clsPrefix = 'osui-tree-select';

const InternalTreeSelect = <OptionType extends DataNode = DataNode>(
    {className, popupClassName, ...props}: AntdTreeSelectProps<OptionType>,
    ref: React.Ref<BaseSelectRef>
) => {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('select-tree', props.prefixCls);
    const antPrefixCls = getPrefixCls('');
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefixCls);
    const innerClassName = classNames(className, clsPrefix);
    const innerPopupClassName = classNames(popupClassName, `${clsPrefix}-dropdown`);
    const innerSwitcherIcon = props.switcherIcon ?? (
        <span role="img" aria-label="caret-down">
            <IconDownOutlined className={classNames(`${clsPrefix}-switcherIcon`)} />
        </span>
    );

    const [dropdownVisible, setDropdownVisible] = useState(false);
    const onDropdownVisibleChange = (visible: boolean) => {
        props.onDropdownVisibleChange?.(visible);
        setDropdownVisible(visible);
    };
    return wrapSSROsui(
        <AntdTreeSelect
            ref={ref}
            className={innerClassName}
            popupClassName={innerPopupClassName}
            {...props}
            switcherIcon={innerSwitcherIcon}
            suffixIcon={dropdownVisible
                ? (
                    <IconDownOutlined
                        className={classNames(`${clsPrefix}-switcherIcon`)}
                        style={{transform: 'rotate(180deg)', transition: 'transform 0.3s ease-in-out'}}
                    />
                )
                : (
                    <IconDownOutlined
                        className={classNames(`${clsPrefix}-switcherIcon`)}
                        style={{transition: 'transform 0.3s ease-in-out'}}
                    />
                )}
            onDropdownVisibleChange={onDropdownVisibleChange}
        />
    );
};

const TreeSelectRef = React.forwardRef(InternalTreeSelect) as <
    ValueType = any,
    OptionType extends DataNode = DataNode,
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
