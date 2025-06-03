import {Input as AntdInput} from 'antd';
import hoistNonReactStatics from 'hoist-non-react-statics';
import InputWithCounter from './InputWithCounter';
import Input, {type InputProps} from './Input';
import InputGroup from './InputGroup';
import Password from './Password';
import TextArea from './TextArea';
import Search from './Search';
// import './index.less';

export {type SearchProps} from './Search';
export {InputProps};

export type InputInterface = typeof Input & {
    Group: typeof InputGroup;
    Search: typeof Search;
    TextArea: typeof AntdInput.TextArea;
    Password: typeof AntdInput.Password;
    InputWithCounter: typeof InputWithCounter;
};

const OSUIInput = Input as InputInterface;

hoistNonReactStatics(OSUIInput, AntdInput);

OSUIInput.Password = Password;

OSUIInput.TextArea = TextArea;

OSUIInput.Group = InputGroup;

OSUIInput.Search = Search;

OSUIInput.InputWithCounter = InputWithCounter;

export default OSUIInput;
