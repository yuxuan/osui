import {VFC} from 'react';
import c from './index.less';

interface Props {
    userList: string[];
}

const UserList: VFC<Props> = ({userList}) => {
    return <div className={c.userList}>{userList.map(user => user)}</div>;
};

export default UserList;
