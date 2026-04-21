import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;
  const tNav = translations[language].nav;

  return (
    <footer className="bg-[#050505] pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-6 hover:scale-105 transition-transform duration-300">
              <img src="/logo.svg" alt="BuzzLab Logo" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-white/50 text-sm font-body max-w-sm">
              {t.desc}
            </p>
          </div>
          
          <div>
            <h4 className="text-primary font-headline text-xs tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-1 h-1 bg-primary"></span>
              {t.navTitle}
            </h4>
            <ul className="flex flex-col gap-3 font-headline text-xs tracking-widest">
              <li><Link to="/" className="text-white/60 hover:text-primary transition-colors hover:pl-2 duration-300 inline-block">{tNav.home}</Link></li>
              <li><Link to="/analisis" className="text-white/60 hover:text-primary transition-colors hover:pl-2 duration-300 inline-block">{tNav.lab}</Link></li>
              <li><Link to="/santuario" className="text-white/60 hover:text-primary transition-colors hover:pl-2 duration-300 inline-block">{tNav.sanctuary}</Link></li>
              <li><Link to="/contacto" className="text-white/60 hover:text-primary transition-colors hover:pl-2 duration-300 inline-block">{tNav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-headline text-xs tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-1 h-1 bg-primary"></span>
              {t.socialTitle}
            </h4>
            <ul className="flex flex-col gap-3 font-headline text-xs tracking-widest text-white/60">
              <li>
                <a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group">
                  <Instagram className="w-4 h-4" /> INSTABEE
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group">
                  <Linkedin className="w-4 h-4" /> BZZZ-LINKEDIN
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group">
                  <Twitter className="w-4 h-4" /> X (BZZZ)
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[#fcee0a] font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-center md:text-left opacity-80">
            {t.copyright}
          </div>
          <div className="flex gap-4 font-headline text-[10px] text-white/30 uppercase tracking-widest">
            <span className="cursor-pointer hover:text-white transition-colors">PRIVACY_POLICY</span>
            <span className="cursor-pointer hover:text-white transition-colors">TERMS_OF_SERVICE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
