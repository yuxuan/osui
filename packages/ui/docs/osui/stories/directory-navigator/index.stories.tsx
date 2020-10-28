import React from 'react';
import DirectoryNavigator from '@osui/directory-navigator';

const treeData = [
    {
        title: 'Source',
        key: '0-0',
        children: [
            {
                title: 'Test',
                key: '0-0-0',
                isLeaf: true,
            },
            {
                title: 'Hello World',
                key: '0-0-1',
                isLeaf: true,
            },
        ],
    },
    {
        title: 'parent 1',
        key: '0-1',
        children: [
            {
                title: 'leaf 1-0',
                key: '0-1-0',
                isLeaf: true,
            },
            {
                title: 'leaf 1-1',
                key: '0-1-1',
                isLeaf: true,
            },
        ],
    },
];

export default {
    title: 'DirectoryNavigator',
};

export const DirectoryNavigatorDemo = () => {
    const onSelect = (keys: React.ReactText[], event: any) => {
        console.log('Trigger Select', keys, event);
    };

    const onExpand = () => {
        console.log('Trigger Expand');
    };

    return (
        <DirectoryNavigator
            onSelect={onSelect}
            onExpand={onExpand}
            treeData={treeData}
        />
    );
};
