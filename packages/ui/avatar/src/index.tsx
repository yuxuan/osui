import React, {useContext} from 'react';
import {Avatar as AntdAvatar, ConfigProvider} from 'antd';
import {AvatarProps as AntdAvatarProps} from 'antd/es/avatar';
import {IconCheckCircleFilled} from '@osui/icons';
import classNames from 'classnames';
import {theme} from 'antd';
import {useStyle} from './style';
// import './index.less';

const {useToken} = theme;

const clsPrefix = 'osui-avatar';

export interface AvatarProps extends AntdAvatarProps {
    pr?: boolean;
}

export interface AvatarInterface extends React.FC<AvatarProps> {
    Group: typeof AntdAvatar.Group;
}

const Avatar: AvatarInterface = props => {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('avatar', props.prefixCls);
    const antPrefixCls = getPrefixCls('');
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefixCls);
    const {hashId} = useToken();

    if (props.pr) {
        return wrapSSROsui(
            <span className={`${clsPrefix}-wrapper ${hashId}`}>
                <AntdAvatar {...props} className={classNames(clsPrefix, props.className)} />
                {
                    props.pr ? (
                        <IconCheckCircleFilled className={`${clsPrefix}-pr`} />
                    ) : null
                }
            </span>
        );
    }

    return wrapSSROsui(
        <AntdAvatar {...props} className={classNames(clsPrefix, props.className)} />
    );
};

Avatar.Group = AntdAvatar.Group;

export default Avatar;
