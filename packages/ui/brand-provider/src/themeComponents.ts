import {ThemeConfig} from 'antd';

export const components: ThemeConfig['components'] = {
    Button: {
        paddingContentHorizontal: 12,
    },
    Divider: {
        colorSplit: 'rgba(0, 0, 0, 0.06)',
    },
    Input: {
        paddingSM: 13,
        controlPaddingHorizontal: 13,
        colorBgContainerDisabled: '#F7F7F9',
        colorFillAlter: '#F7F7F9',
        colorTextPlaceholder: '#B8BABF',
    },
    Alert: {
        colorInfoBorder: '#E6F0FF',
        colorInfoBg: '#E6F0FF',
        colorWarningBorder: '#FFF4E6',
        colorWarningBg: '#FFF4E6',
        colorSuccessBorder: '#ECFFE6',
        colorSuccessBg: '#ECFFE6',
        colorErrorBorder: '#FFE8E6',
        colorErrorBg: '#FFE8E6',
        lineHeight: 1.5,
        fontSize: 12,
    },
    Modal: {
        paddingMD: 0,
        paddingContentHorizontalLG: 0,
        marginXS: 0,
        marginSM: 0,
        lineHeightHeading5: 1.375,
        lineHeight: 1.5,
        fontSize: 12,
        paddingLG: 24,
        fontSizeLG: 16,
        fontWeightStrong: 500,
    },
    Select: {
        paddingSM: 13,
        fontWeightStrong: 400,
        controlHeightSM: 20,
    },
    Anchor: {
        fontSize: 12,
        colorSplit: '#E8E9EB',
    },
};
