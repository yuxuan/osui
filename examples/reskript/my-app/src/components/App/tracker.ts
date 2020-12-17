import {noop} from 'lodash';
import {print, holmes, PageView, Event, CollectType, TrackerProvider} from '@ecomfe/react-track';

const createLogPost = (url: string, type: CollectType) => (payload: PageView | Event) => fetch(
    url,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'data=' + encodeURIComponent(JSON.stringify({type, payload})),
    }
);

const post = (url: string): TrackerProvider => {
    return {
        install: noop,
        uninstall: noop,
        trackPageView: createLogPost(url, 'pageView'),
        trackEvent: createLogPost(url, 'event'),
    };
};

const composeTracker = (...trackers: TrackerProvider[]): TrackerProvider => {
    return {
        install() {
            trackers.forEach(tracker => tracker.install());
        },
        uninstall() {
            trackers.forEach(tracker => tracker.uninstall());
        },
        trackPageView(payload) {
            trackers.forEach(tracker => tracker.trackPageView(payload));
        },
        trackEvent(payload) {
            trackers.forEach(tracker => tracker.trackEvent(payload));
        },
    };
};

export const provider = $features.track
    ? composeTracker(
        post('https://ee-dc-receiver.baidu-int.com/v2/log'),
        holmes('unknown') // TODO: 换一个百度统计的ID，如果没有就找PM申请一个
    )
    : print();
