import React, {useEffect} from 'react';

const paginationClassName = '-table-pagination';
const quickJumperClassName = '-pagination-options-quick-jumper';

const getComputedStyle = (element: HTMLElement) => {
    const style = window.getComputedStyle(element);
    const marginLeft = parseFloat(style.marginLeft) || 0;
    const marginRight = parseFloat(style.marginRight) || 0;
    const borderLeft = parseFloat(style.borderLeft) || 0;
    const borderRight = parseFloat(style.borderRight) || 0;
    const completeWidth = (element.offsetWidth || 0) + marginLeft + marginRight + borderLeft + borderRight;
    return completeWidth;
};

const useSetPaginationPaddingRightForQuickJumper = ({
    containerDomRef, prefixCls,
}: {
    prefixCls: string;
    containerDomRef: React.MutableRefObject<HTMLElement | null>;
}) => {
    useEffect(
        () => {
            if (!containerDomRef?.current) {
                return;
            }

            let paginationDomList: HTMLElement[] = [];
            try {
                paginationDomList = [
                    ...containerDomRef.current.querySelectorAll(`.${prefixCls}${paginationClassName}`) as any,
                ];
            } catch (e: any) {
                console.error(e?.message);
            }

            if (!paginationDomList?.length) {
                return;
            }

            paginationDomList.forEach(dom => {
                const quickJumperDom = dom.querySelector(`.${prefixCls}${quickJumperClassName}`) as HTMLElement;
                const left = dom.className.includes(`${prefixCls}-table-pagination-left`);
                const right = dom.className.includes(`${prefixCls}-table-pagination-right`);
                if (quickJumperDom) {
                    // 右侧需要给quickJumper留空位
                    if (right) {
                        quickJumperDom.style.right = '0px';
                        dom.style.paddingRight = `${getComputedStyle(quickJumperDom)}px`;
                    }

                    // 左侧需要设置 quickJumper left 位置
                    if (left) {
                        const li = [...dom.querySelectorAll('li') as any];
                        const left = li.reduce((sum, cur) => {
                            const width = getComputedStyle(cur);
                            return sum + width;
                        }, 0);
                        if (quickJumperDom.style) {
                            quickJumperDom.style.left = `${left}px`;
                        }
                    }
                } else {
                    dom.style.paddingRight = '0px';
                }
            });
        }
    );
};

export default useSetPaginationPaddingRightForQuickJumper;
