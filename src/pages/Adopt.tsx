import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { adoptTranslations } from '../data/adoptTranslations';
import { Check, ChevronDown, Hexagon } from 'lucide-react';
import { SEO } from '../components/SEO';

const AdoptHero = ({ t }: { t: any }) => {
  return (
    <header className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1118121/pexels-photo-1118121.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Beekeeper and bees" 
          className="w-full h-full object-cover opacity-30 grayscale-[50%] brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent mix-blend-screen"></div>
        <div className="w-full h-full opacity-20 absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 184, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 184, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-headline text-secondary tracking-widest text-sm mb-6 block uppercase">BUZZLAB // HIVE GUARDIAN</span>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black text-primary uppercase tracking-tighter mb-6 leading-none text-glow-primary">
            {t.title1}<br/>
            <span className="text-[#F8F9FA] text-glow-none">{t.title2}</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant font-mono max-w-3xl mx-auto mb-10 leading-relaxed">
            {t.desc}
          </p>
          <Link to="/contacto" className="inline-block bg-primary text-background font-headline font-bold text-sm md:text-base px-8 py-4 uppercase tracking-widest hover:bg-secondary transition-colors duration-300">
            {t.cta}
          </Link>
        </motion.div>
      </div>
    </header>
  );
};

const DifferenceSection = ({ t }: { t: any }) => {
  return (
    <section className="py-24 bg-background border-t border-outline-variant/10">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-headline text-3xl md:text-5xl text-secondary uppercase tracking-widest mb-16 text-center">
          {t.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { sub: t.sub1, desc: t.desc1 },
            { sub: t.sub2, desc: t.desc2 },
            { sub: t.sub3, desc: t.desc3 }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-[#0a0a0a] border border-secondary/20 p-8 group hover:border-secondary transition-colors"
            >
              <Hexagon className="w-8 h-8 text-secondary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-headline text-xl text-[#F8F9FA] uppercase mb-4 tracking-wide">{item.sub}</h3>
              <p className="text-on-surface-variant text-sm font-mono leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsSection = ({ t }: { t: any }) => {
  return (
    <section className="py-20 bg-surface-container-lowest border-y border-outline-variant/10">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
        <h2 className="font-headline text-2xl md:text-4xl text-primary uppercase tracking-widest mb-12">
          {t.title}
        </h2>
        <div className="space-y-4 mb-12 text-left">
          {t.items.map((item: any, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 bg-[#0a0a0a] border border-white/5 p-4 mx-auto max-w-2xl hover:border-primary/50 transition-colors"
            >
              <span className="text-2xl">{item.icon}</span>
              <p className="font-mono text-sm md:text-base text-on-surface">{item.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="inline-block bg-primary/10 border border-primary/30 py-3 px-6 text-primary font-headline tracking-widest uppercase">
          {t.footer}
        </div>
      </div>
    </section>
  );
};

const PricingSection = ({ t }: { t: any }) => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-headline text-3xl md:text-5xl text-[#F8F9FA] text-center uppercase tracking-widest mb-16">
          {t.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {t.b2c.map((plan: any, i: number) => (
            <div key={i} className={`flex flex-col bg-[#0a0a0a] border ${plan.badge ? 'border-primary shadow-[0_0_30px_rgba(255,179,0,0.15)] relative scale-105 z-10' : 'border-white/10'} p-8`}>
              {plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-background font-headline text-[10px] tracking-widest px-4 py-1 uppercase font-bold">
                  {plan.badge}
                </div>
              )}
              <div className="text-4xl mb-4">{plan.icon}</div>
              <h3 className="font-headline text-2xl text-[#F8F9FA] uppercase tracking-wide mb-2">{plan.name}</h3>
              <div className="text-primary font-headline text-xl mb-4">{plan.price}</div>
              <p className="text-on-surface-variant font-mono text-xs mb-8 min-h-[40px] italic">{plan.target}</p>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-sm text-on-surface-variant leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-6 border-t border-white/10 mt-auto">
                <p className="font-headline text-xs text-white/50 mb-6 text-center">{plan.footer}</p>
                {plan.link ? (
                  <a href={plan.link} target="_blank" rel="noopener noreferrer" className={`block text-center w-full font-headline font-bold text-sm px-4 py-3 uppercase tracking-widest transition-colors ${plan.badge ? 'bg-primary text-background hover:bg-secondary' : 'bg-transparent border border-white/20 text-[#F8F9FA] hover:border-primary hover:text-primary'}`}>
                    {plan.cta}
                  </a>
                ) : (
                  <Link to="/contacto" className={`block text-center w-full font-headline font-bold text-sm px-4 py-3 uppercase tracking-widest transition-colors ${plan.badge ? 'bg-primary text-background hover:bg-secondary' : 'bg-transparent border border-white/20 text-[#F8F9FA] hover:border-primary hover:text-primary'}`}>
                    {plan.cta}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-headline text-2xl md:text-3xl text-secondary text-center uppercase tracking-widest mb-12">
          {t.b2bTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
           {t.b2b.map((plan: any, i: number) => (
             <div key={i} className="bg-[#0a0a0a] border border-secondary/30 p-8">
               <h3 className="font-headline text-xl text-secondary uppercase tracking-wide mb-2">{plan.name}</h3>
               <div className="text-[#F8F9FA] font-headline text-lg mb-8">{plan.price}</div>
               <ul className="space-y-3">
                {plan.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-on-surface-variant">{feature}</span>
                  </li>
                ))}
              </ul>
             </div>
           ))}
        </div>
        <div className="text-center">
          <Link to="/contacto" className="inline-block bg-secondary/10 border border-secondary text-secondary font-headline font-bold text-sm px-8 py-4 uppercase tracking-widest hover:bg-secondary hover:text-background transition-colors">
            {t.b2bCta}
          </Link>
        </div>
      </div>
    </section>
  );
};

const ExclusiveSection = ({ t }: { t: any }) => {
  return (
    <section className="py-24 bg-background border-t border-outline-variant/10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-headline text-3xl md:text-4xl text-primary uppercase tracking-widest mb-4">
            {t.title}
          </h2>
          <p className="font-headline text-secondary text-xl mb-12">{t.subtitle}</p>
          <div className="space-y-8">
            {t.items.map((item: any, i: number) => (
              <div key={i} className="border-l-2 border-primary/30 pl-6 hover:border-primary transition-colors">
                <h3 className="font-headline text-[#F8F9FA] uppercase tracking-wide mb-2">{item.title}</h3>
                <p className="text-on-surface-variant font-mono text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-primary/5 border border-primary/20 inline-block font-headline text-primary text-sm tracking-widest uppercase">
            {t.footer}
          </div>
        </div>
        <div className="relative aspect-square">
          <div className="absolute inset-4 border border-secondary/30 z-10"></div>
          <div className="absolute inset-0 bg-[#0a0a0a]">
            <img 
              src="https://images.pexels.com/photos/33260/honey-sweet-syrup-organic.jpg?auto=compress&cs=tinysrgb&w=1000" 
              alt="Premium Honey" 
              className="w-full h-full object-cover opacity-80 grayscale-[10%] brightness-[0.9]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = ({ t }: { t: any }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-surface-container-lowest border-t border-outline-variant/10">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <h2 className="font-headline text-3xl md:text-4xl text-[#F8F9FA] text-center uppercase tracking-widest mb-16">
          {t.title}
        </h2>
        <div className="space-y-4">
          {t.items.map((faq: any, i: number) => (
            <div key={i} className="border border-white/10 bg-[#0a0a0a]">
              <button 
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span className="font-headline text-[#F8F9FA] tracking-wide text-sm">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-primary transition-transform ${openIdx === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-on-surface-variant font-mono text-sm leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTAFinal = ({ t }: { t: any }) => {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-50"></div>
      <div className="relative z-10 container mx-auto px-6">
        <h2 className="font-headline text-3xl md:text-5xl font-black text-[#F8F9FA] uppercase tracking-tighter mb-12 leading-tight">
          {t.l1}<br/>
          <span className="text-primary">{t.l2}</span><br/>
          {t.l3}
        </h2>
        <Link to="/contacto" className="inline-block bg-primary text-background font-headline font-bold text-lg px-10 py-6 uppercase tracking-widest hover:bg-secondary hover:text-background transition-colors duration-300 shadow-[0_0_30px_rgba(255,179,0,0.3)] hover:shadow-[0_0_50px_rgba(38,254,220,0.5)]">
          {t.btn}
        </Link>
      </div>
    </section>
  );
};

export const Adopt = () => {
  const { language } = useLanguage();
  // Use fallback if somehow language isn't matched
  const t = adoptTranslations[language as keyof typeof adoptTranslations] || adoptTranslations['es'];

  return (
    <>
      <SEO 
        title={`BuzzLab // ${t.hero.title1.replace('.', '')}`} 
        description={t.hero.desc} 
      />
      <main className="bg-background min-h-screen">
        <AdoptHero t={t.hero} />
        <DifferenceSection t={t.different} />
        <StatsSection t={t.stats} />
        <PricingSection t={t.pricing} />
        <ExclusiveSection t={t.exclusive} />
        <FAQSection t={t.faq} />
        <CTAFinal t={t.ctaFinal} />
      </main>
    </>
  );
};
