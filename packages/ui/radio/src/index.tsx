import * as React from 'react';
import { Radio as AntdRadio } from 'antd';
import { RadioProps as AntdRadioProps, RadioGroupProps as AntdRadioGroupProps } from 'antd/lib/radio';
import classNames from 'classnames';
import './index.less';

const AntdRadioGroup = AntdRadio.Group;

const clsPrefix = 'osui-radio';

export type RadioProps = AntdRadioProps;
export type RadioGroupProps = AntdRadioGroupProps;

const RadioGroup: React.FC<RadioGroupProps> = ({ className, ...restProps }) => {
    return <AntdRadioGroup className={classNames(clsPrefix + '-group', className)} {...restProps} />;
};

interface RadioInterface extends React.FC<RadioProps> {
    Group: typeof RadioGroup;
    Button: typeof AntdRadio.Button;
}

const Radio: RadioInterface = ({ className, ...restProps }) => {
    return <AntdRadio className={classNames(clsPrefix, className)} {...restProps} />;
};

Radio.Group = RadioGroup;
Radio.Button = AntdRadio.Button;

export default Radio;
