import * as React from 'react';
import {Avatar as AntdAvatar} from 'antd';
import {AvatarProps as AntdAvatarProps} from 'antd/lib/avatar';
import {IconAvatar} from '@osui/icons';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-avatar';

export interface AvatarProps extends AntdAvatarProps {
    pr?: boolean;
}

const OSUIAvatar: React.FC<AvatarProps> = props => {
    let size = '';
    switch (props.size) {
        case 'l':
            size = `${clsPrefix}-l`;
            break;
        case 'm':
            size = `${clsPrefix}-m`;
            break;
        case 's':
            size = `${clsPrefix}-s`;
            break;
    }
    return (
        <span className={clsPrefix}>
            <AntdAvatar {...props} className={classNames(props.className, size)} />
            {
                props.pr ? (
                    <IconAvatar className={`${clsPrefix}-pr`} />
                ) : null
            }
        </span>
    );
};

export default OSUIAvatar;
>>>>>>> 18356f5cb3a10a9b9d2e5c1401c9a6a66520f3c7
