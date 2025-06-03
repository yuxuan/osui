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
    Object.keys(token.QuickEdit || {}).forEach(k => {
        ret[k] = token?.QuickEdit?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;


export const genQuickEditStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
}) => CSSObject[] =
    ({clsPrefix, token}) => {
        const asLink = () => ({
            'color': token['themeTextColor'],
            'cursor': 'pointer',

            '&:hover': {
                'color': token['linkHoverColor'],
            },

            '&:active': {
                'color': token['linkActiveColor'],
            },
        });
        return [{
            [`.${clsPrefix}-wrapper`]: {
                'width': 'max-content',
                'line-height': '30px',

                [`.${clsPrefix}-input`]: {
                    '&-display': {
                        ...asLink(),

                        'display': 'inline-flex',
                        'align-self': 'center',
                        'cursor': 'pointer',

                        '&-edit-icon': {
                            'display': 'inline-flex',
                            'align-items': 'center',
                            'padding-left': 4,

                            'svg': {
                                'width': token['osuiIconSize'],
                                'height': token['osuiIconSize'],
                            },
                        },
                    },
                },

                [`.${clsPrefix}-confirm-input`]: {
                    'display': 'flex',
                    'align-items': 'center',

                    '.osui-input': {
                        'flex': '1',
                    },

                    '&-action': {
                        ...asLink(),

                        '&:first-of-type': {
                            'margin-right': 8,
                            'margin-left': 12,
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
            genQuickEditStyle({
                clsPrefix, prefixCls, token, cssVar,
            }),
        ]
    );
    return wrapSSROsui;
};
