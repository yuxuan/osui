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
    Object.keys(token.Empty || {}).forEach(k => {
        ret[k] = token?.Empty?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

export const genEmptyStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
}) => CSSObject[] =
    ({clsPrefix, prefixCls, token}) => {
        return [{
            [`.${clsPrefix}`]: {
                [`.${prefixCls}-image`]: {
                    'margin-bottom': 4,
                },

                [`.${prefixCls}-description`]: {
                    'color': token['colorGray9'],
                },

                [`&.${clsPrefix}-large`]: {
                    [`.${prefixCls}-image`]: {
                        'height': 'auto',
                        'margin-bottom': 20,

                        'svg': {
                            'min-width': 180,
                            'max-width': 360,
                            'height': '100%',
                        },
                    },
                },

                [`&.${clsPrefix}-small`]: {
                    [`.${prefixCls}-image`]: {
                        'height': 50,
                        'margin-bottom': 10,
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
            genEmptyStyle({
                clsPrefix, prefixCls, token, cssVar,
            }),
        ]
    );
    return wrapSSROsui;
};
