import { FC } from 'react';
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';

import { useTheme } from '../useTheme';

export const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <div
      onClick={toggleTheme}
      className='cursor-pointer text-muted-foreground transition-colors hover:text-accent-foreground'>
      {isDark ? <Sun size={24} /> : <Moon size={24} />}
    </div>
  );
};
