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
    Object.keys(token.InputNumber || {}).forEach(k => {
        ret[k] = token?.InputNumber?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

export const genInputNumberStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
    antPrefix: string;
}) => CSSObject[] =
    ({clsPrefix, prefixCls, token, antPrefix}) => {
        return [
            {
                [`.${clsPrefix}`]: {
                    [`&.${antPrefix}-input-group.${antPrefix}-input-group-compact`]: {
                        display: 'inline-block',
                        width: 'auto',
                    },

                    '&-input-number': {
                        'max-width': 'calc(100% - 60px)',

                        '&:hover': {
                            'z-index': 1,
                        },

                        '&:focus': {
                            'z-index': 1,
                        },

                        [`&.${prefixCls}-focused`]: {
                            'z-index': 1,
                        },
                    },

                    '&-minus-btn': {
                        'line-height': 2,

                        '&.osui-button': {
                            color: token['themeColorText'],
                        },

                        '&:hover': {
                            'z-index': 1,
                        },
                        '&:focus': {
                            'z-index': 1,
                        },
                    },

                    '&-plus-btn': {
                        'line-height': 2,

                        '&.osui-button': {
                            color: token['themeColorText'],
                        },

                        '&:hover': {
                            'z-index': 1,
                        },
                        '&:focus': {
                            'z-index': 1,
                        },
                    },

                    /* Chrome, Safari, Edge, Opera */
                    'input::-webkit-outer-spin-button': {
                        margin: 0,
                        '-webkit-appearance': 'none',
                    },
                    'input::-webkit-inner-spin-button': {
                        margin: 0,
                        '-webkit-appearance': 'none',
                    },

                    /* Firefox */
                    'input[type=number]': {
                        '-moz-appearance': 'textfield',
                    },
                },

                '&.osui-input-number-tail-label': {
                    position: 'absolute',
                    top: '25%',
                    'margin-left': 4,
                    color: token.labelColor,
                },

                [`.${antPrefix}-form-item-has-error`]: {
                    [`.${clsPrefix}`]: {
                        '&-input-number': {
                            'border-color': token.colorError6,

                            '&:hover': {
                                'border-color': token.colorError6,
                            },
                            '&:focus': {
                                'border-color': token.colorError6,
                            },

                            '&[disabled]': {
                                'border-color': token.themeBorderColorDisabled,
                            },
                        },
                        [`&-minus-btn.${antPrefix}-btn`]: {
                            'border-color': token.colorError6,

                            '&:hover': {
                                'border-color': token.colorError6,
                            },
                            '&:focus': {
                                'border-color': token.colorError6,
                            },

                            '&[disabled]': {
                                'border-color': token.themeBorderColorDisabled,
                            },
                        },
                        [`&-plus-btn.${antPrefix}-btn`]: {
                            'border-color': token.colorError6,

                            '&:hover': {
                                'border-color': token.colorError6,
                            },
                            '&:focus': {
                                'border-color': token.colorError6,
                            },

                            '&[disabled]': {
                                'border-color': token.themeBorderColorDisabled,
                            },
                        },
                    },
                },

            },
        ];
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
            genInputNumberStyle({
                clsPrefix, prefixCls, token, cssVar, antPrefix,
            }),
        ]
    );
    return wrapSSROsui;
};

