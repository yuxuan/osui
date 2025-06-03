import React, {useCallback, useContext, useRef} from 'react';
import Input from '@osui/input';
import {InputProps} from 'antd/es/input';
import AbstractQuickEdit, {useQuickEdit, IAbstractQuickEdit} from 'react-abstract-quick-edit';
import {useDerivedState} from '@huse/derived-state';
import classNames from 'classnames';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {ConfigProvider, theme} from 'antd';
// import './index.less';
import QuickEditDisplay from './QuickEditDisplay';
import {useStyle} from './style';

const clsPrefix = 'osui-quick-edit';
const {useToken} = theme;
// eslint-disable-next-line max-len
interface AbstractQuickEditProps extends Omit<IAbstractQuickEdit<string, React.MouseEventHandler<HTMLInputElement>>, 'display'> {
    display?: (value: string) => React.ReactNode;
}

// eslint-disable-next-line max-len
const ConfirmInput = (props: InputProps & React.HTMLAttributes<HTMLDivElement>) => {
    const {onChangeValueByEffect, switchEditStatus} = useQuickEdit();
    const {value: propValue, onChange} = props;
    const originValue = useRef(propValue);
    const [value, setValue] = useDerivedState(propValue);
    const handleConfirm = useCallback(
        () => {
            onChangeValueByEffect(value as any);
        },
        [value, onChangeValueByEffect]
    );
    const handleCancel = useCallback(
        () => {
            // @ts-ignore
            switchEditStatus(false, {fireStateChange: originValue.current});
        },
        [switchEditStatus]
    );

    const handleChange = useCallback(
        e => {
            onChange && onChange(e);
            setValue(e.target.value);
        },
        [setValue, onChange]
    );
    return (
        <div className={`${clsPrefix}-confirm-input`}>
            <Input {...props} onChange={handleChange} />
            <span className={`${clsPrefix}-confirm-input-action`} onClick={handleConfirm}>确定</span>
            <span className={`${clsPrefix}-confirm-input-action`} onClick={handleCancel}>取消</span>
        </div>
    );
};

const QuickEditInputAdapter = AbstractQuickEdit.register(
    Input,
    {
        defaultEditComponentProps: {
            autoFocus: true,
        },
    }
);

const QuickEditConfirmInputAdapter = AbstractQuickEdit.register(
    ConfirmInput,
    {
        defaultEditComponentProps: {
            autoFocus: true,
        },
    }
);

type CombinedProps = InputProps & AbstractQuickEditProps;
interface Props extends CombinedProps {
    showEditIcon?: boolean;
    withConfirm?: boolean;
}

const QuickEditInput = (props: Props) => {
    const {display, showEditIcon, wrapClassName, withConfirm, ...restProps} = props;
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('quickEdit', props.prefixCls);
    const antPrefix = getPrefixCls('');
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefix);
    const {hashId} = useToken();
    const handleDisplay = useCallback(
        value => {
            if (display) {
                return display(value);
            }
            return <QuickEditDisplay showEditIcon={showEditIcon} value={value} />;
        },
        [display, showEditIcon]
    );

    const transformValue = useCallback(
        e => e.target.value,
        []
    );

    const InnerQuickEditInputAdapter = withConfirm ? QuickEditConfirmInputAdapter : QuickEditInputAdapter;

    return wrapSSROsui(
        // @ts-ignore
        <InnerQuickEditInputAdapter
            {...restProps}
            display={handleDisplay}
            transformValue={transformValue}
            wrapClassName={classNames(wrapClassName, `${clsPrefix}-wrapper`, hashId)}
        />
    );
};

hoistNonReactStatics(QuickEditInput, Input);

export default QuickEditInput;
