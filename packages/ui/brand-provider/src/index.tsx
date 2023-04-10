import React, {useContext, useMemo} from 'react';
import {ConfigProvider} from 'antd';
import Empty from '@osui/empty';
import zhCN from 'antd/es/locale/zh_CN';
import {ConfigProviderProps} from 'antd/es/config-provider';
import {acud} from './overwriteAntdToken';
import {mergeTheme} from './mergeTheme';
import {ThemeConfig} from 'antd';
import {components} from './themeComponents';

// 目前只支持一个主题
type Brand = 'icloud';

export interface BrandContextValue {
    brand: Brand | undefined;
}

export const BrandContext = React.createContext<BrandContextValue>({brand: undefined});

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

const BrandProvider: React.FC<React.PropsWithChildren<{ brand?: Brand, theme?: ThemeConfig }>> = ({brand, theme: outerTheme, children}) => {
    const context: BrandContextValue = {brand};
    const finalTheme = useMemo(()=> mergeTheme(outerTheme, theme), [outerTheme]);
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
