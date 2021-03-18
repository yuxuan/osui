import React, { useContext } from 'react';
import { ConfigProvider } from 'antd';
import Empty from '@osui/empty';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProviderProps } from 'antd/es/config-provider';
export interface BrandContextValue {
    brand: 'osc' | 'icloud' | undefined;
}

export const BrandContext = React.createContext<BrandContextValue>({ brand: undefined });

const iCloudConfigs: ConfigProviderProps = {
    autoInsertSpaceInButton: false,
    renderEmpty(componentName) {
        switch (componentName) {
            case 'Select':
            case 'TreeSelect':
            case 'Cascader':
            case 'Transfer':
            case 'Mentions':
                return <Empty small />;
            default:
                return <Empty />;
        }
    },
    locale: zhCN,
};

const BrandProvider: React.FC<{ brand?: 'osc' | 'icloud' }> = ({ brand, children }) => {
    const context: BrandContextValue = { brand };
    if (brand === 'icloud') {
        return (
            <BrandContext.Provider value={context}>
                <ConfigProvider {...iCloudConfigs}>
                    {children}
                </ConfigProvider>
            </BrandContext.Provider>
        );
    }
    return (
        <BrandContext.Provider value={context}>
            {children}
        </BrandContext.Provider>
    );
};

export const useBrandContext = () => useContext(BrandContext);

export default BrandProvider;
