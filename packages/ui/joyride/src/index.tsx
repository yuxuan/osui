/**
 * @file 新手引导组件
 * 内置了restart的逻辑，内置使用受控Joyride
 * @author zhanglili，huoyuxuan
 */

import * as React from 'react';
import Joyride, {
    CallBackProps,
    Props as DefaultJoyrideProps,
    TooltipRenderProps,
    EVENTS,
    ACTIONS,
    STATUS,
} from 'react-joyride';
import { IconCloseOutlined } from '@osui/icons';
import Button from '@osui/button';
import merge from 'lodash.merge';
import {useDerivedState} from '@huse/derived-state';
import './index.less';

const clsPrefix = 'osui-joyride';

const stepDefaults = {
    disableBeacon: true,
    offset: 0,
};

const floater = {
    styles: {
        arrow: {
            length: 8,
            spread: 12,
        },
    },
};

const JoyrideTooltip: React.FC<TooltipRenderProps> = props => {
    const { isLastStep, size, index, step, backProps, skipProps, closeProps, primaryProps, tooltipProps } = props;

    return (
        <div className={`${clsPrefix}-tooltip`} {...tooltipProps}>
            <h4 className={`${clsPrefix}-header`}>
                {step.title || <span />}
                <IconCloseOutlined className={`${clsPrefix}-close`} {...closeProps} />
            </h4>
            <div className={`${clsPrefix}-content`}>{step.content}</div>
            <footer className={`${clsPrefix}-footer`}>
                <span>{`${index + 1}/${size}`}</span>
                <div>
                    {
                        (
                            <a className={`${clsPrefix}-back-link`} {...(index === 0 ? skipProps : backProps)}>
                                {index === 0 ? '' : '上一个'}
                            </a>
                        )
                    }
                    <Button className={`${clsPrefix}-next-button`} {...primaryProps}>
                        {isLastStep ? '知道啦' : '下一个' }
                    </Button>
                </div>
            </footer>
        </div>
    );
};

const defaultStyles = {
    options: {
        arrowColor: 'var(--theme-primary-color)',
    },
};

export interface JoyrideProps extends DefaultJoyrideProps {
    shouldRestart?: boolean;
    onFinish?: () => any;
}

const OSUIJoyride: React.FC<JoyrideProps> = props => {
    const {callback, shouldRestart, run: runProp, onFinish} = props;
    // TODO: 支持从任意step开始？
    const [index, setIndex] = React.useState<number | undefined>(0);
    const [run, setRun] = useDerivedState(runProp);

    // props的一些调整
    const steps = props.steps.map(step => ({ ...stepDefaults, ...step }));
    const innerFloaterProps = merge({}, floater, props.floaterProps);
    const innerStyles = merge({}, defaultStyles, props.styles);

    const handleJoyrideCallback = React.useCallback(
        (data: CallBackProps) => {
            callback && callback(data);
            const { action, index, type, status } = data;
            if (([STATUS.FINISHED, STATUS.SKIPPED] as string[]).includes(status)) {
                onFinish && onFinish();
                /**
                 * Need to set our running state to false, so we can restart if we click start again.
                 * restart的话，需要停止run。当shouldRestart为true时，当runProp为false，则从新开始
                 */
                if (shouldRestart) {
                    setRun(false);
                    setIndex(0);
                }
            }
            else if (([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND] as string[]).includes(type)) {
                // Update state to advance the tour
                setIndex(index + (action === ACTIONS.PREV ? -1 : 1));
            }
        },
        [callback, setRun, shouldRestart, onFinish]
    );
    return (
        <Joyride
            {...props}
            disableOverlayClose
            tooltipComponent={JoyrideTooltip}
            floaterProps={innerFloaterProps}
            styles={innerStyles}
            steps={steps}
            stepIndex={index}
            run={run}
            callback={handleJoyrideCallback}
        />
    );
};

export default OSUIJoyride;
