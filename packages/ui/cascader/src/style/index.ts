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
    Object.keys(token.Cascader || {}).forEach(k => {
        ret[k] = token?.Cascader?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

export const genCascaderStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
    antPrefix: string;
}) => CSSObject[] =
    ({clsPrefix, prefixCls, token, antPrefix}) => {
        const menuCss: Record<string, any> = {};
        for (let i = 10; i > 0; i--) {
            menuCss[`&.${clsPrefix}-menu-${i} .${clsPrefix}-menu`] = {
                height: `calc(${i} * 30px + 8px)`,
                'min-height': `calc(${i} * 30px + 8px)`,
            };
        }
        return [{
            // ...menuCss,
            // ".minHeightMixin": {
            //     ".loop": {
            //         [`&.${clsPrefix}-class-prefix-menu-@i.${prefixCls}-menu`]: {
            //             "height": "token['']",
            //             "min-height": "token['']"
            //         }
            //     }
            // },

            [`.${clsPrefix}`]: {
                'min-width': '240px',

                '&-label-divider-icon': {
                    'margin': '0 5px',
                    'color': token['colorGray6'],
                    'vertical-align': '-4px',
                },

                [`.${prefixCls}-picker-label`]: {
                    'padding': '0 30px 0 10px',
                },

                [`.${prefixCls}-picker-arrow"`]: {
                    'right': '10px',
                },

                '&-menu': {
                    // ...menuCss,

                    [`&.${prefixCls}-menu`]: {
                        'min-width': '112px',
                    },
                    [`&.${prefixCls}-menus.@ant-prefix-cascader-menu`]: {
                        'min-width': '112px',
                    },
                    [`.${prefixCls}-menu-item:not[object Object]:hover`]: {
                        'background-color': token['colorBrand1'],
                    },
                    [`.${prefixCls}-menu-item-active:not(.${prefixCls}-cascader-menu-item-disabled)`]: {
                        'color': token['themePrimaryColor'],

                        '.${prefixCls}-menu-item-expand-icon': {
                            'color': token['themePrimaryColor'],
                        },
                    },
                    [`.${prefixCls}-menu-item-active:not(.${prefixCls}-cascader-menu-item-disabled):hover`]: {
                        'color': token['themePrimaryColor'],

                        '.${prefixCls}-menu-item-expand-icon': {
                            'color': token['themePrimaryColor'],
                        },
                    },
                    [`.${prefixCls}-menu-item-expand .${prefixCls}-cascader-menu-item-expand-icon`]: {
                        'right': '7px',
                        'color': token['themeIconColor'],
                        'font-size': '14px',
                    },

                    [`.${prefixCls}-menu-item-loading-icon`]: {
                        'right': '7px',
                        'color': token['themeIconColor'],
                        'font-size': '14px',
                    },
                },

                // eslint-disable-next-line max-len
                [`&.${antPrefix}-select-open.@ant-prefix-select-arrow:not(.${antPrefix}-select-arrow-loading) > svg`]: {
                    'transform': token['selectArrowOpenTransformRotate'],
                },
                [`.${antPrefix}x-select-arrow`]: {
                    'svg': {
                        'font-size': '14px',
                        'transition': token['selectArrowTransition'],
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
            genCascaderStyle({
                clsPrefix, prefixCls, token, cssVar, antPrefix,
            }),
        ]
    );
    return wrapSSROsui;
};
