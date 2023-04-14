// 参考 antd/config-provider/useThemes
import {ThemeConfig} from 'antd';

const defaultTheme: ThemeConfig = {
    token: {},
    components: {},
};

type OverrideToken = Required<ThemeConfig>['components'];

export const mergeTheme = (theme: ThemeConfig = defaultTheme, parentTheme: ThemeConfig = defaultTheme) => {
    if (!theme) {
        return parentTheme;
    }

    // Override
    const mergedComponents = {
        ...parentTheme.components,
    };

    if (theme.components) {
        const components: OverrideToken = theme.components;
        Object.keys(components).forEach((componentName: string) => {
            mergedComponents[componentName as keyof OverrideToken] = {
                ...mergedComponents[componentName as keyof OverrideToken],
                ...theme.components![componentName as keyof OverrideToken],
            } as any;
        });
    }


    // Base token
    return {
        ...parentTheme,
        ...theme,

        token: {
            ...parentTheme.token,
            ...theme.token,
        },
        components: mergedComponents,
    };
};
