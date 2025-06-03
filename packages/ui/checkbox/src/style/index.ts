import type {CSSObject} from '@ant-design/cssinjs';
import {useBrandContext} from '@osui/brand-provider';
import {useStyleRegister, useCacheToken} from '@ant-design/cssinjs';
import {theme, ThemeConfig} from 'antd';

const {useToken} = theme;

export const prepareComponentToken: (token: any) => any = token => {
    const ret: any = {};
    Object.keys(token).forEach(k => {
        ret[k] = token[k];
    });
    Object.keys(token.Checkbox || {}).forEach(k => {
        ret[k] = token?.Checkbox?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

export const genCheckboxStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
}) => CSSObject[] =
    ({clsPrefix, prefixCls, token}) => {
        const innerCss = {
            'border-radius': token['checkboxBorderRadius'],
            transition: 'none',
            animation: 'none',
            'animation-fill-mode': 'none',
        };

        const globalCss = {
            [`.${prefixCls}-inner`]: innerCss,
            [`.${prefixCls}-checked::after`]: innerCss,

            [`.${prefixCls} + span`]: {
                'padding-right': token['checkboxPaddingHorizontal'],
                'padding-left': token['checkbox-padding-horizontal'],
            },
        };

        const normalCss = {
            // 默认边框颜色
            [`.${prefixCls}-inner`]: {
                'border-color': token['checkboxBorderColor'],
            },
            // focus时box-shadow的效果
            [`.${prefixCls}-input:focus + .${prefixCls}-inner`]: {
                'box-shadow': token['checkboxCheckedFocusBoxShadow'],
            },
            // hover
            [`&.${prefixCls}-wrapper:hover .${prefixCls}-inner`]: {
                'background-color': token['checkboxHoverBg'],
                'border-color': token['checkboxHoverBorderColor'],
            },
            [`.${prefixCls}:hover .${prefixCls}-inner`]: {
                'background-color': token['checkboxHoverBg'],
                'border-color': token['checkboxHoverBorderColor'],
            },
            [`.${prefixCls}-input:focus + .${prefixCls}-inner`]: {
                'background-color': token['checkboxHoverBg'],
                'border-color': token['checkboxHoverBorderColor'],
            },
            // active focus
            [`&.${prefixCls}-wrapper:active .${prefixCls}-inner`]: {
                'background-color': token['checkboxHoverBg'],
                'border-color': token['checkboxActiveBorderColor'],
            },
            [`.${prefixCls}:active .${prefixCls}-inner`]: {
                'background-color': token['checkboxHoverBg'],
                'border-color': token['checkboxActiveBorderColor'],
            },
            [`.${prefixCls}-input:focus + .${prefixCls}-inner`]: {
                'background-color': token['checkboxHoverBg'],
                'border-color': token['checkboxActiveBorderColor'],
            },

            // disabled
            [`.${prefixCls}-disabled .${prefixCls}-inner`]: {
                'background-color': token['checkbox-disabled-bg'],
                'border-color': `${token['checkboxDisabledBorderColor']} !important`,

                '&::after': {
                    'border-color': token['checkboxCheckedDisabledInnerColor'],
                },
            },

            [`&.${prefixCls}-wrapper:hover .${prefixCls}-disabled .${prefixCls}-inner`]: {
                'background-color': token['checkboxDisabledBg'],
            },
            [`.${prefixCls}-disabled:hover .${prefixCls}-inner`]: {
                'background-color': token['checkboxDisabledBg'],
            },
        };

        const hoverCss = {
            // hover
            [`&.${prefixCls}-wrapper:hover .${prefixCls}-checked .${prefixCls}-inner`]: {},
            [`.${prefixCls}-checked:hover .${prefixCls}-inner`]: {
                'background-color': token['checkboxCheckedHoverBg'],
                'border-color': token['checkboxCheckedHoverBorderColor'],
            },

            [`&.${prefixCls}-wrapper:hover .${prefixCls}-checked::after`]: {

            },

            [`.${prefixCls}-checked .${prefixCls}-inner`]: {
                'border-color': token['checkboxCheckedBorderColor'],
            },

            // focus时的效果
            [`.${prefixCls}-checked .${prefixCls}-input:focus + .${prefixCls}-inner`]: {
                'background-color': token['checkboxCheckedFocusBg'],
                'border-color': token['checkboxCheckedBorderColor'],
                'box-shadow': token['checkboxCheckedFocusBoxShadow'],
            },

            [`&.${prefixCls}-wrapper:hover .${prefixCls}-checked.${prefixCls}-disabled .${prefixCls}-inner`]: {
                'background-color': token['checkboxCheckedDisabledBg'],
                'border-color': `${token['checkboxCheckedDisabledBorderColor']} !important`,

                '&::after': {
                    'border-color': token['checkboxCheckedDisabledInnerColor'],
                },
            },
            [`.${prefixCls}-disabled:hover.${prefixCls}-checked .${prefixCls}-inner`]: {
                'background-color': token['checkboxCheckedDisabledBg'],
                'border-color': `${token['checkboxCheckedDisabledBorderColor']} !important`,

                '&::after': {
                    'border-color': token['checkboxCheckedDisabledInnerColor'],
                },
            },
            [`.${prefixCls}-checked.${prefixCls}-disabled .${prefixCls}-inner`]: {
                'background-color': token['checkboxCheckedDisabledBg'],
                'border-color': `${token['checkboxCheckedDisabledBorderColor']} !important`,

                '&::after': {
                    'border-color': token['checkboxCheckedDisabledInnerColor'],
                },
            },
        };

        const halfSelectCss = {
            [`.${prefixCls}-indeterminate .${prefixCls}-inner`]: {
                'background-color': token['themeComponentBg'],
                'border-color': token['themePrimaryColor'],
            },

            // hover
            [`&.${prefixCls}-wrapper:hover .${prefixCls}-indeterminate .${prefixCls}-inner`]: {
                'background-color': token['themeComponentBg'],
                'border-color': token['checkboxCheckedHoverBorderColor'],
            },
            [`.${prefixCls}-indeterminate:hover .${prefixCls}-inner`]: {
                'background-color': token['themeComponentBg'],
                'border-color': token['checkboxCheckedHoverBorderColor'],
            },

            // focus时的效果
            [`.${prefixCls}-indeterminate .${prefixCls}-input:focus + .${prefixCls}-inner`]: {
                'background-color': token['themeComponentBg'],
                'border-color': token['themePrimaryColor'],
                'box-shadow': token['checkboxCheckedFocusBoxShadow'],
            },

            [`&.${prefixCls}-wrapper:hover .${prefixCls}-indeterminate.${prefixCls}-disabled .${prefixCls}-inner`]: {
                'background-color': token['themeComponentBg'],
                'border-color': `${token['checkboxCheckedDisabledBorderColor']} !important`,

                '&::after': {
                    'background-color': token['checkboxCheckedDisabledBorderColor'],
                },
            },
            [`.${prefixCls}-disabled:hover.${prefixCls}-indeterminate .${prefixCls}-inner`]: {
                'background-color': token['themeComponentBg'],
                'border-color': `${token['checkboxCheckedDisabledBorderColor']} !important`,

                '&::after': {
                    'background-color': token['checkboxCheckedDisabledBorderColor'],
                },
            },
            [`.${prefixCls}-indeterminate.${prefixCls}-disabled .${prefixCls}-inner`]: {
                'background-color': token['themeComponentBg'],
                'border-color': `${token['checkboxCheckedDisabledBorderColor']} !important`,

                '&::after': {
                    'background-color': token['checkboxCheckedDisabledBorderColor'],
                },
            },
        };

        return [{
            // // 全局
            // [`.${clsPrefix}`]: globalCss,
            // [`.${clsPrefix}-group .${prefixCls}-group-item`]: globalCss,

            // // 一般状态
            // [`.${clsPrefix}`]: normalCss,
            // [`.${clsPrefix}-group .${prefixCls}-group-item`]: normalCss,

            [`.${clsPrefix}`]: {
                // 全局
                ...globalCss,
                // 一般状态
                ...normalCss,
                // 选中状态
                ...hoverCss,
                // 半选状态
                ...halfSelectCss,
            },
            [`.${clsPrefix}-group .@{ant-prefix}-checkbox-group-item`]: {
                // 全局
                ...globalCss,
                // 一般状态
                ...normalCss,
                // 选中状态
                ...hoverCss,
                // 半选状态
                ...halfSelectCss,
            },

            [`.${clsPrefix}-group .${prefixCls}-group-item`]: {
                'margin-right': token['checkboxGroupItemMarginRight'],
            },

            // 当其他组件内置了checkbox时，进行全局的覆盖
            // Global
            [`.${prefixCls}-indeterminate .${clsPrefix}-checkbox-inner`]: {
                'border-color': token['themePrimaryColor'],
            },
            [`.${prefixCls}-wrapper+.${prefixCls}-wrapper`]: {
                'margin-inline-start': '8px',
            },
        }];
    };

export const useStyle = (
    clsPrefix: string,
    prefixCls: string,
    cssVar: ThemeConfig['cssVar'],
    antPrefix: string
) => {
    const outTheme = useBrandContext();
    const hashed = outTheme.designToken?.hashed;
    const {token: outerToken, theme, hashId} = useToken();

    const [token] = useCacheToken(
        theme as any,
        [
            prepareComponentToken(outerToken),
        ],
        {
            salt: typeof hashed === 'string'
                ? hashed
                : Math.random().toString(36).slice(-8),
            cssVar: cssVar
                ? {
                    prefix: (typeof cssVar === 'object'
                        && typeof cssVar.prefix === 'string')
                        ? cssVar.prefix
                        : antPrefix,
                }
                : undefined,
        }
    );
    const wrapSSROsui = useStyleRegister(
        {
            theme: theme as any,
            token,
            hashId,
            path: [prefixCls],
        },
        () => [
            genCheckboxStyle({
                clsPrefix, prefixCls, token, cssVar,
            }),
        ]
    );
    return wrapSSROsui;
};
