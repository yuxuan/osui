import Theme from '../src/';
import '../src/styles/theme.less';

export default {title: 'EE theme'};

export const Switcher = () => {
    return (
        <>
        <div style={{background: '#000'}}>
            <Theme.DarkModeSwitcher/>
        </div>
        <br />
        <br />
        <div style={{background: '#fff'}}>
            <Theme.DarkModeSwitcher color="#000"/>
        </div>
        </>
    )
};

export const Demo = () => {
    return (
        <a target="_blank" rel="noreferrer" href="http://10.145.68.14:8001/components/overview-cn/">
            查看antd全文档theme
        </a>
    );
};
