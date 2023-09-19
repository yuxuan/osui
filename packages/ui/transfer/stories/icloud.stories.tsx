import React, {useState} from 'react';
import BrandProvider from '@osui/brand-provider';
import Transfer from '../src';

export default {
    title: '数据录入/Transfer 穿梭框',
    component: Transfer,
};

export const Demo = () => {
    const mockData = [];
    for (let i = 0; i < 20; i++) {
        mockData.push({
            key: i.toString(),
            title: `content${i + 1}`,
            description: `description of content${i + 1}`,
        });
    }

    const initialTargetKeys = mockData.filter(item => +item.key > 10).map(item => item.key);

    const App = () => {
        const [targetKeys, setTargetKeys] = useState(initialTargetKeys);
        const [selectedKeys, setSelectedKeys] = useState([]);
        const onChange = (nextTargetKeys, direction, moveKeys) => {
            console.log('targetKeys:', nextTargetKeys);
            console.log('direction:', direction);
            console.log('moveKeys:', moveKeys);
            setTargetKeys(nextTargetKeys);
        };

        const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
            console.log('sourceSelectedKeys:', sourceSelectedKeys);
            console.log('targetSelectedKeys:', targetSelectedKeys);
            setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
        };

        const onScroll = (direction, e) => {
            console.log('direction:', direction);
            console.log('target:', e.target);
        };

        return (
            <Transfer
                dataSource={mockData}
                titles={['Source', 'Target']}
                targetKeys={targetKeys}
                selectedKeys={selectedKeys}
                onChange={onChange}
                onSelectChange={onSelectChange}
                onScroll={onScroll}
                render={item => item.title}
            />
        );
    };

    return (
        <BrandProvider>
            <App />
        </BrandProvider>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/transfer-cn/">Antd Transfer API</a>
        </>
    );
};

