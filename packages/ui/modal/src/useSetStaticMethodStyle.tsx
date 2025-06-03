import {useContext, useLayoutEffect, cloneElement, ReactNode, ReactElement} from 'react';
import {theme as AntdTheme, ConfigProvider} from 'antd';
import classNames from 'classnames';
import {useStyle} from './style';

const {useToken} = AntdTheme;

interface Props {
    hashId: string;
    wrapSSROsui: (v: ReactElement) => ReactElement;
}

export const modalGlobalHolderRender = ({
    hashId,
    wrapSSROsui,
}: Props) => (children: ReactNode) => {
    if (typeof children === 'string'
        || typeof children === 'number'
        || typeof children === 'boolean'
        || !children
        || !('props' in children)
    ) {
        return children;
    }
    const classNameIn: string = children?.props?.className || '';
    const className = classNameIn?.includes(hashId)
        ? classNameIn
        : classNames(classNameIn, hashId);

    return wrapSSROsui(
        cloneElement(
            children, {
                className,
            })
    );
};

export const useGetModalWrapSSROsui = () => {
    const {token: outerToken, hashId} = useToken();
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('modal');
    const antPrefix = getPrefixCls('');
    const wrapSSROsui = useStyle('osui-modal', prefixCls, cssVar, antPrefix, outerToken);
    return {wrapSSROsui, hashId};
};

export const useSetStaticMethodStyle = () => {
    const {wrapSSROsui, hashId} = useGetModalWrapSSROsui();

    useLayoutEffect(
        () => {
            ConfigProvider.config({
                holderRender: modalGlobalHolderRender({
                    hashId, wrapSSROsui,
                }),
            });
        },
        [wrapSSROsui, hashId]
    );
};

export default useSetStaticMethodStyle;
