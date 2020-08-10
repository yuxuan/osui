/**
 * @file 公用代码
 * @author zhangguoqing02
 */

// 匹配非协议名开头的字符串，说明此字符串不用做转换
// `(?!p)` 是零宽负向先行断言，表示接下来的字符串都不与 p 匹配
// 此处如 `http://`, `ftp://` 或者 `//` 开头的字符串均不能匹配
export const REGEXP_FILE_PATH = /^(?!(\w+:)?\/\/)/;

// 通过 url 中 `:` 前面的部分，判断当前是文件位置还是文件夹位置
// 如 `xxx/blob/<branch>` 就是文件位置，而 `xxx/tree/<branch>` 就是文件夹位置
export const REGEXP_IS_FILE = /\/(?:blob|edit|create)\/[^/]+:/;
