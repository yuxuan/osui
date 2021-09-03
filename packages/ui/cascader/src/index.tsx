import React from 'react';
import { Cascader as AntdCascader } from 'antd';
import { CascaderProps as AntdCascaderProps } from 'antd/lib/cascader';
import classNames from 'classnames';
import { IconDownOutlined, IconRightOutlined } from '@osui/icons';
import './index.less';

const clsPrefix = 'osui-cascader';

const OSUICascader: React.ForwardRefRenderFunction<unknown, AntdCascaderProps> = (
    {
        className,
        popupClassName,
        expandIcon,
        suffixIcon,
        displayRender,
        ...props
    },
    ref
) => {
    const innerClassName = classNames(clsPrefix, className);
    const innerPopupClassName = classNames(`${clsPrefix}-menu`, popupClassName);
    const innerDisplayRender = displayRender ?? (
        (label: string[]) => label.map(
            (item, index) => (
                index === label.length - 1 // 最后一个后面不加icon
                    ? (<span>{item}</span>)
                    : (
                        <>
                            <span>{item}</span>&nbsp;&gt;&nbsp;
                        </>
                    )
            )
        )
    );
    const innerExpandIcon = expandIcon ?? <IconRightOutlined />;
    const innerSuffixIcon = suffixIcon ?? <IconDownOutlined />;
    return (
        <AntdCascader
            ref={ref as any}
            className={innerClassName}
            displayRender={innerDisplayRender}
            popupClassName={innerPopupClassName}
            expandIcon={innerExpandIcon}
            suffixIcon={innerSuffixIcon}
            {...props}
        />
    );
};

export type { CascaderProps } from 'antd';
export default React.forwardRef<unknown, AntdCascaderProps>(OSUICascader) as unknown as typeof AntdCascader;
