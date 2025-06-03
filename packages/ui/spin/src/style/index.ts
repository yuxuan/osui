import type {CSSObject} from '@ant-design/cssinjs';
import {useBrandContext} from '@osui/brand-provider';
import {Keyframes} from '@ant-design/cssinjs';
import {useStyleRegister, useCacheToken} from '@ant-design/cssinjs';
import {theme, ThemeConfig} from 'antd';

const {useToken} = theme;

export const prepareComponentToken: (token: any) => any = token => {
    const ret: any = {};
    Object.keys(token).forEach(k => {
        ret[k] = token[k];
    });
    Object.keys(token.Spin || {}).forEach(k => {
        ret[k] = token?.Spin?.[k];
    });
    return ret;
};

type CssVar = boolean | {
    prefix?: string | undefined;
    key?: string | undefined;
} | undefined;

const circle1 = new Keyframes('circle1', {
    '0%': {
        transform: 'translate3d(0%, 40%, 0)',
    },

    '30%': {
        transform: 'translate3d(0%, 0%, 0)',
    },

    '70%': {
        transform: 'translate3d(0%, 0%, 0)',
    },

    '100%': {
        transform: 'translate3d(0%, 40%, 0)',
    },
});

const circle2 = new Keyframes('circle2', {
    '0%': {
        transform: 'translate3d(-35%, 20%, 0)',
    },

    '30%': {
        transform: 'translate3d(0%, 0%, 0)',
    },

    '70%': {
        transform: 'translate3d(0%, 0%, 0)',
    },

    '100%': {
        transform: 'translate3d(-35%, 20%, 0)',
    },
});

const circle3 = new Keyframes('circle3', {
    '0%': {
        transform: 'translate3d(-35%, -20%, 0)',
    },

    '30%': {
        transform: 'translate3d(0%, 0%, 0)',
    },

    '70%': {
        transform: 'translate3d(0%, 0%, 0)',
    },

    '100%': {
        transform: 'translate3d(-35%, -20%, 0)',
    },
});

const circle4 = new Keyframes('circle4', {
    '0%': {
        transform: 'translate3d(0%, -40%, 0)',
    },

    '30%': {
        transform: 'translate3d(0%, 0%, 0)',
    },

    '70%': {
        transform: 'translate3d(0%, 0%, 0)',
    },

    '100%': {
        transform: 'translate3d(0%, -40%, 0)',
    },
});

const circle5 = new Keyframes('circle5', {
    '0%': {
        transform: 'translate3d(35%, -20%, 0)',
    },

    '30%': {
        transform: 'translate3d(0%, 0%, 0)',
    },

    '70%': {
        transform: 'translate3d(0%, 0%, 0)',
    },

    '100%': {
        transform: 'translate3d(35%, -20%, 0)',
    },
});

const circle6 = new Keyframes('circle6', {
    '0%': {
        transform: 'translate3d(35%, 20%, 0)',
    },

    '30%': {
        transform: 'translate3d(0%, 0%, 0)',
    },

    '70%': {
        transform: 'translate3d(0%, 0%, 0)',
    },

    '100%': {
        transform: 'translate3d(35%, 20%, 0)',
    },
});

const frame = new Keyframes('frame', {
    '24.99%': {
        'stroke-dashoffset': 900,
    },

    '25%': {
        'stroke-dashoffset': 900,
    },

    '75%': {
        'stroke-dashoffset': -2440,
    },

    '75.01%': {
        'stroke-dashoffset': 900,
    },
});

export const genSpinStyle: (props: {
    clsPrefix: string;
    prefixCls: string;
    token: Record<string, string>;
    cssVar: CssVar;
}) => CSSObject[] =
    ({token}) => {

        return [{
            '.acud-loading-begin': {
                'fill': token['colorBrand6'],
                'stroke': token['colorBrand6'],
            },
            '.acud-loading-begin .circle1': {
                'animationName': circle1,
                animationDuration: '1.8s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'ease',
            },
            '.acud-loading-begin .circle2': {
                'animationName': circle2,
                animationDuration: '1.8s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'ease',
            },
            '.acud-loading-begin .circle3': {
                'animationName': circle3,
                animationDuration: '1.8s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'ease',
            },
            '.acud-loading-begin .circle4': {
                'animationName': circle4,
                animationDuration: '1.8s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'ease',
            },
            '.acud-loading-begin .circle5': {
                'animationName': circle5,
                animationDuration: '1.8s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'ease',
            },
            '.acud-loading-begin .circle6': {
                'animationName': circle6,
                animationDuration: '1.8s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'ease',
            },

            '.acud-loading-begin .frame': {
                'stroke-dashoffset': '900',
                'stroke-dasharray': '900 2440',
                'animationName': frame,
                animationDuration: '1.8s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'ease',
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
            genSpinStyle({
                clsPrefix, prefixCls, token, cssVar,
            }),
        ]
    );
    return wrapSSROsui;
};
