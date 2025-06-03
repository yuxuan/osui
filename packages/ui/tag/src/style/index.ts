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
    Object.keys(token.Tag || {}).forEach(k => {
        ret[k] = token?.Tag?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

export const genTagStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
}) => CSSObject[] =
    ({clsPrefix, prefixCls, token}) => {
        return [{
            [`.${clsPrefix}.${prefixCls}`]: {
                'padding': token['tagPadding'],
                'border': '1px solid transparent',
                'border-radius': token['tagBorderRadius'],

                [`&.${prefixCls} > .anticon + span`]: {
                    'margin-left': '4px',
                },

                [`&.${prefixCls} > span + .anticon`]: {
                    'margin-left': '4px',
                },

                [`&.${prefixCls} > .osui-icon + span`]: {
                    'margin-left': '4px',
                },

                [`&.${prefixCls} > span + .osui-icon`]: {
                    'margin-left': '4px',
                },

                ' > svg.osui-icon': {
                    'height': '12px',
                    'margin-right': token['tagIconMaringHorizontal'],
                    'color': token['tagIconColor'],
                    'font-size': '12px',
                },

                '&:hover': {
                    'background': token['tagDefaultHoverBg'],
                },

                [`.${prefixCls}-close-icon`]: {
                    'margin-left': '4px',
                    'color': token['tagIconColor'],
                    'line-height': '14px',
                    'vertical-align': 'middle',

                    'svg.osui-icon': {
                        'height': '12px',
                    },
                },

                [`&.${clsPrefix}-blue`]: {
                    'color': token['tagBlueFontColor'],
                    'background': token['tagBlueBgColor'],

                    [`&.${clsPrefix}-solid`]: {
                        'color': token['themeComponentBg'],
                        'background': token['tagBlueSolidBgColor'],
                    },

                    [`&.${clsPrefix}-outlined`]: {
                        'background': token['themeComponentBg'],
                        'border-color': token['tagBlueFontColor'],
                    },
                },

                [`&.${clsPrefix}-green`]: {
                    'color': token['tagGreenFontColor'],
                    'background': token['tagGreenBgColor'],

                    [`&.${clsPrefix}-solid`]: {
                        'color': token['themeComponentBg'],
                        'background': token['tagGreenSolidBgColor'],
                    },

                    [`&.${clsPrefix}-outlined`]: {
                        'background': token['themeComponentBg'],
                        'border-color': token['tagGreenFontColor'],
                    },
                },

                [`&.${clsPrefix}-red`]: {
                    'color': token['tagRedFontColor'],
                    'background': token['tagRedBgColor'],

                    [`&.${clsPrefix}-solid`]: {
                        'color': token['themeComponentBg'],
                        'background': token['tagRedSolidBgColor'],
                    },

                    [`&.${clsPrefix}-outlined`]: {
                        'background': token['themeComponentBg'],
                        'border-color': token['tagRedFontColor'],
                    },
                },

                [`&.${clsPrefix}-yellow`]: {
                    'color': token['tagYellowFontColor'],
                    'background': token['tagYellowBgColor'],
                    [`&.${clsPrefix}-solid`]: {
                        'color': token['themeComponentBg'],
                        'background': token['tagYellowSolidBgColor'],
                    },
                    [`&.${clsPrefix}-outlined`]: {
                        'background': token['themeComponentBg'],
                        'border-color': token['tagYellowFontColor'],
                    },
                },

                [`&.${clsPrefix}-purple`]: {
                    'color': token['colorPurple6'],
                    'background': token['tagPurpleColor'],

                    [`&.${clsPrefix}-outlined`]: {
                        'background': token['themeComponentBg'],
                        'border-color': token['colorPurple6'],
                    },
                },

                [`&.${clsPrefix}-disabled`]: {
                    [`&.${clsPrefix}-outlined`]: {
                        'color': token['themeDisabledColor'],
                        'background': token['themeComponentBg'],
                        'border-color': token['themeDisabledColor'],
                    },

                    [`&.${clsPrefix}-solid`]: {
                        'color': token['themeDisabledColor'],
                    },
                },
            },

            [`.${clsPrefix}-checkable`]: {
                'color': token['textColor'],
                'background': token['tagDefaultBg'],
                'border': '1px solid transparent',
                'border-radius': token['tagBorderRadius'],

                [`&:not(.${prefixCls}-checkable-checked):hover`]: {
                    'color': token['textColor'],
                },

                [`&.${prefixCls}`]: {
                    'transition': 'none',
                },

                [`&.${prefixCls}-checkable-checked`]: {
                    'color': token['textColorInverse'],
                    'background': token['themePrimaryColor'],
                    'border': '1px solid transparent',
                    'transition': 'none',

                    '&:hover': {
                        'background': token['themePrimaryColorHover'],
                    },
                },
            },

            /* 边框虚线示例 */
            [`.${clsPrefix}-dome-dashed.${prefixCls}`]: {
                'background': '#fff',
                'border': '1px solid rgba(218, 222, 227, 1)',
                'border-style': 'dashed',

                '&:hover': {
                    'background': token['colorGray3'],
                },
            },

            [`.${clsPrefix}-round`]: {
                [`&.${prefixCls}`]: {
                    'height': '24px',
                    'padding': '0 8px',
                    'line-height': '24px',
                    'border-radius': '14px',
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
            genTagStyle({
                clsPrefix, prefixCls, token, cssVar,
            }),
        ]
    );
    return wrapSSROsui;
};
