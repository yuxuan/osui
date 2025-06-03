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
    Object.keys(token.App || {}).forEach(k => {
        ret[k] = token?.App?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

export const genAlertStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
}) => CSSObject[] =
    ({prefixCls, token}) => {
        return [{
            [`.${prefixCls}`]: {
                '[class^=ant-]::-ms-clear': {
                    display: 'none',
                },
                '[class*= ant-]::-ms-clear': {
                    display: 'none',
                },
                '[class^=ant-] input::-ms-clear': {
                    display: 'none',
                },
                '[class*= ant-] input::-ms-clear': {
                    display: 'none',
                },
                '[class^=ant-] input::-ms-reveal': {
                    display: 'none',
                },
                '[class*= ant-] input::-ms-reveal': {
                    display: 'none',
                },

                // html 和 body 无法生效
                // html: {
                //     width: '100%',
                //     height: '100%',

                //     'font-family': 'sans-serif',
                //     'line-height': 1.15,
                //     '-webkit-text-size-adjust': '100%',
                //     '-ms-text-size-adjust': '100%',
                //     '-ms-overflow-style': 'scrollbar',
                //     '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
                // },
                // body: {
                //     width: '100%',
                //     height: '100%',

                //     margin: 0,
                //     color: token.textColor,
                //     'font-size': 12,
                //     'font-family': token.themeFontFamily,
                //     'font-variant': 'normal',
                //     'line-height': '1.5',
                //     'background-color': token.bodyBackground,
                //     'font-feature-settings': '"tnum"',
                // },

                'input::-ms-clear': {
                    display: 'none',
                },
                'input::-ms-reveal': {
                    display: 'none',
                },

                '*': {
                    'box-sizing': 'border-box',
                },
                '*::before': {
                    'box-sizing': 'border-box',
                },
                '*::after': {
                    'box-sizing': 'border-box',
                },

                '@-ms-viewport': {
                    width: 'device-width',
                },

                "[tabindex='-1']:focus": {
                    outline: 'none !important',
                },

                hr: {
                    'box-sizing': 'content-box',
                    height: 0,
                    overflow: 'visible',
                },
                h1: {
                    'margin-top': 0,
                    'margin-bottom': '0.5em',
                    color: token.headingColor,
                    'font-weight': '500',
                },
                h2: {
                    'margin-top': 0,
                    'margin-bottom': '0.5em',
                    color: token.headingColor,
                    'font-weight': '500',
                },
                h3: {
                    'margin-top': 0,
                    'margin-bottom': '0.5em',
                    color: token.headingColor,
                    'font-weight': '500',
                },
                h4: {
                    'margin-top': 0,
                    'margin-bottom': '0.5em',
                    color: token.headingColor,
                    'font-weight': '500',
                },
                h5: {
                    'margin-top': 0,
                    'margin-bottom': '0.5em',
                    color: token.headingColor,
                    'font-weight': '500',
                },
                h6: {
                    'margin-top': 0,
                    'margin-bottom': '0.5em',
                    color: token.headingColor,
                    'font-weight': '500',
                },
                p: {
                    'margin-top': 0,
                    'margin-bottom': '1em',
                },
                'abbr[title]': {
                    // 'text-decoration': 'underline',
                    'text-decoration': 'underline dotted',
                    'border-bottom': 0,
                    cursor: 'help',
                },
                'abbr[data-original-title]': {
                    // 'text-decoration': 'underline',
                    'text-decoration': 'underline dotted',
                    'border-bottom': 0,
                    cursor: 'help',
                },
                address: {
                    'margin-bottom': '1em',
                    'font-style': 'normal',
                    'line-height': 'inherit',
                },
                "input[type='text']": {
                    '-webkit-appearance': 'none',
                },
                "input[type='password']": {
                    '-webkit-appearance': 'none',
                },
                "input[type='number']": {
                    '-webkit-appearance': 'none',
                },
                textarea: {
                    '-webkit-appearance': 'none',

                    'touch-action': 'manipulation',

                    margin: 0,
                    color: 'inherit',
                    'font-size': 'inherit',
                    'font-family': 'inherit',
                    'line-height': 'inherit',

                    overflow: 'auto',
                    resize: 'vertical',
                },
                ol: {
                    'margin-top': 0,
                    'margin-bottom': '1em',
                },
                ul: {
                    'margin-top': 0,
                    'margin-bottom': '1em',
                },
                dl: {
                    'margin-top': 0,
                    'margin-bottom': '1em',
                },
                'ol ol': {
                    'margin-bottom': 0,
                },
                'ul ul': {
                    'margin-bottom': 0,
                },
                'ol ul': {
                    'margin-bottom': 0,
                },
                'ul ol': {
                    'margin-bottom': 0,
                },
                dt: {
                    'font-weight': '500',
                },
                dd: {
                    'margin-bottom': '0.5em',
                    'margin-left': 0,
                },
                blockquote: {
                    margin: '0 0 1em',
                },
                dfn: {
                    'font-style': 'italic',
                },
                b: {
                    'font-weight': 'bolder',
                },
                strong: {
                    'font-weight': 'bolder',
                },
                small: {
                    'font-size': '80%',
                },
                sub: {
                    position: 'relative',
                    'font-size': '75%',
                    'line-height': '0',
                    'vertical-align': 'baseline',

                    bottom: '-0.25em',
                },
                sup: {
                    position: 'relative',
                    'font-size': '75%',
                    'line-height': '0',
                    'vertical-align': 'baseline',

                    top: '-0.5em',
                },

                a: {
                    color: token.linkColor,
                    'text-decoration': 'none',
                    'background-color': 'transparent',
                    outline: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.3s',
                    '-webkit-text-decoration-skip': 'objects',

                    'touch-action': 'manipulation',
                },
                'a:hover': {
                    color: token.linkHoverColor,

                    'text-decoration': 'none',
                    outline: 0,
                },
                'a:active': {
                    color: token.linkActiveColor,

                    'text-decoration': 'none',
                    outline: 0,
                },

                'a:focus': {
                    'text-decoration': 'none',
                    outline: 0,
                },
                'a[disabled]': {
                    color: token.disabledColor,
                    cursor: 'not-allowed',
                },
                pre: {
                    'font-size': '1em',
                    'font-family': 'Consolas, Menlo, Courier, monospace',

                    'margin-top': 0,
                    'margin-bottom': '1em',
                    overflow: 'auto',
                },
                code: {
                    'font-size': '1em',
                    'font-family': 'Consolas, Menlo, Courier, monospace',
                },
                kbd: {
                    'font-size': '1em',
                    'font-family': 'Consolas, Menlo, Courier, monospace',
                },
                samp: {
                    'font-size': '1em',
                    'font-family': 'Consolas, Menlo, Courier, monospace',
                },
                figure: {
                    margin: '0 0 1em',
                },
                img: {
                    'vertical-align': 'middle',
                    'border-style': 'none',
                },

                area: {
                    'touch-action': 'manipulation',
                },
                button: {
                    'touch-action': 'manipulation',

                    margin: 0,
                    color: 'inherit',
                    'font-size': 'inherit',
                    'font-family': 'inherit',
                    'line-height': 'inherit',

                    overflow: 'visible',
                    'text-transform': 'none',
                    "-'webkit-appearance'": 'button',
                },
                "[role = 'button']": {
                    'touch-action': 'manipulation',
                },
                "input:not([type='range'])": {
                    'touch-action': 'manipulation',
                },
                label: {
                    'touch-action': 'manipulation',
                },
                select: {
                    'touch-action': 'manipulation',

                    margin: 0,
                    color: 'inherit',
                    'font-size': 'inherit',
                    'font-family': 'inherit',
                    'line-height': 'inherit',

                    'text-transform': 'none',
                },
                summary: {
                    'touch-action': 'manipulation',

                    display: 'list-item',
                },

                table: {
                    'border-collapse': 'collapse',
                },
                caption: {
                    'padding-top': '0.75em',
                    'padding-bottom': '0.3em',
                    color: token.textColorSecondary,
                    'text-align': 'left',
                    'caption-side': 'bottom',
                },
                input: {
                    margin: 0,
                    color: 'inherit',
                    'font-size': 'inherit',
                    'font-family': 'inherit',
                    'line-height': 'inherit',

                    overflow: 'visible',
                },

                optgroup: {
                    margin: 0,
                    color: 'inherit',
                    'font-size': 'inherit',
                    'font-family': 'inherit',
                    'line-height': 'inherit',
                },


                'html [type="button"]': {
                    '-webkit-appearance': 'button',
                },
                '[type="reset"]': {
                    '-webkit-appearance': 'button',
                },
                '[type="submit"]': {
                    '-webkit-appearance': 'button',
                },
                'button::-moz-focus-inner': {
                    padding: 0,
                    'border-style': 'none',
                },
                "[type='button']::-moz-focus-inner": {
                    padding: 0,
                    'border-style': 'none',
                },
                "[type='reset']::-moz-focus-inner": {
                    padding: 0,
                    'border-style': 'none',
                },
                "[type='submit']::-moz-focus-inner": {
                    padding: 0,
                    'border-style': 'none',
                },
                "input[type='radio']": {
                    'box-sizing': 'border-box',
                    padding: 0,
                },
                "input[type='checkbox']": {
                    'box-sizing': 'border-box',
                    padding: 0,
                },
                "input[type = 'date']": {
                    '-webkit-appearance': 'listbox',
                },
                "input[type = 'time']": {
                    '-webkit-appearance': 'listbox',
                },
                "input[type = 'datetime-local']": {
                    '-webkit-appearance': 'listbox',
                },
                "input[type='month']": {
                    '-webkit-appearance': 'listbox',
                },

                fieldset: {
                    'min-width': 0,
                    margin: 0,
                    padding: 0,
                    border: 0,
                },
                legend: {
                    display: 'block',
                    width: '100%',
                    'max-width': '100%',
                    'margin-bottom': '0.5em',
                    padding: 0,
                    color: 'inherit',
                    'font-size': '1.5em',
                    'line-height': 'inherit',
                    'white-space': 'normal',
                },
                progress: {
                    'vertical-align': 'baseline',
                },
                "[type='number']::-webkit-inner-spin-button": {
                    height: 'auto',
                },
                "[type='number']::-webkit-outer-spin-button": {
                    height: 'auto',
                },
                "[type='search']": {
                    'outline-offset': -2,
                    '-webkit-appearance': 'none',
                },
                "[type='search']::-webkit-search-cancel-button": {
                    '-webkit-appearance': 'none',
                },
                "[type='search']::-webkit-search-decoration": {
                    '-webkit-appearance': 'none',
                },
                '::-webkit-file-upload-button': {
                    font: 'inherit',
                    '-webkit-appearance': 'button',
                },
                output: {
                    display: 'inline-block',
                },
                template: {
                    display: 'none',
                },
                '[hidden]': {
                    display: 'none !important',
                },
                mark: {
                    padding: '0.2em',
                    'background-color': '#fadb14',
                },
                '::selection': {
                    color: token.textColorInverse,
                    background: token.textSelectionBg,
                },
                '.clearfix::before': {
                    display: 'table',
                    content: '""',
                },
                '.clearfix::after': {
                    display: 'table',
                    clear: 'both',
                    content: '""',
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
            genAlertStyle({
                clsPrefix, prefixCls, token, cssVar,
            }),
        ]
    );
    return wrapSSROsui;
};
