import v1 from './v1';
import v2 from './v2';
import acud from './acud';
import dark from './dark';

export {
    v1,
    v2,
    dark,
    acud,
};
// 为了确保产品上公有云，升级v2的时候，默认导出的acud的主题变量
export default acud;
