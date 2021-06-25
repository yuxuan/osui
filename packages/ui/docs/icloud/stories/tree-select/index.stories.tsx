import React from 'react';
import TreeSelect from '@osui/tree-select';

export default {
    title: '数据展示/TreeSelect 树选择',
    component: TreeSelect,
};

export const Demo = () => {
    const { TreeNode } = TreeSelect;

    class Demo extends React.Component {
        state = {
            value: undefined,
        };

        onChange = value => {
            console.log(value);
            this.setState({ value });
        };

        render() {
            return (
                <TreeSelect
                    showSearch
                    style={{ width: '100%' }}
                    value={this.state.value}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
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
                            <TreeNode value="sss" title="sss" />
                        </TreeNode>
                    </TreeNode>
                </TreeSelect>
            );
        }
    }

    return <Demo />;
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/tree-select-cn/">Antd TreeSelect API</a>
        </>
    );
};

