import type {CSSObject} from '@ant-design/cssinjs';
import {useBrandContext} from '@osui/brand-provider';
import {useStyleRegister, useCacheToken, Keyframes} from '@ant-design/cssinjs';
import {theme, ThemeConfig} from 'antd';

const {useToken} = theme;

export const prepareComponentToken: (token: any) => any = token => {
    const ret: any = {};
    Object.keys(token).forEach(k => {
        ret[k] = token[k];
    });
    Object.keys(token.Badge || {}).forEach(k => {
        ret[k] = token?.Badge?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

const flash = new Keyframes('flash', {
    from: {
        transform: 'scale(.7)',
    },

    to: {
        transform: 'scale(1)',
    },
});

export const genBadgeStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
}) => CSSObject[] =
    ({clsPrefix, prefixCls, token}) => {
        return [{
            [`.${clsPrefix}`]: {
                '&-count-only': {
                    [`sup.${prefixCls}-count`]: {
                        'background': 'transparent',
                        'box-shadow': 'none',
                    },
                },

                '&-type': {
                    '&-success': {
                        [`.${prefixCls}-count`]: {
                            'background': token['themeSuccessColor'],
                        },

                        [`&..${prefixCls}-count-only`]: {
                            [`sup.${prefixCls}-count`]: {
                                'color': token['themeSuccessColor'],
                            },
                        },
                    },

                    '&-warning': {
                        [`.${prefixCls}-count`]: {
                            'background': token['themeWarningColor'],
                        },

                        [`&..${prefixCls}-count-only`]: {
                            [`sup.${prefixCls}-count`]: {
                                'color': token['themeWarningColor'],
                            },
                        },
                    },

                    '&-error': {
                        [`.${prefixCls}-count`]: {
                            'background': token['themeErrorColor'],
                        },

                        [`&..${prefixCls}-count-only`]: {
                            [`sup.${prefixCls}-count`]: {
                                'color': token['themeErrorColor'],
                            },
                        },
                    },
                },

                [`.${prefixCls}-status-dot`]: {
                    'width': 8,
                    'height': 8,
                },
                [`.${prefixCls}-status-processing`]: {
                    'background-color': token['themePrimaryColor'],
                },
                [`.${prefixCls}-status-active`]: {
                    'background-color': token['themePrimaryColor'],
                },
                [`.${prefixCls}-status-default`]: {
                    'background-color': token['themeDisabledColor'],
                },
                [`.${prefixCls}-status-processing::after`]: {
                    'border': 0,
                    'box-shadow': `0 0 0 2px ${token['processingColor']}`,
                    animationName: flash,
                    animationDuration: '1s',
                    animationIterationCount: 'infinite',
                    animationTimingFunction: 'ease',
                },

                [`.${prefixCls}-count`]: {
                    'padding': '0 6px',
                },
                [`.${prefixCls}-multiple-words`]: {
                    'padding': '0 8px',
                },
                [`.${prefixCls}-dot`]: {
                    'width': 8,
                    'min-width': 8,
                    'height': 8,
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
            genBadgeStyle({
                clsPrefix, prefixCls, token, cssVar,
            }),
        ]
    );
    return wrapSSROsui;
};
