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
    Object.keys(token.Slider || {}).forEach(k => {
        ret[k] = token?.Slider?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

export const genSliderStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
}) => CSSObject[] =
    ({clsPrefix, prefixCls, token}) => {
        return [{
            [`.${clsPrefix}`]: {
                [`&.${prefixCls}`]: {
                    [`.${prefixCls}-handle::after`]: {
                        'box-shadow': `0 0 0 1px ${token['themePrimaryColor']}`,

                        '&:focus': {
                            'width': 12,
                            'height': 12,
                        },

                        '&:hover': {
                            'width': 12,
                            'height': 12,
                        },
                    },

                    [`.${prefixCls}-handle-dragging`]: {
                        '&.${prefixCls}-handle::after': {
                            'box-shadow': `0 0 0 2px ${token['themePrimaryColor']}`,
                        },
                    },

                    [`.${prefixCls}-rail`]: {
                        'background': token['themeBorderColorBase'],
                    },

                    [`.${prefixCls}-dot`]: {
                        'width': 4,
                        'height': 4,
                        'border': '2px solid #fff',
                        'inset-block-start': 0,
                    },

                    [`&.${prefixCls}-disabled`]: {
                        [`.${prefixCls}-handle:hover::after`]: {
                            'width': 10,
                            'height': 10,
                        },

                        [`.${prefixCls}-handle::after`]: {
                            'box-shadow': `0 0 0 1px ${token['colorGray5']}`,
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
            genSliderStyle({
                clsPrefix, prefixCls, token, cssVar,
            }),
        ]
    );
    return wrapSSROsui;
};
