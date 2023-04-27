import {ConfigProvider} from 'antd';

type MessagePosition = 'center' | 'right';

interface GlobalConfig {
    messagePosition: MessagePosition;
}

let globalMessagePosition: MessagePosition = 'right';

export const setGlobalConfig = ({messagePosition}: GlobalConfig) => {
    if (messagePosition !== undefined) {
        globalMessagePosition = messagePosition;
    }
};

export const getGlobalConfig = () => {
    return {
        messagePosition: globalMessagePosition,
    };
};

export default ConfigProvider;
