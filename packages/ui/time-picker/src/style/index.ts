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
    Object.keys(token.TimePicker || {}).forEach(k => {
        ret[k] = token?.TimePicker?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

export const genTimePickerStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
}) => CSSObject[] =
    ({clsPrefix, prefixCls, token}) => {
        return [{
            [`.${clsPrefix}`]: {
                // popup
                '&-dropdown': {
                    // 普通状态
                    // eslint-disable-next-line max-len
                    [`.${prefixCls}-panel-column > li.${prefixCls}-panel-cell:not(.${prefixCls}-panel-cell-disabled)`]: {
                        [`.${prefixCls}-panel-cell-inner`]: {
                            '&:hover': {
                                'background': token['itemHoverBg'],
                            },
                            '&:active': {
                                'color': token['themePrimaryColor'],
                                'background': token['colorGray4'],
                            },
                        },
                    },

                    [`.${prefixCls}-panel-column > li.${prefixCls}-panel-cell-disabled`]: {
                        [`.${prefixCls}-panel-cell-inner`]: {
                            '&:hover': {
                                'background': token['themeComponentBg'],
                            },
                        },
                    },

                    // selected状态
                    [`.${prefixCls}-panel-column > li.${prefixCls}-panel-cell-selected`]: {
                        [`.${prefixCls}-panel-cell-inner`]: {
                            'color': token['themePrimaryColor'],
                            'background': token['themeComponentBg'],

                            '&:hover': {
                                'background': token['itemHoverBg'],
                            },

                            '&:active': {
                                'background': token['colorGray4'],
                            },
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
            genTimePickerStyle({
                clsPrefix, prefixCls, token, cssVar,
            }),
        ]
    );
    return wrapSSROsui;
};
