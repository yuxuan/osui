import React, {useEffect} from 'react';
import {Reference} from 'rc-table';
import './index.less';

const paginationClassName = '-table-pagination';
const paginationOptionClassName = '-pagination-options';
const quickJumperClassName = '-pagination-options-quick-jumper';
// simple 样式的分页器不需要调整布局
// const simplePagerClassName = '-pagination-simple-pager'
const pageSizeClassName = '-pagination-options-size-changer';

// sizeChanger 和 quick-Jumper 在首尾显示，设置宽度为中间留白
const setPaginationOptionsWidth = (parentDom: HTMLElement, prefixCls: string) => {
    // eslint-disable-next-line @typescript-eslint/init-declarations
    let paginationOptionDom: HTMLElement | undefined;
    const width = [...parentDom.childNodes as any].map((dom: HTMLElement) => {
        if (dom.className.includes(`${prefixCls}${paginationOptionClassName}`)) {
            paginationOptionDom = dom;
            return [...dom.childNodes as any]
                .map((subDom: HTMLElement) => subDom.clientWidth)
                .reduce((a, b) => a + b);
        }
        return dom.clientWidth;
    }).reduce((a, b) => a + b);
    if (paginationOptionDom) {
        paginationOptionDom.style.width = (width + 6) + 'px';
    }
    return paginationOptionDom;
};

// 为 sizeChanger 和 quick-Jumper 在两侧留下空间
const handleAddAndRemove: (
    parentDom: HTMLElement,
    prefixCls: string
) => void = (parentDom, prefixCls) => {
    const pageSizeDom = parentDom.querySelector(`.${prefixCls}${pageSizeClassName}`);
    const quickJumperDom = parentDom.querySelector(`.${prefixCls}${quickJumperClassName}`);

    const paginationOptionDom = setPaginationOptionsWidth(parentDom, prefixCls);
    const marginLeft = Number(paginationOptionDom?.style?.marginInlineStart?.replace('px', '')) || 16;
    parentDom.style.paddingRight = quickJumperDom
        ? (
            (quickJumperDom?.clientWidth || 86) + 'px'
        )
        : '0';
    parentDom.style.paddingLeft = pageSizeDom
        ? (
            (
                (pageSizeDom?.clientWidth ?? 0) + marginLeft
            ) + 'px'
        )
        : '0';
};

const mutationCallback: (
    list: HTMLElement[],
    prefixCls: string
) => MutationCallback = (parentDomList, prefixCls) => () => {
    // 可能存在两个分页器，此时两个需要同时改变，mutationList 不一定能同时触发两个分页器
    for (const parentDom of parentDomList) {
        const paginationOptionsDom = [...parentDom.childNodes as any]
            .find(i => i.className.includes(`${prefixCls}${paginationOptionClassName}`));
        if (paginationOptionsDom) {
            handleAddAndRemove(parentDom, prefixCls);
        }
    }
};

const mutationObserverConfig = {attributes: true, childList: true, subtree: true};

const useTablePaginationStylePatch = (
    domRef: React.MutableRefObject<Reference | null>,
    prefixCls: string,
    containerDomRef: React.MutableRefObject<HTMLElement | null>
) => {
    useEffect(
        () => {
            if (!domRef?.current) {
                return;
            }

            let paginationDomList: HTMLElement[] = [];
            try {
                // antd 5.11.0 修改了 ref 传递方式
                // 使用了 Proxy 代理，调用 querySelectorAll 方法会出错
                paginationDomList = [
                    ...domRef.current.nativeElement.querySelectorAll(`.${prefixCls}${paginationClassName}`) as any,
                ];
            } catch (e: any) {
                console.error(e?.message);
            }

            try {
                if (paginationDomList.length === 0) {
                    const className = (
                        domRef.current.nativeElement.className || ''
                    ).split(' ').map(v => '.' + v).join(' ');
                    const dom = (containerDomRef.current || document)?.querySelector(className);
                    if (dom) {
                        paginationDomList = [
                            ...dom?.querySelectorAll(`.${prefixCls}${paginationClassName}`) as any,
                        ];
                    }
                }
            } catch (e: any) {
                console.error(domRef.current.nativeElement.className, e?.message);
            }

            if (!paginationDomList || paginationDomList.length === 0) {
                return;
            }

            const observerList = paginationDomList.map(dom => {
                const observer = new MutationObserver(mutationCallback(paginationDomList, prefixCls));
                const paginationOptionsDom = [...dom.childNodes as any]
                    .find(i => i.className.includes(`${prefixCls}${paginationOptionClassName}`));
                // 初始化样式
                if (paginationOptionsDom) {
                    handleAddAndRemove(dom, prefixCls);
                    setPaginationOptionsWidth(dom, prefixCls);
                }

                observer.observe(dom, mutationObserverConfig);
                return observer;
            });

            return () => {
                observerList?.map(observer => observer?.disconnect());
            };
        }
    );
};

export default useTablePaginationStylePatch;
