import {theme} from 'antd';
import v1 from './v1';
import acud, {acudTheme} from './acud';
import dark from './dark';

const {getDesignToken: getAntdDesignToken} = theme;

const getDesignToken = () => {
    const token = getAntdDesignToken(acudTheme);
    return token;
};

export {
    v1,
    dark,
    acud,
    acudTheme,
    getDesignToken,
};
export default acud;
