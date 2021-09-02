import React, {FC} from 'react';

interface FactorProps {
    /**
     * @description 系数：比如10px，factor是2，base是5
     */
    factor: number;
    /**
     * @description 品牌的栅格系统base数，比如osc的是4，icloud是5，默认是5
     * @default: icloud时为5，osc时为4
     */
    base?: number;
    /**
     * @description className
     */
    className?: string;
}

interface Nested {
    Horizontal: FC<FactorProps>;
    Vertical: FC<FactorProps>;
    FlexFit: FC<{className?: string}>;
}

interface GapProps extends FactorProps {
    orientation: 'horizontal' | 'vertical';
}

const Gap: FC<GapProps> & Nested = ({orientation, factor, base, className}) => {
    // 如果BrandProvider是osc，为4，否则为5
    const innerBase = base ?? 4;
    return (
        <div className={className} style={{[orientation === 'horizontal' ? 'width' : 'height']: factor * innerBase}} />
    );
};

const HorizontalGap: Nested['Horizontal'] = ({factor, className}) => (
    <Gap className={className} orientation="horizontal" factor={factor} />
);

const VerticalGap: Nested['Vertical'] = ({factor, className}) => (
    <Gap className={className} orientation="vertical" factor={factor} />
);

const FlexFitGap: Nested['FlexFit'] = ({className}) => <div className={className} style={{flex: 1}} />;

Gap.Horizontal = HorizontalGap;
Gap.Vertical = VerticalGap;
Gap.FlexFit = FlexFitGap;

export default Gap;
