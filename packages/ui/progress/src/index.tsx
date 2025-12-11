import React from 'react';
import {Progress as AntdProgress} from 'antd';
import {ProgressProps as AntdProgressProps} from 'antd/es/progress';
import classNames from 'classnames';
import {useBrandContext} from '@osui/brand-provider';
import './index.less';

const clsPrefix = 'osui-progress';

export type ProgressProps = AntdProgressProps;

const LinearGradientColor = ()=> {
    return (
        <svg width="0" height="0" style={{ position: 'absolute' }}>
            <defs>
                <linearGradient id="successGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#06C485" />
                    <stop offset="50%" stopColor="#22C68A" />
                    <stop offset="100%" stopColor="#00D181" />
                </linearGradient>
                <linearGradient id="defaultGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#B082FF" />
                    <stop offset="50%" stopColor="#8B64FF" />
                    <stop offset="100%" stopColor="#4346FF" />
                </linearGradient>
                <linearGradient id="exceptionGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FF6C64" />
                    <stop offset="50%" stopColor="#FA423C" />
                    <stop offset="100%" stopColor="#F42929" />
                </linearGradient>
            </defs>
        </svg>
    );
}

const numberBox = (percent: any) => (
    <span className={clsPrefix + '-circle-text'}>{percent}<span className={clsPrefix + '-circle-unit'}>%</span></span>
);

const Progress: React.FC<ProgressProps> = ({className, strokeWidth, strokeLinecap, ...props}) => {
    const {type = 'line', size} = props;
    const {brand} = useBrandContext();
    const innerStrokeWidth = strokeWidth ?? (type === 'line'
        ? size === 'small' ? 4 : 6
        : strokeWidth);
    const innerStrokeLinecap = strokeLinecap ?? (brand === 'icloud' ? 'square' : 'round');
    const circleWidth = type === 'circle' ? 156 : undefined;
    const formatNumber = type === 'circle' ? numberBox : undefined;

    return (
        <>
            {type === 'circle' && <LinearGradientColor />}
            <AntdProgress
                className={classNames(clsPrefix, className)}
                strokeWidth={innerStrokeWidth}
                strokeLinecap={innerStrokeLinecap}
                format={formatNumber}
                width={circleWidth}
                {...props}
            />
        </>
    );
};

export default Progress;
