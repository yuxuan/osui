export const pxToNumber = (px: string) => {
    return Number(px.replace('px', ''));
};

export default {
    // 圆角
    '--corner-xs': '2px',
    '--corner-sm': '4px',
    '--corner-md': '6px',
    '--corner-lg': '8px',
    '--corner-xl': '10px',
    '--corner-2xl': '12px',
    '--corner-3xl': '16px',
    // 间距
    '--space-2xs': '4px',
    '--space-xs': '8px',
    '--space-sm': '12px',
    '--space-md': '16px',
    '--space-lg': '20px',
    '--space-xl': '24px',
    '--space-2xl': '32px',
    '--space-3xl': '40px',
    // 字体大小
    '--fontsize-h1': '10px',
    '--fontsize-h2': '12px',
    '--fontsize-h3': '13px',
    '--fontsize-h4': '14px',
    '--fontsize-h5': '16px',
    '--fontsize-h6': '20px',
    '--fontsize-h7': '24px',
    '--fontsize-h8': '28px',
    '--fontsize-h9': '32px',
    // 字体粗细
    '--font-weight-regular': '400px',
    '--font-weight-medium': '500px',
    '--font-weight-semibold': '600px',
    // 行高
    '--lineheight-h1': '18px',
    '--lineheight-h2': '20px',
    '--lineheight-h3': '21px',
    '--lineheight-h4': '22px',
    '--lineheight-h5': '24px',
    '--lineheight-h6': '28px',
    '--lineheight-h7': '32px',
    '--lineheight-h8': '36px',
    '--lineheight-h9': '40px',
    // 阴影
    '--shadow-lg': '0 0 42 0 rgba(9, 18, 33, 0.08)',
    '--shadow-md': '0 0 32 0 rgba(9, 18, 33, 0.08)',
    '--shadow-sm': '0 0 16 0 rgba(9, 18, 33, 0.08)',
};
