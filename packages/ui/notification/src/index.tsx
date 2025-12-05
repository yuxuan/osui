import {notification, NotificationArgsProps} from 'antd';
import {NotificationInstance, NotificationConfig} from 'antd/es/notification/interface';
import Typography from '@osui/typography';
import classNames from 'classnames';
import React from 'react';
import {OutlinedCopy} from 'acud-icon';
import './index.less';

const clsPrefix = 'osui-notification';


interface IArgsProps extends NotificationArgsProps {
    code?: string | number;
}

type AntdNotificationType = typeof notification;

type NotificationFn = (args: IArgsProps) => void;
interface NotificationInstanceApi extends Omit<NotificationInstance, 'error' | 'open'> {
    error: NotificationFn;
    open: NotificationFn;
}
type NotificationApi = Omit<AntdNotificationType, 'useNotification' | 'error' | 'open'> & {
    error: NotificationFn;
    open: NotificationFn;
    useNotification(config?: NotificationConfig):
        readonly [NotificationInstanceApi, React.ReactElement<unknown, string | React.JSXElementConstructor<any>>];
};

const getConfig = (config: NotificationArgsProps) => ({
    ...config,
    className: classNames(clsPrefix, config.className),
});

const ErrorContent: React.FC<{description: React.ReactNode, code: string | number}> = ({description, code}) => {

    return (
        <div className={`${clsPrefix}-error-content`}>
            <div className={`${clsPrefix}-error-content-info`}>错误信息：</div>
            <div className={`${clsPrefix}-error-content-description`}>{description}</div>
            <div className={`${clsPrefix}-error-content-code`}>
                <span>错误码：</span>
                <div className={`${clsPrefix}-error-content-code-text`}>
                    <Typography.Text ellipsis copyable={{icon: <OutlinedCopy width={16} height={16} />}}>
                        {code}
                    </Typography.Text>
                </div>
            </div>
        </div>
    );
};

const error = (notification: NotificationInstanceApi): NotificationInstanceApi['error'] => {
    return config => {
        if (config.code) {
            notification.error(getConfig({
                ...config,
                description: <ErrorContent description={config.description} code={config.code} />,
            }));
            return;
        }
        notification.error(getConfig(config));
    };
};

const open = (notification: NotificationInstanceApi): NotificationInstanceApi['open'] => {
    return config => {
        if (config.code && config.type === 'error') {
            notification.open(getConfig({
                ...config,
                description: <ErrorContent description={config.description} code={config.code} />,
            }));
            return;
        }
        notification.open(getConfig(config));
    };
};


const useOsuiNotification = (notificationConfig?: NotificationConfig):
[NotificationInstanceApi, React.ReactElement<unknown, string | React.JSXElementConstructor<any>>] => {
    const [api, contextHolder] = notification.useNotification(notificationConfig);

    const osuiApi: NotificationInstanceApi = Object.assign({}, api, {
        success: config => api.success(getConfig(config)),
        error: error(api),
        warning: config => api.warning(getConfig(config)),
        info: config => api.info(getConfig(config)),
        open: open(api),
    } as NotificationInstanceApi);

    return [osuiApi, contextHolder];
};


const osuiNotification: NotificationApi = Object.assign({}, notification, {
    success: (config: NotificationArgsProps) => notification.success(getConfig(config)),
    error: error(notification),
    warning: (config: NotificationArgsProps) => notification.warning(getConfig(config)),
    info: (config: NotificationArgsProps) => notification.info(getConfig(config)),
    open: open(notification),
    useNotification: useOsuiNotification,
});

export default osuiNotification;
