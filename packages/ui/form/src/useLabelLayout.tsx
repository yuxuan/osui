import {useLayoutEffect, useRef} from 'react';
/**
 * @description 用来实现icloud规范的布局，即label右侧间距20px，label不flex，内容区域flex，label以最长宽度内容或提供最长宽度为最长宽度。
 * @param formName 第一个参数为form的name属性值，必须
 * @param maxWidth 可选，设置最大宽度，规范要求默认为80，如果知道内容没有超过80的，可以传入0，自动计算宽度
 *
 */
export default (formName: string, maxWidth: number = 104) => {
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

            const tooltip =  document.querySelectorAll(
                `#${formName} .ant-form-item > .ant-form-item-label .ant-form-item-tooltip`
            );

            if (!labelRef.current || !antdFormLabelRef.current || !antdFormItemControlRef.current) {
                return;
            }

            // 如果item没有变，不做额外操作
            if (!init && currentLabels.length === labelRef.current.length) {
                return;
            }

            // 如果没有最大宽度，不做调整
            if (!maxWidth) {
                return;
            }

            // 异步处理计算数据
            setTimeout(
                () => {
                    init.current = false;
                    labelRef.current = currentLabels;
                    antdFormLabelRef.current = currentAntdFormItemLabels;
                    let innerMaxWidth = maxWidth;
                    labelRef.current.forEach(element => {
                        const elementWidth = element.clientWidth;
                        innerMaxWidth = elementWidth > innerMaxWidth ? elementWidth : elementWidth
                    });

                    let fullWidth = innerMaxWidth + 12; // 12是前面的required和后面的：
                    if (tooltip.length > 0) {
                        // tooltip魔法，给tooltip预留空间，其实也可以自己通过label实现，需要配合colon=false
                        fullWidth += 12;
                    }

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
                                    `max-width: ${fullWidth}px; flex: 0 0 ${fullWidth}px; white-space: initial;`
                                );
                                element.firstElementChild?.classList.add('multiple-line')
                            }
                        }
                    );

                    // 最后的footer内容
                    antdFormItemControlRef.current?.forEach(
                        element => {
                            element.setAttribute('style', `margin-left: ${fullWidth + 16}px;`);
                        }
                    );
                },
                0
            );


        }
    );
};
