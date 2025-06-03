import type {CSSObject} from '@ant-design/cssinjs';
import {useBrandContext} from '@osui/brand-provider';
import {useStyleRegister, useCacheToken} from '@ant-design/cssinjs';
import {theme, ThemeConfig} from 'antd';

const {useToken} = theme;
type Token = Record<string, string>;

export const prepareComponentToken: (token: any) => any = token => {
    const ret: any = {};
    Object.keys(token).forEach(k => {
        ret[k] = token[k];
    });
    Object.keys(token.collapse || {}).forEach(k => {
        ret[k] = token?.collapse?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

const arrowGap = '28px';

const genContentPadding = (
    token: Token,
    contentPaddingLeft: string,
    gap = '0px'
) => {
    return ({
        'padding-top': token['collapseContentBoxPaddingTop'],
        'padding-bottom': token['collapseContentBoxPaddingBottom'],
        'padding-left': `calc(${contentPaddingLeft} + ${gap})`,
    });
};

const nest = (
    token: Token,
    level: number,
    contentPadding: string,
    clsPrefix: string,
    prefixCls: string
) => ({
    [`.${clsPrefix}-level-${level}`]: {
        [`.${prefixCls}:not(.${prefixCls}-ghost)`]: {
            'border-top': 0,
            'border-right': 0,
            'border-left': 0,

            [`> .${prefixCls}-item:last-child`]: {
                'border-bottom': 0,
            },
        },

        [`&.${prefixCls}-item > .${prefixCls}-content > .${prefixCls}-content-box`]: {
            'padding': '0 !important',
        },

        [`.${clsPrefix}-level-child`]: {
            [`.${prefixCls}-item > .${prefixCls}-content > .${prefixCls}-content-box`]: {
                ...genContentPadding(token, contentPadding, arrowGap),
            },
            [`.${prefixCls}-header`]: {
                'padding-left': `${contentPadding} !important`,
            },
        },
    },
});

export const genCollapseStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
}) => CSSObject[] =
    ({clsPrefix, prefixCls, token}) => {
        return [{
            [`.${clsPrefix}`]: {
                [`&:not(.${prefixCls}-ghost)`]: {
                    [`&.${prefixCls}`]: {
                        'background': token['collapseBg'],
                        'border': token['collapseBorderColor'],
                    },
                    [`&.${prefixCls} > .${prefixCls}-item`]: {
                        'background': token['collapseBg'],
                        'border-bottom': token['collapseBorderColor'],
                    },
                    [`.${prefixCls}-content`]: {
                        'border-top': token['collapseBorderColor'],
                    },
                },
                [`.${prefixCls}-item`]: {
                    [`.${prefixCls}-header`]: {
                        'display': 'flex',
                        'align-items': 'center',
                        'height': token['collapseHeaderHeight'],
                        'margin-top': token['collpaseItemHeaderMarginBottom'],
                        'padding-top': 0,
                        'padding-bottom': 0,
                        'color': token['themeTextColor'],
                        'font-weight': token['collapseHeaderFontWeight'],
                        'font-size': token['collapseHeaderFontSize'],
                        'line-height': token['collapseHeaderHeight'],
                        'background': token['collapseHeaderBg'],

                        '.icon-wrapper': {
                            'top': 'auto',
                            'width': '16px',
                            'height': '16px',
                            'color': token['collapseExpandIconColor'],
                            'line-height': 0,
                            'background': token['collapseExpandIconBg'],
                            'border-radius': '50%',
                        },
                    },
                },

                [`.${prefixCls}-item.${prefixCls}-item-disabled`]: {
                    [`.${prefixCls}-header`]: {
                        'background-color': token['collapseHeaderBg'],
                        'color': token['collapseDisabledColor'],
                    },
                    [`.${prefixCls}-arrow`]: {
                        'color': token['collapseDisabledColor'],
                    },
                },
                [`.${prefixCls}-item > .${prefixCls}-content > .${prefixCls}-content-box`]: {
                    ...genContentPadding(token, '40px'),
                },

                ...nest(token, 1, '40px', clsPrefix, prefixCls),
                ...nest(token, 2, '68px', clsPrefix, prefixCls),
            },


            [`.${prefixCls}>.${prefixCls}-item >.${prefixCls}-header. ${prefixCls}-expand-icon`]: {
                'margin-inline-start': 0,
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
            genCollapseStyle({
                clsPrefix, prefixCls, token, cssVar,
            }),
        ]
    );
    return wrapSSROsui;
};
