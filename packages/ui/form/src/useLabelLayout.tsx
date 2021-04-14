import React from 'react';
const labelMarginRight = 20;
/**
 * @description 用来实现icloud规范的布局，即label右侧间距20px，label不flex，内容区域flex，label以最长宽度内容或提供最长宽度为最长宽度。
 * @param formName 第一个参数为form的name属性值，必须
 * @param maxWidth 可选，设置最大宽度
 *
 */
export default (formName: string, maxWidth?: number) => React.useLayoutEffect(
    () => {
        let actualLabel = null;
        let antFormItemLabel = null;
        let antFormItemControl = null;

        try {
            // 确保select的到
            actualLabel = document.querySelectorAll(
                `#${formName} .ant-form-item > .ant-form-item-label > label`
            );
            antFormItemLabel = document.querySelectorAll(
                `#${formName} .ant-form-item > .ant-form-item-label`
            );
            antFormItemControl = document.querySelectorAll(
                `#${formName} .ant-form-item > .ant-form-item-control:first-child`
            );
        }
        catch (e) {
            return;
        }

        let innerMaxWidth = 0;
        if (maxWidth) {
            innerMaxWidth = maxWidth;
        }
        else {
            actualLabel.forEach(element => {
                if (element.clientWidth > innerMaxWidth) {
                    innerMaxWidth = element.clientWidth;
                }
            });
        }

        const fullWidth = innerMaxWidth + labelMarginRight;

        antFormItemLabel.forEach(
            element => {
                element.setAttribute(
                    'style',
                    `max-width: ${fullWidth}px; flex: 0 0 ${fullWidth}px;`
                );
            }
        );

        // 检测是否有overflow
        antFormItemLabel.forEach(
            element => {
                if (element.scrollWidth > element.clientWidth) {
                    element.setAttribute(
                        'style',
                        // 覆盖掉white-space: nowrap;
                        `max-width: ${fullWidth}px; flex: 0 0 ${fullWidth}px; white-space: initial;`
                    );
                    // 子label加margin，覆盖掉display: inline-flex;
                    element.firstElementChild?.setAttribute(
                        'style',
                        `margin-right: ${labelMarginRight}px; display: inline-block;`
                    );
                }
            }
        );

        // 最后的footer内容
        antFormItemControl.forEach(
            element => {
                element.setAttribute('style', `margin-left: ${fullWidth}px;`);
            }
        );
    },
    [formName, maxWidth]
);
