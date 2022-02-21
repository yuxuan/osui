import React, {FC, cloneElement, useCallback} from 'react';
import classNames from 'classnames';
import Menu from '@osui/menu';
import Dropdown from '@osui/dropdown';
import {useTheme, helper, ThemeEnum, ThemeType, SetTheme} from './ThemeProvider';
import './DarkModeSwitcher.less';
import IconDark from './IconDark';
import IconLight from './IconLight';
import IconAuto from './IconAuto';

export interface DarkModeSwitcherProps {
    [key: string]: any;
    onModeChange?: (mode: ThemeType) => void;
    lightIcon?: React.ReactElement;
    darkIcon?: React.ReactElement;
    autoIcon?: React.ReactElement;
}

interface SwitcherProps {
    className: string;
    title: string;
    type: ThemeType;
    icon: React.ReactElement;
    onClick: SetTheme;
}

const Switcher: FC<SwitcherProps> = ({className, icon, title, type, onClick}) => {
    const handleClick = useCallback(
        () => {
            onClick(type);
        },
        [onClick, type]
    );

    const iconCloned = cloneElement(icon);

    return (
        <div className="osui-dark-mode-switcher-container" onClick={handleClick}>
            <div
                className={
                    classNames(
                        'osui-dark-mode-switcher-switcherIcon',
                        `osui-dark-mode-switcher-${type}`,
                        className
                    )
                }
            >
                {iconCloned}
            </div>

            <div>{title}</div>
        </div>
    );
};

interface ContentProps {
    changeTheme: SetTheme;
    value: ThemeType;
    onModeChange?: SetTheme;
    lightIcon?: React.ReactElement;
    darkIcon?: React.ReactElement;
    autoIcon?: React.ReactElement;
}

const Content: FC<ContentProps> = (
    {changeTheme, value, onModeChange, lightIcon, darkIcon, autoIcon}
) => {
    const handleModeClick = useCallback(
        type => {
            changeTheme(type);
            onModeChange && onModeChange(type);
        },
        [changeTheme, onModeChange]
    );

    return (
        <Menu>
            <Menu.Item>
                <Switcher
                    className={classNames({'osui-dark-mode-switcher-active': helper.isLightTheme(value)})}
                    title="浅色"
                    type={ThemeEnum.light}
                    icon={lightIcon ?? <IconLight />}
                    onClick={handleModeClick}
                />
            </Menu.Item>
            <Menu.Item>
                <Switcher
                    className={classNames({'osui-dark-mode-switcher-active': helper.isDarkTheme(value)})}
                    title="深色"
                    type={ThemeEnum.dark}
                    icon={darkIcon ?? <IconDark />}
                    onClick={handleModeClick}
                />
            </Menu.Item>
            <Menu.Item>
                <Switcher
                    className={classNames({'osui-dark-mode-switcher-active': helper.isSystemTheme(value)})}
                    title="系统"
                    type={ThemeEnum.system}
                    icon={autoIcon ?? <IconAuto />}
                    onClick={handleModeClick}
                />
            </Menu.Item>
        </Menu>

    );
};

const DarkModeSwitcher: FC<DarkModeSwitcherProps> = ({
    onModeChange, color, darkIcon, lightIcon, autoIcon, ...props
}) => {
    const [theme, setTheme] = useTheme();
    const menu = <Content {...props} changeTheme={setTheme} value={theme} />;
    return (
        <Dropdown overlay={menu}>
            <div {...props}>
                {
                    theme === ThemeEnum.light
                    && (darkIcon ?? <IconLight
                        style={{color: 'var(--theme-primary-color)'}}
                        className="osui-dark-mode-switcher-triggerIcon"
                    />
                    )
                }
                {
                    theme === ThemeEnum.dark
                    && (lightIcon ?? <IconDark
                        style={{color: 'var(--theme-primary-color)'}}
                        className="osui-dark-mode-switcher-triggerIcon"
                    />)
                }
                {
                    !theme
                    && (autoIcon ?? <IconAuto
                        style={{color: 'var(--theme-primary-color)'}}
                        className="osui-dark-mode-switcher-triggerIcon"
                    />)
                }
            </div>
        </Dropdown>
    );
};

export default DarkModeSwitcher;
