import axios from 'axios';
import {noop} from 'lodash';
import {print, holmes} from '@ecomfe/react-track';

export const createLogPost = (url, type) => payload => {
    const body = 'data=' + encodeURIComponent(JSON.stringify({type, payload}));

    axios.post(
        url,
        body,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }
    );
};

const post = url => {
    return {
        install: noop,
        uninstall: noop,
        trackPageView: createLogPost(url, 'pageView'),
        trackEvent: createLogPost(url, 'event'),
    };
};

const composeTracker = (...trackers) => {
    const chain = name => (...args) => trackers.forEach(tracker => tracker[name](...args));

    return {
        install: chain('install'),
        uninstall: chain('uninstall'),
        trackPageView: chain('trackPageView'),
        trackEvent: chain('trackEvent'),
    };
};

export const provider = $features.track
    ? composeTracker(
        post('http://10.14.18.128:8386/v2/log'),
        holmes('unknown') // TODO: 换一个百度统计的ID，如果没有就找PM申请一个
    )
    : print();
