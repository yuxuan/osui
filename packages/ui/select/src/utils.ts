/**
 * 根据条件调整antd组件props
 * @author huoyuxuan
 */
interface AdjustPropOptions {
    targetProp: string;
    shouldOverride: boolean;
    override: any;
    alwaysOverride?: boolean;
}

export const adjustAntdProps = (props: any, options: AdjustPropOptions[]) => {
    options.forEach(option => {
        const {targetProp, shouldOverride, override, alwaysOverride = false} = option;
        const originProp = props[targetProp];
        // 根据条件判断是否需要override
        if (shouldOverride) {
            // 当原始属性是undefined或者标记为alwaysOverride时，覆盖属性
            if (originProp === undefined || alwaysOverride) {
                props[targetProp] = override;
            }
        }
    });
    return props;
};
