import BrandProvider, { useBrandContext } from '../src';

export default {
    title: 'BrandProvider',
    component: BrandProvider,
};

const DemoApp = () => {
    const {brand} = useBrandContext();
    return (<div>Hi: {brand}</div>);
};

export const Demo = () => {
    return (
        <BrandProvider brand="osc">
            <DemoApp />
        </BrandProvider>
    );
};
