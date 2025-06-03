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
    Object.keys(token.AutoComplete || {}).forEach(k => {
        ret[k] = token?.AutoComplete?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

export const genAutoCompleteStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
    selectAntdprefixCls: string;
}) => CSSObject[] =
    ({clsPrefix, token, selectAntdprefixCls}) => {
        return [{
            [`.${clsPrefix}-dropdown`]: {
                [`.${selectAntdprefixCls}-item-option-active:not(.${selectAntdprefixCls}-item-option-disabled`]: {
                    '&:hover': {
                        'background-color': token['SelectItemActiveBg'],
                    },

                    '&:active': {
                        'background-color': token['ColorGray4'],
                    },
                },

                // 修复 select item 不居中
                [`.${selectAntdprefixCls}-item`]: {
                    'line-height': '22px',
                },
            },
        }];
    };

export const useStyle = (
    clsPrefix: string,
    prefixCls: string,
    cssVar: ThemeConfig['cssVar'],
    antPrefix: string,
    selectAntdprefixCls: string
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
            genAutoCompleteStyle({
                clsPrefix, prefixCls, token, cssVar, selectAntdprefixCls,
            }),
        ]
    );
    return wrapSSROsui;
};
