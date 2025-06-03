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
    Object.keys(token.Layout || {}).forEach(k => {
        ret[k] = token?.Layout?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

export const genRadioStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
}) => CSSObject[] =
    ({clsPrefix, prefixCls, token}) => {
        return [{
            [`.${clsPrefix}-new-collapse-style.${prefixCls}-sider`]: {
                'transition': 'all .3s',
                'box-shadow': '0 2px 8px 0 rgba(7, 12, 20, .12)',

                [`.${prefixCls}-sider-zero-width-trigger`]: {
                    'position': 'absolute',
                    'right': -10,
                    'top': '50%',
                    'transform': 'translateY(-50%)',
                    'width': 10,
                    'height': 26,
                    'overflow': 'visible',

                    '&::before': {
                        'content': '""',
                        'display': 'block',
                        'position': 'absolute',
                        'left': 0,
                        'width': 12,
                        'height': 29,
                        'background-color': '#fff',
                        'transform': 'perspective(13px) scale(1.1, 1.3) rotateY(18deg)',
                        'box-shadow': '3px 0 3px -1px rgba(0, 0, 0, .15)',
                        'border-radius': '0 2px 2px 0',
                    },

                    [`&:hover .${clsPrefix}-sider-item`]: {
                        'fill': '#2468f2 !important',
                        'color': '#2468f2',
                    },

                    [`.${clsPrefix}-sider-item`]: {
                        'transform': 'rotate(90deg)',
                        'position': 'absolute',
                        'bottom': 0,
                        'top': 5,
                        'left': -11,
                        'width': 34,
                        'fill': '#b8babf',
                        'color': '#b8babf',
                        'vertical-align': 'middle',

                        [`&.${clsPrefix}-sider-item-collapse`]: {
                            'transform': 'rotate(-90deg)',
                            'top': -10,
                        },
                    },

                    [`.${clsPrefix}-item`]: {
                        color: token.colorGray7,
                        zIndex: 10,
                        rotate: '90deg',

                        [`&.${clsPrefix}-item-collapse`]: {
                            rotate: '270deg',
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
            genRadioStyle({
                clsPrefix, prefixCls, token, cssVar,
            }),
        ]
    );
    return wrapSSROsui;
};
