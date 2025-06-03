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
    Object.keys(token.Popover || {}).forEach(k => {
        ret[k] = token?.Popover?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

export const genPopoverStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
}) => CSSObject[] =
    ({clsPrefix, prefixCls, token}) => {
        return [{
            [`.${clsPrefix}`]: {
                'color': token['themeTextColor'],
                'font-size': token['popoverFontSize'],
                'line-height': token['popoverLineHeight'],

                [`.${prefixCls}-inner`]: {
                    'padding': 0,
                },

                [`.${prefixCls}-content`]: {
                    'max-width': 400,
                    'word-break': 'break-all',

                    [`.${prefixCls}-arrow-content`]: {
                        // ref: https://github.com/ant-design/ant-design/pull/33710
                        'box-shadow': token['tooltipArrowContentBoxShadow'],
                    },
                },

                [`.${prefixCls}-title`]: {
                    'padding': token['popoverTitlePadding'],
                    'font-size': 16,
                    'border': 'none',

                    [`& + .${prefixCls}-inner-content`]: {
                        'padding': token['popoverTitlePadding'],
                        'padding-top': 0,
                        'padding-bottom': 16,
                    },
                },

                [`.${prefixCls}-inner-content`]: {
                    'padding': token['popoverInnerContentPadding'],
                    'color': token['themeTextColor'],
                },

                [`.${clsPrefix}-close-icon`]: {
                    'float': 'right',
                    'height': 14,
                    'color': token['themeIconColor'],
                    'cursor': 'pointer',
                },
            },

            // 当其他组件内置了tooltip是，全局覆盖
            // Global
            [`.${prefixCls}-arrow-content`]: {
                'box-shadow': `${token['tooltipArrowContentBoxShadownone']} !important`,
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
            genPopoverStyle({
                clsPrefix, prefixCls, token, cssVar,
            }),
        ]
    );
    return wrapSSROsui;
};
