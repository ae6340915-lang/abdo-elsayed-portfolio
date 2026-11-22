import React, { createContext, useContext, useEffect, useState } from 'react';
import { en } from '../i18n/en';
import { ar } from '../i18n/ar';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    const saved = localStorage.getItem('ae_lang');
    if (saved && (saved === 'en' || saved === 'ar')) return saved;
    return 'en';
  });

  const isRtl = lang === 'ar';
  const translations = lang === 'ar' ? ar : en;

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    localStorage.setItem('ae_lang', lang);
  }, [lang, isRtl]);

  const toggleLang = () => {
    setLangState(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  const setLang = (newLang) => {
    if (newLang === 'en' || newLang === 'ar') {
      setLangState(newLang);
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang, t: translations, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
