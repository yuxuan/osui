import * as React from 'react';
import Select from 'antd/es/select';
import type { SelectProps } from 'antd/es/select';
import { IconDownOutlined } from '@osui/icons';

interface MiniOrMiddleSelectInterface extends React.FC<SelectProps> {
  Option: typeof Select.Option;
}

const MiniSelect: MiniOrMiddleSelectInterface = props => <Select suffixIcon={<IconDownOutlined />} {...props} size="small" />;
const MiddleSelect: MiniOrMiddleSelectInterface = props => <Select suffixIcon={<IconDownOutlined />} {...props} size="middle" />;

MiniSelect.Option = Select.Option;
MiddleSelect.Option = Select.Option;

export { MiniSelect, MiddleSelect };

