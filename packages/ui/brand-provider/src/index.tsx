import React, {useContext, useMemo} from 'react';
import {ConfigProvider, ThemeConfig} from 'antd';
import Empty from '@osui/empty';
import zhCN from 'antd/es/locale/zh_CN';
import {ConfigProviderProps} from 'antd/es/config-provider';
import {acud} from './overwriteAntdToken';
import {mergeTheme} from './mergeTheme';
import {components} from './themeComponents';

// 目前只支持一个主题
type Brand = 'icloud';

export interface BrandContextValue {
    brand: Brand | undefined;
    designToken?: ThemeConfig;
}

export const BrandContext = React.createContext<BrandContextValue>({
    brand: undefined,
    designToken: undefined,
});

const theme: ThemeConfig = {
    token: acud,
    components,
};

const iCloudConfigs: ConfigProviderProps = {
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
                return (<Empty />);
            default:
                return <Empty />;
        }
    },
    locale: zhCN,
};

const BrandProvider: React.FC<React.PropsWithChildren<{ brand?: Brand, theme?: ThemeConfig }>> = (
    {brand, theme: outerTheme, children}
) => {
    const finalTheme = useMemo(
        () => mergeTheme(outerTheme, theme),
        [outerTheme]
    );
    const context: BrandContextValue = {
        brand,
        designToken: finalTheme,
    };
    return (
        <BrandContext.Provider value={context}>
            <ConfigProvider {...iCloudConfigs} theme={finalTheme}>
                {children}
            </ConfigProvider>
        </BrandContext.Provider>
    );
};

export const useBrandContext = () => useContext(BrandContext);

export default BrandProvider;
