// 用于标签、图表等场景的色盘，100个颜色
exports.tagColors = {
    // 天青
    '--color-cyan-1': '#f2f3ff',
    '--color-cyan-2': '#dee1ff',
    '--color-cyan-3': '#bdc4ff',
    '--color-cyan-4': '#9ca9ff',
    '--color-cyan-5': '#7487f2',
    '--color-cyan-6': '#5069e6',
    '--color-cyan-7': '#3952bf',
    '--color-cyan-8': '#263d99',
    '--color-cyan-9': '#172b73',
    '--color-cyan-10': '#0b1b4d',
    // 翡色
    '--color-emerald-1': '#ebfffa',
    '--color-emerald-2': '#d4faf0',
    '--color-emerald-3': '#aaf0dc',
    '--color-emerald-4': '#70e0bf',
    '--color-emerald-5': '#45cca1',
    '--color-emerald-6': '#0eb880',
    '--color-emerald-7': '#049160',
    '--color-emerald-8': '#006b44',
    '--color-emerald-9': '#03452c',
    '--color-emerald-10': '#001f12',
    // 苔绿
    '--color-moss-1': '#f9fff2',
    '--color-moss-2': '#e9ffd1',
    '--color-moss-3': '#caf29b',
    '--color-moss-4': '#aee66a',
    '--color-moss-5': '#95d93d',
    '--color-moss-6': '#78bf13',
    '--color-moss-7': '#5f9908',
    '--color-moss-8': '#477300',
    '--color-moss-9': '#304d00',
    '--color-moss-10': '#192600',
    // 赤橙
    '--color-orange-1': '#fff4e6',
    '--color-orange-2': '#ffe3bf',
    '--color-orange-3': '#ffd199',
    '--color-orange-4': '#ffb259',
    '--color-orange-5': '#ff9c33',
    '--color-orange-6': '#eb7600',
    '--color-orange-7': '#c45f00',
    '--color-orange-8': '#9e4a00',
    '--color-orange-9': '#783600',
    '--color-orange-10': '#522300',
    // 枫叶
    '--color-maple-1': '#fff3f2',
    '--color-maple-2': '#ffdfde',
    '--color-maple-3': '#ffbebd',
    '--color-maple-4': '#ff9999',
    '--color-maple-5': '#f26f72',
    '--color-maple-6': '#e65055',
    '--color-maple-7': '#bf3940',
    '--color-maple-8': '#99262e',
    '--color-maple-9': '#73171f',
    '--color-maple-10': '#4d0b12',
    // 绛紫
    '--color-purple-1': '#fbf2ff',
    '--color-purple-2': '#f3deff',
    '--color-purple-3': '#e8bfff',
    '--color-purple-4': '#d899ff',
    '--color-purple-5': '#bf72f2',
    '--color-purple-6': '#a64ee6',
    '--color-purple-7': '#8437bf',
    '--color-purple-8': '#652599',
    '--color-purple-9': '#471673',
    '--color-purple-10': '#2d0b4d',
    // 靛蓝（同品牌色）
    '--color-indigo-1': '#f2f8ff',
    '--color-indigo-2': '#d3e9ff',
    '--color-indigo-3': '#a3d3ff',
    '--color-indigo-4': '#73beff',
    '--color-indigo-5': '#41a7fa',
    '--color-indigo-6': '#108cee',
    '--color-indigo-7': '#0476c7',
    '--color-indigo-8': '#0061a1',
    '--color-indigo-9': '#004b7a',
    '--color-indigo-10': '#013454',
    // 松绿
    '--color-pine-1': '#e6f9ff',
    '--color-pine-2': '#ccf3ff',
    '--color-pine-3': '#99e9ff',
    '--color-pine-4': '#61d5f2',
    '--color-pine-5': '#2ec4e6',
    '--color-pine-6': '#00b5d9',
    '--color-pine-7': '#0098b3',
    '--color-pine-8': '#007a8c',
    '--color-pine-9': '#005a66',
    '--color-pine-10': '#003840',
    // 郁金
    '--color-gold-1': '#fffef2',
    '--color-gold-2': '#fffacc',
    '--color-gold-3': '#fff399',
    '--color-gold-4': '#ffeb66',
    '--color-gold-5': '#ffe033',
    '--color-gold-6': '#f2ca00',
    '--color-gold-7': '#cca700',
    '--color-gold-8': '#a68500',
    '--color-gold-9': '#806400',
    '--color-gold-10': '#594400',
    // 洋红
    '--color-magenta-1': '#fff2fa',
    '--color-magenta-2': '#ffdbf1',
    '--color-magenta-3': '#ffb5e3',
    '--color-magenta-4': '#fa8ed2',
    '--color-magenta-5': '#ed68bf',
    '--color-magenta-6': '#e048ae',
    '--color-magenta-7': '#ba328f',
    '--color-magenta-8': '#942171',
    '--color-magenta-9': '#6e1354',
    '--color-magenta-10': '#470937',
};

// 10个循环色，在需要标签、图表连续用不同颜色的时候，从这边循环取用
exports.rotatingColors = {
    '--color-rotating-1': 'var(--color-cyan-6)',
    '--color-rotating-2': 'var(--color-emerald-6)',
    '--color-rotating-3': 'var(--color-moss-6)',
    '--color-rotating-4': 'var(--color-orange-6)',
    '--color-rotating-5': 'var(--color-maple-6)',
    '--color-rotating-6': 'var(--color-purple-6)',
    '--color-rotating-7': 'var(--color-indigo-6)',
    '--color-rotating-8': 'var(--color-pine-6)',
    '--color-rotating-9': 'var(--color-gold-6)',
    '--color-rotating-10': 'var(--color-magenta-6)',
};

// ui标准色盘，50个颜色
exports.uiColors = {
    // 品牌色
    '--color-brand-1': '#F5F8FF',
    '--color-brand-2': '#E0E9FF',
    '--color-brand-3': '#C2D6FF',
    '--color-brand-4': '#4C88FF',
    '--color-brand-5': '#1A5EFF',
    '--color-brand-6': '#0045E4',
    '--color-brand-7': '#083FBF',
    '--color-brand-8': '#07349D',
    '--color-brand-9': '#05287A',
    '--color-brand-10': '#041F5D',
    // 中性色
    '--color-gray-1': '#FFFFFF',
    '--color-gray-2': '#FAFBFB',
    '--color-gray-3': '#F6F7F8',
    '--color-gray-4': '#ECEDF0',
    '--color-gray-5': '#DADEE3',
    '--color-gray-6': '#C1C7D0',
    '--color-gray-7': '#909AAA',
    '--color-gray-8': '#5F6D84',
    '--color-gray-9': '#2E405E',
    '--color-gray-10': '#000000',
    // 警告色
    '--color-warning-1': '#FFFAE6',
    '--color-warning-2': '#FFF0B3',
    '--color-warning-3': '#FFE380',
    '--color-warning-4': '#FFC400',
    '--color-warning-5': '#FFAB00',
    '--color-warning-6': '#FF991F',
    '--color-warning-7': '#FF8B00',
    '--color-warning-8': '#C26A00',
    '--color-warning-9': '#854800',
    '--color-warning-10': '#472700',
    // 成功色
    '--color-success-1': '#E2FFEE',
    '--color-success-2': '#ABF5D1',
    '--color-success-3': '#79F2C0',
    '--color-success-4': '#57D9A3',
    '--color-success-5': '#36B37E',
    '--color-success-6': '#00875A',
    '--color-success-7': '#006644',
    '--color-success-8': '#004D33',
    '--color-success-9': '#003825',
    '--color-success-10': '#00291B',
    // 错误色
    '--color-error-1': '#FFEBE5',
    '--color-error-2': '#FFBDAD',
    '--color-error-3': '#FF8F73',
    '--color-error-4': '#FF7452',
    '--color-error-5': '#FF5630',
    '--color-error-6': '#DE350B',
    '--color-error-7': '#BF2600',
    '--color-error-8': '#9E2000',
    '--color-error-9': '#7A1800',
    '--color-error-10': '#571100',
    // 提示色
    '--color-info-1': 'var(--color-brand-1)',
    '--color-info-2': 'var(--color-brand-2)',
    '--color-info-3': 'var(--color-brand-3)',
    '--color-info-4': 'var(--color-brand-4)',
    '--color-info-5': 'var(--color-brand-5)',
    '--color-info-6': 'var(--color-brand-6)',
    '--color-info-7': 'var(--color-brand-7)',
    '--color-info-8': 'var(--color-brand-8)',
    '--color-info-9': 'var(--color-brand-9)',
    '--color-info-10': 'var(--color-brand-10)',
};

exports.presetColors = {
    '--theme-primary-color': 'var(--color-brand-6)',
    '--theme-primary-color-active': 'var(--color-brand-6)',
    '--theme-primary-color-hover': 'var(--color-brand-6)',
    '--theme-secondary-color': 'var(--color-brand-2)',
    '--theme-secondary-color-active': 'var(--color-brand-3)',
    '--theme-secondary-color-hover': 'var(--color-brand-1)',
    '--theme-info-color': 'var(--color-info-5)',
    '--theme-info-color-active': 'var(--color-info-5)',
    '--theme-info-color-hover': 'var(--color-info-5)',
    '--theme-success-color': 'var(--color-success-5)',
    '--theme-success-color-active': 'var(--color-success-5)',
    '--theme-success-color-hover': 'var(--color-success-5)',
    '--theme-error-color': 'var(--color-error-5)',
    '--theme-error-color-active': 'var(--color-error-5)',
    '--theme-error-color-hover': 'var(--color-error-5)',
    '--theme-warning-color': 'var(--color-warning-5)',
    '--theme-warning-color-active': 'var(--color-warning-5)',
    '--theme-warning-color-hover': 'var(--color-warning-5)',
    '--theme-border-color-base': 'var(--color-gray-4)',
    '--theme-border-color-inverse': '#fff',
    '--theme-border-color-split': 'var(--color-gray-4)',
    '--theme-body-bg': 'var(--color-gray-1)',
    '--theme-component-bg': 'var(--color-gray-1)',
    '--theme-heading-color': 'var(--color-gray-9)',
    '--theme-text-color': 'var(--color-gray-9)',
    '--theme-text-color-secondary': 'var(--color-gray-8)',
    '--theme-bg-color-light': 'var(--color-brand-1)',
    '--theme-bg-color-base': 'var(--color-gray-4)',
    '--theme-disabled-color': 'var(--color-gray-6)',
    '--theme-disabled-bg': 'var(--color-gray-4)',
    // 以下按照字母顺序排序
    '--alert-error-bg-color': 'var(--color-error-1)',
    '--alert-error-border-color': 'var(--color-error-5)',
    '--alert-error-icon-color': 'var(--color-error-5)',
    '--alert-info-bg-color': 'var(--color-brand-2)',
    '--alert-info-border-color': 'var(--color-brand-5)',
    '--alert-info-icon-color': 'var(--color-brand-5)',
    '--alert-success-bg-color': 'var(--color-success-1)',
    '--alert-success-border-color': 'var(--color-success-5)',
    '--alert-success-icon-color': 'var(--color-success-3)',
    '--alert-warning-bg-color': 'var(--color-warning-1)',
    '--alert-warning-border-color': 'var(--color-warning-4)',
    '--alert-warning-icon-color': 'var(--color-warning-5)',
    '--alert-with-description-icon-top': '24px',
    '--alert-with-description-padding': '8px 15px 8px 37px',
    '--collapse-content-bg': 'var(--theme-component-bg)',
    '--collapse-header-bg': 'var(--color-gray-2)',
    '--link-active-color': 'var(--color-brand-7)',
    '--link-color': 'var(--color-brand-7)',
    '--link-hover-color': 'var(--color-brand-7)',
    '--menu-bg': 'none',
    '--menu-highlight-color': 'var(--theme-primary-color)',
    '--menu-item-active-bg': 'var(--theme-secondary-color-hover)',
    '--menu-item-color': 'var(--color-gray-9)',
    '--menu-item-group-title-color': 'var(--theme-text-color-secondary)',
    '--menu-popup-bg': 'var(--theme-component-bg)',
    '--select-item-active-bg': 'var(--theme-secondary-color-hover)',
    '--select-item-selected-bg': 'var(--theme-secondary-color-hover)',
    '--table-row-hover-bg': 'var(--color-brand-1)',
};
