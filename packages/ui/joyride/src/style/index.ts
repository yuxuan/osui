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
    Object.keys(token.Joyride || {}).forEach(k => {
        ret[k] = token?.Joyride?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

export const genJoyrideStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
}) => CSSObject[] =
    ({clsPrefix, token}) => {
        return [{
            [`.${clsPrefix}-tooltip`]: {
                // "&-tooltip": {
                'min-width': 240,
                'max-width': 400,
                'padding': 10,
                'color': token['colorGray1'],
                'background': token['themePrimaryColor'],
                // },

                [`.${clsPrefix}-close`]: {
                    'cursor': 'pointer',
                },

                [`.${clsPrefix}-header`]: {
                    'display': 'flex',
                    'align-items': 'center',
                    'justify-content': 'space-between',
                    'color': token['colorGray1'],
                    'font-weight': 'bold',
                    'font-size': 14,
                },

                [`.${clsPrefix}-next-button`]: {
                    'background': token['colorGray1'],
                },

                [`.${clsPrefix}-back-link`]: {
                    'margin-right': 8,
                    'color': token['colorGray1'],
                },

                [`.${clsPrefix}-footer`]: {
                    'display': 'flex',
                    'align-items': 'center',
                    'justify-content': 'space-between',
                    'margin-top': 20,
                },

                [`.${clsPrefix}-hideStepsSize`]: {
                    'visibility': 'hidden',
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
            genJoyrideStyle({
                clsPrefix, prefixCls, token, cssVar,
            }),
        ]
    );
    return wrapSSROsui;
};
