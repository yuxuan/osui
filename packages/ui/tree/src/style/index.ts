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
    Object.keys(token.Tree || {}).forEach(k => {
        ret[k] = token?.Tree?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

export const genTreeStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
    antPrefix: string;
}) => CSSObject[] =
    ({clsPrefix, prefixCls, token, antPrefix}) => {
        return [{
            [`.${clsPrefix}`]: {
                [`.${prefixCls}-node-content-wrapper.${prefixCls}-node-selected`]: {
                    'background-color': `${token['treeNodeSelectedBg']} !important`,
                },

                [`.${prefixCls}-checkbox+span.${prefixCls}-node-selected`]: {
                    'background-color': `${token['treeNodeSelectedBg']} !important`,
                },

                [`.${prefixCls}-node-selected`]: {
                    [`.${prefixCls}-title`]: {
                        'color': token['themePrimaryColor'],
                    },

                    '&:hover': {
                        'background-color': `${token['colorBrand1']} !important`,
                    },

                    '&:active': {
                        'background-color': `${token['colorBrand2']} !important`,
                    },
                },

                '&-small': {
                    'font-size': 12,
                    'line-height': '24px',

                    [`.${prefixCls}-switcher`]: {
                        'line-height': '24px',
                    },

                    [`.${prefixCls}-node-content-wrapper`]: {
                        'line-height': '24px',
                    },
                },

                '&-middle': {
                    'font-size': 14,
                    'line-height': 30,

                    [`.${prefixCls}-switcher`]: {
                        'line-height': '30px',
                    },

                    [`.${prefixCls}-node-content-wrapper`]: {
                        'line-height': '30px',
                    },
                },

                '&-large': {
                    'font-size': 14,
                    'line-height': '40px',

                    [`.${prefixCls}-switcher`]: {
                        'line-height': '40px',
                    },

                    [`.${prefixCls}-node-content-wrapper`]: {
                        'line-height': '40px',
                    },
                },

                // == 调整 switcher icon ==
                [`span.${prefixCls}-switcher .${prefixCls}-switcher-icon`]: {
                    'display': 'inline-flex',
                    'align-items': 'center',
                    'justify-content': 'center',
                    'height': '100%',
                },

                [`span.${prefixCls}-switcher .${antPrefix}-select-tree-switcher-icon`]: {
                    'display': 'inline-flex',
                    'align-items': 'center',
                    'justify-content': 'center',
                    'height': '100%',
                },

                [`.${prefixCls}-switcher`]: {
                    'width': token['treeSwitcherWidth'],
                },

                [`svg.${clsPrefix}-switcherIcon`]: {
                    'width': 14,
                    'height': 14,
                    'color': token['themeIconColor'],
                },

                [`&.${prefixCls} .${prefixCls}-node-content-wrapper`]: {
                    'margin': '0 10px',
                },

                [`&.${prefixCls} .${prefixCls}-treenode`]: {
                    'padding-bottom': 0,
                },

                // == 调整tree node的点击效果 ==
                [`.${prefixCls}-node-content-wrapper`]: {
                    [`&:not(.${prefixCls}-node-selected)`]: {
                        '&:active': {
                            'background-color': token['colorBrand2'],
                        },
                    },
                },

                // unselectable 时的treenode效果
                [`&.${prefixCls}-unselectable .${prefixCls}-treenode`]: {
                    [`.${prefixCls}-node-content-wrapper`]: {
                        'background-color': 'transparent',
                        'cursor': 'not-allowed',

                        '&:hover': {
                            'background-color': 'transparent',
                        },

                        '&:active': {
                            'background-color': 'transparent',
                        },
                    },
                },
                [`.${prefixCls}-treenode-disabled`]: {
                    [`.${prefixCls}-node-content-wrapper`]: {
                        'background-color': 'transparent',
                        'cursor': 'not-allowed',

                        '&:hover': {
                            'background-color': 'transparent',
                        },

                        '&:active': {
                            'background-color': 'transparent',
                        },
                    },
                },

                [`.${clsPrefix}-tree-node-unselectable`]: {
                    [`.${prefixCls}-node-content-wrapper`]: {
                        'background-color': 'transparent',
                        'cursor': 'not-allowed',

                        '&:hover': {
                            'background-color': 'transparent',
                        },

                        '&:active': {
                            'background-color': 'transparent',
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
            genTreeStyle({
                clsPrefix, prefixCls, token, cssVar, antPrefix,
            }),
        ]
    );
    return wrapSSROsui;
};
