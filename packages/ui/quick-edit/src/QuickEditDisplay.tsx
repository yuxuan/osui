import React from 'react';
import IconEdit from './IconEdit';
// import './index.less';

const clsPrefix = 'osui-quick-edit';

interface Props {
    value: string;
    showEditIcon?: boolean;
}

export default ({showEditIcon, value}: Props) => {
    if (showEditIcon) {
        return (
            <div className={`${clsPrefix}-input-display`}>
                <span>{value}</span>
                <span className={`${clsPrefix}-input-display-edit-icon`}><IconEdit /></span>
            </div>
        );
    }
    return (
        <span className={`${clsPrefix}-input-display`}>{value}</span>
    );
};
