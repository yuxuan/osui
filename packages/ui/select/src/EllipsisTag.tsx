import React, {useState, useRef, useEffect} from 'react';
import type {SelectProps} from 'antd/es/select';
import Tooltip from '@osui/tooltip';
import {IconCloseOutlined} from '@osui/icons';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-select';

type TagRenderProps = Parameters<
  NonNullable<SelectProps<string>['tagRender']>
>[0];

interface ExtendedTagRenderProps extends TagRenderProps {
  maxTagTextLength?: number;
}
const EllipsisTag = ({label, closable, disabled, onClose, maxTagTextLength}: ExtendedTagRenderProps) => {
    const textRef = useRef(null);
    const [isOverflow, setIsOverflow] = useState(false);

    useEffect(
        () => {
            const el = textRef.current as unknown as HTMLElement;
            if (el) {
                if (typeof label === 'string' && maxTagTextLength && label.length > maxTagTextLength) {
                    setIsOverflow(true);
                } else {
                    // 判断内容是否超出容器宽度
                    setIsOverflow(el.scrollWidth > el.clientWidth);
                }
            }
        },
        [label]
    );

    const displayText = typeof label === 'string' && !!maxTagTextLength && label.length > maxTagTextLength
        ? label.slice(0, maxTagTextLength) + '...'
        : label;

    const TagContent = (
        <span
            className={classNames(
                'ant-select-selection-item',
                {
                    'ant-select-selection-item-disabled': disabled,
                }
            )}
        >
            <span ref={textRef} className="ant-select-selection-item-content">
                {displayText}
            </span>
            {closable && (
                <span className="ant-select-selection-item-remove">
                    <IconCloseOutlined className={`${clsPrefix}-remove-icon`} onClick={onClose} />
                </span>
            )}
        </span>
    );

    return isOverflow ? (
        <Tooltip title={label}>{TagContent}</Tooltip>
    ) : (
        TagContent
    );
};

export default EllipsisTag;
