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
    Object.keys(token.Input || {}).forEach(k => {
        ret[k] = token?.Input?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

export const genInputStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
    antPrefix: string;
}) => CSSObject[] =
    ({clsPrefix, prefixCls, token, antPrefix}) => {
        return [{
            [`.${clsPrefix}`]: {
                [`.${prefixCls}-group-addon`]: {
                    [`.${antPrefix}-select-focused`]: {
                        // focus selector color
                        [`.${antPrefix}-select-selector .${antPrefix}-select-selection-item`]: {
                            color: token['themeTextColor'],
                        },

                    },
                    [`.${antPrefix}-select-open`]: {
                        [`.${antPrefix}-select-selector .${antPrefix}-select-selection-item`]: {
                            color: token['themeTextColor'],
                        },
                    },
                },

                [`.${antPrefix}-select-single.${antPrefix}-select-open .${antPrefix}-select-selection-item`]: {
                    color: token['themePrimaryColorActive'],
                },

                // focus
                [`&.${prefixCls}-affix-wrapper:focus`]: {
                    'background': token['inputFocusBackgroundColor'],
                    'border-color': token['themePrimaryColorActive'],

                    [`input.${prefixCls}`]: {
                        'background': token['inputFocusBackgroundColor'],
                    },
                },

                [`&.${prefixCls}-affix-wrapper-focused`]: {
                    'background': token['inputFocusBackgroundColor'],
                    'border-color': token['themePrimaryColorActive'],

                    [`input.${prefixCls}`]: {
                        'background': token['inputFocusBackgroundColor'],
                    },
                },

                [`&.${prefixCls}:focus`]: {
                    'background': token['inputFocusBackgroundColor'],
                    'border-color': token['themePrimaryColorActive'],

                    [`input.${prefixCls}`]: {
                        'background': token['inputFocusBackgroundColor'],
                    },
                },

                [`&.${prefixCls}-focused`]: {
                    'background': token['inputFocusBackgroundColor'],
                    'border-color': token['themePrimaryColorActive'],

                    [`input.${prefixCls}`]: {
                        'background': token['inputFocusBackgroundColor'],
                    },
                },

                [`.${prefixCls}-suffix > svg`]: {
                    'width': token['inputSuffixIconSize'],
                    'height': token['inputSuffixIconSize'],
                },

                [`.${prefixCls}-wrapper`]: {
                    // [prefix][input][suffix]
                    // [prefix][input]
                    // [input][suffix]
                    // 不是第一个input的话，border-left去掉
                    [`.${prefixCls}-affix-wrapper:not(:first-child)`]: {
                        'border-left': 0,
                    },

                    'input:not(:first-child)': {
                        'border-left': 0,
                    },

                    // 不是最后一个input的话，border-right去掉
                    [`.${prefixCls}-affix-wrapper:not(:last-child)`]: {
                        'border-right': 0,
                    },

                    'input:not(:last-child)': {
                        'border-right': 0,
                    },

                    '&:hover': {
                        [`.${prefixCls}-group-addon`]: {
                            'border-color': token['themePrimaryColorHover'],
                        },

                        [`.${prefixCls}-affix-wrapper`]: {
                            'border-color': token['themePrimaryColorHover'],
                        },

                        'input': {
                            'border-color': token['themePrimaryColorHover'],
                        },
                    },
                },

                // input group focused
                '&-focused': {
                    [`.${prefixCls}-group-addon`]: {
                        'border-color': token['themePrimaryColorActive'],
                    },

                    [`.${prefixCls}-search-button`]: {
                        'border-color': token['themePrimaryColorActive'],
                    },

                    [`.${prefixCls}-affix-wrapper`]: {
                        'border-color': token['themePrimaryColorActive'],
                    },

                    'input': {
                        'border-color': token['themePrimaryColorActive'],
                    },
                },

                // input group disabled
                '&-disabled': {
                    [`.${prefixCls}-group`]: {
                        // disabled时hover
                        '&:hover': {
                            [`.${prefixCls}-group-addon`]: {
                                'border-color': token['themeBorderColorDisabled'],
                            },

                            [`.${prefixCls}-affix-wrapper`]: {
                                'border-color': token['themeBorderColorDisabled'],
                            },

                            'input': {
                                'border-color': token['themeBorderColorDisabled'],
                            },

                            [`.${prefixCls}-search-button`]: {
                                'background': token['colorGray3'],
                                'border': token['themeBorderColorDisabled'],
                                'border-left': 0,
                            },
                        },

                        [`.${prefixCls}-search-button`]: {
                            'background': token['colorGray3'],
                            'border-color': token['themeBorderColorDisabled'],
                            'border-left': 0,
                        },

                        // group disable时select边框
                        [`.osui-select.${antPrefix}-select-disabled .${antPrefix}-select-selector`]: {
                            'border': 'none',
                        },
                    },

                    '&': {
                        'border-color': token['themeBorderColorDisabled'],

                        '&:hover': {
                            'border-color': token['themeBorderColorDisabled'],
                        },
                    },

                    [`&.${prefixCls}-disabled`]: {
                        'border-color': token['themeBorderColorDisabled'],

                        '&:hover': {
                            'border-color': token['themeBorderColorDisabled'],
                        },
                    },

                    [`&.${prefixCls}-search`]: {
                        'border-color': token['themeBorderColorDisabled'],

                        '&:hover': {
                            'border-color': token['themeBorderColorDisabled'],
                        },
                    },
                },

                // search icon
                '-search-icon': {
                    'cursor': 'pointer',
                },

                // V1 overrides 覆盖v1的样式，未来要删掉
                [`.${antPrefix}-input-group-addon`]: {
                    // affix select
                    '.osui-select': {
                        [`.${antPrefix}-select-selector`]: {
                            'height': '32px',
                        },
                    },
                },
                '&:not(&-disabled)': {
                    [`.${prefixCls}-group-addon`]: {
                        'background': token['inputAddonBg'],
                    },
                },
            },

            // 表单内报错样式覆盖
            [`.${antPrefix}-form-item-has-error &`]: {
                [`.${prefixCls}-group-addon`]: {
                    'border-color': `${token['themeErrorColor']} !important`,

                    '&:first-child': {
                        'border-right': '1px solid transparent !important',
                    },

                    '&:last-child': {
                        'border-left': '1px solid transparent !important',
                    },
                },

                [`&.${prefixCls}-affix-wrapper:not(.${prefixCls}-affix-wrapper-disabled)`]: {
                    'border-color': `${token['themeErrorColor']} !important`,
                },
            },

            // text count
            [`.${clsPrefix}-textarea`]: {
                [`.${prefixCls}-data-count`]: {
                    'position': 'absolute',
                    'bottom': '5px',
                    'right': '4px',
                    'color': token['colorGray7'],
                },
            },

            [`.${clsPrefix}-show-count`]: {
                'padding-right': '22px',

                '&-counter': {
                    'position': 'relative',
                    'right': '21px',
                    'z-index': 1,
                    'display': 'inline-block',
                    'color': token['colorGray7'],
                    'white-space': 'nowrap',
                    'text-align': 'right',
                    'pointer-events': 'none',
                },

                '&-with-max-length': {
                    'padding-right': '51px',
                },
            },

            // Input group
            [`.${clsPrefix}-group-compact.${clsPrefix}-group`]: {
                [`.${prefixCls}-group-addon`]: {
                    'width': '80px',
                    'height': '32px',
                    'padding-top': '6px',
                },

                // addon后面的input，select左边框设置为0
                // osui-input例如search
                [`.${prefixCls}-group-addon + .osui-input`]: {
                    'border-left': 0,
                },
                [`.${prefixCls}-group-addon + .${prefixCls}`]: {
                    'border-left': 0,
                },
                [`.${prefixCls}-group-addon + .${antPrefix}-select > .${antPrefix}-select-selector`]: {
                    'border-left': 0,
                },

                // input， select如果不是最后一个孩子，右边框设置为0
                [`.${antPrefix}-select:not(:last-child) > .${antPrefix}-select-selector`]: {
                    'border-right': 0,
                },

                // input， select如果不是最后一个孩子，右边框设置为0
                [`.${prefixCls}:not(:last-child)`]: {
                    'border-right': 0,
                },

                // input， select如果不是最后一个孩子，右边框设置为0
                '.osui-input:not(:last-child)': {
                    'border-right': 0,
                },

                '&-hover': {
                    [`.${prefixCls}-group-addon`]: {
                        'border-color': token['themePrimaryColorHover'],
                    },

                    [`.${antPrefix}-select > .${antPrefix}-select-selector`]: {
                        'border-color': token['themePrimaryColorHover'],
                    },

                    [`.${prefixCls}`]: {
                        'border-color': token['themePrimaryColorHover'],
                    },

                    [`.${clsPrefix}`]: {
                        'border-color': token['themePrimaryColorHover'],
                    },
                },

                '&-focused': {
                    [`.${prefixCls}-group-addon`]: {
                        'border-color': token['themePrimaryColorActive'],
                    },
                    [`.${antPrefix}-select > .${antPrefix}-select-selector`]: {
                        'border-color': token['themePrimaryColorActive'],
                    },

                    [`.${prefixCls}`]: {
                        'border-color': token['themePrimaryColorActive'],
                    },

                    [`.${clsPrefix}`]: {
                        'border-color': token['themePrimaryColorActive'],
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
            genInputStyle({
                clsPrefix, prefixCls, token, cssVar, antPrefix,
            }),
        ]
    );
    return wrapSSROsui;
};
