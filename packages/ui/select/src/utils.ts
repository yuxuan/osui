/**
 * 根据条件调整antd组件props
 * @author huoyuxuan
 */
interface AdjustPropOptions {
    targetProp: string;
    shouldOverride: boolean;
    override: any;
    forceOverride?: boolean;
}

export const adjustAntdProps = (props: any, options: AdjustPropOptions[]) => {
    options.forEach(option => {
        const {targetProp, shouldOverride, override, forceOverride} = option;
        const originProp = props[targetProp];
        if (shouldOverride) {
            if (originProp === undefined || forceOverride) {
                props[targetProp] = override;
            }
        }
    });
    return props;
};
