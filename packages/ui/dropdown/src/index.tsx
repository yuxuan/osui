import React from 'react';
import {Dropdown as AntdDropdown} from 'antd';
import hoistNonReactStatics from 'hoist-non-react-statics';
import classNames from 'classnames';
import {DropDownProps as AntdCheckboxProps} from 'antd/es/dropdown';
import './index.less';

const clsPrefix = 'osui-dropdown';

export interface DropdownInterface extends React.FC<AntdCheckboxProps> {
    Button: typeof OSUIDropdownButton;
}

const OSUIDropdown: DropdownInterface = ({overlayClassName, ...props}) => (
    <AntdDropdown overlayClassName={classNames(clsPrefix, overlayClassName)} {...props} />
);

hoistNonReactStatics(OSUIDropdown, AntdDropdown);

const OSUIDropdownButton: React.FC<React.ComponentProps<typeof AntdDropdown.Button>> = (
    {overlayClassName, ...props}
) => {
    return (
        <AntdDropdown.Button overlayClassName={classNames(clsPrefix, overlayClassName)} {...props} />
    );
};

hoistNonReactStatics(OSUIDropdownButton, AntdDropdown.Button);

OSUIDropdown.Button = OSUIDropdownButton;

export type {DropDownProps} from 'antd';
export default OSUIDropdown;
