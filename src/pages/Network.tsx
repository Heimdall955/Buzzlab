import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { SEO } from '../components/SEO';
import { Hexagon, Shield, Database, Cpu, Zap, Globe } from 'lucide-react';

export const Network = () => {
  const { language } = useLanguage();
  const t = translations[language].network;

  return (
    <>
      <SEO page="network" />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0a0a] opacity-50"></div>
          <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-6 px-4 py-1 border border-primary/30 bg-primary/5 text-primary text-[10px] tracking-[0.3em] font-headline uppercase"
            >
              {t.hero.supertitle}
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-headline text-4xl md:text-6xl text-[#F8F9FA] uppercase tracking-tighter mb-8 leading-tight"
            >
              {t.hero.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-secondary text-xl font-headline mb-8 uppercase tracking-widest"
            >
              {t.hero.subtitle}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-on-surface-variant text-lg font-mono leading-relaxed"
            >
              {t.hero.desc}
            </motion.p>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-24 bg-[#050505] border-y border-white/5">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-secondary font-headline text-xs tracking-widest mb-4">{t.community.supertitle}</div>
              <h2 className="font-headline text-3xl md:text-4xl text-[#F8F9FA] uppercase mb-8 leading-tight">
                {t.community.title}
              </h2>
              <p className="text-on-surface-variant font-mono mb-12 text-sm leading-relaxed">
                {t.community.desc}
              </p>
              <ul className="space-y-4 mb-12">
                {[t.community.item1, t.community.item2, t.community.item3, t.community.item4].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <Hexagon className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span className="text-on-surface font-mono text-sm uppercase">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-primary text-background font-headline font-bold text-sm px-8 py-4 uppercase tracking-widest hover:bg-secondary transition-colors">
                {t.community.btn}
              </button>
            </motion.div>
            <div className="relative aspect-video bg-background border border-white/10 group overflow-hidden">
               <img 
                 src="https://images.pexels.com/photos/54323/honey-bee-bee-hive-bee-54323.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                 alt="Network Hub" 
                 className="w-full h-full object-cover opacity-60 grayscale group-hover:scale-105 transition-transform duration-700" 
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-sm">
                   <Globe className="text-primary w-8 h-8 animate-pulse" />
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* Hardware Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-row-reverse">
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-[#0a0a0a] border border-primary/20 flex flex-col items-center justify-center p-8 text-center group hover:border-primary transition-colors">
                  <Database className="w-8 h-8 text-primary mb-4" />
                  <div className="text-[10px] text-on-surface-variant font-mono uppercase">Sensor Matrix v2.4</div>
                </div>
                <div className="aspect-square bg-[#0a0a0a] border border-secondary/20 flex flex-col items-center justify-center p-8 text-center group hover:border-secondary transition-colors">
                  <Cpu className="w-8 h-8 text-secondary mb-4" />
                  <div className="text-[10px] text-on-surface-variant font-mono uppercase">Honey_OS Integration</div>
                </div>
                <div className="aspect-square bg-[#0a0a0a] border border-white/10 flex flex-col items-center justify-center p-8 text-center group hover:border-white/30 transition-colors">
                  <Shield className="w-8 h-8 text-[#F8F9FA] mb-4 opacity-50" />
                  <div className="text-[10px] text-on-surface-variant font-mono uppercase">Bio-Shield Protocol</div>
                </div>
                <div className="aspect-square bg-[#0a0a0a] border border-primary/20 flex flex-col items-center justify-center p-8 text-center group hover:border-primary transition-colors">
                  <Zap className="w-8 h-8 text-primary mb-4" />
                  <div className="text-[10px] text-on-surface-variant font-mono uppercase">Predictive Analysis</div>
                </div>
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="text-primary font-headline text-xs tracking-widest mb-4">{t.hardware.supertitle}</div>
              <h2 className="font-headline text-3xl md:text-4xl text-[#F8F9FA] uppercase mb-8 leading-tight">
                {t.hardware.title}
              </h2>
              <p className="text-on-surface-variant font-mono mb-12 text-sm leading-relaxed">
                {t.hardware.desc}
              </p>
              <ul className="space-y-4 mb-12">
                 {[t.hardware.item1, t.hardware.item2, t.hardware.item3, t.hardware.item4].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-6 h-[1px] bg-primary mt-3 shrink-0"></span>
                    <span className="text-on-surface font-mono text-sm uppercase">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="border border-primary text-primary font-headline font-bold text-sm px-8 py-4 uppercase tracking-widest hover:bg-primary hover:text-background transition-colors">
                {t.hardware.btn}
              </button>
            </motion.div>
          </div>
        </section>

        {/* Pricing/Access Section */}
        <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
          <div className="container mx-auto px-6">
            <h2 className="font-headline text-3xl text-[#F8F9FA] text-center uppercase tracking-[0.2em] mb-16">
              {t.pricing.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="border border-white/10 p-10 bg-background relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 -translate-y-16 translate-x-16 rounded-full blur-3xl group-hover:bg-secondary/10 transition-colors"></div>
                <h3 className="font-headline text-xl text-secondary mb-2 uppercase tracking-wide">{t.pricing.dataTitle}</h3>
                <div className="font-headline text-2xl text-[#F8F9FA] mb-8">{t.pricing.dataPrice}</div>
                <p className="text-on-surface-variant font-mono text-sm leading-relaxed mb-8">
                  {t.pricing.dataDesc}
                </p>
              </div>
              <div className="border border-primary/30 p-10 bg-background relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -translate-y-16 translate-x-16 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
                <h3 className="font-headline text-xl text-primary mb-2 uppercase tracking-wide">{t.pricing.hwTitle}</h3>
                <div className="font-headline text-2xl text-[#F8F9FA] mb-8">{t.pricing.hwPrice}</div>
                <p className="text-on-surface-variant font-mono text-sm leading-relaxed mb-8">
                  {t.pricing.hwDesc}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
