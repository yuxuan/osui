const colors = require('./colors');
// 只导出了colors，其余css variables没有导出
exports.lightColors = {
    ...colors.tagColors,
    ...colors.uiColors,
};
