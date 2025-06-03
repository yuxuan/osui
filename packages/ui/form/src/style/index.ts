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
    Object.keys(token.Form || {}).forEach(k => {
        ret[k] = token?.Form?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

const osuiIconSpin = new Keyframes('osui-icon-spin', {
    '0%': {
        transform: 'rotate(0deg)',
    },

    '100%': {
        transform: 'rotate(360deg)',
    },
});

const errorMask = 'url(\'data:image/svg+xml;utf8,<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><defs><style/></defs><path d="M421.504 218.56a127.872 127.872 0 01180.992 0l203.008 202.944a127.872 127.872 0 010 181.056L602.496 805.44a127.872 127.872 0 01-180.992 0L218.496 602.56a127.872 127.872 0 010-181.056zM512 640l-6.272.448a42.688 42.688 0 00-36.416 42.24l.512 6.272A42.688 42.688 0 00512 725.312l6.272-.448a42.688 42.688 0 0036.416-42.24l-.512-6.272A42.688 42.688 0 00512 640zm0-341.312l-6.272.448a42.688 42.688 0 00-36.416 42.24v213.312c0 23.552 19.136 42.624 42.688 42.624l6.272-.448a42.688 42.688 0 0036.416-42.24V341.376A42.688 42.688 0 00512 298.688z"/></svg>\') no-repeat 50% 50%';
const warningMask = 'url(\'data:image/svg+xml;utf8,<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><defs><style/></defs><path d="M452.096 239.68c33.024-62.336 86.848-62.592 120 0l264 498.624c33.024 62.336 2.432 113.344-68.544 113.344H256.64c-70.848 0-101.696-50.752-68.544-113.28zm60.032 432.96l-6.336.448a42.688 42.688 0 00-36.352 42.24l.448 6.272a42.688 42.688 0 0042.24 36.352l6.272-.448a42.688 42.688 0 0036.352-42.24l-.448-6.272a42.688 42.688 0 00-42.24-36.352zm0-341.312l-6.336.448a42.688 42.688 0 00-36.352 42.24v213.312c0 23.552 19.136 42.624 42.688 42.624l6.272-.448a42.688 42.688 0 0036.352-42.24V374.016a42.688 42.688 0 00-42.624-42.624z"/></svg>\') no-repeat 50% 50%';
const validatingMask = 'url(\'data:image/svg+xml;utf8,<svg class="osui-spin-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><defs><style/></defs><path d="M521.472 64.128L512 64A448 448 0 0064 512a37.12 37.12 0 1074.24 0A373.76 373.76 0 01512 138.24l20.48.576A373.76 373.76 0 01512 885.696 37.12 37.12 0 10512 960a448 448 0 009.472-895.872z"/></svg>\') no-repeat 50% 50%';
export const genFormStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
}) => CSSObject[] =
    ({clsPrefix, prefixCls, token}) => {
        return [{
            [`.${clsPrefix}`]: {
                [`.${prefixCls}-item-explain`]: {
                    'font-size': 12,
                },

                [`.${prefixCls}-item-has-error .${prefixCls}-item-explain`]: {
                    'div::before': {
                        'display': token['formItemExplainIconDisplay'],
                        'width': 16,
                        'height': 16,
                        'margin-right': 2,
                        'vertical-align': 'middle',
                        'background-color': token['themeComponentBg'],
                        'content': '""',
                        '-webkit-mask': errorMask,
                        'mask': errorMask,
                        '-webkit-mask-size': 'cover',
                        'mask-size': 'cover',
                    },
                },

                [`.${prefixCls}-item-has-warning .${prefixCls}-item-explain`]: {
                    'div::before': {
                        'display': token['formItemExplainIconDisplay'],
                        'width': 16,
                        'height': 16,
                        'margin-right': 2,
                        'vertical-align': 'middle',
                        'background-color': token['themeWarningColor'],
                        'content': '""',
                        '-webkit-mask': warningMask,
                        'mask': warningMask,
                        '-webkit-mask-size': 'cover',
                        'mask-size': 'cover',
                    },
                },

                [`.${prefixCls}-item-is-validating .${prefixCls}-item-explain`]: {
                    'div::before': {
                        'display': token['formItemExplainIconDisplay'],
                        'width': 16,
                        'height': 16,
                        'margin-right': 2,
                        'vertical-align': 'middle',
                        'background-color': token['themeTextColor'],
                        'animationName': osuiIconSpin,
                        animationDuration: '1s',
                        animationIterationCount: 'infinite',
                        animationTimingFunction: 'linear',
                        'content': '""',
                        '-webkit-mask': validatingMask,
                        'mask': validatingMask,
                        '-webkit-mask-size': 'cover',
                        'mask-size': 'cover',
                    },
                },

                [`.${prefixCls}-item-extra`]: {
                    'margin-top': 8,
                    'color': token['formItemExtraColor'],
                    'font-size': 12,
                },

                '&-validate-message-inline': {
                    [`&.${prefixCls}-item-with-help`]: {
                        'margin-bottom': 20,
                    },

                    [`.${prefixCls}-item-explain`]: {
                        'position': 'absolute',
                        'bottom': '50%',
                        'left': '100%',
                        'width': '50%',
                        'max-width': 200,
                        'padding-left': 8,
                    },

                    [`&.${clsPrefix}-validate-message-has-hint`]: {
                        [`.${prefixCls}-item-explain`]: {
                            'top': 6,

                            // 调整当有hint的时候，校验信息有一个空位置
                            '& + div': {
                                'height': '0 !important',
                            },
                        },
                    },
                },

                // 对齐Antd label
                [`&.has-required-item .${prefixCls}-item-label > label:not(.${prefixCls}-item-required)::before`]: {
                    'margin-left': 8,
                    'content': '""',
                },

                // tooltip
                // vertical的时候
                [`&.${prefixCls}-vertical .${prefixCls}-item-label > label .${prefixCls}-item-tooltip`]: {
                    'position': 'static',
                },

                [`.${prefixCls}-item-label > label .${prefixCls}-item-tooltip`]: {
                    'position': 'absolute',
                    'right': 0,
                },

                // 水平表单，form-control前面空16px
                [`&.${prefixCls}-horizontal > .${prefixCls}-row > .${prefixCls}-item-control`]: {
                    'margin-left': 16,
                },

                [`.${prefixCls}-item-label > label`]: {
                    'margin-right': 8,

                    '&::after': {
                        // 因为冒号我们自己实现了，margin会占位影响计算
                        'margin': 0,
                    },

                    // 红星在顶部
                    '&.multiple-line': {
                        '&::before': {
                            'align-self': 'flex-start',
                        },
                    },

                    [`.${prefixCls}-item-tooltip`]: {
                        'color': token['colorGray7'],
                        'cursor': 'default',

                        '&:hover': {
                            'color': token['themePrimaryColorHover'],
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
            genFormStyle({
                clsPrefix, prefixCls, token, cssVar,
            }),
        ]
    );
    return wrapSSROsui;
};
