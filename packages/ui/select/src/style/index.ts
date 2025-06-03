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
    Object.keys(token.Select || {}).forEach(k => {
        ret[k] = token?.Select?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

export const genSelectStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
}) => CSSObject[] =
    ({clsPrefix, prefixCls, token}) => {
        const checkboxSize = '16px';

        return [{
            [`.${clsPrefix}`]: {
                // placeholder
                [`.${prefixCls}-selection-placeholder`]: {
                    'color': token['themePlaceholderColor'],
                    'opacity': '1',
                },
                // disable
                [`&.${prefixCls}-disabled.${prefixCls}-single:not(.${prefixCls}-customize-input)`]: {
                    [`.${prefixCls}-selector`]: {
                        'color': token['themeDisabledColor'],
                        'background': token['selectDisabledBg'],
                    },

                    [`.${prefixCls}-arrow`]: {
                        'color': token['themeDisabledColor'],
                    },
                },

                // arrow icon
                [`.${prefixCls}-arrow`]: {
                    'top': token['selectArrowTop'],
                    'right': 11,
                    'width': 14,
                    'height': 14,
                    'color': token['themeIconColor'],

                    'svg': {
                        'font-size': 14,
                        'transition': token['selectArrowTransition'],
                    },
                },

                // 在search时open之后颜色不能为text-color，把search排除
                // eslint-disable-next-line max-len
                [`&:not(.${prefixCls}-show-search).${prefixCls}-single.${prefixCls}-open .${prefixCls}-selection-item`]: {
                    'color': token['themeTextColor'],
                },

                // size
                [`&.${prefixCls}-sm`]: {
                    [`.${prefixCls}-arrow`]: {
                        'top': token['selectArrowTopSmall'],
                    },

                    [`.${prefixCls}-arrow + .${prefixCls}-clear`]: {
                        'top': token['selectClearIconTopSmall'],
                    },
                },

                [`&.${prefixCls}-lg`]: {
                    [`.${prefixCls}-arrow`]: {
                        'top': token['selectArrowTopLarge'],
                    },

                    [`.${prefixCls}-arrow.${prefixCls}-clear`]: {
                        'top': token['selectClearIconTopLarge'],
                    },
                },

                [`&.${prefixCls}-open.${prefixCls}-arrow:not(.${prefixCls}-arrow-loading) > svg`]: {
                    'transform': token['selectArrowOpenTransformRotate'],
                },

                // no-border
                '&&-no-border': {
                    [`.${prefixCls}-selector`]: {
                        'background': 'transparent',
                        'border': '1px solid transparent',
                        'box-shadow': 'none',

                        '&:hover': {
                            'background': token['themeComponentBg'],
                        },
                    },

                    [`&.${prefixCls}-open .${prefixCls}-selector`]: {
                        'background': token['themeComponentBg'],
                        'border': `1px solid ${token['themePrimaryColorHover']}`,
                        'box-shadow': `0 0 0 0 ${token['themeBorderFocusColor']}`,
                    },
                },

                // 只有在arrow后面时，偏移30px
                [`.${prefixCls}-arrow + .${prefixCls}-clear`]: {
                    'top': token['selectClearIconTop'],
                    'right': token['selectClearIconRight'],
                    'opacity': token['selectClearIconOpacity'],
                },

                [`.${prefixCls}-clear`]: {
                    'right': '11px',
                    'width': '14px',
                    'height': '14px',
                    'color': token['colorGray4'],
                    'opacity': token['selectClearIconOpacity'],

                    '&:hover': {
                        'color': token['colorGray8'],
                    },

                    '&:active': {
                        'color': token['colorGray9'],
                    },
                },

                [`&.${prefixCls}-focused`]: {
                    [`.${prefixCls}-clear`]: {
                        // hover时显示clearIcon，符合antd的效果，也符合osui需要效果
                        'opacity': '1 !important',
                    },
                },
                '&:hover': {
                    [`.${prefixCls}-clear`]: {
                        // hover时显示clearIcon，符合antd的效果，也符合osui需要效果
                        'opacity': '1 !important',
                    },
                },

                [`.${clsPrefix}-remove-icon`]: {
                    'width': 12,
                    'height': 12,
                },
            },

            [`.${clsPrefix}.${prefixCls}-multiple`]: {
                [`.${prefixCls}-selection-item .${prefixCls}-selection-item-remove`]: {
                    'color': token['colorGray6'],
                },

                [`.${prefixCls}-selection-item`]: {
                    'border': `1px solid  ${token['themeDisabledBg']}`,
                    'border-radius': token['borderRadius2'],
                    'background': token['selectSelectionItemBg'],
                    'margin-top': 3,
                    'margin-bottom': 3,
                },

                // disabled状态
                [`&.${prefixCls}-disabled .${prefixCls}-selection-item`]: {
                    'color': token['themeDisabledColor'],
                    'background': token['selectMultipleItemDisabledBg'],
                    'border': `1px solid ${token['selectMultipleItemDisabledBg']}`,
                },

                [`.${prefixCls}-selection-item-disabled`]: {
                    'color': token['themeDisabledColor'],
                    'background': token['selectMultipleItemDisabledBg'],
                    'border': `1px solid ${token['selectMultipleItemDisabledBg']}`,
                },

                [`&.${clsPrefix}.${prefixCls}.${prefixCls}-focused .${prefixCls}-selector`]: {
                    'border-color': token['primaryColorHover'],
                },

                [`.${prefixCls}-selector`]: {
                    'padding': '2px 24px 2px 6px',
                },
            },

            // 多选下拉移动到左边，
            [`.${clsPrefix}-multiple-dropdown`]: {
                [`.${prefixCls}-item.${prefixCls}-item-option`]: {
                    display: 'flex',
                    'align-items': 'center',
                    'padding-left': '36px',
                },

                [`.${prefixCls}-item-option-selected`]: {
                    display: 'flex',
                    'align-items': 'center',
                    'padding-left': '36px',
                },

                // 以下通过使用::before画出来未选中时的边框，border可以通过variables控制，TODO：大小也可以控制，但是position要相应调整
                [`.${prefixCls}-item.${prefixCls}-item-option`]: {
                    display: 'flex',
                    'align-items': 'center',
                    'padding-left': '36px',

                    [`.${prefixCls}-item-option-content::before`]: {
                        'position': 'absolute',
                        'top': '25%',
                        'left': '12px',
                        'display': 'table',
                        'width': checkboxSize,
                        'height': checkboxSize,
                        'border': `1px solid ${token['colorGray4']}`,
                        'border-radius': token['borderRadius2'],
                        'content': '""',
                    },
                },

                [`.${prefixCls}-item-option-selected.${prefixCls}-item.${prefixCls}-item-option`]: {
                    [`.${prefixCls}-item-option-content::before`]: {
                        display: 'none',
                    },
                },

                // 以下调整选中时的icon，外面可以进行替换
                [`.${prefixCls}-item-option-selected`]: {
                    [`.${prefixCls}-item-option-state`]: {
                        'position': 'absolute',
                        'left': '12px',
                        'display': 'inline-flex',
                        'align-items': 'center',
                    },
                },

                [`.${clsPrefix}-check-icon`]: {
                    'width': token['selectCheckIconSize'],
                    'height': token['selectCheckIconSize'],
                    'border-radius': token['borderRadius2'],
                },
            },

            [`.${clsPrefix}-dropdown`]: {
                'padding': '4px 0',

                [`.${prefixCls}-item-option-selected:not(.${prefixCls}-item-option-disabled)`]: {
                    'background-color': token['selectItemSelectedBg'],
                    'color': token['selectItemSelectedColor'],
                },
                [`.${prefixCls}-item-option-active:not(.${prefixCls}-item-option-disabled)`]: {
                    '&:hover': {
                        'background-color': token['selectItemActiveBg'],
                    },
                    '&:active': {
                        'background-color': token['colorGray4'],
                    },
                },

                // 修复 select item 不居中
                [`.${prefixCls}-item`]: {
                    'line-height': '22px',
                    'padding': '5px 12px',
                },
            },

            [`.${prefixCls}-multiple`]: {
                [`.${prefixCls}-selection-item`]: {
                    'line-height': '18px',
                    'height': '20px',
                },
                [`.${prefixCls}-selector:after`]: {
                    'height': '20px',
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
            genSelectStyle({
                clsPrefix, prefixCls, token, cssVar,
            }),
        ]
    );
    return wrapSSROsui;
};
