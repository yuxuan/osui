import React, {useEffect} from 'react';
import './index.less';

const paginationClassName = '-table-pagination';
const paginationOptionClassName = '.*-pagination-options';
const quickJumperClassName = '.*-pagination-options-quick-jumper';
const simplePagerClassName = '.*-pagination-simple-pager'
const pageSizeClassName = '.*-pagination-options-size-changer';

// sizeChanger 和 quick-Jumper 在首尾显示，设置宽度留白
const setPaginationOptionsWidth = (parentDom: HTMLElement) => {
    let liDom: HTMLElement | undefined;
    const width = [...parentDom.childNodes as any].map((dom: HTMLElement) => {
        if (dom.className.match(paginationOptionClassName)) {
            liDom = dom;
            return [...dom.childNodes as any].map((subDom: HTMLElement) => subDom.clientWidth).reduce((a, b) => a + b);
        }
        return dom.clientWidth;
    }).reduce((a,b)=> a+b);
    if(liDom) {
        liDom.style.width = (width+6) + 'px';
    }
    return liDom;
}

// 为 sizeChanger 和 quick-Jumper 在两侧留下空间
const handleAddAndRemove: (nodes: NodeList, type: 'remove'|'add'|'set', parentDom: HTMLElement)=>void = (nodes, type, parentDom)=>{
    const className = [...nodes as any].map(i => i.className);
    const showQuickJumperClassName = className.find(item=> item.match(quickJumperClassName))?.match(quickJumperClassName)?.[0];
    const showSimplePagerClassName = className.find(item=> item.match(simplePagerClassName))?.match(simplePagerClassName)?.[0];
    const showPageSizeClassName = className.find(item => item.match(pageSizeClassName))?.match(pageSizeClassName)?.[0];

    const showPageSizeDom = parentDom.querySelector('.'+showPageSizeClassName);
    const showQuickJumperDom = parentDom.querySelector('.' + showQuickJumperClassName);
    const showSimplePagerDom = parentDom.querySelector('.' + showSimplePagerClassName);
    const liDom = setPaginationOptionsWidth(parentDom);
    const marginLeft = Number(liDom?.style?.marginInlineStart?.replace('px', '')) || 16;
    if (type === 'set') {
        parentDom.style.paddingRight = !!showQuickJumperDom
            ? (
                (showQuickJumperDom?.clientWidth || showSimplePagerDom?.clientWidth || 86)
                + 'px'
            )
            : '0';
        parentDom.style.paddingLeft = !!showPageSizeDom
            ? (
                (
                    (showPageSizeDom?.clientWidth ?? 100) + marginLeft
                ) + 'px'
            )
            : '0';
    } else {
        if (!!showQuickJumperClassName) {
            parentDom.style.paddingRight = type === 'remove'
                ? '0'
                : (
                    (showQuickJumperDom?.clientWidth || showSimplePagerDom?.clientWidth || 86)
                    + 'px'
                );
        }
        if (!!showPageSizeClassName ) {
            parentDom.style.paddingLeft = type === 'remove'
                ? '0'
                : (((showPageSizeDom?.clientWidth ?? 100) + marginLeft)+ 'px');
        }
    }
}

const mutationCallback: (list: Array<HTMLElement>)=>MutationCallback =(parentDomList)=> () => {
    // 可能存在两个分页器，此时两个需要同时改变，mutationList 不一定能同时触发两个分页器
    for (const parentDom of parentDomList) {
        const paginationOptionsDom = [...parentDom.childNodes as any]
            .find(i => i.className.match(paginationOptionClassName));
        if (paginationOptionsDom) {
            handleAddAndRemove(paginationOptionsDom.childNodes, 'set', parentDom);
        }
    }
};

const config = { attributes: true, childList: true, subtree: true };

const useTablePaginationStylePatch = (domRef: React.MutableRefObject<HTMLElement | null>, prefixCls: string) => {

    useEffect(() => {
        if (!domRef?.current) {
            return;
        }

        const paginationDomList: Array<HTMLElement> = [...domRef.current.querySelectorAll(`.${prefixCls}${paginationClassName}`) as any];

        // const paginationDomList: Array<HTMLElement> = [...domRef.current.querySelectorAll('ul') as any]
        //     .filter((dom: HTMLElement) => dom?.className?.match(paginationClassName));
        if (!paginationDomList || paginationDomList.length === 0) {
            return;
        }

        const observerList = paginationDomList.map((dom) => {
            const observer = new MutationObserver(mutationCallback(paginationDomList));
            const paginationOptionsDom = [...dom.childNodes as any]
                .find(i => i.className.match(paginationOptionClassName));

            // 初始化样式
            if (paginationOptionsDom) {
                handleAddAndRemove(paginationOptionsDom.childNodes, 'set', dom)
                setPaginationOptionsWidth(dom);
            }

            observer.observe(dom, config);
            return observer;
        });

        return () => {
            observerList?.map(observer=> observer?.disconnect());
        }
    }, [])

}
export default useTablePaginationStylePatch;
