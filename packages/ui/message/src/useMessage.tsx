import {useContext} from 'react';
import {message as AntdMessage, ConfigProvider, theme as AntdTheme} from 'antd';
import {useStyle} from './style';
import {genMessage, genOpenMessage} from './genMessage';
import {type UseMessage, type MessageInstance} from './interface';

const clsPrefix = 'osui-message';
const {useToken} = AntdTheme;

const keys = ['info', 'success', 'warning', 'error', 'loading'] as const;

const useMessage: UseMessage = props => {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('message');
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar);
    const {hashId} = useToken();
    const [originApi, holder] = AntdMessage.useMessage(props);
    const api = {
        ...originApi,
    } as MessageInstance;

    api.open = genOpenMessage(
        'open',
        hashId,
        wrapSSROsui,
        originApi
    );

    keys.forEach(type => {
        api[type] = genMessage(
            type,
            hashId,
            wrapSSROsui,
            originApi
        ) as any;
    });

    return [api, holder];
};

export default useMessage;
