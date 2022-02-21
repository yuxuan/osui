import React, {useState, useEffect, useMemo, useContext, createContext, FC} from 'react';

export enum ThemeEnum {
    light = 'light',
    dark = 'dark',
    system = '',
}

export type ThemeType = 'light' | 'dark' | '';
export type SetTheme = (theme: ThemeType) => void;

export interface ThemeContextType {
    theme: ThemeType;
    setTheme: SetTheme;
}

// 只在内部状态维护
type InternalSystemThemeType = 'system-light' | 'system-dark';

export interface ProviderProps {
    children: React.ReactElement | React.ReactElement[];
    defaultTheme?: ThemeType;
}

const ThemeContext = createContext<ThemeContextType>({theme: 'light', setTheme: () => {}});
ThemeContext.displayName = 'ThemeContext';

const ThemeProvider: FC<ProviderProps> = ({children, defaultTheme = ''}) => {
    const [theme, setTheme] = useState<ThemeType>(
        () => {
            const theme = (window.localStorage.getItem('osuiTheme') || defaultTheme) as ThemeType;
            return theme;
        }
    );

    const [systemTheme, setSystemTheme] = useState<InternalSystemThemeType>();

    useEffect(
        () => {
            document.documentElement.dataset.theme = theme || systemTheme?.replace('system-', '');
            // update localStorage
            const storedTheme = window.localStorage.getItem('osuiTheme');
            if (theme !== storedTheme) {
                window.localStorage.setItem('osuiTheme', theme);
            }
        },
        [theme, systemTheme]
    );
    // Change by localStorage
    useEffect(
        () => {
            const listener = (event: StorageEvent) => {
                if (event.key === 'osuiTheme') {
                    setTheme((event.newValue || 'light') as ThemeType);
                }
            };

            window.addEventListener('storage', listener);

            const unsubscribe = () => {
                window.removeEventListener('storage', listener);
            };

            return unsubscribe;
        },
        []
    );
    // Change by media query
    useEffect(
        () => {
            // trigger
            if (!theme) {
                const match = (e: MediaQueryListEvent) => {
                    if (e.matches) {
                        setSystemTheme('system-light');
                    } else {
                        setSystemTheme('system-dark');
                    }
                };

                const mediaQueryListener = window.matchMedia('(prefers-color-scheme: light)');

                mediaQueryListener.addEventListener('change', match);

                const unsubscribe = () => {
                    mediaQueryListener.removeEventListener('change', match);
                };

                return unsubscribe;
            }
        },
        [theme]
    );

    const contextValue = useMemo(
        () => ({theme, setTheme}),
        [theme, setTheme]
    );

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): [ThemeType, SetTheme] => {
    const {theme, setTheme} = useContext(ThemeContext);
    return [theme, setTheme];
};

export const helper = {
    isLightTheme: (theme: ThemeType) => theme === 'light',
    isDarkTheme: (theme: ThemeType) => theme === 'dark',
    isSystemTheme: (theme: ThemeType) => !theme,
};

export default ThemeProvider;
