import partial from 'lodash.partial';
import {message as AntdMessage} from 'antd';
import {MessageInstance as AntdMessageInstance, MessageApi as AntdMessageApi} from 'antd/es/message';
import './index.less';

const clsPrefix = 'osui-message';

export type MessageInstance = AntdMessageInstance;
export type MessageApi = AntdMessageApi;

type MessageType = 'success'|'error'|'warning'|'info'|'loading'|'warn';

const messageBuilder = (type: MessageType, content: any, ...restArgs: any[]) => {
    // 为了把classname加进去，所有content都变成了对象形式，而不是string形式
    const modifiedContent = {className: '', content: ''};

    if (typeof content === 'object') {
        modifiedContent.className = clsPrefix + ` ${content.className ?? ''}`;
    } else if (typeof content === 'string') {
        modifiedContent.className = clsPrefix;
        modifiedContent.content = content;
    }

    const message = AntdMessage[type];
    return message(modifiedContent, ...restArgs);
};

const openMessageBuilder = (args: any) => {
    return AntdMessage.open({className: clsPrefix + ` ${args.className ?? ''}`, ...args});
};

export default Object.assign({}, AntdMessage, {
    success: partial(messageBuilder, 'success'),
    error: partial(messageBuilder, 'error'),
    warning: partial(messageBuilder, 'warning'),
    info: partial(messageBuilder, 'info'),
    loading: partial(messageBuilder, 'loading'),
    warn: partial(messageBuilder, 'warn'),
    open: openMessageBuilder,
}) as MessageApi;
