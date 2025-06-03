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
    Object.keys(token.Modal || {}).forEach(k => {
        ret[k] = token?.Modal?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

export const genModalStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
    antPrefix: string;
}) => CSSObject[] =
    ({clsPrefix, prefixCls, token, antPrefix}) => {
        const confirmCss = {
            [`.${prefixCls}-content`]: {
                'border-radius': token['borderRadiusBase'],
                'padding': '0 0',
            },

            [`&.${prefixCls} .${prefixCls}-body`]: {
                'padding': 24,
            },

            [`.${prefixCls}-confirm-body`]: {
                'min-height': 80,
                'border-bottom': token['modalBodyBorderBottom'],
                'align-items': 'start',

                '& > svg.osui-icon': {
                    'float': 'left',
                    'width': token['modalConfirmIconWidth20'] || '20px',
                    'height': token['modalConfirmIconHeight20'] || '20px',
                    'margin-right': 12,
                    'font-size': 14,
                },
            },

            [`&.${prefixCls}-confirm .${prefixCls}-confirm-body`]: {
                'min-height': 80,
                'border-bottom': token['modalBodyBorderBottom'],
                'align-items': 'start',
                '&svg.osui-icon': {
                    'float': 'left',
                    'width': token['modalConfirmIconWidth20'],
                    'height': token['modalConfirmIconHeight20'],
                    'margin-right': 12,
                    'font-size': 14,
                },
            },

            [`.${prefixCls}-confirm-content`]: {
                'flex': '1',
            },

            [`.${prefixCls}-confirm-body .${prefixCls}-confirm-title`]: {
                'font-size': 16,
                'flex': 'auto',
            },

            [`.${prefixCls}-confirm-body .${prefixCls}-confirm-content`]: {
                'margin-top': 0,
            },

            [`&.${prefixCls}-confirm-warning .${prefixCls}-confirm-body > svg.osui-icon`]: {
                'color': token['themeWarningColor'],
            },

            [`&.${prefixCls}-confirm-confirm .${prefixCls}-confirm-body > svg.osui-icon`]: {
                'color': token['themeWarningColor'],
            },

            [`&.${prefixCls}-confirm-success .${prefixCls}-confirm-body > svg.osui-icon`]: {
                'color': token['themeSuccessColor'],
            },

            [`&.${prefixCls}-confirm-info .${prefixCls}-confirm-body > svg.osui-icon`]: {
                'color': token['themeInfoColor'],
            },

            [`&.${prefixCls}-confirm-error .${prefixCls}-confirm-body > svg.osui-icon`]: {
                'color': token['themeErrorColor'],
            },

            // eslint-disable-next-line max-len
            [`.${prefixCls}-confirm-body > svg.osui-icon + .${prefixCls}-confirm-title + .${prefixCls}-confirm-content`]: {
                'margin-top': 8,
                'margin-left': 32,
            },

            [`.${prefixCls}-close`]: {
                'top': token['modalCloseTop'],
                'right': token['modalCloseRight'],
                'height': 10,
                'width': 10,

                [`.${prefixCls}-close-x`]: {
                    'line-height': 10,
                },
            },

            [`.${prefixCls}-confirm-btns`]: {
                'margin-top': 24,

                [`.${antPrefix}-btn-default`]: {
                    'border-color': '#d4d6d9',
                },

                [`.${antPrefix}-btn-primary`]: {
                    'border-color': '#2468f2',
                    'box-shadow': '0 2px 0 rgba(0, 0, 0, .045)',
                },
            },

            [`.${prefixCls}-confirm-btns .${antPrefix}-btn`]: {
                'width': token['modalFooterBtnWidth'],
            },

            [`.${prefixCls}-confirm-btns .${antPrefix}-btn + .${antPrefix}-btn`]: {
                'margin-left': token['modalFooterButtonGroupGap'],
            },
        };

        return [{
            [`.${clsPrefix}`]: {
                [`.${prefixCls}-header`]: {
                    'padding': token['modalHeaderPadding'],
                    'border-radius': `${token['borderRadiusBase']} ${token['borderRadiusBase']} 0 0`,
                    'border-bottom': '1px solid #fff',
                },

                [`.${prefixCls}-body`]: {
                    'max-height': token['modalBodyMaxHeight'],
                    'margin': token['modalBodyMargin'],
                    'padding': token['modalBodyPadding'],
                    'overflow': 'auto',
                    'border-bottom': token['modalBodyBorderBottom'],
                },

                [`.${prefixCls}-footer`]: {
                    'padding': token['modalFooterPadding'],
                    'border-top': token['modalFooterBorderTop'],

                    [`.${antPrefix}-btn + .${antPrefix}-btn:not(.${antPrefix}-dropdown-trigger)`]: {
                        'margin-left': token['modalFooterButtonGroupGap'],
                    },
                },

                '&-body-border': {
                    [`.${prefixCls}-body`]: {
                        'border-top': `1px solid  ${token['themeBorderColorSplit']}`,
                        'border-bottom': `1px solid ${token['themeBorderColorSplit']}`,
                    },
                },

                [`.${prefixCls}-title`]: {
                    'max-width': '95%',
                    'font-weight': '600',
                    'font-size': token['modalTitleFontSize'],
                },

                [`.${prefixCls}-content`]: {
                    'border-radius': token['borderRadiusBase'],
                    'padding': '0 0',

                    [`.${prefixCls}-close`]: {
                        'top': token['modalCloseTop'],
                        'right': token['modalCloseRight'],
                        'height': 10,
                        'width': 10,

                        [`.${prefixCls}-close-x`]: {
                            'line-height': 10,
                        },

                        'svg': {
                            'height': token['modalCloseIconHeight'],
                            'color': token['themeIconColor'],
                        },
                    },
                },

                '&-full-screen': {
                    'width': '100vw !important',
                    'max-width': '100vw',

                    [`.${prefixCls}-content`]: {
                        'width': '100vw',
                        'height': '100vh',
                        'border-radius': '0',
                    },

                    [`.${prefixCls}-body`]: {
                        'height': 'calc(100vh - 60px)',
                        'max-height': 'calc(100vh - 60px)',
                        'border-radius': '0',
                    },
                },

                [`.${prefixCls}-confirm-btns`]: {
                    'border-color': '#d4d6d9',
                },
            },

            // Confirm
            [`.${clsPrefix}-confirm`]: confirmCss,
            [`.${prefixCls}-confirm`]: confirmCss,
        }] as CSSObject[];
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
            genModalStyle({
                clsPrefix, prefixCls, token, cssVar, antPrefix,
            }),
        ]
    );
    return wrapSSROsui;
};
