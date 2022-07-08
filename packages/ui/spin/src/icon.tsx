/**
 * @file 加载图标的svg
 * @author caifeng01
 */

import * as React from 'react';
import classNames from 'classnames';

export interface LoadingIconProps {
    prefixCls?: string;
    className?: string;
}

const LoadingIcon: React.FC<React.PropsWithChildren<LoadingIconProps>> = ({className}) => {
    const contextClassname = classNames(
        ['acud-loading-begin'],
        className
    );
    return (
        <svg
            className={contextClassname}
            width="1em"
            height="1em"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="inherit">
                <circle className="circle1" cx="511.1" cy="108.6" r="102.6"></circle>
                <circle className="circle2" cx="862.1" cy="309.6" r="102.6"></circle>
                <circle className="circle3" cx="862.1" cy="712.4" r="102.6"></circle>
                <circle className="circle4" cx="511.1" cy="917.8" r="102.6"></circle>
                <circle className="circle5" cx="159.7" cy="712.4" r="102.6"></circle>
                <circle className="circle6" cx="159.7" cy="309.6" r="102.6"></circle>
            </g>
            <polygon
                className="frame"
                points="511.1,108.6 861.8,311.2 862.1,712.4 511.1,917.8 159.7,712.4 146,309.6"
                fill="none"
                strokeWidth="50"
                strokeMiterlimit="10"
                stroke="inherit"
            >
            </polygon>
        </svg>
    );
};

export default LoadingIcon;
