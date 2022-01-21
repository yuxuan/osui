import React from 'react';
import {Input as AntdInput} from 'antd';
import hoistNonReactStatics from 'hoist-non-react-statics';
import InputWithCounter from './InputWithCounter';
import Input, {InputProps} from './Input';
import Password from './Password';
import TextArea from './TextArea';
import Search from './Search';
import './index.less';

export {SearchProps} from './Search';
export {InputProps};

export interface InputInterface extends React.FC<InputProps> {
    Group: typeof AntdInput.Group;
    Search: typeof Search;
    TextArea: typeof AntdInput.TextArea;
    Password: typeof AntdInput.Password;
    InputWithCounter: typeof InputWithCounter;
}

const OSUIInput = Input as unknown as InputInterface;

hoistNonReactStatics(OSUIInput, AntdInput);

OSUIInput.Password = Password;

OSUIInput.TextArea = TextArea;

OSUIInput.Group = AntdInput.Group;

OSUIInput.Search = Search;

OSUIInput.InputWithCounter = InputWithCounter;

export default OSUIInput;
