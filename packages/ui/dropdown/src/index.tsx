import React, {useContext} from 'react';
import {Dropdown as AntdDropdown, ConfigProvider} from 'antd';
import hoistNonReactStatics from 'hoist-non-react-statics';
import classNames from 'classnames';
import {DropDownProps as AntdCheckboxProps} from 'antd/es/dropdown';
// import './index.less';
import {useStyle} from './style';

const clsPrefix = 'osui-dropdown';

export interface DropdownInterface extends React.FC<AntdCheckboxProps> {
    Button: typeof OSUIDropdownButton;
}

const OSUIDropdown: DropdownInterface = ({overlayClassName, rootClassName, ...props}) => {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('dropdown', props.prefixCls);
    const antPrefix = getPrefixCls('');
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefix);
    return wrapSSROsui(
        <AntdDropdown
            overlayClassName={classNames(clsPrefix, overlayClassName)}
            rootClassName={classNames(clsPrefix, rootClassName)}
            {...props}
        />
    );
};

hoistNonReactStatics(OSUIDropdown, AntdDropdown);

const OSUIDropdownButton: React.FC<React.ComponentProps<typeof AntdDropdown.Button>> = (
    {overlayClassName, rootClassName, ...props}
) => {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('dropdown', props.prefixCls);
    const antPrefix = getPrefixCls('');
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefix);
    return wrapSSROsui(
        <AntdDropdown.Button
            overlayClassName={classNames(clsPrefix, overlayClassName)}
            rootClassName={classNames(clsPrefix, rootClassName)}
            {...props}
        />
    );
};

hoistNonReactStatics(OSUIDropdownButton, AntdDropdown.Button);

OSUIDropdown.Button = OSUIDropdownButton;

export type {DropDownProps} from 'antd';
export default OSUIDropdown;
