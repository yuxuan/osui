/* eslint-disable */
// @ts-nocheck
import { sleep } from '../../../tests/utils';
import {getInstance} from 'antd/lib/message';
import ConfigProvider from 'antd/lib/config-provider';
import message from '../src';

describe('message.config', () => {
    // Mock for rc-util raf
    window.requestAnimationFrame = callback => window.setTimeout(callback, 16);
    window.cancelAnimationFrame = id => {
        window.clearTimeout(id);
    };

    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        message.destroy();
        jest.useRealTimers();
    });

    it('should be able to config top', () => {
        message.config({
            top: 100,
        });
        message.info('whatever');
        expect(document.querySelectorAll('.ant-message')[0].style.top).toBe('100px');
    });

    it('should be able to config rtl', () => {
        message.config({
            rtl: true,
        });
        message.info('whatever');
        expect(document.querySelectorAll('.ant-message-rtl').length).toBe(1);
    });

    it('should be able to config getContainer', () => {
        message.config({
            getContainer: () => {
                const div = document.createElement('div');
                div.className = 'custom-container';
                document.body.appendChild(div);
                return div;
            },
        });
        message.info('whatever');
        expect(document.querySelectorAll('.custom-container').length).toBe(1);
    });

    it('should be able to config maxCount', () => {
        message.config({
            maxCount: 5,
        });
        for (let i = 0; i < 10; i += 1) {
            message.info('test');
        }

        message.info('last');
        expect(document.querySelectorAll('.ant-message-notice').length).toBe(5);
        expect(document.querySelectorAll('.ant-message-notice')[4].textContent).toBe('last(5s)');
        jest.advanceTimersByTime(5000);
        expect(getInstance().component.state.notices).toHaveLength(0);
    });
    // 这个是我们需求导致不可以改了
    it.skip('should be able to config duration', async () => {
        jest.useRealTimers();
        message.config({
            duration: 0.5,
        });
        message.info('last');
        expect(getInstance().component.state.notices).toHaveLength(1);

        await sleep(1000);
        expect(getInstance().component.state.notices).toHaveLength(0);
        message.config({
            duration: 3,
        });
    });

    it('customize prefix should auto get transition prefixCls', () => {
        message.config({
            prefixCls: 'light-message',
        });

        message.info('bamboo');

        expect(getInstance().config).toEqual(
            expect.objectContaining({
                transitionName: 'light-move-up',
            })
        );

        message.config({
            prefixCls: '',
        });
    });

    it('should be able to global config rootPrefixCls', () => {
        ConfigProvider.config({ prefixCls: 'prefix-test' });
        message.info('last');
        expect(document.querySelectorAll('.ant-message-notice').length).toBe(0);
        expect(document.querySelectorAll('.prefix-test-message-notice').length).toBe(1);
        ConfigProvider.config({ prefixCls: 'ant' });
    });
    it('should be able to config prefixCls', () => {
        message.config({
            prefixCls: 'prefix-test',
        });
        message.info('last');
        expect(document.querySelectorAll('.ant-message-notice').length).toBe(0);
        expect(document.querySelectorAll('.prefix-test-notice').length).toBe(1);
        message.config({
            prefixCls: '', // can be set to empty, ant default value is set in ConfigProvider
        });
    });

    it('should be able to config transitionName', () => {
        message.config({
            transitionName: '',
        });
        message.info('last');
        expect(document.querySelectorAll('.ant-move-up-enter').length).toBe(0);
        message.config({
            transitionName: 'ant-move-up',
        });
    });
});
