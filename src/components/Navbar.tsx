import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useLanguage, Language } from '../context/LanguageContext';
import { translations } from '../translations';

export const Navbar = () => {
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const languages: { code: Language; flag: string; name: string }[] = [
    { code: 'es', flag: 'https://flagcdn.com/es.svg', name: 'Español' },
    { code: 'it', flag: 'https://flagcdn.com/it.svg', name: 'Italiano' },
    { code: 'en', flag: 'https://flagcdn.com/us.svg', name: 'English' },
  ];

  const currentLang = languages.find(l => l.code === language) || languages[0];
  const t = translations[language].nav;

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 rounded-none bg-[#0e0e0e]/80 backdrop-blur-xl flex justify-between items-center px-6 md:px-12 h-20">
      <Link to="/" className="flex items-center hover:scale-105 transition-transform duration-300" onClick={closeMobileMenu}>
        <img 
          src="/logo.svg" 
          alt="BuzzLab Logo" 
          className="h-12 md:h-14 w-auto object-contain"
        />
      </Link>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10">
        <Link to="/" className={`font-headline font-bold uppercase tracking-widest text-[10px] md:text-xs transition-all duration-300 ${location.pathname === '/' ? 'text-primary border-b-2 border-primary pb-1' : 'text-white/60 hover:text-primary'}`}>{t.home}</Link>
        <Link to="/analisis" className={`font-headline font-bold uppercase tracking-widest text-[10px] md:text-xs transition-all duration-300 ${location.pathname === '/analisis' ? 'text-primary border-b-2 border-primary pb-1' : 'text-white/60 hover:text-primary'}`}>{t.lab}</Link>
        <Link to="/santuario" className={`font-headline font-bold uppercase tracking-widest text-[10px] md:text-xs transition-all duration-300 ${location.pathname === '/santuario' ? 'text-primary border-b-2 border-primary pb-1' : 'text-white/60 hover:text-primary'}`}>{t.sanctuary}</Link>
        <Link to="/contacto" className={`font-headline font-bold uppercase tracking-widest text-[10px] md:text-xs transition-all duration-300 ${location.pathname === '/contacto' ? 'text-primary border-b-2 border-primary pb-1' : 'text-white/60 hover:text-primary'}`}>{t.contact}</Link>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <button 
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center gap-2 hover:scale-105 transition-transform"
            title={currentLang.name}
          >
            <img src={currentLang.flag} alt={currentLang.name} className="w-6 h-4 object-cover rounded-[2px]" />
            <ChevronDown className={`w-4 h-4 text-primary transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
          </button>

          {isLangOpen && (
            <div className="absolute top-full right-0 mt-4 bg-[#0e0e0e]/95 border border-primary/20 backdrop-blur-xl flex flex-col shadow-lg shadow-black/50 min-w-[140px]">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsLangOpen(false);
                  }}
                  className={`flex items-center gap-3 px-4 py-3 hover:bg-primary/20 transition-colors text-left ${currentLang.code === lang.code ? 'bg-primary/10 border-l-2 border-primary' : 'border-l-2 border-transparent'}`}
                  title={lang.name}
                >
                  <img src={lang.flag} alt={lang.name} className="w-6 h-4 object-cover rounded-[2px]" />
                  <span className="text-[10px] font-headline text-white/80 uppercase tracking-widest">{lang.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-primary hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#0e0e0e]/95 backdrop-blur-xl border-b border-primary/20 flex flex-col items-center py-8 gap-6 md:hidden shadow-xl shadow-black/50">
          <Link to="/" onClick={closeMobileMenu} className={`font-headline font-bold uppercase tracking-widest text-sm transition-all duration-300 ${location.pathname === '/' ? 'text-primary' : 'text-white/60 hover:text-primary'}`}>{t.home}</Link>
          <Link to="/analisis" onClick={closeMobileMenu} className={`font-headline font-bold uppercase tracking-widest text-sm transition-all duration-300 ${location.pathname === '/analisis' ? 'text-primary' : 'text-white/60 hover:text-primary'}`}>{t.lab}</Link>
          <Link to="/santuario" onClick={closeMobileMenu} className={`font-headline font-bold uppercase tracking-widest text-sm transition-all duration-300 ${location.pathname === '/santuario' ? 'text-primary' : 'text-white/60 hover:text-primary'}`}>{t.sanctuary}</Link>
          <Link to="/contacto" onClick={closeMobileMenu} className={`font-headline font-bold uppercase tracking-widest text-sm transition-all duration-300 ${location.pathname === '/contacto' ? 'text-primary' : 'text-white/60 hover:text-primary'}`}>{t.contact}</Link>
        </div>
      )}
    </nav>
  );
};
