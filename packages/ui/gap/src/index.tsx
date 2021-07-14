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
}

interface Nested {
    Horizontal: FC<FactorProps>;
    Vertical: FC<FactorProps>;
    FlexFit: FC;
}

interface GapProps extends FactorProps {
    orientation: 'horizontal' | 'vertical';
}

const Gap: FC<GapProps> & Nested = ({orientation, factor, base}) => {
    // 如果BrandProvider是osc，为4，否则为5
    const innerBase = base ?? 4;
    return (
        <div style={{[orientation === 'horizontal' ? 'width' : 'height']: factor * innerBase}} />
    );
};

const HorizontalGap: Nested['Horizontal'] = ({factor}) => (
    <Gap orientation="horizontal" factor={factor} />
);

const VerticalGap: Nested['Vertical'] = ({factor}) => (
    <Gap orientation="vertical" factor={factor} />
);

const FlexFitGap: Nested['FlexFit'] = () => <div style={{flex: 1}} />;

Gap.Horizontal = HorizontalGap;
Gap.Vertical = VerticalGap;
Gap.FlexFit = FlexFitGap;

export default Gap;
