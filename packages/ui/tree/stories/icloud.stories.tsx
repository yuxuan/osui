/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable init-declarations */
/* eslint-disable react/no-multi-comp, @typescript-eslint/prefer-for-of */
import React from 'react';
import Input from '@osui/input';
import {IconSearchOutlined} from '@osui/icons';
import BrandProvider from '@osui/brand-provider';
import Tree, {TreeProps} from '../src';

export default {
    title: '数据展示/Tree 树形组件',
};

export const SizeDemo = () => {
    const treeData = [
        {
            title: 'parent 1',
            key: '0-0',
            children: [
                {
                    title: 'parent 1-0',
                    key: '0-0-0',
                    children: [
                        {
                            title: 'leaf',
                            key: '0-0-0-0',
                        },
                        {
                            title: 'leaf',
                            key: '0-0-0-1',
                        },
                    ],
                },
                {
                    title: 'parent 1-1',
                    key: '0-0-1',
                },
            ],
        },
    ];

    const Demo = () => {
        const onSelect = (selectedKeys, info) => {
            console.log('selected', selectedKeys, info);
        };

        const onCheck: TreeProps['onCheck'] = (checkedKeys, info) => {
            console.log('onCheck', checkedKeys, info);
        };

        return (
            <BrandProvider>
                <p>默认没有default value，不是以下的任何一种，而是antd自身的。即：line-height: 24px, font-size: 14px</p>
                <p>Size: small。font-size: 12px, line-height: 24px;</p>
                <Tree
                    size="small"
                    defaultExpandedKeys={['0-0-0', '0-0-1']}
                    defaultSelectedKeys={['0-0-0', '0-0-1']}
                    defaultCheckedKeys={['0-0-0', '0-0-1']}
                    onSelect={onSelect}
                    onCheck={onCheck}
                    treeData={treeData}
                />
                <p>Size: middle。font-size: 14px, line-height: 30px;</p>
                <Tree
                    size="middle"
                    defaultExpandedKeys={['0-0-0', '0-0-1']}
                    defaultSelectedKeys={['0-0-0', '0-0-1']}
                    defaultCheckedKeys={['0-0-0', '0-0-1']}
                    onSelect={onSelect}
                    onCheck={onCheck}
                    treeData={treeData}
                />
                <p>Size: large。font-size: 14px, line-height: 40px;</p>
                <Tree
                    size="large"
                    defaultExpandedKeys={['0-0-0', '0-0-1']}
                    defaultSelectedKeys={['0-0-0', '0-0-1']}
                    defaultCheckedKeys={['0-0-0', '0-0-1']}
                    onSelect={onSelect}
                    onCheck={onCheck}
                    treeData={treeData}
                />
            </BrandProvider>
        );
    };

    return <Demo />;
};


export const Demo = () => {
    const treeData = [
        {
            title: 'parent 1',
            key: '0-0',
            children: [
                {
                    title: 'parent 1-0',
                    key: '0-0-0',
                    children: [
                        {
                            title: 'leaf',
                            key: '0-0-0-0',
                            disableCheckbox: true,
                        },
                        {
                            title: 'leaf',
                            key: '0-0-0-1',
                            disabled: true,
                        },
                    ],
                },
                {
                    title: 'parent 1-1',
                    key: '0-0-1',
                    children: [{title: <span>sss</span>, key: '0-0-1-0'}],
                },
            ],
        },
    ];

    const Demo = () => {
        const onSelect = (selectedKeys: React.Key[], info: any) => {
            console.log('selected', selectedKeys, info);
        };

        const onCheck: TreeProps['onCheck'] = (checkedKeys, info) => {
            console.log('onCheck', checkedKeys, info);
        };

        return (
            <BrandProvider>
                <Tree
                    defaultExpandedKeys={['0-0-0']}
                    defaultSelectedKeys={['0-0-0']}
                    defaultCheckedKeys={['0-0-0']}
                    onSelect={onSelect}
                    onCheck={onCheck}
                    treeData={treeData}
                />
            </BrandProvider>
        );
    };

    return <Demo />;
};

export const DraggableDemo = () => {
    const x = 3;
    const y = 2;
    const z = 1;
    const gData = [];

    const generateData: (_level, _preKey?, _tns?) => void = (_level, _preKey, _tns) => {
        const preKey = _preKey || '0';
        const tns = _tns || gData;

        const children = [];
        for (let i = 0; i < x; i++) {
            const key = `${preKey}-${i}`;
            tns.push({title: key, key});
            if (i < y) {
                children.push(key);
            }
        }
        if (_level < 0) {
            return tns;
        }
        const level = _level - 1;
        children.forEach((key, index) => {
            tns[index].children = [];
            return generateData(level, key, tns[index].children);
        });
    };
    generateData(z);

    class Demo extends React.Component {
        state = {
            gData,
            expandedKeys: ['0-0', '0-0-0', '0-0-0-0'],
        };

        onDragEnter = info => {
            console.log(info);
            // expandedKeys 需要受控时设置
            // this.setState({
            //   expandedKeys: info.expandedKeys,
            // });
        };

        onDrop = info => {
            console.log(info);
            const dropKey = info.node.props.eventKey;
            const dragKey = info.dragNode.props.eventKey;
            const dropPos = info.node.props.pos.split('-');
            const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

            const loop = (data, key, callback) => {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].key === key) {
                        return callback(data[i], i, data);
                    }
                    if (data[i].children) {
                        loop(data[i].children, key, callback);
                    }
                }
            };
            const data = [...this.state.gData];

            // Find dragObject
            let dragObj = null;
            loop(data, dragKey, (item, index, arr) => {
                arr.splice(index, 1);
                dragObj = item;
            });

            if (!info.dropToGap) {
                // Drop on the content
                loop(data, dropKey, item => {
                    item.children = item.children || [];
                    // where to insert 示例添加到头部，可以是随意位置
                    item.children.unshift(dragObj);
                });
            } else if (
                (info.node.props.children || []).length > 0 // Has children
                && info.node.props.expanded // Is expanded
                && dropPosition === 1 // On the bottom gap
            ) {
                loop(data, dropKey, item => {
                    item.children = item.children || [];
                    // where to insert 示例添加到头部，可以是随意位置
                    item.children.unshift(dragObj);
                    // in previous version, we use item.children.push(dragObj) to insert the
                    // item to the tail of the children
                });
            } else {
                let ar = [];
                let i = 0;
                loop(data, dropKey, (item, index, arr) => {
                    ar = arr;
                    i = index;
                });
                if (dropPosition === -1) {
                    ar.splice(i, 0, dragObj);
                } else {
                    ar.splice(i + 1, 0, dragObj);
                }
            }

            this.setState({
                gData: data,
            });
        };


        render() {
            console.log(this.state.gData);
            return (
                <BrandProvider>
                    <p>可拖拽</p>
                    <Tree
                        className="draggable-tree"
                        defaultExpandedKeys={this.state.expandedKeys}
                        draggable
                        blockNode
                        onDragEnter={this.onDragEnter}
                        onDrop={this.onDrop}
                        treeData={this.state.gData}
                        size="middle"
                    />
                </BrandProvider>
            );
        }
    }

    return <Demo />;
};

export const SearchDemo = () => {
    const x = 3;
    const y = 2;
    const z = 1;
    const gData = [];

    const generateData: (_level, _preKey?, _tns?) => void = (_level, _preKey, _tns) => {
        const preKey = _preKey || '0';
        const tns = _tns || gData;

        const children = [];
        for (let i = 0; i < x; i++) {
            const key = `${preKey}-${i}`;
            tns.push({title: key, key});
            if (i < y) {
                children.push(key);
            }
        }
        if (_level < 0) {
            return tns;
        }
        const level = _level - 1;
        children.forEach((key, index) => {
            tns[index].children = [];
            return generateData(level, key, tns[index].children);
        });
    };
    generateData(z);

    const dataList = [];
    const generateList = data => {
        for (let i = 0; i < data.length; i++) {
            const node = data[i];
            const {key} = node;
            dataList.push({key, title: key});
            if (node.children) {
                generateList(node.children);
            }
        }
    };
    generateList(gData);

    const getParentKey = (key, tree) => {
        let parentKey = null;
        for (let i = 0; i < tree.length; i++) {
            const node = tree[i];
            if (node.children) {
                if (node.children.some(item => item.key === key)) {
                    parentKey = node.key;
                } else if (getParentKey(key, node.children)) {
                    parentKey = getParentKey(key, node.children);
                }
            }
        }
        return parentKey;
    };

    class SearchTree extends React.Component {
        state = {
            expandedKeys: [],
            searchValue: '',
            autoExpandParent: true,
        };

        onExpand = expandedKeys => {
            this.setState({
                expandedKeys,
                autoExpandParent: false,
            });
        };

        onChange = e => {
            const {value} = e.target;
            const expandedKeys = dataList
                .map(item => {
                    if (item.title.indexOf(value) > -1) {
                        return getParentKey(item.key, gData);
                    }
                    return null;
                })
                .filter((item, i, self) => item && self.indexOf(item) === i);
            this.setState({
                expandedKeys,
                searchValue: value,
                autoExpandParent: true,
            });
        };

        render() {
            const {searchValue, expandedKeys, autoExpandParent} = this.state;
            const loop = data =>
                data.map(item => {
                    const index = item.title.indexOf(searchValue);
                    const beforeStr = item.title.substr(0, index);
                    const afterStr = item.title.substr(index + searchValue.length);
                    const title =
                        index > -1 ? (
                            <span>
                                {beforeStr}
                                <span className="site-tree-search-value">{searchValue}</span>
                                {afterStr}
                            </span>
                        ) : (
                            <span>{item.title}</span>
                        );
                    if (item.children) {
                        return {title, key: item.key, children: loop(item.children)};
                    }

                    return {
                        title,
                        key: item.key,
                    };
                });
            return (
                <div>
                    <p>带搜索的树，使用Input和Tree拼出来的</p>
                    <p>注意：视觉要求搜索框应与树间隔16px</p>
                    <Input
                        suffix={<IconSearchOutlined />}
                        style={{marginBottom: '16px'}}
                        placeholder="Search"
                        onChange={this.onChange}
                    />
                    <Tree
                        onExpand={this.onExpand}
                        expandedKeys={expandedKeys}
                        autoExpandParent={autoExpandParent}
                        treeData={loop(gData)}
                    />
                </div>
            );
        }
    }

    return (
        <BrandProvider>
            <SearchTree />
        </BrandProvider>
    );
};


export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/tree-cn/">Antd Tree API</a>
        </>
    );
};

export const TestCase = () => {
    const treeData = [
        {
            title: 'parent 1',
            key: '0-0',
            children: [
                {
                    title: 'parent 1-0',
                    key: '0-0-0',
                    children: [
                        {
                            title: 'leaf',
                            key: '0-0-0-0',
                        },
                        {
                            title: 'leaf',
                            key: '0-0-0-1',
                        },
                    ],
                },
                {
                    title: 'parent 1-1',
                    key: '0-0-1',
                    children: [{title: <span>sss</span>, key: '0-0-1-0'}],
                },
            ],
        },
    ];

    const generateTreeNode = (data: any[]) => {
        if (!data) {
            return [];
        }
        return data.map(d => (
            <Tree.TreeNode
                selectable={false}
                key={d.key}
                title={d.title}
                className="osui-tree-tree-node-unselectable"
            >
                {generateTreeNode(d.children)}
            </Tree.TreeNode>
        ));
    };

    const Demo = () => {
        const onSelect = (selectedKeys: React.Key[], info: any) => {
            console.log('selected', selectedKeys, info);
        };

        const onCheck = (checkedKeys, info) => {
            console.log('onCheck', checkedKeys, info);
        };

        return (
            <BrandProvider>
                <p>
                    {`
                    selectable={false}时，需要添加osui-tree-tree-node-unselectable这个className
                    可以添加到treeData上，也可以在children里面的TreeNode上
                    `}
                </p>
                <p>注意，osui-tree-tree-node-unselectable要结合selectable一起使用</p>
                <Tree
                    defaultExpandedKeys={['0-0-0']}
                    defaultSelectedKeys={['0-0-0']}
                    defaultCheckedKeys={['0-0-0']}
                    onSelect={onSelect}
                    onCheck={onCheck}
                >
                    {generateTreeNode(treeData)}
                </Tree>
                <p></p>
                <p></p>
                <p></p>
                <p>整棵树selectable为false的时候</p>
                <p>这时，selected key 也不会高亮了</p>
                <Tree
                    defaultExpandedKeys={['0-0-0']}
                    defaultSelectedKeys={['0-0-0']}
                    defaultCheckedKeys={['0-0-0']}
                    onSelect={onSelect}
                    onCheck={onCheck}
                    treeData={treeData}
                    selectable={false}
                />
            </BrandProvider>
        );
    };

    return <Demo />;
};
