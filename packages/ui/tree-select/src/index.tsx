import React from 'react';
import {TreeSelect as AntdTreeSelect} from 'antd';
import {TreeSelectProps as AntdTreeSelectProps} from 'antd/es/';
import classNames from 'classnames';
import hoistNonReactStatics from 'hoist-non-react-statics';
import './index.less';

const clsPrefix = 'osui-tree-select';

export type TreeSelectFC = <T>(props: AntdTreeSelectProps<T>) => React.ReactElement;

const TreeSelect: TreeSelectFC = ({className, dropdownClassName, ...props}) => {
    const innerClassName = classNames(className, clsPrefix);
    const innerDropdownClassName = classNames(dropdownClassName, `${clsPrefix}-dropdown`);
    return <AntdTreeSelect className={innerClassName} dropdownClassName={innerDropdownClassName} {...props} />;
};

export default hoistNonReactStatics(TreeSelect, AntdTreeSelect) as TreeSelectFC;
