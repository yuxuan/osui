import InputNumber, {InputNumberProps} from './InputNumber';
import InputNumberCompact from './InputNumberCompact';

type InputNumberInterface = typeof InputNumber & {
    InputNumberCompact: typeof InputNumberCompact;
};

const OSUIInputNumber = InputNumber as unknown as InputNumberInterface;
OSUIInputNumber.InputNumberCompact = InputNumberCompact;

export type {InputNumberProps};
export default OSUIInputNumber;
