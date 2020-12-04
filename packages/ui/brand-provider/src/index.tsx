import React, { useContext } from 'react';
export interface BrandContextValue {
    brand: 'osc' | 'icloud';
}

export const BrandContext = React.createContext<BrandContextValue>({brand: 'osc'});

const BrandProvider: React.FC<{ brand?: 'osc' | 'icloud'}> = ({brand = 'osc', children}) => {
    const context: BrandContextValue = {brand};
    return (
        <BrandContext.Provider value={context}>
            {children}
        </BrandContext.Provider>
    );
};

export const useBrandContext = () => useContext(BrandContext);

export default BrandProvider;
