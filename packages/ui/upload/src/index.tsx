import React from 'react';
import {Upload as AntdUpload} from 'antd';
import type {UploadProps as AntdUploadProps} from 'antd';
import type {DraggerProps as AntdDraggerProps} from 'antd/lib/upload/Dragger';
import classNames from 'classnames';
import hoistNonReactStatics from 'hoist-non-react-statics';
import './index.less';

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
    const innerClassNames = classNames(
        clsPrefix,
        {[`${clsPrefix}-dashedBorder`]: dashedBorder},
        className
    );
    return (
        <AntdUpload ref={ref} className={innerClassNames} {...props} />
    );
}) as CompoundedComponent;

hoistNonReactStatics(OSUIUpload, AntdUpload);

const OSUIUploadDragger = React.forwardRef(({className, dashedBorder, ...props}: DraggerProps, ref) => {
    const innerClassNames = classNames(
        clsPrefix,
        {[`${clsPrefix}-dashedBorder`]: dashedBorder},
        className
    );
    return (
        // @ts-expect-error 这里antd导出的dragger类型有问题
        <AntdUpload.Dragger ref={ref} className={innerClassNames} {...props} />
    );
});

OSUIUpload.Dragger = OSUIUploadDragger;

export default OSUIUpload;
