import {useState} from 'react';
import InsertableTable from './InsertTable';

const InsertTableDemo = () => {
    const [data, setData] = useState([
        {
            key: Date.now(),
            name: '张三',
            age: '12',
        },
    ]);
    return (
        <InsertableTable
            value={data}
            onInsertChange={setData}
            createNewRow={() => ({
                key: Date.now(),
                name: '张三',
                age: '12',
            })}
            columns={[
                {title: 'Name', dataIndex: 'name'},
                {title: 'Age', dataIndex: 'age'},
            ]}
        />
    );
};

export default InsertTableDemo;

