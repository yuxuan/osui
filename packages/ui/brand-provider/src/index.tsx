import React, {
    useContext, useState, useEffect,
    useRef, useCallback,
    useMemo,
} from 'react';
import {ConfigProvider, ThemeConfig, App} from 'antd';
import Empty from '@osui/empty';
import zhCN from 'antd/locale/zh_CN';
import {ConfigProviderProps} from 'antd/es/config-provider';
import {acud} from './overwriteAntdToken';
import {mergeTheme} from './mergeTheme';
import {components} from './themeComponents';

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

const theme: ThemeConfig = {
    token: acud,
    components,
};

interface BrandProviderComponent extends React.FC<React.PropsWithChildren<{
    brand?: Brand;
    theme?: Partial<ThemeConfig>;
} & ConfigProviderProps>> {
    useBrandContext: typeof useBrandContext;
}

const BrandProvider: BrandProviderComponent = (
    {brand, theme: outerTheme, children, ...ConfigProviderProps}
) => {
    const themeFromHook = useRef<ThemeConfig>({});
    const [finalTheme, setTheme] = useState(theme);
    const [isFilteredEmpty, setIsFilteredEmpty] = useState(false);

    const iCloudConfigs: ConfigProviderProps = useMemo(
        () => ({
            autoInsertSpaceInButton: false,
            renderEmpty(componentName) {
                switch (componentName) {
                    case 'Select':
                    case 'TreeSelect':
                    case 'Cascader':
                    case 'Mentions':
                        return <div style={{display: 'flex', justifyContent: 'center'}}>未查到任何结果</div>;
                    case 'Table':
                    case 'List':
                        return (<Empty type={isFilteredEmpty ? 'filteredEmpty' : 'empty'} />);
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
                    theme
                )
            );
            // 合并优先级
            setTheme(newTheme);
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
            setTheme(oldThme => mergeTheme(
                themeFromHook.current,
                oldThme
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
                    {children}
                </App>
            </ConfigProvider>
        </BrandContext.Provider>
    );
};

export const useBrandContext = () => useContext(BrandContext);

export default BrandProvider;

BrandProvider.useBrandContext = useBrandContext;

export const osuiThemeConfig = theme;
