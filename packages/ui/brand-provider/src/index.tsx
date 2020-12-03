import React, { useContext } from 'react';

export interface BrandContextValue {
    brand: 'osc'|'icloud';
}

const context: BrandContextValue = {brand: 'osc'};

const BrandContext = React.createContext<BrandContextValue>(context);

const BrandProvider: React.FC<BrandContextValue> = props => {
    return (
        <BrandContext.Provider value={context}>
            {props.children}
        </BrandContext.Provider>
    );
};

export const useBrandContext = useContext(BrandContext);

export default BrandProvider;
