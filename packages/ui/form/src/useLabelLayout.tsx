import {useLayoutEffect, useRef} from 'react';
const labelMarginRight = 20;
/**
 * @description 用来实现icloud规范的布局，即label右侧间距20px，label不flex，内容区域flex，label以最长宽度内容或提供最长宽度为最长宽度。
 * @param formName 第一个参数为form的name属性值，必须
 * @param maxWidth 可选，设置最大宽度，规范要求默认为80，如果知道内容没有超过80的，可以传入0，自动计算宽度
 *
 */
export default (formName: string, maxWidth: number = 80) => {
    const labelRef = useRef<NodeListOf<Element> | undefined >(undefined);
    const antdFormLabelRef = useRef<NodeListOf<Element> | undefined >(undefined);
    const antdFormItemControlRef = useRef<NodeListOf<Element> | undefined >(undefined);
    const init = useRef(true);
    useLayoutEffect(
        () => {
            labelRef.current = document.querySelectorAll(
                `#${formName} .ant-form-item > .ant-form-item-label > label`
            );
            antdFormLabelRef.current = document.querySelectorAll(
                `#${formName} .ant-form-item > .ant-form-item-label`
            );
            antdFormItemControlRef.current = document.querySelectorAll(
                `#${formName} .ant-form-item > .ant-form-item-control:first-child`
            );
        },
        [formName]
    );

    useLayoutEffect(
        () => {
            const currentLabels = document.querySelectorAll(
                `#${formName} .ant-form-item > .ant-form-item-label > label`
            );
            const currentAntdFormItemLabels = document.querySelectorAll(
                `#${formName} .ant-form-item > .ant-form-item-label`
            );

            if (!labelRef.current || !antdFormLabelRef.current || !antdFormItemControlRef.current) {
                return;
            }

            // 如果item没有变，不做额外操作
            if (!init && currentLabels.length === labelRef.current.length) {
                return;
            }
            // 异步处理计算数据
            setTimeout(
                () => {
                    init.current = false;
                    labelRef.current = currentLabels;
                    antdFormLabelRef.current = currentAntdFormItemLabels;
                    let innerMaxWidth = 0;
                    if (maxWidth) {
                        innerMaxWidth = maxWidth;
                    }
                    else {
                        labelRef.current.forEach(element => {
                            if (element.clientWidth > innerMaxWidth) {
                                innerMaxWidth = element.clientWidth - 8; // 减去冒号后面的8px margin
                            }
                        });
                    }

                    const fullWidth = innerMaxWidth + labelMarginRight;

                    antdFormLabelRef.current.forEach(
                        element => {
                            element.setAttribute(
                                'style',
                                `max-width: ${fullWidth}px; flex: 0 0 ${fullWidth}px;`
                            );
                        }
                    );

                    // 检测是否有overflow
                    antdFormLabelRef.current.forEach(
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
                    antdFormItemControlRef.current?.forEach(
                        element => {
                            element.setAttribute('style', `margin-left: ${fullWidth}px;`);
                        }
                    );
                },
                0
            );


        }
    );
};
