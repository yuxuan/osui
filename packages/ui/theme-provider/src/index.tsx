import ThemeProvider, {useTheme} from './ThemeProvider';
import DarkModeSwitcher from './DarkModeSwitcher';

export {DarkModeSwitcher, useTheme};
export type {ThemeType, SetTheme, ThemeEnum, ThemeContextType} from './ThemeProvider';

type CompoundedComponent = typeof ThemeProvider & {
    DarkModeSwitcher: typeof DarkModeSwitcher;
    useTheme: typeof useTheme;
};

const CompoundedThemeProvider = ThemeProvider as CompoundedComponent;

CompoundedThemeProvider.DarkModeSwitcher = DarkModeSwitcher;
CompoundedThemeProvider.useTheme = useTheme;

export default CompoundedThemeProvider;
