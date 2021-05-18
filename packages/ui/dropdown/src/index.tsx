import React from 'react';
import {Dropdown as AntdDropdown} from 'antd';
import classNames from 'classnames';
import {DropDownProps as AntdCheckboxProps} from 'antd/lib/dropdown';
import './index.less';

const clsPrefix = 'osui-dropdown';

interface DropdownInterface extends React.FC<AntdCheckboxProps> {
    Button: typeof AntdDropdown.Button;
}

const Dropdown: DropdownInterface = ({overlayClassName, ...props}) => (
    <AntdDropdown overlayClassName={classNames(overlayClassName, clsPrefix)} {...props} />
);

Dropdown.Button = AntdDropdown.Button;

export default Dropdown;
