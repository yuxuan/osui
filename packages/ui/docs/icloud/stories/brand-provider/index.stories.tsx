import React from 'react';
import Collapse from '@osui/collapse';
import BrandProvider, {useBrandContext} from '@osui/brand-provider';

export default {
    title: '通过验收/BrandProvider',
    component: BrandProvider,
};

const BrandApp = () => {
    const { brand } = useBrandContext();
    return (<div>Hi: {brand}</div>);
};

export const Demo = () => {
    return (
        <>
            <BrandProvider brand="osc">
                <BrandApp />
            </BrandProvider>
            <BrandProvider brand="icloud">
                <BrandApp />
            </BrandProvider>
        </>
    );
};

export const BrandProviderCollapse = () => {
    const App = () => (
        <Collapse defaultActiveKey={['1']}>
            <Collapse.Panel header="可以折叠或展开的内容区域" key="1">
                11
            </Collapse.Panel>
            <Collapse.Panel header="可以折叠或展开的内容区域" key="2">
                22
            </Collapse.Panel>
            <Collapse.Panel header="可以折叠或展开的内容区域" key="3" disabled>
                33
            </Collapse.Panel>
        </Collapse>
    );
    return (
        <>
            <p>OSC主题的话，Collapse应该默认是ghost模式</p>
            <BrandProvider brand="osc">
                <App />
            </BrandProvider>
            <p>iCloud主题的话，Collapse应该默认是正常模式</p>
            <BrandProvider brand="icloud">
                <App />
            </BrandProvider>
        </>
    );
};
