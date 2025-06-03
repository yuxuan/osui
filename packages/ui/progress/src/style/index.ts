import type {CSSObject} from '@ant-design/cssinjs';
import {useBrandContext} from '@osui/brand-provider';
import {useStyleRegister, useCacheToken} from '@ant-design/cssinjs';
import {theme, ThemeConfig} from 'antd';
import {Keyframes} from '@ant-design/cssinjs';

const {useToken} = theme;

export const prepareComponentToken: (token: any) => any = token => {
    const ret: any = {};
    Object.keys(token).forEach(k => {
        ret[k] = token[k];
    });
    Object.keys(token.Progress || {}).forEach(k => {
        ret[k] = token?.Progress?.[k];
    });
    return ret;
};

const osuiProgressActive = new Keyframes('osui-progress-active', {
    '0%': {
        'width': '0',
        'opacity': '1',
    },
    '20%': {
        'width': '0',
        'opacity': '1',
    },
    '100%': {
        'width': '100%',
        'opacity': '1',
    },
});

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

export const genProgressStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
}) => CSSObject[] =
    ({clsPrefix, prefixCls, token}) => {
        return [{
            [`.${clsPrefix}`]: {
                [`&.${prefixCls}-circle`]: {
                    [`.${prefixCls}-text`]: {
                        'font-size': `${token['progressCircleTextFontSize']} !important`,
                    },
                },

                [`&.${prefixCls}-line`]: {
                    'font-size': '14px',
                },

                [`.${prefixCls}-text`]: {
                    'color': token['progressTextColor'],
                    'font-size': token['progressTextFontSize'],
                },

                [`&.${prefixCls}-status-exception .${clsPrefix}-text`]: {
                    'color': token['themeErrorColor'],
                },

                [`&.${prefixCls}-status-success .${clsPrefix}-text`]: {
                    'color': token['themeSuccessColor'],
                },

                [`&.${prefixCls}-status-active`]: {
                    [`.${prefixCls}-bg`]: {
                        'background-color': token['themeSecondaryColorActive'],
                    },

                    [`.${prefixCls}-bg::before`]: {
                        'background': token['themePrimaryColor'],
                        'border-radius': token['progressRadius'],
                        animationName: osuiProgressActive,
                        animationDuration: '2.4s',
                        animationIterationCount: 'infinite',
                        animationTimingFunction: 'cubic-bezier(.23, 1, .32, 1)',
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
            genProgressStyle({
                clsPrefix, prefixCls, token, cssVar,
            }),
        ]
    );
    return wrapSSROsui;
};
