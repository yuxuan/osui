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
        colorBgContainerDisabled: '#f7f7f9',
        colorFillAlter: '#f7f7f9',
        colorTextPlaceholder: '#b8babf',
    },
    Alert: {
        colorInfoBorder: '#e6f0ff',
        colorInfoBg: '#e6f0ff',
        colorWarningBorder: '#fff4e6',
        colorWarningBg: '#fff4e6',
        colorSuccessBorder: '#ecffe6',
        colorSuccessBg: '#ecffe6',
        colorErrorBorder: '#ffe8e6',
        colorErrorBg: '#ffe8e6',
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
        colorSplit: '#e8e9eb',
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
        controlItemBgActive: '#fff',
        colorTextDescription: '#5c5f66',
        marginXS: 10,
        controlHeightLG: 42,
        colorFillContent: '#fff',
    },
    Table: {
        colorFillAlter: '#f7f7f9',
        padding: 10,
        paddingContentVerticalLG: 11,
        colorTextHeading: '#5c5f66',
        paddingXS: 5.5,
        bodySortBg: 'transparent',
        headerSortActiveBg: '#f7f7f9',
    },
    Tooltip: {
        colorBgBase: '#fff',
        // antd 5 在某个版本之后更改了 token 名
        colorBgSpotlight: '#fff',
        colorTextLightSolid: '#151b26',
    },
    Tabs: {
        fontSize: 14,
    },
    Breadcrumb: {
        colorBgTextHover: 'transparent',
        colorTextDescription: '#5c5f66',
    },
    Menu: {
        colorItemTextHover: '#2468f2',
        colorItemBgHover: 'transparent',
        borderRadiusLG: 0,
        marginXXS: 0,
    },
    Tag: {
        lineHeight: 1.8,
        colorFillQuaternary: '#f7f7f9',
    },
    Result: {
        fontSizeHeading3: 24,
        colorTextDescription: '#5c5f66',
        marginXS: 0,
        lineHeightHeading3: 1.8,
        lineHeight: 1.6,
    },
    Upload: {
        colorFillAlter: '#fff',
    },
    Avatar: {
        controlHeightSM: 21,
        containerSizeLG: 32,
        containerSize: 24,
        containerSizeSM: 16,
        // fontSize: 12,
    },
    Checkbox: {
        marginXS: 0,
    },
    Layout: {
        colorBgBody: '#f7f7f9',
    },
    Collapse: {
        headerBg: '#f2f2f4',
    },
    Message: {
        paddingSM: 16,
        fontSize: 14,
        borderRadiusLG: 8,
        contentPadding: '9px 12px',
        lineHeight: 1.5,
    },
    Progress: {
        marginXS: 0,
    },
    Switch: {
        handleSize: 11,
    },
    Dropdown: {
        borderRadiusSM: 0,
    },
};

