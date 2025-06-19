import React, {
    useContext, useState, useEffect,
    useRef, useCallback,
    useMemo,
} from 'react';
import {ConfigProvider, ThemeConfig, App, theme} from 'antd';
import Empty from '@osui/empty';
import {css} from '@emotion/css';
import zhCN from 'antd/locale/zh_CN';
import {ConfigProviderProps} from 'antd/es/config-provider';
import {acudTheme} from '@osui/icloud-theme';
import {mergeTheme} from './mergeTheme';
import {
    config, SetStaticMethodStyle,
} from './SetStaticMethodStyle';

// 目前只支持一个主题
type Brand = 'icloud';

export interface BrandContextValue {
    brand: Brand | undefined;
    designToken?: ThemeConfig;
    isFilteredEmpty: boolean;
    setIsFilteredEmpty: (isFilteredEmpty: boolean) => void;
    setTheme: ((theme: ThemeConfig) => ThemeConfig)
    | ((theme: ThemeConfig) => void);
}

export const BrandContext = React.createContext<BrandContextValue>({
    brand: undefined,
    designToken: undefined,
    isFilteredEmpty: false,
    setIsFilteredEmpty: () => {},
    setTheme: () => {},
});

const defaultTheme: ThemeConfig = acudTheme;

export const useBrandContext = () => useContext(BrandContext);

interface BrandProviderComponent extends React.FC<React.PropsWithChildren<{
    brand?: Brand;
    theme?: Partial<ThemeConfig>;
} & ConfigProviderProps>> {
    useBrandContext: typeof useBrandContext;
    config: typeof config;
}

const BrandProvider: BrandProviderComponent = (
    {brand, theme: outerTheme, children, ...ConfigProviderProps}
) => {
    const themeFromHook = useRef<ThemeConfig>({});
    const [finalTheme, setTheme] = useState<any>(theme);
    const [isFilteredEmpty, setIsFilteredEmpty] = useState(false);

    const iCloudConfigs: ConfigProviderProps = useMemo(
        () => ({
            autoInsertSpaceInButton: false,
            pagination: {
                showSizeChanger: true,
                showQuickJumper: true,
            },
            renderEmpty(componentName) {
                switch (componentName) {
                    case 'Select':
                    case 'TreeSelect':
                    case 'Cascader':
                    case 'Mentions':
                        return <div style={{display: 'flex', justifyContent: 'center'}}>未查到任何结果</div>;
                    case 'Table':
                    case 'List':
                        return (
                            <div className={css`
                                margin: 24px 0;
                            `}
                            >
                                <Empty type={isFilteredEmpty ? 'filteredEmpty' : 'empty'} />
                            </div>
                        );
                    default:
                        return <Empty type={isFilteredEmpty ? 'filteredEmpty' : 'empty'} />;
                }
            },
            locale: zhCN,
        }),
        [isFilteredEmpty]
    );
    useEffect(
        () => {
            const newTheme = mergeTheme(
                themeFromHook.current,
                mergeTheme(
                    outerTheme,
                    defaultTheme
                )
            );
            // 合并优先级
            setTheme(newTheme as unknown as typeof theme);
        },
        [outerTheme]
    );

    const setThemeOutside = useCallback(
        (outTheme: ((outTheme: ThemeConfig) => ThemeConfig) | ThemeConfig) => {
            if (typeof outTheme === 'function') {
                themeFromHook.current = outTheme(themeFromHook.current);
            } else {
                themeFromHook.current = mergeTheme(
                    outTheme,
                    themeFromHook.current
                );
            }
            setTheme((oldTheme: any) => mergeTheme(
                themeFromHook.current,
                oldTheme
            ));
        },
        []
    );

    const context: BrandContextValue = {
        brand,
        designToken: finalTheme,
        setTheme: setThemeOutside,
        isFilteredEmpty: isFilteredEmpty,
        setIsFilteredEmpty,
    };

    return (
        <BrandContext.Provider value={context}>
            <ConfigProvider {...iCloudConfigs} {...ConfigProviderProps} theme={finalTheme}>
                <App>
                    {/* <SetHashIdNullDom /> */}
                    <SetStaticMethodStyle />
                    {children}
                </App>
            </ConfigProvider>
        </BrandContext.Provider>
    );
};

BrandProvider.config = config;

export default BrandProvider;

BrandProvider.useBrandContext = useBrandContext;

