import {LabelTooltipType, WrapperTooltipProps} from 'antd/es/form/FormItemLabel';
import React from 'react';

export function toTooltipProps(tooltip: LabelTooltipType): WrapperTooltipProps | null {
    if (!tooltip) {
        return null;
    }

    if (typeof tooltip === 'object' && !React.isValidElement(tooltip)) {
        return tooltip as WrapperTooltipProps;
    }

    return {
        title: tooltip,
    };
}
