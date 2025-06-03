// import cx from '../styles/Home.less'
import {Button, Tooltip, Table} from 'antd';

export default function Home() {
  return (
    <div className='red'>
      <Tooltip title="222">
        <Button type="primary">aaa</Button>
      </Tooltip>
      <Table />
    </div>
  )
}
