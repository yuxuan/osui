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
    Object.keys(token.BackTop || {}).forEach(k => {
        ret[k] = token?.BackTop?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

export const genBackTopStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
}) => CSSObject[] =
    ({clsPrefix, token}) => {
        return [{
            [`.${clsPrefix}`]: {
                'display': 'flex',
                'align-items': 'center',
                'justify-content': 'center',
                'width': token['backTopSize'],
                'height': token['backTopSize'],
                'background': token['backTopBg'],
                'border-radius': token['btnBorderRadiusBase'],

                '&:hover': {
                    'background': token['backTopHoverBg'],
                },

                '&:active': {
                    'background': token['backTopActiveBg'],
                },

                'svg': {
                    'width': token['backTopIconSize'],
                    'height': token['backTopIconSize'],
                    'color': token['colorGray1'],
                },

                '&-circle': {
                    'overflow': 'hidden',
                    'border-radius': '50%',
                },

                '.fade-enter.fade-enter-active': {
                    'animation-name': 'none',
                    'animation-play-state': 'none',
                },

                '.fade-appear.fade-appear-active': {
                    'animation-name': 'none',
                    'animation-play-state': 'none',
                },

                '&-transparent': {
                    'background': token['backTopTransparentBg'],

                    '&:hover': {
                        'background': token[' vvvv'],
                    },

                    '&:active': {
                        'background': token['backTopTransparentActiveBg'],
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
            genBackTopStyle({
                clsPrefix, prefixCls, token, cssVar,
            }),
        ]
    );
    return wrapSSROsui;
};
