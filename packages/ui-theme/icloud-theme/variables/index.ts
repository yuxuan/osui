import {theme} from 'antd';
import {default as acud, acudTheme} from './acud';

const {getDesignToken: getAntdDesignToken} = theme;

const getDesignToken = () => {
    const token = getAntdDesignToken(acudTheme);
    return token;
};

export {
    acud,
    acudTheme,
    getDesignToken,
};
