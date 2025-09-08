import type {CSSObject} from '@ant-design/cssinjs';
import {
    type FullToken,
} from 'antd/es/theme/internal';

export const prepareComponentToken: (token: any) => any = token => {
    const ret: any = {};
    Object.keys(token).forEach(k => {
        ret[k] = token[k];
    });
    Object.keys(token.Layout || {}).forEach(k => {
        ret[k] = token?.Layout?.[k];
    });
    return ret;
};

export type LayoutToken = FullToken<'Layout'>;
type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

export const genStyle: (
    prefixCls: string, token: any,
    cssVar: CssVar, clsPrefix: string
) => CSSObject =
    (prefixCls, outtoken, cssVar: CssVar, clsPrefix) => {
        const token = prepareComponentToken(outtoken);
        return {
            [`.${clsPrefix}-new-collapse-style.${prefixCls}`]: {
                'transition': 'all .3s',
                'box-shadow': '0 2px 8px 0 rgba(7, 12, 20, .12)',
                backgroundColor: token?.backgroudColor,

                [`.${prefixCls}-zero-width-trigger`]: {
                    position: 'absolute',
                    right: '-10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '10px',
                    height: '26px',
                    overflow: 'visible',

                    '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        left: 0,
                        width: '12px',
                        height: '29px',
                        'background-color': '#fff',
                        transform: 'perspective(13px) scale(1.1, 1.3) rotateY(18deg)',
                        'box-shadow': '3px 0 3px -1px rgba(0, 0, 0, .15)',
                        'border-radius': '0 2px 2px 0',
                    },

                    [`&:hover .${clsPrefix}-item`]: {
                        fill: '#2468f2 !important',
                        color: cssVar ? 'var(--brand-color-6)' : '#2468f2',
                    },

                    [`.${clsPrefix}-item`]: {
                        transform: 'rotate(90deg)',
                        position: 'absolute',
                        bottom: 0,
                        top: '5px',
                        left: '-11px',
                        width: '34px',
                        fill: '#b8babf',
                        color: '#b8babf',
                        'vertical-align': 'middle',

                        [`&.${clsPrefix}-item-collapse`]: {
                            transform: 'rotate(-90deg)',
                            top: '-10',
                        },
                    },
                },
            },
        };
    };
