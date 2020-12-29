import React from 'react';
import {Cascader as AntdCascader} from 'antd';
import {CascaderProps as AntdCascaderProps} from 'antd/es/cascader';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-cascader';

const Cascader: React.FC<AntdCascaderProps> = ({className, displayRender, ...props}) => {
    const innerClassName = classNames(className, clsPrefix);
    const innerDisplayRender = displayRender ?? ((label: string[]) => label.join(' > '));
    return <AntdCascader className={innerClassName} displayRender={innerDisplayRender} {...props} />;
};

export default Cascader;
