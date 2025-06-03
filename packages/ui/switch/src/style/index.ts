import type {CSSObject} from '@ant-design/cssinjs';
import {useBrandContext} from '@osui/brand-provider';
import {useStyleRegister, useCacheToken} from '@ant-design/cssinjs';
import {theme, ThemeConfig} from 'antd';

const {useToken} = theme;
const switchPadding = '2px';

export const prepareComponentToken: (token: any) => any = token => {
    const ret: any = {};
    Object.keys(token).forEach(k => {
        ret[k] = token[k];
    });
    Object.keys(token.Switch || {}).forEach(k => {
        ret[k] = token?.Switch?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

export const genSwitchStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
    antPrefix: string;
}) => CSSObject[] =
    ({clsPrefix, prefixCls, token, antPrefix}) => {
        return [{
            [`.${clsPrefix}`]: {
                // switch高度变更
                'height': '20px',

                [`.${prefixCls}-handle`]: {
                    'height': '16px',
                    'width': '18px',

                    '&::before': {
                        'border-radius': '9px',
                    },
                },

                [`&.${prefixCls}`]: {
                    'min-width': token['switchMinWidth'],

                    [`&.${prefixCls}-small`]: {
                        'min-width': '28px',
                    },

                    '&-checked': {
                        'background-color': token['switchBgColor'],
                    },
                },

                [`.${prefixCls}-loading-icon`]: {
                    'vertical-align': 'top',
                },

                [`&.${prefixCls}-disabled`]: {
                    'opacity': token['switchDisabledOpacity'],

                    [`.${prefixCls}-handle::before`]: {
                        'box-shadow': 'none',
                    },
                },

                [`&.${prefixCls}-disabled.${prefixCls}-checked`]: {
                    'opacity': token['switchCheckedDisabledOpacity'],
                },

                [`.${prefixCls}-inner .osui-icon`]: {
                    // 用osui-icon的时候调整高度
                    'vertical-align': '-4px',
                },

                [`.${antPrefix}-click-animating-node`]: {
                    'animation': 'none',
                    'animation-fill-mode': 'none',
                },

                [`&.${prefixCls}:focus`]: {
                    'box-shadow': token['themeComponentFocusBoxShadow'],
                },

                [`&.${prefixCls}.${prefixCls}-checked:not(.${prefixCls}-disabled)`]: {
                    '&:hover': {
                        'background': token['switchCheckedHoverBg'],
                    },
                    '&:active': {
                        'background': token['switchCheckedActiveBg'],
                    },
                },

                [`&.${prefixCls}:not(.${prefixCls}-switch-disabled)`]: {
                    '&:hover': {
                        'background': token['switchHoverBg'],
                    },

                    '&:active': {
                        'background': token['switchActiveBg'],
                    },
                },

                [`&.${prefixCls}-checked .${prefixCls}-handle`]: {
                    'left': `calc(100% - 18px - ${switchPadding})`,
                },

                [`&.${prefixCls}-small.osui-switch.${prefixCls}-checked .${prefixCls}-handle`]: {
                    'left': `calc(100% - 12px - ${switchPadding})`,
                },

                [`.${prefixCls}-inner`]: {
                    'padding-inline-start': '25px',
                    'line-height': '19px',
                },

                [`&.${prefixCls}-checked .${prefixCls}-inner`]: {
                    'padding-inline-end': '25px',
                    'line-height': '21px',
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
            genSwitchStyle({
                clsPrefix, prefixCls, token, cssVar, antPrefix,
            }),
        ]
    );
    return wrapSSROsui;
};
