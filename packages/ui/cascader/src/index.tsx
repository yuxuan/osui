import React from 'react';
import { Cascader as AntdCascader } from 'antd';
import { CascaderProps as AntdCascaderProps } from 'antd/lib/cascader';
import classNames from 'classnames';
import { IconDownOutlined, IconRightOutlined } from '@osui/icons';
import './index.less';

const clsPrefix = 'osui-cascader';

const Cascader: React.FC<AntdCascaderProps> = ({
    className,
    popupClassName,
    expandIcon,
    suffixIcon,
    displayRender,
    ...props
}) => {
    const innerClassName = classNames(className, clsPrefix);
    const innerPopupClassName = classNames(popupClassName, `${clsPrefix}-menu`);
    const innerDisplayRender = displayRender ?? (
        (label: string[]) => label.map(
            (item, index) => (
                index === label.length - 1 // 最后一个后面不加icon
                    ? (<span>{item}</span>)
                    : (
                        <>
                            <span>{item}</span><IconRightOutlined className={`${clsPrefix}-label-divider-icon`} />
                        </>
                    )
            )
        )
    );
    const innerExpandIcon = expandIcon ?? <IconRightOutlined />;
    const innerSuffixIcon = suffixIcon ?? <IconDownOutlined />;
    return (
        <AntdCascader
            className={innerClassName}
            displayRender={innerDisplayRender}
            popupClassName={innerPopupClassName}
            expandIcon={innerExpandIcon}
            suffixIcon={innerSuffixIcon}
            {...props}
        />
    );
};

export default Cascader;
