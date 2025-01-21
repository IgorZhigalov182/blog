import { useContext } from 'react';
import { Theme } from '@/shared/const/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface UseThemeResult {
  toggleTheme: (saveAction: (theme: Theme) => void) => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (saveAction?: (theme: Theme) => void) => {
    let newTheme: Theme;

    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT;
        break;

      case Theme.LIGHT:
        newTheme = Theme.DEEP_PURPLE;
        break;

      case Theme.DEEP_PURPLE:
        newTheme = Theme.DARK;
        break;

      default:
        newTheme = Theme.LIGHT;
    }

    setTheme?.(newTheme);
    document.body.className = newTheme;
    saveAction?.(newTheme);
    // localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
}
