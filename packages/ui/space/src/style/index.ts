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
    Object.keys(token.Space || {}).forEach(k => {
        ret[k] = token?.Space?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

export const genSpaceStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
}) => CSSObject[] =
    ({clsPrefix, prefixCls, token}) => {
        return [{
            [`.${clsPrefix}`]: {
                '&-small': {
                    'gap': '0 !important',
                },
                '&-middle': {
                    'gap': '0 !important',
                },
                '&-large': {
                    'gap': '0 !important',
                },

                [`&.${clsPrefix}-use-gap`]: {
                    [`&.${clsPrefix}-small`]: {
                        'gap': `${token['spaceSmall']} !important`,
                    },
                    [`&.${clsPrefix}-middle`]: {
                        'gap': `${token['spaceMiddle']} !important`,
                    },
                    [`&.${clsPrefix}-large`]: {
                        'gap': `${token['spaceLarge']} !important`,
                    },
                },
            },

            // 这个不支持 垂直 + 水平 + 垂直这种
            [`.${clsPrefix}:not(.${clsPrefix}-use-gap)`]: {
                [`&.${clsPrefix}-small.${prefixCls}-horizontal`]: {
                    [`.${prefixCls}-item:not(:last-child)`]: {
                        'margin-right': `${token['spaceSmall']} !important`,
                    },

                    // 水平里面的垂直不要margin-right
                    [`.${prefixCls}-vertical`]: {
                        [`.${prefixCls}-item`]: {
                            'margin-right': '0 !important',
                        },
                    },
                },

                [`&.${clsPrefix}-middle.${prefixCls}-horizontal`]: {
                    [`.${prefixCls}-item:not(:last-child)`]: {
                        'margin-right': `${token['spaceMiddle']} !important`,
                    },

                    [`.${prefixCls}-vertical`]: {
                        [`.${prefixCls}-item`]: {
                            'margin-right': '0 !important',
                        },
                    },
                },

                [`&.${clsPrefix}-large.${prefixCls}-horizontal`]: {
                    [`.${prefixCls}-item:not(:last-child)`]: {
                        'margin-right': `${token['spaceLarge']} !important`,
                    },

                    [`.${prefixCls}-vertical`]: {
                        [`.${prefixCls}-item`]: {
                            'margin-right': '0 !important',
                        },
                    },
                },

                [`&.${clsPrefix}-small.${prefixCls}-vertical`]: {
                    [`.${prefixCls}-item:not(:last-child)`]: {
                        'margin-bottom': `${token['spaceSmall']} !important`,
                    },

                    // 垂直里面的水平不要margin-bottom
                    [`.${prefixCls}-horizontal`]: {
                        [`.${prefixCls}-item`]: {
                            'margin-bottom': '0 !important',
                        },
                    },
                },

                [`&.${clsPrefix}-middle.${prefixCls}-vertical`]: {
                    [`.${prefixCls}-item:not(:last-child)`]: {
                        'margin-bottom': `${token['spaceMiddle']} !important`,
                    },

                    [`.${prefixCls}-horizontal`]: {
                        [`.${prefixCls}-item`]: {
                            'margin-bottom': '0 !important',
                        },
                    },
                },

                [`&.${clsPrefix}-large.${prefixCls}-vertical`]: {
                    [`.${prefixCls}-item:not(:last-child)`]: {
                        'margin-bottom': `${token['spaceLarge']} !important`,
                    },
                    [`.${prefixCls}-horizontal`]: {
                        [`.${prefixCls}-item`]: {
                            'margin-bottom': '0 !important',
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
            genSpaceStyle({
                clsPrefix, prefixCls, token, cssVar,
            }),
        ]
    );
    return wrapSSROsui;
};
