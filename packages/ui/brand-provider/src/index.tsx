import React, {useContext} from 'react';
import {ConfigProvider} from 'antd';
import Empty from '@osui/empty';
import zhCN from 'antd/es/locale/zh_CN';
import {ConfigProviderProps} from 'antd/es/config-provider';
import {acud} from './overwriteAntdToken';
// 目前只支持一个主题
type Brand = 'icloud';

export interface BrandContextValue {
    brand: Brand | undefined;
}

export const BrandContext = React.createContext<BrandContextValue>({brand: undefined});

const theme = {
    token: acud,
    components: {
        Button: {
            paddingContentHorizontal: 12,
        },
        Divider: {
            colorSplit: 'rgba(0, 0, 0, 0.06)',
        },
    },
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

const BrandProvider: React.FC<React.PropsWithChildren<{ brand?: Brand }>> = ({brand, children}) => {
    const context: BrandContextValue = {brand};
    return (
        <BrandContext.Provider value={context}>
            <ConfigProvider {...iCloudConfigs} theme={theme}>
                {children}
            </ConfigProvider>
        </BrandContext.Provider>
    );
};

export const useBrandContext = () => useContext(BrandContext);

export default BrandProvider;
