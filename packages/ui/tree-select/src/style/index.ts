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
    Object.keys(token.TreeSelect || {}).forEach(k => {
        ret[k] = token?.TreeSelect?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

export const genTreeSelectStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
}) => CSSObject[] =
    ({clsPrefix, prefixCls, token}) => {
        return [{
            [`.${clsPrefix}`]: {
                '&-dropdown': {
                    [`.${prefixCls}-node-content-wrapper.${prefixCls}-node-selected`]: {
                        'color': token['treeSelectSelectedColor'],
                        'background-color': `${token['treeNodeSelectedBg']} !important`,
                    },

                    [`svg.${clsPrefix}-switcherIcon`]: {
                        'width': 14,
                        'height': 14,
                        'color': token['themeIconColor'],
                    },
                },
            },

            [`.${clsPrefix}-dropdown`]: {
                // #region 调整箭头距离顶部位置
                [`.${prefixCls}-switcher`]: {
                    'top': 3,
                },

                // #endregion
                // #region 调整点击和hover的效果
                [`.${prefixCls}node:not(.${prefixCls}-treenode-disabled)`]: {
                    [`.${prefixCls}-node-content-wrapper`]: {
                        [`&:not(.${prefixCls}-node-selected):active`]: {
                            'background-color': token['colorGray4'],
                        },
                    },

                    [`.${prefixCls}-node-content-wrapper-normal`]: {
                        [`&:not(.${prefixCls}-node-selected):active`]: {
                            'background-color': token['colorGray4'],
                        },
                    },
                },

                [`.${prefixCls}-node-selected`]: {
                    '&:hover': {
                        'background': token['colorBrand1'],
                    },

                    '&:active': {
                        'background': token['colorBrand2'],
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
            genTreeSelectStyle({
                clsPrefix, prefixCls, token, cssVar,
            }),
        ]
    );
    return wrapSSROsui;
};
