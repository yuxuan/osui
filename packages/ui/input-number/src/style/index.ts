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
    Object.keys(token.InputNumber || {}).forEach(k => {
        ret[k] = token?.InputNumber?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

export const genInputNumberStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
    antPrefix: string;
}) => CSSObject[] =
    ({clsPrefix, prefixCls, token, antPrefix}) => {
        return [{
            [`.${clsPrefix}`]: {
                'width': token['inputNumberWidth'],

                [`.${prefixCls}-handler`]: {
                    'transition': 'none',
                },

                [`&.${prefixCls}-sm input`]: {
                    'height': token['inputNumberInputHeightSm'],
                },

                [`&.${prefixCls}-lg input`]: {
                    'height': token['inputNumberInputHeightLg'],
                },

                [`.${prefixCls} input`]: {
                    'height': token['inputNumberInputHeight'],
                },

                [`.${prefixCls}-handler-up:hover`]: {
                    'height': '50% !important',
                },

                [`.${prefixCls}-handler-down:hover`]: {
                    'height': '50% !important',
                },

                [`.${prefixCls}-handler-wrap:hover .@ant-prefix-input-number-handler`]: {
                    'height': '50% !important',
                },

                [`.${prefixCls}-handler-up-inner`]: {
                    // 修复箭头不居中的问题
                    'line-height': 12,
                },

                [`.${prefixCls}-handler-down-inner`]: {
                    // 修复箭头不居中的问题
                    'line-height': 12,
                },

                [`.${prefixCls}-handler:hover .${prefixCls}-handler-up-inner`]: {
                    'color': token['themePrimaryColorHover'],
                },

                [`.${prefixCls}-handler:hover .${prefixCls}-handler-down-inner`]: {
                    'color': token['themePrimaryColorHover'],
                },

                [`.${prefixCls}-handler:active`]: {
                    'background': token['colorBrand1'],
                },

                [`&.${prefixCls}.@ant-prefix-input-number-disabled`]: {
                    'border-color': token['themeBorderColorDisabled'],
                },

                '&-compact': {
                    [`".${antPrefix}-btn-default.osui-button-disabled`]: {
                        'border': `1px solid ${token['themeBorderColorDisabled']}`,
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
            genInputNumberStyle({
                clsPrefix, prefixCls, token, cssVar, antPrefix,
            }),
        ]
    );
    return wrapSSROsui;
};
