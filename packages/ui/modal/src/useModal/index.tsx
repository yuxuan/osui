/**
 * @file useModal
 * // TODO: 目前Antd useModal暂不支持直接使用，后续看是否直接暴露withXXX
 */

import * as React from 'react';
import type {HookModalRef} from 'antd/lib/modal/useModal/HookModal';
import HookModal from 'antd/lib/modal/useModal/HookModal';
import type {ModalFuncProps} from 'antd/lib/modal';
import usePatchElement from 'antd/lib/_util/hooks/usePatchElement';
import {ModalStaticFunctions, withError, withInfo, withSuccess, withWarn, withConfirm} from 'antd/lib/modal/confirm';
import {
    IconCheckCircleFilled,
    IconCloseCircleFilled,
    IconExclamationCircleFilled,
    IconInfoCircleFilled,
} from '@osui/icons';

let uuid = 0;

export interface ElementsHolderRef {
    patchElement: ReturnType<typeof usePatchElement>[1];
}

export const ElementsHolder = React.memo(
    React.forwardRef<ElementsHolderRef>((_props, ref) => {
        const [elements, patchElement] = usePatchElement();
        React.useImperativeHandle(
            ref,
            () => ({
                patchElement,
            }),
            [patchElement]
        );
        // eslint-disable-next-line react/jsx-no-useless-fragment
        return <>{elements}</>;
    })
);

export const confirmFunc = (
    func: (config: ModalFuncProps) => ModalFuncProps,
    confirmType?: 'success' | 'warning' | 'error' | 'info' | 'confirm'
) => {
    return (config: ModalFuncProps) => {
        // 优先级：函数调用 > type配置 > confirm
        const type = confirmType || config.type || 'confirm';
        let icon = <IconExclamationCircleFilled />;

        if (type === 'success') {
            icon = <IconCheckCircleFilled />;
        } else if (type === 'warning') {
            icon = <IconExclamationCircleFilled />;
        } else if (type === 'error') {
            icon = <IconCloseCircleFilled />;
        } else if (type === 'info') {
            icon = <IconInfoCircleFilled />;
        }
        return {...func(config), icon, type};
    };
};

export default function useOsuiModal(): [Omit<ModalStaticFunctions, 'warn'>, React.ReactElement] {
    const holderRef = React.useRef<ElementsHolderRef>(null as any);

    // ========================== Effect ==========================
    const [actionQueue, setActionQueue] = React.useState<Array<() => void>>([]);

    React.useEffect(() => {
        if (actionQueue.length) {
            const cloneQueue = [...actionQueue];
            cloneQueue.forEach(action => {
                action();
            });

            setActionQueue([]);
        }
    }, [actionQueue]);

    // =========================== Hook ===========================
    const getConfirmFunc = React.useCallback(
        (withFunc: (config: ModalFuncProps) => ModalFuncProps) =>
            function hookConfirm(config: ModalFuncProps) {
                uuid += 1;

                const modalRef = React.createRef<HookModalRef>();

                let closeFunc: () => void = () => {};
                const modal = (
                    <HookModal
                        key={`modal-${uuid}`}
                        config={withFunc(config)}
                        ref={modalRef}
                        afterClose={closeFunc}
                    />
                );

                closeFunc = holderRef.current?.patchElement(modal) as () => void;

                return {
                    destroy: () => {
                        function destroyAction() {
                            modalRef.current?.destroy();
                        }

                        if (modalRef.current) {
                            destroyAction();
                        } else {
                            setActionQueue(prev => [...prev, destroyAction]);
                        }
                    },
                    update: (newConfig: ModalFuncProps) => {
                        function updateAction() {
                            modalRef.current?.update(newConfig);
                        }

                        if (modalRef.current) {
                            updateAction();
                        } else {
                            setActionQueue(prev => [...prev, updateAction]);
                        }
                    },
                };
            },
        []
    );

    const fns = React.useMemo(
        () => ({
            info: getConfirmFunc(confirmFunc(withInfo, 'info')),
            success: getConfirmFunc(confirmFunc(withSuccess, 'success')),
            error: getConfirmFunc(confirmFunc(withError, 'error')),
            warning: getConfirmFunc(confirmFunc(withWarn, 'warning')),
            confirm: getConfirmFunc(confirmFunc(withConfirm)),
        }),
        [getConfirmFunc]
    );

    // eslint-disable-next-line react/jsx-key
    return [fns as Omit<ModalStaticFunctions, 'warn'>, <ElementsHolder ref={holderRef} />];
}
