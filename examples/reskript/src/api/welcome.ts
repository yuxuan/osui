import createInterface from '@/utils/createInterface';

interface User {
    id: number;
    name: string;
}

interface ParamsId {
    id: number;
}

export const apiGetUser = createInterface<ParamsId, User>('GET', '/users/{id}');

interface ParamsPostUser {
    name: string;
}

export const apiPostUser = createInterface<ParamsPostUser, User>('POST', 'users');

interface ParamsPutUser {
    id: number;
    name: string;
}

export const apiPutUser = createInterface<ParamsPutUser, User>('PUT', 'users');

export const apiDeleteUser = createInterface<ParamsId, null>('DELETE', '/users/{id}');
