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
    Object.keys(token.Alert || {}).forEach(k => {
        ret[k] = token?.Alert?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

export const genAlertStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
}) => CSSObject[] =
    ({clsPrefix, prefixCls, token}) => {
        return [{
            [`.${clsPrefix}`]: {
                'display': 'flex',
                'align-items': 'center',

                [`.${prefixCls}-close-icon`]: {
                    'height': '14px',
                    'margin-left': token['alertCloseIconMarginLeft'],
                    'font-size': '14px',
                },

                [`.${prefixCls}-close-text`]: {
                    '&:hover': {
                        'color': token['linkColor'],
                        'text-decoration': 'underline',
                    },
                },

                [`&.${prefixCls}-with-description .${prefixCls}-icon`]: {
                    'align-self': 'flex-start',
                    'margin-top': '3px',
                },

                [`&.${prefixCls}-with-description`]: {
                    [`.${prefixCls}-icon`]: {
                        'top': '11px',
                    },

                    [`.${prefixCls}-message`]: {
                        'font-weight': 'bold',
                        'font-size': '14px',
                    },

                    [`".${prefixCls}-close-icon"`]: {
                        'align-self': 'flex-start',
                        'margin-block-start': '4px',
                    },
                },

                [`&.${prefixCls}`]: {
                    'padding': token['alertPadding'],
                },

                [`&.${prefixCls}.${prefixCls}-no-icon`]: {
                    'padding': token['alertNoIconPadding'],
                },

                [`.${clsPrefix}-message`]: {
                    '&-wrapper': {
                        'display': 'flex',

                        '&-closable': {
                            'margin-right': '20px',
                        },
                    },

                    '&-content': {
                        'flex': '1',
                        'margin-right': '20px',

                        '&-expanded-close': {
                            'max-height': '18px',
                            'overflow': 'hidden',
                        },
                    },

                    '&-actions': {
                        'display': 'flex',
                        '& > *:not(:last-child)': {
                            'margin-right': '20px',
                        },
                    },
                },

                [`.${clsPrefix}-action-expand`]: {
                    'display': 'flex',

                    '&-open': {
                        'svg': {
                            'transform': 'rotate(180deg)',
                        },
                    },
                },

                [`.${clsPrefix}-count-down-close`]: {
                    'color': token['themePlaceholderColor'],
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
            genAlertStyle({
                clsPrefix, prefixCls, token, cssVar,
            }),
        ]
    );
    return wrapSSROsui;
};
