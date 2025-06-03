import React, {useCallback, useContext, useRef} from 'react';
import Select from '@osui/select';
import {SelectProps} from 'antd/es/select';
import AbstractQuickEdit, {IAbstractQuickEdit, useQuickEdit} from 'react-abstract-quick-edit';
import classNames from 'classnames';
import {useDerivedState} from '@huse/derived-state';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {ConfigProvider, theme} from 'antd';
import QuickEditDisplay from './QuickEditDisplay';
// import './index.less';
import {useStyle} from './style';

const clsPrefix = 'osui-quick-edit';
const {useToken} = theme;
interface AbstractQuickEditProps extends Omit<IAbstractQuickEdit<string, any>, 'display'> {
    display?: (value: string) => React.ReactNode;
}

interface InnerSelectProps extends SelectProps<Record<string, any> | any> {
    withConfirm?: boolean;
}

const InnerSelect = (props: InnerSelectProps) => {
    const {withConfirm, ...selectProps} = props;
    const {value: propValue, onChange} = selectProps;
    const originValue = useRef(propValue);
    const {onChangeValueByEffect, switchEditStatus} = useQuickEdit();
    const [value, setValue] = useDerivedState(originValue.current);
    const handleChange = useCallback(
        (value, option) => {
            onChange && onChange(value, option);
            setValue(value);
        },
        [onChange, setValue]
    );
    const handleConfirm = useCallback(
        () => {
            onChangeValueByEffect(value);
        },
        [onChangeValueByEffect, value]
    );
    const handleCancel = useCallback(
        () => {
            // @ts-ignore
            switchEditStatus(false, {fireStateChange: originValue.current});
        },
        [switchEditStatus]
    );
    if (withConfirm) {
        return (
            <div className={`${clsPrefix}-confirm-input`}>
                <Select
                    {...selectProps}
                    value={value}
                    onChange={handleChange}
                    // eslint-disable-next-line react/jsx-no-bind
                    getPopupContainer={(trigger: any) => trigger.parentNode}
                />
                <span className={`${clsPrefix}-confirm-input-action`} onClick={handleConfirm}>确定</span>
                <span className={`${clsPrefix}-confirm-input-action`} onClick={handleCancel}>取消</span>
            </div>
        );
    }
    return (
        <Select
            {...selectProps}
            // eslint-disable-next-line react/jsx-no-bind
            getPopupContainer={(trigger: any) => trigger.parentNode}
        />
    );
};


type CombinedProps = InnerSelectProps & AbstractQuickEditProps;

interface QuickEditSelectProps extends CombinedProps {
    showEditIcon?: boolean;
    withConfirm?: boolean;
}

const QuickEditSelectAdapter = AbstractQuickEdit.register<QuickEditSelectProps>(InnerSelect);

const QuickEditSelect = (props: QuickEditSelectProps) => {
    const {showEditIcon, withConfirm, display, wrapClassName, ...restProps} = props;
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('quickEdit', props.prefixCls);
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar);
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

    return wrapSSROsui(
        <QuickEditSelectAdapter
            {...restProps}
            // @ts-ignore
            withConfirm={withConfirm}
            display={handleDisplay}
            wrapClassName={classNames(wrapClassName, `${clsPrefix}-wrapper`, hashId)}
        />
    );
};

hoistNonReactStatics(QuickEditSelect, Select);

export default QuickEditSelect;
