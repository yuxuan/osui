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
    Object.keys(token.Tabs || {}).forEach(k => {
        ret[k] = token?.Tabs?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

export const genTabsStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
    antPrefix: string;
}) => CSSObject[] =
    ({clsPrefix, prefixCls, token, antPrefix}) => {
        return [{
            [`.${clsPrefix}`]: {
                [`&.${prefixCls}-top > .${prefixCls}-nav::before`]: {
                    'border-bottom': token['tabsBorderBottom'],
                },
                [`.${prefixCls}-nav-list`]: {
                    'color': token['tabsTabColor'],

                    [`.${prefixCls}-tab`]: {
                        'display': 'flex',

                        '&-btn': {
                            'display': 'flex',
                        },
                    },
                },

                [`.${prefixCls}-tab.${antPrefix}icon`]: {
                    'margin-right': 4,
                },

                [`.${prefixCls}-tab.${prefixCls}-tab-active .${prefixCls}-tab-btn`]: {
                    'font-weight': 'normal',
                    'font-family': 'PingFangSC-Medium',
                    'text-shadow': 'none',

                    'em.num': {
                        'color': token['linkColor'],
                        'background': token['colorBrand1'],
                    },
                },

                [`.${prefixCls}-tab .${prefixCls}-tab-btn`]: {
                    'em.num': {
                        'display': 'inline-block',
                        'width': 25,
                        'height': 20,
                        'margin-left': 5,
                        'color': token['tabsTabColor'],
                        'font-size': 12,
                        'font-style': 'normal',
                        'line-height': '20px',
                        'text-align': 'center',
                        'background': token['colorGray3'],
                        'border-radius': '10px',
                    },

                    '&:hover': {
                        'em.num': {
                            'color': token['linkColor'],
                            'background': token['colorBrand1'],
                        },
                    },
                },

                [`.${prefixCls}-tab + .${prefixCls}-tab`]: {
                    'margin': token['tabsTabHorizontalMargin'],
                },

                [`.${prefixCls}-tab`]: {
                    'margin': 0,
                },

                // card 模式 // 以下覆盖没有考虑osc的样式
                [`&.${prefixCls}-card`]: {
                    [`&.${prefixCls} > .${prefixCls}-nav`]: {
                        'background': token['tabsCardBg'],
                    },

                    [`&.${prefixCls} > div > .${prefixCls}-nav`]: {
                        'background': token['tabsCardBg'],
                    },

                    [`.${prefixCls}-nav-list`]: {
                        'padding': token['tabsCardNavListPadding'],
                    },

                    [`& > .${prefixCls}-nav .${prefixCls}-tab`]: {
                        'border': token['colorGray3'],

                        [`&.${prefixCls}-tab-active`]: {
                            'border-bottom': '1px solid transparent',
                        },

                        [`&:not.${prefixCls}-tabs-tab-active`]: {
                            'background': token['colorGray3'],
                            'border-bottom': token['tabsBorderBottom'],
                        },
                    },

                    [`& > div > .${prefixCls}-nav .${prefixCls}-tab`]: {
                        'border': token['colorGray3'],

                        [`&.${prefixCls}-tab-active`]: {
                            'border-bottom': '1px solid transparent',
                        },

                        [`&:not.${prefixCls}-tabs-tab-active`]: {
                            'background': token['colorGray3'],
                            'border-bottom': token['tabsBorderBottom'],
                        },
                    },

                    [`.${prefixCls}-tab.${prefixCls}-tab-with-remove`]: {
                        'button': {
                            'margin-left': 0,
                            'padding-right': 0,
                            'padding-left': 10,
                        },
                    },

                    [`.${prefixCls}-nav-add`]: {
                        'align-self': 'center',
                        'width': '30px',
                        'min-width': '30px',
                        'height': '30px',
                        'color': token['colorGray8'],
                        'background': token['colorGray3'],
                        'border': `1px solid  ${token['colorGray6']}`,
                    },

                    [`&.${prefixCls}-editable`]: {
                        [`.${prefixCls}-tab-remove`]: {
                            'display': 'inline-flex',
                            'align-items': 'center',
                            'color': token['tagIconColor'],
                        },

                        [`.${prefixCls}-nav-add`]: {
                            'display': 'inline-flex',
                            'align-items': 'center',
                            'color': token['themeTextColor'],
                        },
                    },
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
            genTabsStyle({
                clsPrefix, prefixCls, token, cssVar, antPrefix,
            }),
        ]
    );
    return wrapSSROsui;
};
