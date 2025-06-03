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
    Object.keys(token.Steps || {}).forEach(k => {
        ret[k] = token?.Steps?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

export const genStepsStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
}) => CSSObject[] =
    ({clsPrefix, prefixCls, token}) => {
        return [{
            [`.${clsPrefix}`]: {
                // == 对navigation模式下的调整，去掉了下划线 ==
                [`&.${prefixCls}-navigation .${prefixCls}-item-active`]: {
                    '&::before': {
                        'height': 0,
                    },
                },

                [`&.${prefixCls}-navigation .${prefixCls}-item`]: {
                    '&::before': {
                        'transition': 'none',
                    },

                    '&:last-child::after': {
                        'display': 'none',
                    },

                    '&::after': {
                        'position': 'absolute',
                        'top': 5,
                        'display': 'inline-block',
                        'width': 14,
                        'height': 14,
                        'margin-top': 0,
                        'margin-left': 0,
                        'vertical-align': 'middle',
                        'background-color': token['themeIconColor'],
                        'transform': 'none',
                        'content': '""',
                        '-webkit-mask': "url('./arrow.svg') no-repeat 50% 50%",
                        'mask': "url('./arrow.svg') no-repeat 50% 50%",
                        '-webkit-mask-size': 'cover',
                        'mask-size': 'cover',
                    },
                },
                // == 结束 ==

                // == 对title调整字体行高 ==
                [`.${prefixCls}-item .${prefixCls}-item-title`]: {
                    'font-size': 14,
                    'line-height': token['stepsItemTitleHeight'],

                    '&::after': {
                        'top': 10,
                    },
                },
                // == 结束 ==

                // == 对description调整字体行高 ==
                [`.${prefixCls}-item .${prefixCls}-item-description`]: {
                    'font-size': 12,
                },
                // == 结束 ==

                // == 对垂直模式调整竖线位置 ==
                // eslint-disable-next-line max-len
                [`&.${prefixCls}-vertical > .${prefixCls}-item > .${prefixCls}-item-container > .${prefixCls}-item-tail`]: {
                    'left': 14,
                },
                // == 结束 ==

                // == process 颜色调整 ==
                [`.${prefixCls}-item-process`]: {
                    [`.${prefixCls}-item-container`]: {
                        [`.${prefixCls}-item-icon`]: {
                            'color': token['stepsItemActiveIconColor'],
                            'background': token['stepsItemActiveIconBgColor'],
                            'border-color': token['stepsItemActiveIconBgColor'],
                        },
                    },
                },

                [`.${prefixCls}-item-wait`]: {
                    [`> .${prefixCls}-item-container`]: {
                        [`> .${prefixCls}-item-icon`]: {
                            'border-color': token['stepsItemIconColor'],

                            [`.${prefixCls}-icon`]: {
                                'color': token['stepsItemTitleColor'],
                            },
                        },

                        [`> .${prefixCls}-item-content > .${prefixCls}-item-title`]: {
                            'color': token['stepsItemTitleColor'],
                        },
                    },
                },
                // == 结束 ==

                // == icon内文字行高 ==
                [`.${prefixCls}-item-icon`]: {
                    'line-height': '26px',
                    'height': '28px',
                    'width': '28px',
                },

                // == 调整错误状态以及错误状态内行高 ==
                [`.${prefixCls}-item-error`]: {
                    [`.${prefixCls}-item-icon`]: {
                        'line-height': '28px',
                        'background-color': '#fff',

                        [`.${prefixCls}-icon`]: {
                            'color': token['errorColor'],
                        },
                    },

                    // 当前错误状态
                    [`&.${prefixCls}-item-active`]: {
                        [`.${prefixCls}-item-icon`]: {
                            'background-color': token['themeErrorColor'],

                            [`.${prefixCls}-icon`]: {
                                'color': token['themeComponentBg'],
                            },
                        },
                    },
                },

                // == 调整已完成状态以及已完成状态内行高 ==
                [`.${prefixCls}-item-finish`]: {
                    [`> .${prefixCls}-item-container`]: {
                        [`> .${prefixCls}-item-icon`]: {
                            'line-height': '28px',
                            'border-color': token['colorGray7'],

                            [`.${prefixCls}-icon`]: {
                                'color': token['colorGray7'],
                            },
                        },
                    },
                },

                // ==================== hover ====================
                [`&.${prefixCls} .${prefixCls}-item`]: {
                    [`.${prefixCls}-item-finish`]: {
                        '&:hover': {
                            'border-color': token['colorGray7'],
                        },
                    },
                },

                // 非active状态下的hover
                [`&.${prefixCls} .${prefixCls}-item:not(.${prefixCls}-item-active):not(.${prefixCls}-item-process)`]: {
                    [`&.${prefixCls}-item-finish`]: {
                        [`> .${prefixCls}-item-container[role='button']`]: {
                            [`&:hover > .${prefixCls}-item-icon`]: {
                                'background-color': token['colorBrand1'],
                                'border-color': token['colorBrand5'],
                            },
                            [`&:active >  .${prefixCls}-item-icon`]: {
                                'background-color': token['colorBrand2'],
                                'border-color': token['colorBrand7'],
                            },
                        },
                    },
                    [`&.${prefixCls}-item-wait`]: {
                        [`> .${prefixCls}-item-container[role='button']`]: {
                            [`&:hover > .${prefixCls}-item-icon`]: {
                                'background-color': token['colorBrand1'],
                                'border-color': token['colorBrand5'],
                            },
                            [`&:active > .${prefixCls}-item-icon`]: {
                                'background-color': token['colorBrand2'],
                                'border-color': token['colorBrand7'],
                            },
                        },
                    },

                    [`&.${prefixCls}-item-error`]: {
                        [`> .${prefixCls}-item-container[role='button']`]: {
                            '&:hover': {
                                [`> .${prefixCls}-item-icon`]: {
                                    'background-color': token['colorError1'],
                                    'border-color': token['colorError5'],

                                    [`.${prefixCls}-icon`]: {
                                        'color': token['colorError5'],
                                    },
                                },

                                [`.${prefixCls}-item-title`]: {
                                    'color': token['colorError5'],
                                },
                                [`.${prefixCls}-item-description`]: {
                                    'color': token['colorError5'],
                                },
                            },
                            [`&:active > .${prefixCls}-item-icon`]: {
                                'background-color': token['colorError2'],
                                'border-color': token['colorError7'],

                                [`.${prefixCls}-icon`]: {
                                    'color': token['colorError7'],
                                },
                            },
                        },
                    },
                },
                // == 结束hover调整 ==

                // == dot状态 ==
                [`&.${prefixCls}.${prefixCls}-dot`]: {
                    [`.${prefixCls}-item`]: {
                        [`.${prefixCls}-item-title`]: {
                            'font-size': '12px',
                        },
                        [`.${prefixCls}-item-description`]: {
                            'font-size': '12px',
                        },
                    },
                },

                [`&.${prefixCls}-dot .${prefixCls}-item-tail`]: {
                    'top': '3px',
                    '&::after': {
                        'height': '1px',
                    },
                },

                [`&.${prefixCls}-dot.${prefixCls}-small .${prefixCls}-item-tail`]: {
                    'top': '3px',
                    '&::after': {
                        'height': '1px',
                    },
                },

                // eslint-disable-next-line max-len
                [`&.${prefixCls}-vertical.${prefixCls}-dot .${prefixCls}-item > .${prefixCls}-item-container > .${prefixCls}-item-tail`]: {
                    'left': '-9px',

                    '&::after': {
                        'margin-inline-start': '12px',
                    },
                },
                // == 结束dot状态调整 ==

                [`&.${prefixCls}-label-vertical`]: {
                    [`.${prefixCls}-item-content`]: {
                        'margin-top': '8px',
                    },
                    [`.${prefixCls}-item-icon`]: {
                        'margin-inline-start': '42px',
                    },
                    [`&.${prefixCls}-dot .${prefixCls}-item-icon`]: {
                        'margin-inline-start': '67px',
                    },
                },
            },

            // ==================== Compact 模式 ====================

            [`.${clsPrefix}-compact`]: {
                [`&.${prefixCls}.${prefixCls}-horizontal.osui-steps`]: {
                    'display': 'block',
                },
                [`&.${prefixCls}-navigation .${prefixCls}-item-container`]: {
                    'margin-right': '10px',
                    'margin-left': '10px',
                },

                [`.${prefixCls}-horizontal:not(.${prefixCls}-label-vertical) .${prefixCls}-item`]: {
                    'padding-left': '10px',

                    '&:first-child': {
                        [`.${prefixCls}-item-container`]: {
                            'margin-left': 0,
                        },
                    },
                },

                [`.${prefixCls}-navigation .${prefixCls}-item::after`]: {
                    'margin-left': '-4px',
                },
            },

            // eslint-disable-next-line max-len
            [`.${prefixCls}-label-vertical:not(.${prefixCls}-dot) .${prefixCls}-item-container .${prefixCls}-item-tail`]: {
                'margin-inline-start': '58px',
                'padding-top': '3.5px',
                'padding-bottom': '3.5px',
            },

            [`&.${prefixCls}`]: {
                [`&.${prefixCls}-dot`]: {
                    [`.${prefixCls}-item-icon`]: {
                        'height': '8px',
                        'width': '8px',
                    },

                    [`.${prefixCls}-item:first-child .${prefixCls}-icon-dot`]: {
                        'left': '2px',
                    },

                    [`.${prefixCls}-item-container`]: {
                        [`.${prefixCls}-item-tail::after`]: {
                            'width': 'calc(100% - 20px)',
                        },
                    },

                },
                [`&:not(.${prefixCls}-dot) .${prefixCls}-item .${prefixCls}-item-tail`]: {
                    'top': '12px',
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
            genStepsStyle({
                clsPrefix, prefixCls, token, cssVar,
            }),
        ]
    );
    return wrapSSROsui;
};
