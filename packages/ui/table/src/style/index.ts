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
    Object.keys(token.Table || {}).forEach(k => {
        ret[k] = token?.Table?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

export const genTableStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
    antPrefix: string;
}) => CSSObject[] =
    ({clsPrefix, prefixCls, token, antPrefix}) => {
        return [{
            [`.${clsPrefix}`]: {
                [`.${prefixCls}-thead`]: {
                    'font-size': '12px',
                    'tr': {
                        'th': {
                            'font-weight': token['tableHeaderFontWeight'],
                            'border-bottom': `1px solid  ${token['tableHeaderBorderBottomColor']}`,
                        },
                    },
                },

                [`.${prefixCls}-pagination.${antPrefix}-pagination`]: {
                    'margin': token['tablePaginationMargin'],
                },

                // eslint-disable-next-line max-len
                [`.${prefixCls}-thead > tr > th:not(:last-child):not(.${prefixCls}-selection-column):not(.${prefixCls}-row-expand-icon-cell):not([colspan])::before`]: {
                    'height': '100%',
                    'background': token['colorGray1'],
                },

                '&-no-row-border': {
                    [`.${prefixCls}-tbody`]: {
                        '& > tr': {
                            '& > th': {
                                'border-bottom': '1px solid transparent',
                            },
                            '& > td': {
                                'border-bottom': '1px solid transparent',
                            },
                        },
                    },
                },

                '&-no-border': {
                    [`.${prefixCls}-thead`]: {
                        '& > tr': {
                            '& > th': {
                                'border-bottom': '1px solid transparent',
                            },
                            '& > td': {
                                'border-bottom': '1px solid transparent',
                            },
                        },
                    },

                    [`.${prefixCls}-tbody`]: {
                        '& > tr': {
                            '& > th': {
                                'border-bottom': '1px solid transparent',
                            },
                            '& > td': {
                                'border-bottom': '1px solid transparent',
                            },
                        },
                    },
                },

                // 修复sticky时升高z-index，不然箭头会被挡住
                [`.${prefixCls}-selection-column.${prefixCls}-cell-fix-left`]: {
                    'z-index': '3',
                },
                [`.${prefixCls}-selection-column.${prefixCls}-cell-fix-right`]: {
                    'z-index': '3',
                },

                // ===== 以下用class来patch，因为侵入性比较强 ======
                '&-icloud': {
                    // 用于固定expand-icon列宽度
                    [`.${prefixCls}-expand-icon-col`]: {
                        'width': '32px !important',
                    },

                    '&-expandableIcon': {
                        'color': token['themeIconColor'],
                        'cursor': 'pointer',
                    },

                    [`.${antPrefix}-pagination-options-quick-jumper input[disabled]`]: {
                        'color': token['themeDisabledColor'],
                        'background-color': token['themeDisabledBgColor'],
                        'border-color': token['themeBorderColorDisabled'],
                    },

                    [`.${prefixCls}-cell-with-append`]: {
                        '.osui-icon': {
                            'position': 'relative',
                            'left': '-2px',
                            'float': 'left',
                        },
                    },
                },
                // Table Header 里面的icon贴着文字
                [`.${prefixCls}-filter-column`]: {
                    'justify-content': 'initial',
                },

                [`.${prefixCls}-column-sorters`]: {
                    'justify-content': 'initial',
                },

                [`.${prefixCls}-column-title`]: {
                    'flex': 'initial',
                },

                [`.${prefixCls}-column-sorter`]: {
                    'margin-left': '8px',
                    'color': '#bfbfbf',
                },

                [`.${prefixCls}-filter-trigger`]: {
                    'margin-left': '8px',
                    'color': '#bfbfbf',
                },

                [`.${prefixCls}-filter-trigger:hover`]: {
                    'background': 'transparent',
                },

                // Go button 样式
                [`.${antPrefix}-pagination-options-quick-jumper`]: {
                    'display': 'inline-flex',

                    'input': {
                        '&:focus': {
                            'z-index': '2',
                        },

                        '&:hover': {
                            'z-index': '2',
                        },

                        'border-top-right-radius': 0,
                        'border-bottom-right-radius': 0,
                    },

                    '.osui-pagination-go-button': {
                        'margin-left': '-9px',
                        'border-top-left-radius': 0,
                        'border-bottom-left-radius': 0,

                        '&[disabled]': {
                            'border': `1px solid  ${token['themeBorderColorDisabled']}`,
                        },
                    },
                },

                [`tr.${prefixCls}-expanded-row > td`]: {
                    'background': token['tableExpandedRowBg'],
                },

                [`tr.${prefixCls}-expanded-row:hover > td`]: {
                    'background': token['tableExpandedRowBg'],
                },

                // eslint-disable-next-line max-len
                [`.${prefixCls}-column-has-sorters .${prefixCls}-column-sorters .${prefixCls}-column-sorter:not(.${clsPrefix}-column-custom-sorter)`]: {
                    'display': 'none',
                },

                [`.${prefixCls}-column-sorter-up.active`]: {
                    'color': token['primaryColor'],
                },

                [`.${prefixCls}-column-sorter-down.active`]: {
                    'color': token['primaryColor'],
                },

                [`.${prefixCls}-column-has-sorters .${prefixCls}-column-title`]: {
                    'display': 'inline-flex',
                    'align-items': 'center',
                },

                [`.${prefixCls}-wrapper .${prefixCls}-tbody > tr.${prefixCls}-row:hover>td`]: {
                    'background': '#e6f0ff',
                },

                [`.${antPrefix}-pagination-item:not(.${antPrefix}}-pagination-item-active):hover`]: {
                    'background-color': token['paginationItemHoverBg'],

                    'a': {
                        'color': token['paginationItemHoverColor'],
                    },
                },

                [`.${antPrefix}-pagination-next`]: {
                    [`&:hover:not(.${antPrefix}-pagination-disabled)`]: {
                        [`.${antPrefix}-pagination-item-link`]: {
                            'background-color': 'initial',
                        },

                        'svg': {
                            'color': token['themePrimaryColorHover'],
                        },
                    },
                },
                [`.${antPrefix}-pagination-prev`]: {
                    [`&:hover:not(.${antPrefix}-pagination-disabled)`]: {
                        [`.${antPrefix}-pagination-item-link`]: {
                            'background-color': 'initial',
                        },

                        'svg': {
                            'color': token['themePrimaryColorHover'],
                        },
                    },
                },

                [`.${antPrefix}-pagination-total-text`]: {
                    order: -12,
                },

                [`&.showQuickJumper-${clsPrefix}-pagination`]: {
                    [`.${antPrefix}-pagination-options-quick-jumper`]: {
                        position: 'absolute',
                    },
                },
            },

            // Global
            // 这个是全局覆盖Antd的tooltip box shadow，因为table里面的没有osui前缀
            [`.${antPrefix}-tooltip-arrow-content`]: {
                'box-shadow': `${token['tooltipArrowContentBoxShadownone'] || 'none'} !important`,
            },

            [`.${antPrefix}-checkbox-indeterminate .${antPrefix}-checkbox-inner`]: {
                'border-color': token['themePrimaryColor'],
            },

            // 调整分页器样式
            [`.${prefixCls}-wrapper .${prefixCls}-pagination.${antPrefix}-pagination`]: {
                // 调整分页期 sizeChanger 和 jumper 位置
                [`.${antPrefix}-pagination-options`]: {
                    'order': -10,
                    display: 'flex',
                    'flex-direction': 'row',
                },

                [`.${antPrefix}-pagination-item`]: {
                    'z-index': '99',
                    'margin-inline-end': 0,
                },

                [`.${antPrefix}-pagination-prev`]: {
                    'z-index': '99',

                    'margin-inline-end': 0,

                    'min-width': '32px',
                    'color': token['textColor'],
                    'display': 'inline-flex',
                    'align-items': 'center',
                    'justify-content': 'center',

                    'svg': {
                        'color': token['paginationPrevNextIconColor'],
                    },

                    '&:hover svg': {
                        'color': token['themePrimaryColorHover'],
                    },

                    '&:active svg': {
                        'color': token['themePrimaryColorHover'],
                    },

                    [`&.${antPrefix}-pagination-disabled svg`]: {
                        'color': token['paginationPrevNextIconColorDisabled'],
                    },
                },
                [`.${antPrefix}-pagination-next`]: {
                    'z-index': '99',

                    'min-width': '32px',
                    'color': token['textColor'],
                    'display': 'inline-flex',
                    'align-items': 'center',
                    'justify-content': 'center',

                    'svg': {
                        'color': token['paginationPrevNextIconColor'],
                    },

                    '&:hover svg': {
                        'color': token['themePrimaryColorHover'],
                    },

                    '&:active svg': {
                        'color': token['themePrimaryColorHover'],
                    },

                    [`&.${antPrefix}-pagination-disabled svg`]: {
                        'color': token['paginationPrevNextIconColorDisabled'],
                    },
                },
                [`&.${prefixCls}-pagination-left .${antPrefix}-pagination-options`]: {
                    'left': 0,
                },


                [`.${antPrefix}-pagination-options-size-changer`]: {
                    order: -10,

                    [`.${antPrefix}-select-selector`]: {
                        'padding': '0 8px',
                    },

                    [`.${antPrefix}-select-selection-item`]: {
                        'padding-inline-end': '23px',
                    },
                },

                [`.${antPrefix}-pagination-options .${antPrefix}-pagination-options-quick-jumper`]: {
                    'color': token['paginationPrevNextIconColor'],

                    'input': {
                        'margin': '0 8px',
                    },

                    'button': {
                        'appearance': 'button',
                        'position': 'relative',
                        'margin-left': '-9px',
                        'line-height': '18px',
                        'padding': '6px 11px',
                        'background-color': token['btnDefaultHoverBg'],
                        'outline': 0,
                        'outline-style': 'none',
                        'box-shadow': 'rgba(0, 0, 0, 0)',
                        'user-select': 'none',
                        'touch-action': 'manipulation',
                        'border': '1px solid transparent',
                        'border-radius': token['btnBorderRadiusBase'],
                        'border-color': token['btnDefaultBorderColor'],
                        'color': token['textColor'],

                        '&:hover': {
                            'color': token['btnDefaultHoverColor'],
                            'background': token['btnDefaultHoverBg'],
                            'border-color': token['btnDefaultHoverBorderColor'],
                        },

                        '&:active': {
                            'color': token['btnDefaultActiveColor'],
                            'background': token['btnDefaultActiveBg'],
                            'border-color': token['btnDefaultActiveBorderColor'],
                        },

                        '&[disabled]': {
                            'border': token['themeBorderColorDisabled'],
                            'color': token['btnDefaultDisableColor'],
                            'background': token['btnDefaultDisableBg'],
                        },

                        '&:not([disabled])': {
                            'cursor': 'pointer',
                            'background': token['btnDefaultBg'],
                        },
                    },
                },

                [`.${antPrefix}-pagination-simple-pager`]: {
                    'button': {
                        'padding': '2px 11px',
                        'margin-left': 0,
                    },

                    'input': {
                        'width': 48,
                        'height': 22,
                        'margin': '0 8px 0 0',
                    },

                    [`.${antPrefix}-pagination-slash`]: {
                        'margin': '0 16px',
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
            genTableStyle({
                clsPrefix, prefixCls, token, cssVar, antPrefix,
            }),
        ]
    );
    return wrapSSROsui;
};
