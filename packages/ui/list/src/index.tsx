import React from 'react';
import Spin from '@osui/spin';
import {List as AntdList, ListProps as AntdListProps} from 'antd';
import hoistNonReactStatics from 'hoist-non-react-statics';

function List<T>(props: React.PropsWithChildren<AntdListProps<T>>) {
    const {loading} = props;
    const innerLoading = typeof loading === 'object' ? {
        indicator: <Spin />,
        ...loading,
    } : {
        indicator: <Spin />,
        loading,
    };
    return <AntdList {...props} loading={innerLoading} />;
}

hoistNonReactStatics(List, AntdList);

export type {ListProps} from 'antd';
export default List as typeof AntdList;
