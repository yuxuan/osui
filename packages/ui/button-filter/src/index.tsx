/**
 * @file ButtonFilter 组件
 * @author zhusen
 */
import * as React from 'react';
import { Button} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-button-filter';

interface ButtonFilterProps {
    num?: number;
    hasSelectNumber?: boolean;
    hasShowNumber?: boolean;
    hasArrow?: boolean;
    className?: string;
    children: React.ReactNode;
    beforeIcon?: React.ReactNode;
}

const ButtonFilter = React.forwardRef<any, ButtonFilterProps>((props, ref) => {
    const {
        beforeIcon,
        num,
        hasArrow,
        hasShowNumber,
        hasSelectNumber,
        className,
        children,
    } = props;
    const [clicked, setClicked] = React.useState(false);
    function handClickButton() {
        setClicked(!clicked);
    }
    return (
        <Button
            ref={ref}
            onClick={handClickButton}
            className={classNames(clsPrefix,
                clicked ? `${clsPrefix}-clicked ` : '',
                hasShowNumber ? `${clsPrefix}-number ` : '',
                className
            )}
        >
            {beforeIcon}
            {children}
            {hasShowNumber ? <span className="num">{num}</span> : null}
            {hasSelectNumber ? <span className="select-num">（+{num}）</span> : null}
            {hasArrow ? <DownOutlined /> : null}
        </Button>
    );
});

export default ButtonFilter;
