import { useContext, useEffect } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './theme-context';

interface UseThemeResult {
  theme?: Theme;
  toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const body = document.body;
    if (theme === 'dark') {
      body.classList.add(theme);
    }
    if (theme === 'light') {
      body.classList.add(theme);
    }
    return () => theme && body.classList.remove(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
}
