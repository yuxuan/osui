import React, {Ref, useContext} from 'react';
import {Upload as AntdUpload, ConfigProvider} from 'antd';
import type {UploadProps as AntdUploadProps} from 'antd';
import type {DraggerProps as AntdDraggerProps} from 'antd/es/upload/Dragger';
import classNames from 'classnames';
import {UploadRef} from 'antd/es/upload/Upload';
import hoistNonReactStatics from 'hoist-non-react-statics';
// import './index.less';
import {useStyle} from './style';

const clsPrefix = 'osui-upload';

export interface CompoundedComponent extends React.ForwardRefExoticComponent<
    React.PropsWithChildren<UploadProps> & React.RefAttributes<any>
  > {
  Dragger: typeof OSUIUploadDragger;
  LIST_IGNORE: string;
}

export interface UploadProps extends AntdUploadProps {
  dashedBorder?: boolean;
}

export interface DraggerProps extends AntdDraggerProps {
  dashedBorder?: boolean;
  children?: React.ReactNode;
}

const OSUIUpload = React.forwardRef(({className, dashedBorder, ...props}: UploadProps, ref) => {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('upload', props.prefixCls);
    const antPrefixCls = getPrefixCls('');
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar, antPrefixCls);
    const innerClassNames = classNames(
        clsPrefix,
        {[`${clsPrefix}-dashedBorder`]: dashedBorder},
        className
    );
    return wrapSSROsui(
        <AntdUpload ref={ref} className={innerClassNames} {...props} />
    );
}) as CompoundedComponent;

hoistNonReactStatics(OSUIUpload, AntdUpload);

const OSUIUploadDragger = React.forwardRef((
    {className, dashedBorder, ...props}: DraggerProps,
    ref: Ref<UploadRef<any>>
) => {
    const {getPrefixCls, theme} = useContext(ConfigProvider.ConfigContext);
    const cssVar = theme?.cssVar;
    const prefixCls = getPrefixCls('upload', props.prefixCls);
    const wrapSSROsui = useStyle(clsPrefix, prefixCls, cssVar);
    const innerClassNames = classNames(
        clsPrefix,
        {[`${clsPrefix}-dashedBorder`]: dashedBorder},
        className
    );
    return wrapSSROsui(
        <AntdUpload.Dragger ref={ref} className={innerClassNames} {...props} />
    );
});

OSUIUpload.Dragger = OSUIUploadDragger;

export default OSUIUpload;
