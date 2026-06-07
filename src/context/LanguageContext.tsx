import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export type Language = 'es' | 'en' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const langQuery = searchParams.get('lang') as Language;
  
  // Initial language: path prefix > query param > localStorage > browser language > 'es'
  const getInitialLanguage = (): Language => {
    // 1. Check URL path (e.g. /en/something)
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.startsWith('/en/') || path === '/en') return 'en';
      if (path.startsWith('/it/') || path === '/it') return 'it';
    }

    if (langQuery && ['es', 'en', 'it'].includes(langQuery)) return langQuery;
    const stored = localStorage.getItem('BuzzNature_lang') as Language;
    if (stored && ['es', 'en', 'it'].includes(stored)) return stored;
    
    // Check browser language
    if (typeof navigator !== 'undefined') {
      const browserLang = navigator.language.split('-')[0];
      if (['es', 'en', 'it'].includes(browserLang)) return browserLang as Language;
    }
    return 'es';
  };

  const [language, setLanguageState] = useState<Language>(getInitialLanguage());

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('BuzzNature_lang', lang);
    searchParams.set('lang', lang);
    setSearchParams(searchParams, { replace: true });
  };

  useEffect(() => {
    if (langQuery && ['es', 'en', 'it'].includes(langQuery) && langQuery !== language) {
      setLanguageState(langQuery);
    }
  }, [langQuery]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

