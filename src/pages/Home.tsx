import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Thermometer, Weight, FileAudio, Home as HomeIcon, ArrowLeft, ArrowRight, Circle, Bug, Hourglass, Plane, Droplet, Activity, FlaskConical, Target, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { SEO } from '../components/SEO';

import heroImg from '../assets/images/hero_bee_natural_1780844978015.png';
import techHoneycombImg from '../assets/images/tech_honeycomb_1780844459150.png';
import smartHiveImg from '../assets/images/smart_hive_wood_1780844997526.png';
import nodeCardImg from '../assets/images/node_card_bee_1780845015465.png';
import lavenderImg from '../assets/images/tech_lavender_1780844472408.png';
import rosemaryImg from '../assets/images/tech_rosemary_1780844485131.png';
import thymeImg from '../assets/images/tech_thyme_1780844499574.png';
import droneBeeImg from '../assets/images/tech_drone_bee_1780844513991.png';

import eggImg from '../assets/images/cycle_egg_macro_1780845335403.png';
import larvaImg from '../assets/images/cycle_larva_macro_1780845350996.png';
import pupaImg from '../assets/images/cycle_pupa_macro_1780845366606.png';
import adultImg from '../assets/images/cycle_adult_macro_1780845380795.png';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const navigate = useNavigate();
  
  return (
    <header className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full object-cover opacity-70 grayscale-[10%] brightness-[0.5]" 
          alt="honeybee" 
          fetchPriority="high"
          loading="eager"
          decoding="sync"
          src={heroImg}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50"></div>
      </div>
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center max-w-6xl flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="font-headline text-primary text-sm md:text-base tracking-[0.3em] font-bold border border-primary/50 px-4 py-2 bg-background/50 backdrop-blur-sm rounded-none">
            {t.supertitle}
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-headline text-4xl md:text-6xl lg:text-7xl font-black text-primary uppercase tracking-tighter mb-8 leading-tight text-glow-primary"
        >
          BuzzNature: {t.subtitle} <br className="hidden md:block" /> {t.title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-[#F8F9FA] max-w-3xl mx-auto mb-10 opacity-100 leading-relaxed font-medium"
        >
          {t.desc}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center mb-12 w-full max-w-3xl"
        >
          <div className="flex items-center gap-2 text-white/90 bg-white/5 border border-white/10 px-4 py-2 backdrop-blur-md w-full md:w-auto justify-center">
            <Droplet className="w-4 h-4 text-primary" />
            <span className="font-headline text-[10px] tracking-widest uppercase">{t.badge1}</span>
          </div>
          <div className="flex items-center gap-2 text-white/90 bg-white/5 border border-white/10 px-4 py-2 backdrop-blur-md w-full md:w-auto justify-center">
            <Activity className="w-4 h-4 text-primary" />
            <span className="font-headline text-[10px] tracking-widest uppercase">{t.badge2}</span>
          </div>
          <div className="flex items-center gap-2 text-white/90 bg-white/5 border border-white/10 px-4 py-2 backdrop-blur-md w-full md:w-auto justify-center">
            <FlaskConical className="w-4 h-4 text-primary" />
            <span className="font-headline text-[10px] tracking-widest uppercase">{t.badge3}</span>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5, delay: 0.4 }}
           className="flex flex-col items-center gap-3"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contacto')}
            className="bg-primary text-on-primary font-headline font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 uppercase tracking-widest border-glow-primary"
          >
            {t.btn}
          </motion.button>
          <span className="text-primary/70 font-headline text-[10px] md:text-xs tracking-widest uppercase mt-2">
            {t.btnMicro}
          </span>
        </motion.div>
      </div>
    </header>
  );
};

const PactSection = () => {
  const { language } = useLanguage();
  const t = translations[language].pact;
  
  return (
    <section className="py-20 md:py-32 bg-surface-container-low border-t border-outline-variant/10 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden border border-outline-variant/10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-16 bg-surface-container-lowest flex flex-col justify-center"
          >
            <span className="font-headline text-outline text-xs md:text-sm tracking-[0.3em] mb-4">{t.standardMetric}</span>
            <h2 className="font-headline text-3xl md:text-4xl text-[#F8F9FA] mb-8 uppercase">{t.standardTitle}</h2>
            <p className="text-[#F8F9FA] mb-8 leading-relaxed opacity-90 text-sm md:text-base">
              {t.standardDesc}
            </p>
            <div className="h-1 bg-outline-variant/30 w-full relative overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "95%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                className="absolute left-0 top-0 h-full bg-outline"
              ></motion.div>
            </div>
            <div className="mt-4 text-outline font-headline text-[10px] md:text-xs tracking-widest">{t.standardLabel}</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-16 bg-[#002b25] relative flex flex-col justify-center border-t md:border-t-0 md:border-l border-secondary/20"
          >
            <div className="absolute inset-0 opacity-20">
              <img className="w-full h-full object-cover" alt="honeycomb" src={techHoneycombImg}/>
            </div>
            <div className="relative z-10">
              <span className="font-headline text-secondary text-xs md:text-sm tracking-[0.3em] mb-4">{t.BuzzNatureProtocol}</span>
              <h2 className="font-headline text-3xl md:text-4xl text-secondary mb-8 uppercase text-glow-secondary">{t.title}</h2>
              <p className="text-on-secondary-container mb-8 leading-relaxed text-sm md:text-base">
                {t.extDesc} {t.invDesc}
              </p>
              <div className="h-1 bg-secondary/20 w-full relative overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "30%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
                  className="absolute left-0 top-0 h-full bg-secondary shadow-[0_0_10px_#26fedc]"
                ></motion.div>
              </div>
              <div className="mt-4 text-secondary font-headline text-[10px] md:text-xs tracking-widest">{t.BuzzNatureLabel}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ArchitectureSection = () => {
  const { language } = useLanguage();
  const t = translations[language].arch;
  
  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1 relative"
        >
          <div className="aspect-square bg-surface-container-highest relative overflow-hidden">
            <motion.img 
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.7 }}
              className="w-full h-full object-cover grayscale brightness-75" 
              alt="wild honeycomb" 
              src={smartHiveImg}
            />
            <div className="absolute inset-0 border-[10px] md:border-[20px] border-background pointer-events-none"></div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-primary p-4 md:p-8 text-on-primary font-headline font-bold text-xl md:text-2xl uppercase tracking-tighter"
          >
            FREE_FLOW
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 md:order-2"
        >
          <h2 className="font-headline text-4xl md:text-6xl text-primary mb-8 md:mb-10 leading-none uppercase">{t.title}</h2>
          <div className="space-y-6 text-on-surface-variant text-base md:text-lg">
            <p>{t.desc1}</p>
            <p className="border-l-2 border-secondary pl-4 md:pl-6 py-2 bg-secondary/5 italic">
              {t.desc2}
            </p>
            <p>{t.desc3}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SmartColmenaSection = () => {
  const { language } = useLanguage();
  const t = translations[language].smart;
  
  return (
    <section className="py-20 md:py-32 bg-surface-container-lowest">
      <div className="container mx-auto px-6 md:px-12 text-center mb-12 md:mb-20">
        <span className="text-secondary font-headline tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-xs">HARDWARE INTERFACE v2.4</span>
        <h2 className="font-headline text-3xl md:text-5xl mt-4 uppercase">{t.title}</h2>
      </div>
      <div className="container mx-auto px-6 md:px-12 relative">
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
          
          {/* Main Terminal View */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-[#050505] border border-primary/20 rounded-lg overflow-hidden flex flex-col font-mono relative shadow-[0_0_30px_rgba(38,254,220,0.05)]"
          >
            {/* Window Header */}
            <div className="bg-[#111] border-b border-primary/20 p-3 flex justify-between items-center">
               <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
               </div>
               <span className="text-[10px] text-primary/60 tracking-widest uppercase">HONEY_OS // ROOT TERMINAL</span>
            </div>
            
            {/* Content area */}
            <div className="p-6 relative flex-1 flex flex-col">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>
              
              <div className="flex flex-col sm:flex-row gap-6 items-start mb-8 relative z-10">
                <div className="w-32 h-32 border border-primary/30 rounded overflow-hidden relative shrink-0">
                   <img className="w-full h-full object-cover opacity-60 mix-blend-screen" alt="schematic bg" src={smartHiveImg} />
                   <div className="absolute inset-0 ring-1 ring-primary/40 inset-ring animate-pulse"></div>
                </div>
                <div className="flex-1 w-full">
                   <p className="text-primary font-bold text-lg mb-2">{'>'} SYSTEM_BOOT_SEQUENCE</p>
                   <p className="text-primary/70 text-xs md:text-sm mb-2">INITIALIZING NODE: <span className="text-white">BZ-NODE-77</span></p>
                   <p className="text-primary/70 text-xs md:text-sm mb-2">STATUS: <span className="text-green-400">ONLINE & SECURE</span></p>
                   <p className="text-primary/70 text-xs md:text-sm flex items-center gap-2">CONNECTING TO HIVE-MIND... <span className="w-2 h-2 bg-primary rounded-full animate-pulse inline-block"></span></p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                 <div className="border border-primary/20 p-4 bg-[#0a0a0a]">
                    <div className="flex items-center gap-3 mb-2">
                      <Thermometer className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      <span className="text-[10px] md:text-xs text-primary/60 tracking-widest">{t.temp}</span>
                    </div>
                    <div className="text-2xl md:text-3xl text-white">35.2<span className="text-sm md:text-base text-primary/40">ºC</span></div>
                    <div className="w-full h-1 mt-3 bg-primary/20 overflow-hidden">
                       <motion.div initial={{ width: 0 }} whileInView={{ width: "85%" }} transition={{ duration: 1, delay: 0.5 }} className="h-full bg-primary"></motion.div>
                    </div>
                 </div>
                 
                 <div className="border border-primary/20 p-4 bg-[#0a0a0a]">
                    <div className="flex items-center gap-3 mb-2">
                       <Weight className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                       <span className="text-[10px] md:text-xs text-primary/60 tracking-widest">{t.weight}</span>
                    </div>
                    <div className="text-2xl md:text-3xl text-white">48<span className="text-sm md:text-base text-primary/40">KG</span></div>
                    <div className="w-full h-1 mt-3 bg-primary/20 overflow-hidden">
                       <motion.div initial={{ width: 0 }} whileInView={{ width: "65%" }} transition={{ duration: 1, delay: 0.7 }} className="h-full bg-primary"></motion.div>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
          
          {/* Side Telemetry */}
          <div className="flex flex-col gap-6">
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="bg-[#050505] border border-secondary/20 p-6 flex-1 rounded-lg font-mono relative overflow-hidden group"
             >
                <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
                <div className="flex items-center gap-3 mb-4">
                   <FileAudio className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                   <span className="text-xs text-secondary/80 tracking-widest">{t.audio}</span>
                </div>
                <div className="h-[40px] md:h-[60px] flex items-end gap-1 mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                   {[40, 20, 60, 80, 50, 30, 90, 70, 40, 50, 20].map((h, i) => (
                      <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} transition={{ duration: 0.5, delay: 0.5 + (i*0.05) }} className="flex-1 bg-secondary"></motion.div>
                   ))}
                </div>
                <div className="text-lg md:text-xl text-white font-bold">NORMAL <span className="text-xs md:text-sm font-normal text-secondary/60">FREQ: 240Hz</span></div>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.5 }}
               className="bg-[#050505] border border-white/10 p-6 flex-1 rounded-lg font-mono relative group flex flex-col justify-center"
             >
                 <div className="flex items-center gap-3 mb-4">
                   <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-white" />
                   <span className="text-xs text-white/60 tracking-widest uppercase">{t.insulation}</span>
                 </div>
                 <div className="text-2xl md:text-3xl text-white mb-2 group-hover:text-glow-white transition-all">MAXIMUM</div>
                 <div className="text-[10px] text-white/40 tracking-widest">WINTER READY // ZERO DRAFT</div>
                 <div className="mt-4 flex gap-1">
                   {[1, 2, 3, 4, 5].map((_, i) => (
                      <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.2, delay: 0.8 + (i*0.1) }} className="h-1 md:h-1.5 flex-1 bg-white"></motion.div>
                   ))}
                 </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

const GardenCarousel = () => {
  const { language } = useLanguage();
  const t = translations[language].garden;
  
  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
        <div className="max-w-2xl">
          <h2 className="font-headline text-3xl md:text-5xl text-on-surface uppercase mb-4 md:mb-6">{t.title}</h2>
          <p className="text-on-surface-variant text-sm md:text-base">{t.desc}</p>
        </div>
        <div className="flex gap-4">
          <button className="w-10 h-10 md:w-12 md:h-12 border border-outline-variant flex items-center justify-center hover:bg-white/10 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 md:w-12 md:h-12 border border-outline-variant flex items-center justify-center hover:bg-white/10 transition-colors">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="flex gap-6 md:gap-8 px-6 md:px-12 overflow-x-auto no-scrollbar pb-10 snap-x">
        {[
          {
            name: t.lavenderName,
            status: "JUNIO_ACTIVE",
            desc: t.lavenderDesc,
            img: lavenderImg
          },
          {
            name: t.rosemaryName,
            status: "ABRIL_ACTIVE",
            desc: t.rosemaryDesc,
            img: rosemaryImg
          },
          {
            name: t.thymeName,
            status: "MAYO_ACTIVE",
            desc: t.thymeDesc,
            img: thymeImg
          }
        ].map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="min-w-[300px] md:min-w-[400px] snap-center bg-surface-container-high group border border-transparent hover:border-secondary transition-colors duration-500"
          >
            <div className="h-48 md:h-64 overflow-hidden">
              <img className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" alt={item.name} src={item.img}/>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline text-xl md:text-2xl uppercase text-secondary">{item.name}</h3>
                <span className="text-secondary/50 font-headline text-[10px] md:text-xs">{item.status}</span>
              </div>
              <p className="text-xs md:text-sm opacity-60 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const SynthesisCycle = () => {
  const { language } = useLanguage();
  const t = translations[language].cycle;
  
  return (
    <section className="py-20 md:py-32 bg-[#0e0e0e] border-t border-outline-variant/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-20 text-center">
          <span className="text-secondary font-headline tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-xs">BIOLOGICAL_RUNTIME v1.0</span>
          <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl mt-4 uppercase text-glow-secondary">{t.title}</h2>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute top-[40px] left-0 w-full h-[2px] bg-secondary/20 hidden md:block"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {[
              { img: eggImg, title: t.eggTitle, days: t.eggDays, desc: t.eggDesc, active: false },
              { img: larvaImg, title: t.larvaTitle, days: t.larvaDays, desc: t.larvaDesc, active: false },
              { img: pupaImg, title: t.pupaTitle, days: t.pupaDays, desc: t.pupaDesc, active: true },
              { img: adultImg, title: t.adultTitle, days: t.adultDays, desc: t.adultDesc, active: false }
            ].map((stage, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-surface-container-high border-2 flex items-center justify-center mb-6 relative transition-all duration-300 overflow-hidden ${stage.active ? 'border-primary shadow-[0_0_20px_rgba(38,254,220,0.3)]' : 'border-secondary/30 group-hover:border-primary'}`}>
                  <div className={`absolute inset-0 rounded-full blur-md transition-opacity z-10 ${stage.active ? 'bg-primary/20 animate-pulse opacity-100' : 'bg-secondary/10 opacity-0 group-hover:opacity-100'}`}></div>
                  <img src={stage.img} alt={stage.title} className={`w-full h-full object-cover transition-transform duration-700 ${stage.active ? 'scale-110 grayscale-0' : 'grayscale-[50%] group-hover:grayscale-0 group-hover:scale-110'}`} />
                </div>
                <div className="text-center w-full">
                  <h3 className={`font-headline text-lg md:text-xl mb-2 transition-colors ${stage.active ? 'text-primary' : 'text-secondary group-hover:text-primary'}`}>{stage.title}</h3>
                  <p className={`font-body text-[10px] md:text-xs mb-4 tracking-tighter ${stage.active ? 'text-primary/60' : 'text-secondary/60'}`}>{stage.days}</p>
                  <div className={`bg-surface-container-low p-4 border transition-all ${stage.active ? 'border-primary/40' : 'border-outline-variant/20 group-hover:border-primary/40'}`}>
                    <p className={`text-xs md:text-sm leading-relaxed ${stage.active ? 'text-on-surface italic' : 'opacity-70'}`}>{stage.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const DroneSection = () => {
  const { language } = useLanguage();
  const t = translations[language].drone;
  
  return (
    <section className="py-20 md:py-32 bg-surface-container-lowest border-t border-secondary/10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6 md:space-y-8 order-2 md:order-1"
        >
          <span className="text-secondary font-headline tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-xs uppercase">{t.unit}</span>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl text-secondary uppercase leading-tight text-glow-secondary">{t.title}</h2>
          <div className="space-y-4 md:space-y-6 text-on-surface-variant text-base md:text-lg">
            <p dangerouslySetInnerHTML={{ __html: t.desc1.replace('Varroa', '<span className="text-secondary font-bold">Varroa</span>') }} />
            <p className="bg-secondary/10 border-l-4 border-secondary p-4 md:p-6 italic text-[#F8F9FA] text-sm md:text-base">
              {t.desc2}
            </p>
            <p>{t.desc3}</p>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative group order-1 md:order-2"
        >
          <div className="absolute -inset-1 bg-secondary/20 blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative aspect-video bg-black overflow-hidden border border-secondary/30">
            <img className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 transition-transform duration-700" loading="lazy" decoding="async" alt="drone bee" src={droneBeeImg}/>
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black to-transparent">
              <div className="flex items-center gap-2">
                <motion.span 
                  animate={{ opacity: [1, 0.2, 1], backgroundColor: ["#26fedc", "#ff003c", "#26fedc"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-2 h-2 rounded-full"
                ></motion.span>
                <motion.span 
                  animate={{ opacity: [1, 0.4, 1], color: ["#26fedc", "#ff003c", "#26fedc"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="font-headline text-[8px] md:text-[10px] tracking-widest"
                >
                  DRONE_METRIC: VARROA_BAIT_ACTIVE
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ScarcitySection = () => {
  const { language } = useLanguage();
  const t = translations[language].scarcity;
  const navigate = useNavigate();
  
  return (
    <section className="py-32 md:py-48 bg-surface-container-lowest border-y border-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-primary/5 rounded-full blur-[80px] md:blur-[120px]"
        ></motion.div>
      </div>
      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="font-headline text-5xl md:text-7xl lg:text-9xl text-primary uppercase tracking-tighter mb-4 leading-none italic"
        >
          {t.title}
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-12 md:mb-16 font-headline text-lg md:text-2xl text-secondary tracking-widest animate-pulse"
        >
          // STOCK_REMAINING_0031
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-base md:text-xl text-[#F8F9FA] max-w-xl mx-auto mb-12 md:mb-16 opacity-100 font-medium leading-relaxed"
        >
          {t.desc}
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          onClick={() => navigate('/contacto')}
          className="bg-primary text-on-primary font-headline font-bold text-lg md:text-2xl px-8 md:px-16 py-6 md:py-8 uppercase tracking-widest hover:bg-primary-dim transition-colors duration-300 w-full md:w-auto"
        >
          {t.btn}
        </motion.button>
      </div>
    </section>
  );
};

const ProductSection = () => {
  const { language } = useLanguage();
  const t = translations[language].product;
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-32 bg-surface-container-lowest relative z-10 overflow-hidden">
      <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
           whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="relative aspect-square md:aspect-[4/5] flex items-center justify-center p-8 lg:p-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-60"></div>
          
          <div className="w-full h-full border border-primary/20 bg-background/50 backdrop-blur-md relative flex flex-col items-center justify-center shadow-[0_0_50px_rgba(255,184,0,0.15)] group">
            <div className="absolute top-4 left-4 border-l-2 border-t-2 border-primary/50 w-8 h-8"></div>
            <div className="absolute bottom-4 right-4 border-r-2 border-b-2 border-primary/50 w-8 h-8"></div>
            <div className="absolute top-0 right-1/2 translate-x-1/2 w-1/2 h-[1px] bg-primary/40 block"></div>
            
            <div className="relative w-3/4 max-w-[320px] aspect-[4/5] group-hover:scale-105 transition-transform duration-700">
               <img src={nodeCardImg} alt="Smart Node Card" className="w-full h-full object-cover rounded-md shadow-2xl brightness-90 grayscale-[20%]" />
               <div className="absolute inset-0 ring-1 ring-inset ring-primary/30 rounded-md"></div>
               <div className="absolute top-2 right-2 flex gap-1">
                 <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
               </div>
               <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur backdrop-saturate-150 px-3 py-1.5 text-[8px] font-mono text-primary tracking-widest border border-primary/20">
                 ID: BZ-NODE-77
               </div>
            </div>
            
            {/* Glow backing */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 blur-3xl rounded-full -z-10 group-hover:bg-primary/30 transition-colors duration-700"></div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 border border-primary/50 px-3 py-1 bg-primary/10">
            <span className="font-headline text-primary text-[10px] tracking-widest uppercase">{t.subtitle}</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-7xl text-[#F8F9FA] mb-8 uppercase leading-tight font-black tracking-tighter text-glow-primary">
            {t.title}
          </h2>
          <p className="text-white/80 font-body text-base md:text-lg max-w-xl mb-10 leading-relaxed">
            {t.desc}
          </p>

          <div className="bg-[#0a0a0a] border border-white/5 p-6 mb-10 flex items-center justify-between group hover:border-primary/30 transition-colors">
             <div>
               <p className="font-headline text-white/50 text-[10px] tracking-widest uppercase mb-1">AVAILABILITY</p>
               <p className="font-headline text-primary font-bold tracking-widest">{t.label}</p>
             </div>
             <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
               <Target className="w-6 h-6 text-primary group-hover:scale-125 transition-transform" />
             </motion.div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contacto')}
            className="w-full sm:w-auto bg-primary text-[#0a0a0a] font-headline font-bold text-sm md:text-base px-8 py-4 uppercase tracking-widest flex items-center justify-center gap-3"
          >
            {t.btn}
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <>
      <SEO page="home" />
      <Hero />
      <ProductSection />
      <PactSection />
      <ArchitectureSection />
      <SmartColmenaSection />
      <GardenCarousel />
      <SynthesisCycle />
      <DroneSection />
      <ScarcitySection />
    </>
  );
};
