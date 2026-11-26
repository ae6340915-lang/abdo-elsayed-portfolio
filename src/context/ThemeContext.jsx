import React, { useEffect, useMemo, useState } from 'react';
import { ThemeContext } from './themeContextStore';

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('ae_theme');
      if (saved === 'dark' || saved === 'light') return saved;
    } catch {
      return 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('ae_theme', theme);
    } catch {
      return undefined;
    }
    return undefined;
  }, [theme]);

  const toggleTheme = React.useCallback(() => {
    setTheme((previous) => (previous === 'dark' ? 'light' : 'dark'));
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
