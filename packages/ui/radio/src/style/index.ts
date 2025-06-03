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
    Object.keys(token.Radio || {}).forEach(k => {
        ret[k] = token?.Radio?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

export const genRadioStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
}) => CSSObject[] =
    ({clsPrefix, prefixCls, token}) => {
        return [{
            [`.${clsPrefix}`]: {
                [`&.${prefixCls}-wrapper`]: {
                    'margin-right': token['radioWrapperMarginRight'],
                },

                [`span.${prefixCls} + *`]: {
                    'padding-right': token['radioSpanPaddingHorizontal'],
                    'padding-left': token['radioSpanPaddingHorizontal'],
                },

                [`.${prefixCls}-inner`]: {
                    'border-color': token['radioBorderColor'],
                },

                [`.${prefixCls}-checked .${prefixCls}-inner`]: {
                    'border-color': token['themePrimaryColor'],
                    'background-color': token['radioButtonBg'],

                    '&::after': {
                        'background-color': token['radioDotColor'],
                        'transform': 'scale(.5)',
                    },
                },

                // 没选中时hover的效果
                [`.${prefixCls}-wrapper:hover .${prefixCls}`]: {
                    'background': token['radioHoverBg'],
                    'border-color': token['radioHoverBorderColor'],
                },

                [`.${prefixCls}:hover .${prefixCls}-inner`]: {
                    'background': token['radioHoverBg'],
                    'border-color': token['radioHoverBorderColor'],
                },

                // checked时hover border的颜色
                [`.${prefixCls}-wrapper:active. ${prefixCls}`]: {
                    'background': token['radioHoverBg'],
                    'border-color': token['radioActiveBorderColor'],
                },

                [`.${prefixCls}:active .${prefixCls}-inner`]: {
                    'background': token['radioHoverBg'],
                    'border-color': token['radioActiveBorderColor'],
                },

                // checked时hover border的颜色
                [`.${prefixCls}-wrapper:hover .${prefixCls}-checked.${prefixCls}`]: {
                    'border-color': token['radioCheckedColor'],
                },

                [`.${prefixCls}-checked.${prefixCls}:hover .${prefixCls}-inner`]: {
                    'border-color': token['radioCheckedColor'],
                },

                // checked时hover border的颜色
                [`.${prefixCls}-checked:not(.${prefixCls}-disabled):hover::after`]: {
                    'border-color': token['radioCheckedColor'],
                },

                // checked时hover里面点的颜色
                [`.${prefixCls}-checked:not(.${prefixCls}-disabled):hover .${prefixCls}-inner::after`]: {
                    'background-color': token['radioCheckedColor'],
                },

                // disable时hover的效果
                [`.${prefixCls}-disabled:hover .${prefixCls}-inner`]: {
                    'background-color': token['radioDisabledBg'],
                    'border-color': `${token['radioDisabledBorderColor']} !important`,
                },

                [`.${prefixCls}-disabled .${prefixCls}-inner`]: {
                    'background-color': token['radioDisabledBg'],
                    'border-color': `${token['radioDisabledBorderColor']} !important`,
                },

                [`.${prefixCls}-button-disabled`]: {
                    'background-color': token['radioDisabledBg'],
                    'border-color': `${token['radioDisabledBorderColor']} !important`,
                },

                // disable时checked的效果
                [`.${prefixCls}-disabled .${prefixCls}-inner::after`]: {
                    'background-color': token['radioDisabledDotColor'],
                },

                [`.${prefixCls}-disabled.${prefixCls}-checked .${prefixCls}-inner`]: {
                    'border-color': `${token['radioButtonCheckedDisabledBorderColor']} !important`,
                },

                [`.${prefixCls}-disabled.${prefixCls}-checked::after`]: {
                    'border-color': `${token['radioButtonCheckedDisabledBorderColor']} !important`,
                },

                [`.${prefixCls}.${prefixCls}-checked:not(.${prefixCls}-disabled):focus .${prefixCls}-inner`]: {
                    'box-shadow': token['themeComponentFocusBoxShadow'],
                },

                [`.${prefixCls}-input:focus + .${prefixCls}-inner`]: {
                    'box-shadow': 'none',
                },

                // 去除动画
                [`.${prefixCls}-checked .${prefixCls}-inner::after`]: {
                    'transition': 'none',
                },

                [`.${prefixCls}-inner::after`]: {
                    'transition': 'none',
                },

                [`.${prefixCls}-checked::after`]: {
                    'animation': 'none',
                },

                // group
                '&-group': {
                    [`.${prefixCls}-button-wrapper`]: {
                        [`&:not(.${prefixCls}-button-wrapper-disabled):not(.${prefixCls}-button-wrapper-checked)`]: {
                            '&:hover': {
                                // 这里是hover时左侧border的颜色，osui需要与button边框颜色一致，而icloud需要变色
                                'z-index': token['radioHoverBorderZindex'],
                                'border': `1px solid ${token['radioHoverBorderColor']}`,
                                'border-left': 0,

                                '&::before': {
                                    'background': token['radioHoverBorderColor'],
                                },
                            },
                        },
                    },

                    // 第一个元素默认border-left和hover的效果
                    [`.${prefixCls}-button-wrapper:first-child`]: {
                        [`&:not(.${prefixCls}-button-wrapper-disabled):not(.${prefixCls}-button-wrapper-checked)`]: {
                            'border-left': `1px solid ${token['themeBorderColorBase']}`,

                            '&:hover': {
                                'border-left': `1px solid ${token['radioHoverBorderColor']}`,
                            },
                        },
                    },

                    [`.${prefixCls}-button-wrapper-disabled`]: {
                        'color': token['radioButtonDisabledColor'],
                        'background': token['radioButtonDisabledBg'],
                        'border-color': token['radioButtonDisabledBorderColor'],
                    },

                    [`.${prefixCls}-button-wrapper-disabled.${prefixCls}-button-wrapper-checked`]: {
                        'color': token['radioButtonCheckedDisabledColor'], // 这个颜色没有在色盘里面
                        'background': token['radioButtonCheckedDisabledBg'],
                        'border-color': token['radioButtonCheckedDisabledBorderColor'],
                    },

                    [`.${prefixCls}-button-wrapper-checked:not(.${prefixCls}-button-wrapper-disabled):focus-within`]: {
                        'box-shadow': 'none',
                    },
                },

                [`.${prefixCls}`]: {
                    'top': token['radioTop'],
                },
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
            genRadioStyle({
                clsPrefix, prefixCls, token, cssVar,
            }),
        ]
    );
    return wrapSSROsui;
};
