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
    Object.keys(token.Pagination || {}).forEach(k => {
        ret[k] = token?.Pagination?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

export const genPaginationStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
    antPrefix: string;
}) => CSSObject[] =
    ({clsPrefix, prefixCls, token, antPrefix}) => {
        const commonStyle = {
            'line-height': '1.5',
            position: 'relative',
            'display': 'inline-block',
            'font-weight': '400',
            'white-space': 'nowrap',
            'text-align': 'center',
            'background-image': 'none',
            'border': '1px solid transparent',
            'transition': 'all .3s cubic-bezier(.645, .045, .355, 1)',
            'user-select': 'none',
            'touch-action': 'manipulation',
            'height': '32px',
            'padding': '6px 11px',
            'font-size': '12px',
            'border-radius': token['btnBorderRadiusBase'],
            'color': token['btnDefaultColor'],
            'border-color': token['btnDefaultBorderColor'],
            'box-shadow': '0 2px 0 rgba(0, 0, 0, 0)',
            'margin-left': '-9px',
            'border-top-left-radius': 0,
            'border-bottom-left-radius': 0,

            '&:hover': {
                'color': token['btnDefaultHoverColor'],
                'border-color': token['btnDefaultHoverBorderColor'],
                'cursor': 'not-allowed',
            },
            '&:active': {
                'color': token['btnDefaultHoverColor'],
                'border-color': token['btnDefaultHoverBorderColor'],
                'cursor': 'not-allowed',
            },
            '&[disabled]': {
                'border': ` 1px solid ${token['themeBorderColorDisabled']}`,
                'color': token['btnDefaultDisableColor'],
                'background': token['btnDefaultDisableBg'],
            },

            '&:not([disabled])': {
                'cursor': 'pointer',
                'background': token['btnDefaultBg'],
            },
        } as const;

        return [{
            [`.${clsPrefix}`]: {
                [`.${prefixCls}-item`]: {
                    'margin-right': token['paginationItemMarginRight'],
                    'border': `1px solid  ${token['paginationItemBorderColor']}`,

                    '&:hover': {
                        'background-color': token['paginationItemHoverBg'],

                        'a': {
                            'color': token['paginationItemHoverColor'],
                        },
                    },
                },

                [`.${prefixCls}-total-text`]: {
                    'color': token['paginationPrevNextIconColor'],
                },

                [`.${prefixCls}-options-quick-jumper`]: {
                    'color': token['paginationPrevNextIconColor'],
                },

                [`.${prefixCls}-next`]: {
                    'display': 'inline-flex',
                    'align-items': 'center',
                    'justify-content': 'center',
                    'margin-right': token['paginationItemMarginRight'],
                    'border': token['paginationPrevNextBorder'],

                    '&:hover': {
                        'svg': {
                            'color': token['themePrimaryColorHover'],
                        },
                    },

                    '&:active': {
                        'svg': {
                            'color': token['themePrimaryColorActive'],
                        },
                    },

                    'svg': {
                        'color': token['paginationPrevNextIconColor'],
                    },

                    [`&.${prefixCls}-disabled`]: {
                        'svg': {
                            'color': token['paginationPrevNextIconColorDisabled'],
                        },
                    },
                },

                [`.${prefixCls}-prev`]: {
                    'display': 'inline-flex',
                    'align-items': 'center',
                    'justify-content': 'center',
                    'margin-right': token['paginationItemMarginRight'],
                    'border': token['paginationPrevNextBorder'],

                    '&:hover': {
                        'svg': {
                            'color': token['themePrimaryColorHover'],
                        },
                    },

                    '&:active': {
                        'svg': {
                            'color': token['themePrimaryColorActive'],
                        },
                    },

                    'svg': {
                        'color': token['paginationPrevNextIconColor'],
                    },

                    [`&.${prefixCls}-disabled`]: {
                        'svg': {
                            'color': token['paginationPrevNextIconColorDisabled'],
                        },
                    },
                },

                [`.${prefixCls}-item-active`]: {
                    'background': token['paginationItemActiveBg'],
                    'border-color': token['paginationItemActiveBorderColor'],

                    'a': {
                        'color': token['paginationItemActiveColor'],
                    },
                },

                [`.${prefixCls}-item-active:hover`]: {
                    'background': token['paginationItemActiveBg'],
                    'border-color': token['paginationItemActiveBorderColor'],

                    'a': {
                        'color': token['paginationItemActiveColor'],
                    },
                },

                // ============================ Disabled ============================
                [`&.${prefixCls}-disabled`]: {
                    [`.${prefixCls}-item`]: {
                        'color': token['themeDisabledColor'],
                        'background': token['paginationDisabledBg'],
                        'border': `1px solid  ${token['paginationItemDisabledBorderColor']}`,
                        'cursor': 'not-allowed',

                        'svg': {
                            'color': token['paginationPrevNextIconColorDisabled'],
                        },

                        '&:hover': {
                            'background-color': token['paginationDisabledBg'],

                            'a': {
                                'color': token['themeDisabledColor'],
                            },
                        },
                    },
                    [`.${prefixCls}-next`]: {
                        'color': token['themeDisabledColor'],
                        'background': token['paginationDisabledBg'],
                        'border': `1px solid  ${token['paginationItemDisabledBorderColor']}`,
                        'cursor': 'not-allowed',

                        'svg': {
                            'color': token['paginationPrevNextIconColorDisabled'],
                        },

                        '&:hover': {
                            'background-color': token['paginationDisabledBg'],
                            'a': {
                                'color': token['themeDisabledColor'],
                            },
                        },
                    },
                    [`.${prefixCls}-prev`]: {
                        'color': token['themeDisabledColor'],
                        'background': token['paginationDisabledBg'],
                        'border': `1px solid  ${token['paginationItemDisabledBorderColor']}`,
                        'cursor': 'not-allowed',

                        'svg': {
                            'color': token['paginationPrevNextIconColorDisabled'],
                        },

                        '&:hover': {
                            'background-color': token['paginationDisabledBg'],
                            'a': {
                                'color': token['themeDisabledColor'],
                            },
                        },
                    },
                    [`.${prefixCls}-item-active`]: {
                        'border-color': token['themeDisabledColor'],

                        'a': {
                            'color': token['themeDisabledColor'],
                        },
                    },
                    [`.${prefixCls}-item-active:hover`]: {
                        'border-color': token['themeDisabledColor'],

                        'a': {
                            'color': token['themeDisabledColor'],
                        },
                    },
                },

                [`.${prefixCls}-simple-pager`]: {
                    'input': {
                        'width': '48px',
                        'height': '22px',
                    },

                    [`.${prefixCls}-slash`]: {
                        'margin': '0 16px',
                    },
                },

                [`.${prefixCls}-simple`]: {
                    [`.${prefixCls}-prev`]: {
                        'border': 'none',
                    },

                    [`.${prefixCls}-next`]: {
                        'border': 'none',
                    },
                },

                '.mini': {
                    [`.${prefixCls}-prev`]: {
                        'border': 'none',
                    },
                    [`.${prefixCls}-next`]: {
                        'border': 'none',
                    },
                },

                [`&.${prefixCls}-disabled .${prefixCls}-item.${prefixCls}-item-active`]: {
                    'color': token['themeDisabledColor'],
                    'background': token['themeDisabledBg'],
                    'border-color': token['themeBorderColorDisabled'],
                },

                // eslint-disable-next-line max-len
                [`.${antPrefix}-select-disabled.${antPrefix}-select:not(.${antPrefix}-select-customize-input) .${antPrefix}-select-selector`]: {
                    'color': token['themeDisabledColor'],
                    'background': token['themeDisabledBg'],
                    'border-color': token['themeBorderColorDisabled'],
                },

                [`.${prefixCls}-options-quick-jumper input[disabled]`]: {
                    'color': token['themeDisabledColor'],
                    'background': token['themeDisabledBg'],
                    'border-color': token['themeBorderColorDisabled'],
                },

                '&.showQuickJumper': {
                    '&:not(.showSizeChanger)': {
                        [`.${prefixCls}-options`]: {
                            'margin-inline-start': 0,
                        },
                    },

                },

                // eslint-disable-next-line max-len
                [`.${antPrefix}-select-single:not(.${antPrefix}-select-customize-input) .${antPrefix}-select-selector`]: {
                    'padding': '0 8px',
                },

                [`.${antPrefix}-select-single.${antPrefix}-select-show-arrow .${antPrefix}-select-selection-item`]: {
                    'padding-right': '23px',
                },

                // eslint-disable-next-line max-len
                [`.${antPrefix}-select-single.${antPrefix}-select-show-arrow .${antPrefix}-select-selection-placeholder`]: {
                    'padding-right': '23px',
                },

                // Go button 样式
                [`.${prefixCls}-options-quick-jumper`]: {
                    display: 'inline-flex',
                    'margin-left': `${token['pagination-quick-jumper-margin-left']}  0`,

                    input: {
                        '&:focus': {
                            'z-index': '2',
                        },
                        '&:hover': {
                            'z-index': '2',
                        },

                        'border-top-right-radius': 0,
                        'border-bottom-right-radius': 0,
                        margin: '0 8px',
                        padding: '6px 12px',
                    },
                },

                [`.${prefixCls}-options-quick-jumper .${clsPrefix}-go-button`]: commonStyle,
                [`.${prefixCls}-options-quick-jumper .${prefixCls}-options-quick-jumper-button`]: commonStyle,
                [`.${prefixCls}-simple-pager button`]: commonStyle,

                [`.${prefixCls}-single.${prefixCls}-show-arrow .${prefixCls}-selection-item`]: {
                    'padding-inline-end': '23px',
                },

                [`&.showQuickJumper .${prefixCls}`]: {
                    'padding-right': '133px',
                },

                [`&.simple-showQuickJumper .${prefixCls}`]: {
                    'padding-right': '100px',
                },

                // [`&.showSizeChanger .${prefixCls}`]: {
                //     "padding-left": "92px"
                // },

                // 调整分页期 sizeChanger 和 jumper 位置
                [`.${prefixCls}`]: {
                    'display': 'inline-flex',
                    'position': 'relative',
                    'align-items': 'center',

                    [`&.${prefixCls}-mini`]: {
                        // "padding-left": "87px",

                        [`.${prefixCls}-options-quick-jumper`]: {
                            'align-items': 'center',

                            [`.${prefixCls}-options-quick-jumper-button`]: {
                                'height': '24px',
                                'padding': '2px 11px',
                            },
                        },

                        [`.${prefixCls}-options-quick-jumper input`]: {
                            'padding': '6px 12px',
                            'width': '50px',
                            'height': '32px',
                        },
                    },

                    [`.${prefixCls}-total-text`]: {
                        'order': -12,
                    },

                    [`.${prefixCls}-options`]: {
                        'order': -10,
                        // "position": "absolute",
                        // "left": 0,
                        // "right": 0,
                        'display': 'flex',
                        'justify-content': 'space-between',
                        'align-items': 'center',
                        'margin-inline-start': '5px',

                        [`.${prefixCls}-options-quick-jumper`]: {
                            position: 'absolute',
                            right: 0,
                        },
                    },

                    [`.${prefixCls}-item`]: {
                        'z-index': '99',
                    },

                    [`.${prefixCls}-prev`]: {
                        'z-index': '99',
                    },

                    [`.${antPrefix}t-pagination-next`]: {
                        'z-index': '99',
                    },

                    [`&.${prefixCls}-simple`]: {
                        'height': '32px',
                        'padding-right': 143,

                        [`.${prefixCls}-prev`]: {
                            'height': '32px',
                        },

                        [`.${prefixCls}-next`]: {
                            'height': '32px',
                        },

                        [`.${prefixCls}-simple-pager`]: {
                            'height': '32px',
                        },

                        [`.${prefixCls}-simple-pager button`]: {
                            'margin-inline-start': 0,
                        },
                    },

                    [`&.${prefixCls}-disabled .${prefixCls}-item.${prefixCls}-item-active`]: {
                        'color': token['themeDisabledColor'],
                        'background': token['themeDisabledBg'],
                        'border-color': token['themeBorderColorDisabled'],
                    },

                    [`.${prefixCls}-jump-prev`]: {
                        'margin-right': '8px',
                    },

                    [`.${prefixCls}-jump-next`]: {
                        'margin-right': '8px',
                    },
                },
                '&.showQuickJumper:not(.showSizeChanger)': {
                    [`.${prefixCls}-options`]: {
                        'justify-content': 'flex-end',
                    },
                },

                [`.${antPrefix}-select-dropdown`]: {
                    [`.${antPrefix}-select-item-option-selected:not(.${antPrefix}-select-item-option-disabled)`]: {
                        'background-color': 'transparent',
                        'color': token['selectItemSelectedColor'],
                    },

                    [`.${antPrefix}-select-item`]: {
                        'padding': '1px 12px',
                        'line-height': '32px',
                    },

                    [`.${antPrefix}-select-item-option-active`]: {
                        'background-color': token['selectItemActiveBg'],
                    },

                    [`.${antPrefix}-select-item:not(.${antPrefix}-select-item-active):hover`]: {
                        'background-color': token['selectItemActiveBg'],
                    },
                },

                [`.${prefixCls}-single:not(.${prefixCls}-customize-input) .${prefixCls}-selector`]: {
                    'padding': '0 8px',
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
            genPaginationStyle({
                clsPrefix, prefixCls, token, cssVar, antPrefix,
            }),
        ]
    );
    return wrapSSROsui;
};
