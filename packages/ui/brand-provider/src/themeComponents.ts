import {ThemeConfig} from 'antd';

export const components: ThemeConfig['components'] = {
    Button: {
        paddingContentHorizontal: 12,
        borderRadiusSM: 4,
        marginXS: 4,
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
        controlHeightSM: 24,
        borderRadiusSM: 4,
    },
    Anchor: {
        fontSize: 12,
        colorSplit: '#E8E9EB',
    },
    DatePicker: {
        paddingSM: 13,
        boxShadowSecondary: `0 3px 6px -4px rgba(0, 0, 0, 0.12),
            0 6px 16px 0 rgba(0, 0, 0, 0.08),
            0 9px 28px 8px rgba(0, 0, 0, 0.05)`,
    },
    Pagination: {
        marginXS: 0,
        controlHeightSM: 32,
    },
    Steps: {
        controlHeight: 26,
        fontSize: 14,
        controlItemBgActive: '#FFF',
        colorTextDescription: '#5C5F66',
        marginXS: 10,
        controlHeightLG: 42,
        colorFillContent: '#FFF',
    },
    Table: {
        colorFillAlter: '#F7F7F9',
        padding: 10,
        paddingContentVerticalLG: 11,
        colorTextHeading: '#5C5F66',
        paddingXS: 5.5,
    },
    Tooltip: {
        colorBgBase: '#fff',
        colorTextLightSolid: '#151B26',
    },
    Breadcrumb: {
        colorBgTextHover: 'transparent',
        colorTextDescription: '#5c5f66',
    },
    Menu: {
        colorItemTextHover: '#2468F2',
        colorItemBgHover: 'transparent',
    },
    Tag: {
        lineHeight: 1.8,
        colorFillQuaternary: '#F7F7F9',
    },
    Result: {
        fontSizeHeading3: 24,
        colorTextDescription: '#5C5F66',
        marginXS: 0,
        lineHeightHeading3: 1.8,
        lineHeight: 1.6,
    },
    Upload: {
        colorFillAlter: '#fff',
    },
    Avatar: {
        controlHeightSM: 21,
        // fontSize: 12,
    },
    Checkbox: {
        marginXS: 0,
    },
    Layout: {
        colorBgBody: '#F7F7F9',
    },
};
