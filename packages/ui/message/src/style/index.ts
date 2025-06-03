import type {CSSObject} from '@ant-design/cssinjs';
import {Keyframes} from '@ant-design/cssinjs';
import {useBrandContext} from '@osui/brand-provider';
import {useStyleRegister, useCacheToken} from '@ant-design/cssinjs';
import {theme, ThemeConfig} from 'antd';

const {useToken} = theme;

export const prepareComponentToken: (token: any) => any = token => {
    const ret: any = {};
    Object.keys(token).forEach(k => {
        ret[k] = token[k];
    });
    Object.keys(token.Message || {}).forEach(k => {
        ret[k] = token?.Message?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

const MessageMoveRightIn = new Keyframes('MessageMoveRightIn', {
    '0%': {
        transform: 'translateX(100%)',
        'transform-origin': '0 0',
        opacity: 0,
    },

    '100%': {
        transform: 'translateX(0%)',
        'transform-origin': '0 0',
        opacity: 1,
    },
});

const MessageMoveRightOut = new Keyframes('MessageMoveRightOut', {
    '0%': {
        transform: 'translateX(0%)',
        'transform-origin': '0 0',
        opacity: 1,
    },

    '100%': {
        transform: 'translateX(100%)',
        'transform-origin': '0 0',
        opacity: 0,
    },
});


export const genMessageStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
}) => CSSObject[] =
    ({clsPrefix, prefixCls, token: tokenIn}) => {
        const token = prepareComponentToken(tokenIn);
        return [{
            [`.${prefixCls}`]: {
                lineHeight: token.lineHeight,
                [`.${clsPrefix}:first-child`]: {
                    'margin-top': token.messageMarginTop,
                },

                [`.${prefixCls}-notice-wrapper .${clsPrefix} .${prefixCls}-notice-content`]: {
                    padding: '9px 12px',
                },
            },

            [`.${clsPrefix}`]: {
                // message在右侧
                '&-message-at-right': {
                    // 是否message从右面出来
                    [`&.${prefixCls}-notice`]: {
                        'text-align': 'right',

                        'animationName': MessageMoveRightIn,
                        'animation-duration': '.3s',
                    },

                    [`&.${prefixCls}-notice.${prefixCls}-move-up-leave.${prefixCls}-move-up-leave-active`]: {
                        'animationName': MessageMoveRightOut,
                        'animation-duration': '.3s',
                    },
                },

                [`&.${clsPrefix}-message-with-title`]: {
                    [`.${prefixCls}-notice-content`]: {
                        'padding': 16,
                    },

                    '&-only': {
                        [`.${clsPrefix}-message-content-title`]: {
                            'margin-bottom': 0,
                        },
                    },
                },

                // 对original的样式patch
                [`.${prefixCls}-custom-content`]: {
                    'display': 'flex',
                    'align-items': 'flex-start',
                    'max-width': 400,
                    'color': token.themeColorText,
                    'text-align': 'left',

                    '> svg.osui-icon': {
                        'flex-shrink': 0,
                        'margin-top': 4,
                        'padding-right': token.alertIconPaddingRight,
                    },

                    '.close-icon': {
                        'margin-top': 5,
                        'margin-left': 8,
                        'cursor': 'pointer',
                    },
                },

                [`.${clsPrefix}-message-content`]: {
                    'text-align': 'left',

                    '&-inline': {
                        'display': 'flex',
                        'align-items': 'flex-start',
                    },

                    '&-title': {
                        'display': 'flex',
                        'align-items': 'flex-start',
                        'margin-bottom': 12,

                        '&-text': {
                            'flex': 1,
                            'font-weight': '600',
                            'font-size': 14,

                            'a': {
                                'font-weight': '400',
                            },
                        },
                    },

                    '.close-icon': {
                        'display': 'flex',

                        'svg': {
                            'width': 14,
                            'height': 14,
                            'color': token.themeIconColor,
                        },
                    },
                },

                [`.${clsPrefix}-count-down-close`]: {
                    'margin-left': 8,
                    'color': token.themePlaceholderColor,
                },

                [`.${clsPrefix}-message-notify`]: {
                    [`.${prefixCls}-notice-content`]: {
                        '.@{osui-message-class-prefix}-message-content-title-text': {
                            color: token.themeIconColor,
                            'font-family': token.themeFontFamily,

                            '&::before': {
                                content: '"["',
                            },

                            '&::after': {
                                content: '"]"',
                            },
                        },

                        'border': `1px solid ${token.themeBorderColorBase}`,
                    },
                },

                // 颜色
                [`&.${clsPrefix}-message-success`]: {
                    [`.${prefixCls}-notice-content`]: {
                        'background': token.messageAlertSuccessBgColor,
                        'border': `1px solid ${token.messageAlertSuccessBorderColor}`,
                    },
                },

                [`&.${clsPrefix}-message-warning`]: {
                    [`.${prefixCls}-notice-content`]: {
                        'background': token.messageAlertWarningBgColor,
                        'border': `1px solid ${token.messageAlertWarningBorderColor}`,
                    },
                },

                [`&.${clsPrefix}-message-error`]: {
                    [`.${prefixCls}-notice-content`]: {
                        'background': token.messageAlertErrorBgColor,
                        'border': `1px solid ${token.messageAlertErrorBorderColor}`,
                    },
                },

                [`&.${clsPrefix}-message-info`]: {
                    [`.${prefixCls}-notice-content`]: {
                        'background': token.messageAlertInfoBgColor,
                        'border': `1px solid ${token.messageAlertInfoBorderColor}`,
                    },
                },

                [`&.${clsPrefix}-message-loading`]: {
                    [`.${prefixCls}-notice-content`]: {
                        'background': token.messageAlertInfoBgColor,
                        'border': `1px solid ${token.messageAlertInfoBorderColor}`,
                    },
                },

                [`.${clsPrefix}-infoIcon`]: {
                    'color': token.themeInfoColor,
                    'align-self': 'flex-start',
                },

                [`.${clsPrefix}-successIcon`]: {
                    'color': token.themeSuccessColor,
                    'align-self': 'flex-start',
                },

                [`.${clsPrefix}-errorIcon`]: {
                    'color': token.themeErrorColor,
                    'align-self': 'flex-start',
                },

                [`.${clsPrefix}-warningIcon`]: {
                    'color': token.themeWarningColor,
                    'align-self': 'flex-start',
                },
            },
        }];
    };

export const useStyle = (
    clsPrefix: string,
    prefixCls: string,
    cssVar: ThemeConfig['cssVar'],
    antPrefix: string,
    tokenIn?: any
) => {
    const outTheme = useBrandContext();
    const hashed = outTheme.designToken?.hashed;
    const {token: outerToken, theme, hashId} = useToken();

    const [token] = useCacheToken(
        theme as any,
        [
            prepareComponentToken(tokenIn || outerToken),
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
            genMessageStyle({
                clsPrefix, prefixCls, token, cssVar,
            }),
        ]
    );
    return wrapSSROsui;
};
