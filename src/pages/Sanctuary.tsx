import React from 'react';
import { ArrowRight, Scale } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { motion } from 'motion/react';

const SanctuaryHero = () => {
  const { language } = useLanguage();
  const t = translations[language].sanctuary.hero;

  return (
    <header className="relative min-h-[80vh] flex flex-col justify-center pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover opacity-40 grayscale-[30%] brightness-[0.6]" 
          src="https://images.unsplash.com/photo-1585936529565-1871537209e3?q=80&w=1920" 
          alt="Soil layers and trees" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black text-[#F8F9FA] uppercase tracking-tighter mb-6 leading-none">
          {t.title1}<br/>{t.title2}<br/><span className="text-primary text-glow-primary">{t.title3}</span><br/>{t.title4}<br/><span className="text-secondary text-glow-secondary">{t.title5}</span>
        </h1>
        <div className="border-l-2 border-white/20 pl-6 py-2 max-w-2xl mt-8">
          <p className="text-lg md:text-xl text-on-surface-variant font-mono mb-6 leading-relaxed">
            {t.desc}
          </p>
          <div className="flex gap-4">
            <span className="border border-secondary text-secondary font-headline text-[10px] px-3 py-1 tracking-widest uppercase">{t.tag1}</span>
            <span className="border border-primary text-primary font-headline text-[10px] px-3 py-1 tracking-widest uppercase">{t.tag2}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

const DiplomacySection = () => {
  const { language } = useLanguage();
  const t = translations[language].sanctuary.diplomacy;

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative aspect-square border border-white/10 flex items-center justify-center overflow-hidden bg-[#050505]">
          <div className="absolute w-[120%] h-[120%] rounded-full border border-secondary/20 flex items-center justify-center -left-[20%] overflow-hidden">
            {/* Radar Sweep */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{ background: "conic-gradient(from 0deg, transparent 70%, rgba(255,179,0,0.1) 80%, rgba(255,179,0,0.4) 100%)" }}
            />
            <motion.div 
              animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-[70%] h-[70%] rounded-full border border-secondary/40 flex items-center justify-center bg-secondary/5 relative z-10"
            >
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="w-[40%] h-[40%] rounded-full border border-secondary/60 flex items-center justify-center bg-secondary/10 relative z-10"
              >
                <motion.div 
                  animate={{ scale: [1, 1.8, 1], boxShadow: ["0 0 10px rgba(255,179,0,0.5)", "0 0 30px rgba(255,179,0,1)", "0 0 10px rgba(255,179,0,0.5)"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-2 h-2 bg-secondary rounded-full relative z-10"
                ></motion.div>
              </motion.div>
            </motion.div>
          </div>
          <div className="absolute right-8 md:right-12 text-right z-20">
            <div className="text-5xl md:text-7xl font-headline text-secondary tracking-tighter">{t.radius}</div>
            <div className="text-[8px] md:text-[10px] font-headline text-secondary tracking-widest uppercase">{t.radiusLabel1}<br/>{t.radiusLabel2}</div>
          </div>
        </div>
        <div>
          <h2 className="font-headline text-3xl md:text-5xl text-[#F8F9FA] mb-8 uppercase italic tracking-tighter leading-tight">
            {t.title1}<br/>{t.title2} <span className="text-primary not-italic">{t.title3}</span>
          </h2>
          <h3 className="font-headline text-secondary text-sm tracking-widest mb-4 uppercase">{t.subtitle}</h3>
          <p className="text-on-surface-variant font-mono text-sm leading-relaxed mb-8">
            {t.desc}
          </p>
          <div className="bg-[#141414] border border-white/5 p-6 md:p-8">
            <h4 className="font-headline text-primary text-[10px] tracking-widest mb-3 uppercase">{t.boxTitle}</h4>
            <p className="text-[#F8F9FA] italic text-sm leading-relaxed">
              {t.boxQuote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const RightsSection = () => {
  const { language } = useLanguage();
  const t = translations[language].sanctuary.rights;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-headline text-4xl md:text-6xl lg:text-7xl text-[#F8F9FA] mb-16 uppercase tracking-tighter text-right leading-none">
          {t.title1}<br/><span className="text-primary">{t.title2}</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[#0a0a0a] border border-white/5 p-8 relative overflow-hidden group min-h-[400px] flex flex-col justify-end">
            <img 
              src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=800" 
              alt="European Parliament Law" 
              className="w-full h-full object-cover opacity-30 grayscale group-hover:scale-105 transition-transform duration-700 absolute inset-0 mix-blend-luminosity" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="font-headline text-primary text-2xl mb-2 uppercase">{t.lawTitle}</h3>
              <p className="font-headline text-[10px] text-[#F8F9FA] tracking-widest uppercase">{t.lawDesc}</p>
            </div>
          </div>
          <div className="bg-[#141414] border border-white/5 p-10 md:p-16 flex flex-col justify-center relative">
            <div className="text-secondary mb-8">
              <Scale className="w-8 h-8" />
            </div>
            <p className="text-xl md:text-2xl text-[#F8F9FA] font-mono mb-12 leading-relaxed">
              {t.desc}
            </p>
            <a href="#" className="font-headline text-secondary text-[10px] tracking-widest uppercase flex items-center gap-2 hover:text-primary transition-colors">
              {t.link} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const CommunitySection = () => {
  const { language } = useLanguage();
  const t = translations[language].sanctuary.community;

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-[#F8F9FA] mb-12 uppercase tracking-tighter leading-none">
            {t.title1} <span className="text-primary">{t.title2}</span><br/>{t.title3}
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" 
              alt="Farmer" 
              className="w-full aspect-square object-cover grayscale contrast-125" 
            />
            <img 
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=400" 
              alt="Lavender" 
              className="w-full aspect-square object-cover grayscale contrast-125" 
            />
          </div>
          <div className="bg-[#0a0a0a] border border-white/5 p-6 md:p-8">
            <h3 className="font-headline text-secondary text-[10px] tracking-widest mb-3 uppercase">{t.zoneTitle}</h3>
            <p className="text-sm text-[#F8F9FA] font-mono leading-relaxed">
              {t.zoneDesc}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#0a0a0a] border border-white/5 p-8 flex flex-col justify-center">
              <div className="text-5xl md:text-6xl font-headline text-secondary mb-4 tracking-tighter">{t.stat1Value}</div>
              <div className="font-headline text-[10px] text-on-surface-variant tracking-widest uppercase">{t.stat1Label}</div>
            </div>
            <div className="bg-[#0a0a0a] border border-white/5 p-8 flex flex-col justify-center">
              <div className="text-5xl md:text-6xl font-headline text-secondary mb-4 tracking-tighter">{t.stat2Value}</div>
              <div className="font-headline text-[10px] text-on-surface-variant tracking-widest uppercase">{t.stat2Label}</div>
            </div>
          </div>
          <div className="bg-primary p-8 md:p-12 flex-grow flex flex-col justify-center">
            <h3 className="font-headline text-3xl md:text-4xl text-background uppercase mb-4 tracking-tighter">{t.ctaTitle}</h3>
            <p className="text-background/80 font-mono text-sm mb-10">{t.ctaDesc}</p>
            <button 
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfT-MYwHHnIwwVyJP7fwHJJR50StGJL-NfUpnOSVGcEV9yaKw/viewform?usp=header', '_blank')}
              className="bg-[#0a0a0a] text-primary font-headline font-bold text-sm md:text-base px-6 py-4 uppercase tracking-widest hover:bg-black transition-colors w-full border border-primary/20"
            >
              {t.ctaBtn}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Sanctuary = () => {
  return (
    <>
      <SanctuaryHero />
      <DiplomacySection />
      <RightsSection />
      <CommunitySection />
    </>
  );
};
