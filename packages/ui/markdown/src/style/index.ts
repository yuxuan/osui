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
    Object.keys(token.Markdown || {}).forEach(k => {
        ret[k] = token?.Markdown?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

export const genMarkdownStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
}) => CSSObject[] =
    ({clsPrefix, token}) => {
        return [{
            [`.${clsPrefix}.markdown-body`]: {
                'ul': {
                    'list-style': 'disc',

                    'ul': {
                        'list-style': 'circle',
                    },

                    'ol': {
                        'list-style': 'lower-latin',
                    },
                },
                'ol': {
                    'list-style': 'decimal',

                    'ul': {
                        'list-style': 'circle',
                    },

                    'ol': {
                        'list-style': 'lower-latin',
                    },
                },

                'strong': {
                    'font-weight': '900',
                },

                // 覆盖 prism 中的样式
                'pre code ::selection': {
                    'background-color': token['eeThemePrimaryColor'],
                },

                'h1': {
                    'line-height': '1.5715',
                },
                'h2': {
                    'line-height': '1.5715',
                },
                'h3': {
                    'line-height': '1.5715',
                },
                'h4': {
                    'line-height': '1.5715',
                },
                'h5': {
                    'line-height': '1.5715',
                },
                'h6': {
                    'line-height': '1.5715',
                },
                'p': {
                    'line-height': '1.5715',
                },
                'pre': {
                    'line-height': '1.5715',
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
            genMarkdownStyle({
                clsPrefix, prefixCls, token, cssVar,
            }),
        ]
    );
    return wrapSSROsui;
};
