import React from 'react';

function stringMatcher(data: string, target: string) {
    const index = data.indexOf(target);
    if (index < 0) {
        return <span>{data}</span>;
    }
    const beforeStr = data.substring(0, index);
    const afterStr = data.substring(index + target.length);
    return (
        <span>
            {beforeStr}
            <span style={{color: 'var(--theme-primary-color)'}}>{target}</span>
            {stringMatcher(afterStr, target)}
        </span>
    );
}

interface BasicItem {
    [key: string]: any;
    title: string;
    key: string;
    children?: BasicItem[];
}

interface ReturnedBasicItem extends Omit<BasicItem, 'title'> {
    title: string | React.ReactNode;
}

export function highlightMatchText(data: BasicItem[], target: string) {
    if (!data.length || !target) {
        return data;
    }
    const result: ReturnedBasicItem[] = data.map(item => {
        const title = stringMatcher((item.title), target);
        if (item.children) {
            return {
                ...item,
                title,
                key: item.key,
                children: highlightMatchText(item.children, target),
            };
        }
        return {
            ...item,
            title,
            key: item.key,
        };
    });
    return result;
}
