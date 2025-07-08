/* eslint-disable no-console */
// 检查cnpm各 组件包的最新版本

const urls = [
    'https://registry.npmmirror.com/@osui/affix/',
    'https://registry.npmmirror.com/@osui/alert/',
    'https://registry.npmmirror.com/@osui/anchor/',
    'https://registry.npmmirror.com/@osui/app/',
    'https://registry.npmmirror.com/@osui/auto-complete/',
    'https://registry.npmmirror.com/@osui/avatar/',
    'https://registry.npmmirror.com/@osui/back-top/',
    'https://registry.npmmirror.com/@osui/badge/',
    'https://registry.npmmirror.com/@osui/brand-provider/',
    'https://registry.npmmirror.com/@osui/breadcrumb/',
    'https://registry.npmmirror.com/@osui/button/',
    'https://registry.npmmirror.com/@osui/calendar/',
    'https://registry.npmmirror.com/@osui/card/',
    'https://registry.npmmirror.com/@osui/carousel/',
    'https://registry.npmmirror.com/@osui/cascader/',
    'https://registry.npmmirror.com/@osui/checkbox/',
    'https://registry.npmmirror.com/@osui/col/',
    'https://registry.npmmirror.com/@osui/collapse/',
    'https://registry.npmmirror.com/@osui/color-picker/',
    'https://registry.npmmirror.com/@osui/config-provider/',
    'https://registry.npmmirror.com/@osui/date-picker/',
    'https://registry.npmmirror.com/@osui/descriptions/',
    'https://registry.npmmirror.com/@osui/divider/',
    'https://registry.npmmirror.com/@osui/drawer/',
    'https://registry.npmmirror.com/@osui/dropdown/',
    'https://registry.npmmirror.com/@osui/empty/',
    'https://registry.npmmirror.com/@osui/flex/',
    'https://registry.npmmirror.com/@osui/float-button/',
    'https://registry.npmmirror.com/@osui/form/',
    'https://registry.npmmirror.com/@osui/gap/',
    'https://registry.npmmirror.com/@osui/grid/',
    'https://registry.npmmirror.com/@osui/highlight-text/',
    'https://registry.npmmirror.com/@osui/image/',
    'https://registry.npmmirror.com/@osui/input/',
    'https://registry.npmmirror.com/@osui/input-number/',
    'https://registry.npmmirror.com/@osui/layout/',
    'https://registry.npmmirror.com/@osui/list/',
    'https://registry.npmmirror.com/@osui/markdown/',
    'https://registry.npmmirror.com/@osui/mentions/',
    'https://registry.npmmirror.com/@osui/menu/',
    'https://registry.npmmirror.com/@osui/message/',
    'https://registry.npmmirror.com/@osui/modal/',
    'https://registry.npmmirror.com/@osui/notification/',
    'https://registry.npmmirror.com/@osui/pagination/',
    'https://registry.npmmirror.com/@osui/popconfirm/',
    'https://registry.npmmirror.com/@osui/popover/',
    'https://registry.npmmirror.com/@osui/progress/',
    'https://registry.npmmirror.com/@osui/qr-code/',
    'https://registry.npmmirror.com/@osui/quick-edit/',
    'https://registry.npmmirror.com/@osui/radio/',
    'https://registry.npmmirror.com/@osui/rate/',
    'https://registry.npmmirror.com/@osui/result/',
    'https://registry.npmmirror.com/@osui/row/',
    'https://registry.npmmirror.com/@osui/segmented/',
    'https://registry.npmmirror.com/@osui/select/',
    'https://registry.npmmirror.com/@osui/skeleton/',
    'https://registry.npmmirror.com/@osui/slider/',
    'https://registry.npmmirror.com/@osui/space/',
    'https://registry.npmmirror.com/@osui/spin/',
    'https://registry.npmmirror.com/@osui/statistic/',
    'https://registry.npmmirror.com/@osui/steps/',
    'https://registry.npmmirror.com/@osui/switch/',
    'https://registry.npmmirror.com/@osui/table/',
    'https://registry.npmmirror.com/@osui/tabs/',
    'https://registry.npmmirror.com/@osui/tag/',
    'https://registry.npmmirror.com/@osui/text-overflow-tooltip/',
    'https://registry.npmmirror.com/@osui/time-picker/',
    'https://registry.npmmirror.com/@osui/timeline/',
    'https://registry.npmmirror.com/@osui/tooltip/',
    'https://registry.npmmirror.com/@osui/tour/',
    'https://registry.npmmirror.com/@osui/transfer/',
    'https://registry.npmmirror.com/@osui/tree/',
    'https://registry.npmmirror.com/@osui/tree-select/',
    'https://registry.npmmirror.com/@osui/typography/',
    'https://registry.npmmirror.com/@osui/upload/',
    'https://registry.npmmirror.com/@osui/version/',
    'https://registry.npmmirror.com/@osui/watermark/',
];

const currentVersion = require('../packages/ui/ui/package.json').version;

Promise.all(urls.map(url => fetch(url, {cache: 'no-cache'}).then(res => res.json()).then(data => {
    // eslint-disable-next-line no-underscore-dangle
    console.log(data._id, data['dist-tags']?.latest);
    return [data['dist-tags']?.latest, data._id];
}))).then(data => {
    const unmatched = data.filter(item => {
        if (item[0] !== currentVersion) {
            return item;
        }
        return null;
    });
    if (unmatched.length > 0) {
        console.log(unmatched);
    }
    else {
        console.log('all matched');
    }
});
