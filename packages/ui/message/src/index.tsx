import { message as AntdMessage } from 'antd';
import { MessageInstance as AntdMessageInstance, MessageApi as AntdMessageApi } from 'antd/lib/Message';
import './index.less';

const clsPrefix = 'osui-message';

export type MessageInstance = AntdMessageInstance;
export type MessageApi = AntdMessageApi;

const types = ['success', 'error', 'info', 'warning', 'warn', 'loading', 'config', 'destroy', 'useMessage'];

enum message { }

types.forEach(item => {
    message[item] = props => {
        const defaultProps = { className: '' };
        if (typeof props === 'object') {
            defaultProps.className = clsPrefix + ` ${props.className ? props.className : ''}`;
        } else if (typeof props === 'string') {
            defaultProps.className = clsPrefix;
            defaultProps.content = props;
        }
        AntdMessage[item](defaultProps);
    };
});

export default message;
