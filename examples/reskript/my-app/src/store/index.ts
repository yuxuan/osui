import {configureStore} from '@reduxjs/toolkit';
import {useSelector as useReduxSelector} from 'react-redux';
import reducer from './reducers';

export const store = configureStore({reducer});

export type StoreState = ReturnType<typeof reducer>;

export function useSelector<T>(fn: (state: StoreState) => T) {
    return useReduxSelector(fn);
}
