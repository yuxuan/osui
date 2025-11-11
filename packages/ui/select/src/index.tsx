import {Select as AntdSelect} from 'antd';
import hoistNonReactStatics from 'hoist-non-react-statics';
import EnhancedSelect, {SelectProps} from './EnhancedInternalSelect';
import EllipsisTag from './EllipsisTag';
export {type SelectProps};

hoistNonReactStatics(EnhancedSelect, AntdSelect);

export default EnhancedSelect;
export {EllipsisTag};

