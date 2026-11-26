import React, { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { en } from '../i18n/en';
import { ar } from '../i18n/ar';
import { LanguageContext } from './languageContextStore';

const STORAGE_KEY = 'abdo-portfolio-language';

const normalizeLang = (value) => (value === 'ar' ? 'ar' : 'en');

const persistLang = (value) => {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    return undefined;
  }
  return true;
};

const readStoredLang = () => {
  if (typeof window === 'undefined') return 'en';
  try {
    return normalizeLang(window.localStorage.getItem(STORAGE_KEY));
  } catch {
    return 'en';
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(readStoredLang);
  const scrollPosition = useRef(null);
  const isRtl = lang === 'ar';
  const t = isRtl ? ar : en;

  const setLang = useCallback((nextLang) => {
    const normalized = normalizeLang(nextLang);
    if (normalized === lang) return;
    scrollPosition.current = { x: window.scrollX, y: window.scrollY };
    persistLang(normalized);
    setLangState(normalized);
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang(lang === 'en' ? 'ar' : 'en');
  }, [lang, setLang]);

  useLayoutEffect(() => {
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    html.dataset.lang = lang;

    if (!scrollPosition.current) return;
    const { x, y } = scrollPosition.current;
    scrollPosition.current = null;
    const previousBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';
    window.scrollTo(x, y);
    html.style.scrollBehavior = previousBehavior;
  }, [lang, isRtl]);

  const value = useMemo(() => ({ lang, toggleLang, setLang, t, isRtl }), [lang, toggleLang, setLang, t, isRtl]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
