import React, {useContext} from 'react';
import {ConfigProvider} from 'antd';
import Empty from '@osui/empty';
import zhCN from 'antd/lib/locale/zh_CN';
import {ConfigProviderProps} from 'antd/lib/config-provider';
export interface BrandContextValue {
    brand: 'osc' | 'icloud' | undefined;
}

export const BrandContext = React.createContext<BrandContextValue>({brand: undefined});

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

const BrandProvider: React.FC<React.PropsWithChildren<{ brand?: 'osc' | 'icloud' }>> = ({brand, children}) => {
    const context: BrandContextValue = {brand};
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
