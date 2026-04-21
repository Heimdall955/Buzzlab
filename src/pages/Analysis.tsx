import React from 'react';
import { Thermometer, Weight, FileAudio, Lock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';

const AnalysisHero = () => {
  const { language } = useLanguage();
  const t = translations[language].lab.hero;

  return (
    <header className="relative min-h-[60vh] flex flex-col justify-center pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img className="w-full h-full object-cover opacity-60 grayscale-[20%] brightness-[0.4] scale-105" fetchPriority="high" loading="eager" decoding="sync" alt="honeybee close up" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkxa5YVh4G41xi1jdfn1frHkN3uQz3qhOguxp0z9DK-X7xPmdvvj4k7ac94bJ-HwVr-4yEii-MVyyJnQKOIglTMgD7q6P23_viBQbQCaONqFthNom6PTBK2F8vYWB87Iaw7PuUICkWrA5f87HxfP4_S3anrsFYYeqSWohXYLb93Y0aIF8E56-YzXP48UemVuomVRJvP1dz42SOuYSlv_uuiuc30_J1C5YH4MQcODJlL6v3lC3auZWLRaHas2sM_Bb3SUDZx4TZ5MiE"/>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50"></div>
      </div>
      <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-6xl">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black text-primary uppercase tracking-tighter mb-6 leading-none text-glow-primary">
          {t.title1}<br/>{t.title2}<br/>{t.title3}
        </h1>
        <div className="border-l-4 border-secondary pl-6 py-2">
          <p className="text-xl md:text-2xl text-secondary font-headline uppercase tracking-widest max-w-2xl">
            {t.subtitle1}<br/>{t.subtitle2}
          </p>
        </div>
      </div>
    </header>
  );
};

const LiveAudioWave = () => {
  return (
    <div className="flex items-center gap-1 h-8 mt-2">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1.5 bg-primary/80 rounded-full"
          animate={{ height: ['20%', '100%', '30%', '80%', '20%'] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.1
          }}
        />
      ))}
    </div>
  );
};

const MonitorSection = () => {
  const { language } = useLanguage();
  const t = translations[language].lab.monitor;

  return (
    <section className="py-20 bg-background relative z-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-secondary/20 blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative aspect-square bg-surface-container-lowest border border-secondary/30 overflow-hidden p-4">
            <motion.div 
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 right-4 z-20 border border-primary text-primary font-headline text-[10px] px-2 py-1 tracking-widest bg-background/80 backdrop-blur-sm"
            >
              {t.sysOk}
            </motion.div>
            <img className="w-full h-full object-cover grayscale brightness-110 contrast-125" alt="bee scan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1vTo1ocH7bkusolFdCbwNRGG-tJWdiMbp_7xrASjNZTwvW5IkND8KDt9_lO5y6htx_vREnn9NrS6T4e0Fh3E5a1Y4QLXsXjgaUeOTxLVzwTubTqPv3nw7wcXLIpKWZpktM64pvN0O4aIwn7nPgABdsGtj2re5vu08p89MNsiadI9XiLRGJiMLc-7S5mjK_IEqJiGLeUYQLrxc-Snzzs1qRKofppS3O2TEpx30_ShHIG7jyYyrG_ESQ4O7E4ppxryWA49Z6fH4wZi3"/>
          </div>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="font-headline text-3xl md:text-4xl text-[#F8F9FA] mb-12 uppercase tracking-widest">
            {t.title1}<br/>{t.title2}
          </h2>
          <div className="space-y-4">
            {/* Temp Sensor */}
            <div className="bg-[#0a0a0a] border border-white/5 p-6 flex flex-col items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-4 w-full">
                <Thermometer className="text-primary w-6 h-6 shrink-0" />
                <div className="flex-1">
                  <h3 className="font-headline text-primary text-[10px] tracking-widest mb-1">{t.tempTitle}</h3>
                  <div className="flex justify-between items-end">
                    <p className="text-2xl font-bold text-[#F8F9FA] tabular-nums">
                      35.<motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }}>2</motion.span>ºC
                    </p>
                    <p className="text-secondary font-headline text-[10px] tracking-widest">{t.tempDesc}</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-1 bg-white/5 overflow-hidden">
                 <motion.div className="h-full bg-primary" animate={{ width: ['40%', '42%', '40%'] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} />
              </div>
            </div>

            {/* Weight Sensor */}
            <div className="bg-[#0a0a0a] border border-white/5 p-6 flex flex-col items-start gap-4 hover:border-secondary/30 transition-colors">
              <div className="flex items-center gap-4 w-full">
                <Weight className="text-secondary w-6 h-6 shrink-0" />
                <div className="flex-1">
                  <h3 className="font-headline text-secondary text-[10px] tracking-widest mb-1">{t.weightTitle}</h3>
                  <div className="flex justify-between items-end">
                    <p className="text-xl md:text-2xl font-bold text-[#F8F9FA] uppercase tabular-nums">
                      <motion.span animate={{ opacity: [1, 0.8, 1] }} transition={{ duration: 3, repeat: Infinity }}>{t.weightValue}</motion.span>
                    </p>
                    <p className="text-secondary font-headline text-[10px] tracking-widest">{t.weightDesc}</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-1 bg-white/5 overflow-hidden flex">
                 <motion.div className="h-full bg-secondary" animate={{ width: ['60%', '64%', '60%'] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />
              </div>
            </div>

            {/* Audio Sensor */}
            <div className="bg-[#0a0a0a] border border-white/5 p-6 flex flex-col items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-4 w-full">
                <FileAudio className="text-primary w-6 h-6 shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-headline text-primary text-[10px] tracking-widest">{t.audioTitle}</h3>
                    <p className="text-secondary font-headline text-[10px] tracking-widest">{t.audioDesc}</p>
                  </div>
                  <LiveAudioWave />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ImmunityReport = () => {
  const { language } = useLanguage();
  const t = translations[language].lab.immunity;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-headline text-3xl md:text-4xl text-[#F8F9FA] mb-12 uppercase tracking-widest text-center">
          {t.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/5">
          <div className="md:col-span-2 bg-[#0a0a0a] p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/5">
            <div className="flex justify-between items-start mb-8">
              <div>
                <span className="inline-block bg-primary text-background font-headline text-[10px] px-3 py-1 tracking-widest mb-4">{t.tag1}</span>
                <h3 className="font-headline text-3xl md:text-4xl text-primary uppercase text-glow-primary">{t.bee1}</h3>
              </div>
              <div className="text-right">
                <motion.div 
                  animate={{ scale: [1, 1.05, 1], textShadow: ["0 0 10px rgba(255,179,0,0.2)", "0 0 25px rgba(255,179,0,0.8)", "0 0 10px rgba(255,179,0,0.2)"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-4xl md:text-6xl font-bold text-primary"
                >
                  50%
                </motion.div>
                <div className="font-headline text-[10px] text-primary tracking-widest mt-2">{t.stat1}</div>
              </div>
            </div>
            <div className="h-2 bg-white/5 w-full mb-6 relative overflow-hidden">
              <motion.div 
                animate={{ width: ["82%", "85%", "82%"], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 top-0 h-full bg-primary shadow-[0_0_15px_#FFB300]"
              ></motion.div>
            </div>
            <p className="font-headline text-secondary text-xs tracking-widest mb-6">{t.desc1Title}</p>
            <p className="text-on-surface-variant leading-relaxed">
              {t.desc1}
            </p>
          </div>
          <div className="md:col-span-1 bg-[#141414] p-8 md:p-12 flex flex-col justify-center">
            <span className="inline-block bg-outline-variant text-background font-headline text-[10px] px-3 py-1 tracking-widest mb-4 self-start">{t.tag2}</span>
            <h3 className="font-headline text-xl md:text-2xl text-[#F8F9FA] uppercase mb-8">{t.bee2}</h3>
            <div className="h-2 bg-white/5 w-full mb-6 relative overflow-hidden">
              <motion.div 
                animate={{ width: ["24%", "26%", "24%"], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 top-0 h-full bg-[#555]"
              ></motion.div>
            </div>
            <p className="font-headline text-outline text-[10px] tracking-widest mb-6">{t.stat2}</p>
            <p className="text-outline text-sm leading-relaxed">
              {t.desc2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ArchitectureSection = () => {
  const { language } = useLanguage();
  const t = translations[language].lab.arch;

  return (
    <section className="py-20 bg-background border-t border-outline-variant/10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="font-headline text-3xl md:text-4xl text-[#F8F9FA] mb-2 uppercase tracking-widest">
            {t.title}
          </h2>
          <p className="font-headline text-secondary text-lg mb-12 tracking-widest">{t.subtitle}</p>
          
          <div className="border-l-2 border-primary pl-6 py-2 mb-12">
            <h3 className="font-headline text-[#F8F9FA] text-sm tracking-widest mb-4">{t.pointTitle}</h3>
            <p className="text-on-surface-variant leading-relaxed">
              {t.pointDesc}
            </p>
          </div>
          
          <div className="bg-surface-container-low border border-outline-variant/20 p-6 flex justify-between items-center">
            <span className="font-headline text-primary text-xs tracking-widest">{t.statTitle}</span>
            <span className="font-headline text-2xl text-[#F8F9FA]">0%</span>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative">
          <div className="aspect-square border border-outline-variant/20 flex items-center justify-center p-8 bg-surface-container-lowest">
            <img className="w-full h-full object-contain opacity-80 mix-blend-screen" loading="lazy" decoding="async" alt="honeycomb structure" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHPS_B5uW_9CieUiFCWo12hk9u5bDf_Vn6CrrbIhmjUmIXM-wYcxSxW5NAEcERgQ9sw4QL0TQCOUz44RtIW0R9nIb62N6hC3JkI3jBbc5n1TZngP4FjpgFPewmVrfg8a3hu5jsEJesSqqa-VxZKJQIwBJZeEsZ86gBRr-GxGQdBWpmLR0IF88dWkgpFPtS3gnPLAjBkiORFSUm47L5oKbbBatz0sv5TX1DlTIrjac3vITVKkIIF1jtPc9FMieCMmlq0mztrHC6HSPU"/>
          </div>
        </div>
      </div>
    </section>
  );
};

const BiodiversityAudit = () => {
  const { language } = useLanguage();
  const t = translations[language].lab.biodiversity;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-primary p-8 md:p-12 flex flex-col justify-between">
          <div>
            <h2 className="font-headline text-3xl md:text-4xl text-background mb-4 uppercase tracking-tighter leading-none">
              {t.title1}<br/>{t.title2}
            </h2>
            <p className="font-headline text-background/60 text-xl tracking-widest">5.000m2</p>
          </div>
          <div className="mt-12 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-background rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <span className="font-headline text-background text-[10px] tracking-widest font-bold">{t.tag1}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-background rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <span className="font-headline text-background text-[10px] tracking-widest font-bold">{t.tag2}</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 bg-[#141414] border border-white/5 p-8 md:p-12 flex flex-col">
          <div className="flex justify-between items-start mb-12">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">300%</div>
              <div className="font-headline text-[10px] text-on-surface-variant tracking-widest">{t.stat1Title}</div>
            </div>
            <div className="text-right">
              <div className="text-4xl md:text-5xl font-bold text-[#F8F9FA] mb-2">-40%</div>
              <div className="font-headline text-[10px] text-on-surface-variant tracking-widest">{t.stat2Title}</div>
            </div>
          </div>
          <div className="flex-grow flex items-end gap-2 md:gap-4 h-48 mt-auto">
            <div className="w-1/5 bg-secondary h-[20%]"></div>
            <div className="w-1/5 bg-secondary h-[35%]"></div>
            <div className="w-1/5 bg-secondary h-[30%]"></div>
            <div className="w-1/5 bg-secondary h-[60%]"></div>
            <div className="w-1/5 bg-primary h-[85%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const QuotesSection = () => {
  const { language } = useLanguage();
  const t = translations[language].lab.quotes;

  return (
    <section className="py-20 bg-background border-t border-outline-variant/10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#0a0a0a] border border-white/5 p-8 md:p-12">
          <h3 className="font-headline text-outline text-xs tracking-widest mb-6 uppercase">{t.tradTitle}</h3>
          <p className="text-on-surface-variant italic leading-relaxed text-lg">
            {t.tradDesc}
          </p>
        </div>
        <div className="bg-[#0a0a0a] border border-white/5 p-8 md:p-12">
          <h3 className="font-headline text-primary text-xs tracking-widest mb-6 uppercase">{t.buzzTitle}</h3>
          <p className="text-[#F8F9FA] italic leading-relaxed text-lg">
            {t.buzzDesc}
          </p>
        </div>
      </div>
    </section>
  );
};

const FooterCTA = () => {
  const { language } = useLanguage();
  const t = translations[language].lab.cta;

  return (
    <section className="py-32 bg-background text-center">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-headline text-5xl md:text-7xl font-black text-[#F8F9FA] uppercase tracking-tighter mb-12">
          {t.title}
        </h2>
        <button 
          onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfT-MYwHHnIwwVyJP7fwHJJR50StGJL-NfUpnOSVGcEV9yaKw/viewform?usp=header', '_blank')}
          className="bg-primary text-on-primary font-headline font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 uppercase tracking-widest hover:bg-primary-dim transition-colors duration-300 mb-8 border-glow-primary"
        >
          {t.btn}
        </button>
        <div>
          <a href="#" className="inline-flex items-center gap-2 border border-secondary text-secondary font-headline text-[10px] px-4 py-2 tracking-widest hover:bg-secondary/10 transition-colors">
            <Lock className="w-3 h-3" />
            {t.papers}
          </a>
        </div>
      </div>
    </section>
  );
};

export const Analysis = () => {
  return (
    <>
      <SEO page="lab" />
      <AnalysisHero />
      <MonitorSection />
      <ImmunityReport />
      <ArchitectureSection />
      <BiodiversityAudit />
      <QuotesSection />
      <FooterCTA />
    </>
  );
};
