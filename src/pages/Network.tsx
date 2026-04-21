import React from 'react';
import { Network as NetworkIcon, Cpu, Terminal, ArrowRight, ShieldCheck, Database, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';

const NetworkHero = () => {
  const { language } = useLanguage();
  const t = translations[language].network.hero;

  return (
    <header className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="w-full h-full opacity-20" style={{
          backgroundImage: `linear-gradient(rgba(255, 184, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 184, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
          transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(3)',
          transformOrigin: 'top center'
        }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-primary text-xs md:text-sm tracking-[0.4em] inline-block mb-6 border border-primary/30 bg-primary/10 px-4 py-2">
            {t.supertitle}
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-headline text-5xl md:text-7xl lg:text-8xl font-black text-[#F8F9FA] uppercase tracking-tighter mb-6 leading-none text-glow-primary"
        >
          {t.title}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-secondary font-headline tracking-widest mb-8 uppercase"
        >
          {t.subtitle}
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed border-l-2 border-primary/50 pl-6 text-left"
        >
          {t.desc}
        </motion.p>
      </div>
    </header>
  );
};

const CommunitySection = () => {
  const { language } = useLanguage();
  const t = translations[language].network.community;

  return (
    <section className="py-20 md:py-32 bg-surface-container-lowest border-t border-primary/10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-secondary font-mono tracking-[0.2em] text-[10px] md:text-xs block mb-4">{t.supertitle}</span>
          <h2 className="font-headline text-3xl md:text-5xl text-primary font-black uppercase tracking-tighter mb-6 leading-none">
            {t.title}
          </h2>
          <p className="text-on-surface-variant text-base md:text-lg mb-10 leading-relaxed">
            {t.desc}
          </p>

          <ul className="space-y-4 mb-10 font-mono text-sm md:text-base text-[#F8F9FA]">
            {[t.item1, t.item2, t.item3, t.item4].map((item, i) => (
              <li key={i} className="flex items-start gap-4 p-4 border border-white/5 bg-[#0a0a0a] hover:border-primary/30 transition-colors">
                <Terminal className="text-primary w-5 h-5 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="relative aspect-square flex items-center justify-center p-8 border border-white/5 bg-[#050505] overflow-hidden group"
        >
          <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          {/* Abstract representation of a connected community */}
          <div className="relative w-full h-full flex items-center justify-center">
            <NetworkIcon className="w-32 h-32 text-secondary/40 absolute animate-pulse" />
            <div className="absolute w-full h-full border border-secondary/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute w-3/4 h-3/4 border border-secondary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            
            {/* Inner glowing core */}
            <div className="w-16 h-16 bg-secondary/20 blur-xl absolute"></div>
            <ShieldCheck className="w-12 h-12 text-secondary relative z-10" />

            {/* Connecting nodes */}
            {[...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className="absolute w-3 h-3 bg-secondary rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                style={{
                  top: `${50 + 40 * Math.sin(i * Math.PI / 3)}%`,
                  left: `${50 + 40 * Math.cos(i * Math.PI / 3)}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              ></div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const HardwareSection = () => {
  const { language } = useLanguage();
  const t = translations[language].network.hardware;

  return (
    <section className="py-20 md:py-32 bg-background border-t border-secondary/10 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="relative aspect-square flex items-center justify-center p-8 bg-surface-container-lowest border border-primary/20 overflow-hidden group order-2 lg:order-1"
        >
          {/* Abstract representation of the hardware node */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative w-2/3 h-2/3 border-2 border-primary/30 flex flex-col items-center justify-center p-4">
             <div className="absolute -top-3 bg-background px-2 text-primary text-xs font-mono">NODE_ACTIVE</div>
             <Cpu className="w-20 h-20 text-primary mb-4 animate-pulse" />
             <div className="w-full flex justify-between gap-2">
               <div className="h-1 flex-1 bg-primary/40"></div>
               <div className="h-1 flex-1 bg-primary/40"></div>
               <div className="h-1 flex-1 bg-primary/40"></div>
             </div>
             
             {/* Simulating data lines */}
             <div className="absolute -right-12 top-1/2 w-24 h-[1px] bg-primary/50"></div>
             <div className="absolute -left-12 top-1/2 w-24 h-[1px] bg-primary/50"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 lg:order-2"
        >
          <span className="text-secondary font-mono tracking-[0.2em] text-[10px] md:text-xs block mb-4">{t.supertitle}</span>
          <h2 className="font-headline text-3xl md:text-5xl text-[#F8F9FA] font-black uppercase tracking-tighter mb-6 leading-none">
            {t.title}
          </h2>
          <p className="text-on-surface-variant text-base md:text-lg mb-10 leading-relaxed">
            {t.desc}
          </p>

          <ul className="space-y-4 mb-10 font-mono text-sm md:text-base text-[#F8F9FA]">
            {[t.item1, t.item2, t.item3, t.item4].map((item, i) => (
              <li key={i} className="flex items-start gap-4 p-4 border border-white/5 bg-[#0a0a0a] hover:border-secondary/30 transition-colors">
                <Database className="text-secondary w-5 h-5 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  const { language } = useLanguage();
  const t = translations[language].network.pricing;
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-32 bg-surface-container-lowest border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline text-3xl md:text-5xl lg:text-6xl text-[#F8F9FA] uppercase tracking-tighter mb-16 text-glow-secondary"
        >
          {t.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Data Package */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-secondary/30 bg-[#050505] p-8 md:p-12 text-left flex flex-col group hover:border-secondary transition-colors duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-bl-full -z-10 group-hover:bg-secondary/20 transition-colors"></div>
            
            <h3 className="font-headline text-xl md:text-2xl text-secondary mb-2 uppercase">{t.dataTitle}</h3>
            <p className="font-mono text-sm border border-secondary/20 inline-block px-3 py-1 mb-6 mt-2 text-[#F8F9FA]/80 bg-secondary/5 self-start">
              {t.dataPrice}
            </p>
            <p className="text-on-surface-variant mb-12 flex-1 leading-relaxed">
              {t.dataDesc}
            </p>
            
            <button onClick={() => navigate('/contacto')} className="w-full border border-secondary py-4 font-headline uppercase tracking-widest text-[#F8F9FA] hover:bg-secondary hover:text-[#0a0a0a] transition-colors font-bold text-sm">
              [ INICIAR_CONEXION ]
            </button>
          </motion.div>

          {/* Hardware Package */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border border-primary/30 bg-[#050505] p-8 md:p-12 text-left flex flex-col group hover:border-primary transition-colors duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full -z-10 group-hover:bg-primary/20 transition-colors"></div>
            
            <h3 className="font-headline text-xl md:text-2xl text-primary mb-2 uppercase">{t.hwTitle}</h3>
             <p className="font-mono text-sm border border-primary/20 inline-block px-3 py-1 mb-6 mt-2 text-[#F8F9FA]/80 bg-primary/5 self-start flex items-center gap-2">
              <Zap className="w-3 h-3 text-primary animate-pulse" />
              {t.hwPrice}
            </p>
            <p className="text-on-surface-variant mb-12 flex-1 leading-relaxed">
              {t.hwDesc}
            </p>
            
            <button onClick={() => navigate('/contacto')} className="w-full bg-primary py-4 font-headline uppercase tracking-widest text-[#0a0a0a] hover:bg-primary-dim transition-colors font-bold text-sm">
              [ SOLICITAR_HARDWARE ]
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Network = () => {
  return (
    <>
      <SEO page="network" />
      <NetworkHero />
      <CommunitySection />
      <HardwareSection />
      <PricingSection />
    </>
  );
};
