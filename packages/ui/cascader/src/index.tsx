import React from 'react';
import {Cascader as AntdCascader} from 'antd';
import {CascaderProps as AntdCascaderProps, CascaderRef} from 'antd/lib/cascader';
import hoistNonReactStatics from 'hoist-non-react-statics';
import classNames from 'classnames';
import {IconDownOutlined, IconRightOutlined} from '@osui/icons';
import './index.less';

const clsPrefix = 'osui-cascader';

const OSUICascader = (
    {
        className,
        popupClassName,
        expandIcon,
        suffixIcon,
        displayRender,
        ...props
    }: AntdCascaderProps<any>,
    ref: React.Ref<CascaderRef>
) => {
    const innerClassName = classNames(clsPrefix, className);
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

    const maxChildrenLength = React.useMemo(
        () => {
            const result: number[] = [];
            const getLength = (options?: any[]) => {
                if (!options) {
                    return;
                }
                result.push(options.length);
                options.forEach(i => getLength(i.children));
            };
            getLength(props.options);
            return Math.max(...result);
        },
        [props.options]
    );
    // 计算最多子数，不超过10，然后算最小高度 子数 * 30(item高度) + 8px(上下padding)，通过className处理
    // 因为style写不到
    const cascaderMinHeight = Math.min(maxChildrenLength, 10);
    const innerPopupClassName = classNames(
        `${clsPrefix}-menu`,
        `${clsPrefix}-menu-${cascaderMinHeight}`,
        popupClassName
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
            style={{...props.style, minHeight: cascaderMinHeight}}
            {...props}
        />
    );
};

const RefCastCascader = React.forwardRef(OSUICascader) as typeof AntdCascader;

hoistNonReactStatics(RefCastCascader, AntdCascader);

export type {CascaderProps} from 'antd';

export default RefCastCascader;
