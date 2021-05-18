import React from 'react';
import {Avatar as AntdAvatar} from 'antd';
import {AvatarProps as AntdAvatarProps} from 'antd/lib/avatar';
import {IconCheckCircleFilled} from '@osui/icons';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-avatar';

export interface AvatarProps extends AntdAvatarProps {
    pr?: boolean;
}

export interface AvatarInterface extends React.FC<AvatarProps> {
    Group: typeof AntdAvatar.Group;
}

const Avatar: AvatarInterface = props => {
    if (props.pr) {
        return (
            <span className={`${clsPrefix}-wrapper`}>
                <AntdAvatar {...props} className={classNames(clsPrefix, props.className)} />
                {
                    props.pr ? (
                        <IconCheckCircleFilled className={`${clsPrefix}-pr`} />
                    ) : null
                }
            </span>
        );
    }

    return (
        <AntdAvatar {...props} className={classNames(clsPrefix, props.className)} />
    );
};

Avatar.Group = AntdAvatar.Group;

export default Avatar;
