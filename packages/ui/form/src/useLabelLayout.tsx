import {useLayoutEffect, useRef} from 'react';
/**
 * @description 用来实现icloud规范的布局，即label右侧间距20px，label不flex，内容区域flex，label以最长宽度内容或提供最长宽度为最长宽度。
 * @param formName 第一个参数为form的name属性值，必须
 * @param maxWidth 可选，设置最大宽度，规范要求默认为80，如果知道内容没有超过80的，可以传入0，自动计算宽度
 * // TODO:选择器有问题，Form表单内部带有网格布局，后续如有不带网格布局的记得兼容
 *
 */
export default (formName: string, maxWidth: number = 104) => {
    const labelRef = useRef<NodeListOf<Element> | undefined >(undefined);
    const antdFormLabelRef = useRef<NodeListOf<Element> | undefined >(undefined);
    const antdFormItemControlRef = useRef<NodeListOf<Element> | undefined >(undefined);
    const nestedAntdFormItemControlRef = useRef<NodeListOf<Element> | undefined >(undefined);
    const init = useRef(true);

    useLayoutEffect(
        () => {
            // 所有底层label
            labelRef.current = document.querySelectorAll(
                `#${formName} .ant-form-item > .ant-form-item-row > .ant-form-item-label > label`
            );
            // 所有label上层统一控制宽度
            antdFormLabelRef.current = document.querySelectorAll(
                `#${formName} .ant-form-item > .ant-form-item-row > .ant-form-item-label`
            );
            // form labelValue部分，用于最后footer
            antdFormItemControlRef.current = document.querySelectorAll(
                `#${formName} .ant-form-item > .ant-form-item-row > .ant-form-item-control:first-child`
            );

            // 嵌套内部的formItem且没有label的，没有margin
            nestedAntdFormItemControlRef.current = document.querySelectorAll(
                // eslint-disable-next-line max-len
                `#${formName} .ant-form-item > .ant-form-item-row > .ant-form-item-control .ant-form-item-control:first-child`
            );
        },
        [formName]
    );

    useLayoutEffect(
        () => {
            const currentLabels = document.querySelectorAll(
                `#${formName} .ant-form-item > .ant-form-item-row > .ant-form-item-label > label`
            );
            const currentAntdFormItemLabels = document.querySelectorAll(
                `#${formName} .ant-form-item > .ant-form-item-row > .ant-form-item-label`
            );

            const tooltip = document.querySelectorAll(
                `#${formName} .ant-form-item > .ant-form-item-row > .ant-form-item-label .ant-form-item-tooltip`
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
                        innerMaxWidth = elementWidth > innerMaxWidth ? elementWidth : innerMaxWidth;
                    });

                    // 12是前面的required和后面的colon
                    const fullWidth = innerMaxWidth + 12;

                    // label宽度计算，考虑tooltip，padding-right容纳绝对定位的tooltip
                    labelRef.current.forEach(element => {
                        element.setAttribute(
                            'style',
                            `max-width: ${fullWidth}px; flex: 0 0 ${fullWidth}px; padding-right: ${
                                tooltip.length > 0 ? '12px' : 0
                            }`
                        );
                    });

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
                                element.firstElementChild?.classList.add('multiple-line');
                            }
                        }
                    );

                    // 最后的footer内容
                    antdFormItemControlRef.current?.forEach(
                        element => {
                            element.setAttribute('style', `margin-left: ${fullWidth}px;`);
                        }
                    );

                    nestedAntdFormItemControlRef.current?.forEach(
                        element => {
                            element.setAttribute('style', 'margin-left: 0px;');
                        }
                    );
                },
                0
            );
        }
    );
};
