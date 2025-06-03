/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import BrandProvider from '@osui/brand-provider';
import TreeSelect, {highlightMatchText} from '../src';

export default {
    title: '数据展示/TreeSelect 树选择',
    component: TreeSelect,
};

export const Demo = () => {
    const {TreeNode} = TreeSelect;

    class Demo extends React.Component {
        state = {
            value: undefined,
        };

        onChange = value => {
            console.log(value);
            this.setState({value});
        };

        render() {
            return (
                <BrandProvider>
                    <TreeSelect
                        showSearch
                        style={{width: '100%'}}
                        value={this.state.value}
                        dropdownStyle={{maxHeight: 400, overflow: 'auto'}}
                        placeholder="Please select"
                        allowClear
                        treeDefaultExpandAll
                        onChange={this.onChange}
                    >
                        <TreeNode value="parent 1" title="parent 1">
                            <TreeNode value="parent 1-0" title="parent 1-0">
                                <TreeNode value="leaf1" title="my leaf" />
                                <TreeNode value="leaf2" title="your leaf" />
                            </TreeNode>
                            <TreeNode value="parent 1-1" title="parent 1-1">
                                <TreeNode value="sss" title="sss" disabled />
                            </TreeNode>
                        </TreeNode>
                    </TreeSelect>
                </BrandProvider>
            );
        }
    }

    return <Demo />;
};

const generateTreeData = () => {
    const x = 3;
    const y = 2;
    const z = 1;
    const gData = [];

    const generateData = (_level, _preKey, _tns) => {
        console.log(_level);
        const preKey = _preKey || '0';
        const tns = _tns || gData;

        const children = [];
        for (let i = 0; i < x; i++) {
            const key = `${preKey}-${i}`;
            tns.push({title: key, key, value: key});
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
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (let i = 0; i < data.length; i++) {
            const node = data[i];
            const {key} = node;
            dataList.push({key, title: key, value: key});
            if (node.children) {
                generateList(node.children);
            }
        }
    };
    generateList(gData);
    return gData;
};

export const HighlightTreeDataOnSearch = () => {
    const gData = generateTreeData();
    function SearchTree() {
        const [searchValue, setSearchValue] = React.useState('');
        return (
            <BrandProvider>
                <p>只能使用treeData的方式进行高亮，只能match title，高亮title，如果要matchByValue，需要title和value一致</p>
                <p></p>
                <TreeSelect
                    showSearch
                    style={{width: 250}}
                    treeData={highlightMatchText(gData, searchValue)}
                    onSearch={setSearchValue}
                />
            </BrandProvider>
        );
    }
    return <SearchTree />;
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/tree-select-cn/">Antd TreeSelect API</a>
        </>
    );
};

export const TestCase = () => {
    return (<TreeSelect style={{width: '100%'}} open notFoundContent="notFoundContent" />);
};

