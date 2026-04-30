import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { SEO } from '../components/SEO';

const ContactHero = () => {
  const { language } = useLanguage();
  const t = translations[language].contact.hero;

  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden flex flex-col items-center justify-center min-h-[60vh]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1487515/pexels-photo-1487515.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Bee macro" 
          fetchPriority="high"
          loading="eager"
          decoding="sync"
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black text-[#F8F9FA] uppercase tracking-tighter mb-8 leading-none">
          {t.title1}<br/>{t.title2}<br/>{t.title3}<br/>
          <span className="text-[#fcee0a] relative inline-block">
            {t.title4}
            <svg className="absolute w-full h-4 -bottom-2 left-0 text-[#fcee0a]" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0,10 Q5,0 10,10 T20,10 T30,10 T40,10 T50,10 T60,10 T70,10 T80,10 T90,10 T100,10" fill="none" stroke="currentColor" strokeWidth="4" />
            </svg>
          </span>
        </h1>
        
        <div className="max-w-3xl mx-auto border border-secondary/30 bg-secondary/5 p-6 md:p-8 backdrop-blur-sm">
          <p className="text-secondary font-mono text-sm md:text-base leading-relaxed">
            {t.desc}
          </p>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const { language } = useLanguage();
  const t = translations[language].contact.form;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mission: t.missionOpt1,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Map the Spanish input names back to the state keys
    let stateKey = name;
    if (name === 'Nombre') stateKey = 'name';
    if (name === 'Email') stateKey = 'email';
    if (name === 'Mision') stateKey = 'mission';
    if (name === 'Mensaje') stateKey = 'message';

    setFormData({
      ...formData,
      [stateKey]: value
    });
  };

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 border border-white/10">
          
          {/* Left Column - Protocol */}
          <div className="lg:col-span-2 bg-[#111] p-8 md:p-12 flex flex-col border-b lg:border-b-0 lg:border-r border-white/10">
            <div className="flex items-center gap-3 mb-10">
              <div className="text-[#fcee0a]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15 8H9L12 2Z" />
                  <path d="M22 12L16 15V9L22 12Z" />
                  <path d="M2 12L8 9V15L2 12Z" />
                  <path d="M12 22L9 16H15L12 22Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <span className="font-headline text-[#fcee0a] text-xs tracking-widest font-bold">{t.status}</span>
            </div>
            
            <h2 className="font-headline text-2xl md:text-3xl text-[#F8F9FA] mb-10 uppercase tracking-widest">
              {t.title1}<br/>{t.title2}
            </h2>
            
            <div className="space-y-8 flex-grow">
              <div className="flex gap-4">
                <span className="font-headline text-[#fcee0a] font-bold">01/</span>
                <p className="text-on-surface-variant font-mono text-xs leading-relaxed">{t.rule1}</p>
              </div>
              <div className="flex gap-4">
                <span className="font-headline text-[#fcee0a] font-bold">02/</span>
                <p className="text-on-surface-variant font-mono text-xs leading-relaxed">{t.rule2}</p>
              </div>
              <div className="flex gap-4">
                <span className="font-headline text-[#fcee0a] font-bold">03/</span>
                <p className="text-on-surface-variant font-mono text-xs leading-relaxed">{t.rule3}</p>
              </div>
            </div>
            
            <div className="mt-12">
              <div className="font-headline text-secondary text-[10px] tracking-widest mb-2">{t.signal}</div>
              <div className="flex gap-1 h-2">
                <div className="flex-1 bg-secondary"></div>
                <div className="flex-1 bg-secondary"></div>
                <div className="flex-1 bg-secondary"></div>
                <div className="flex-1 bg-secondary"></div>
                <div className="flex-1 bg-white/10"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-3 bg-[#050505] p-8 md:p-12">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-3 h-3 bg-[#fcee0a]"></div>
              <h3 className="font-headline text-[#F8F9FA] text-lg tracking-widest uppercase">{t.formTitle}</h3>
            </div>
            
            <form 
              action="https://formsubmit.co/alexhernandez81@gmail.com" 
              method="POST" 
              target="_blank"
              className="space-y-8"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value={`BuzzLab: ${formData.mission}`} />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block font-headline text-[#fcee0a] text-[10px] tracking-widest mb-3 uppercase">{t.nameLabel}</label>
                  <input 
                    type="text" 
                    name="Nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t.namePlaceholder} 
                    className="w-full bg-[#1a1a1a] border-none text-white font-mono text-sm p-4 focus:ring-1 focus:ring-[#fcee0a] outline-none placeholder:text-white/20"
                  />
                </div>
                <div>
                  <label className="block font-headline text-[#fcee0a] text-[10px] tracking-widest mb-3 uppercase">{t.emailLabel}</label>
                  <input 
                    type="email" 
                    name="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t.emailPlaceholder} 
                    className="w-full bg-[#1a1a1a] border-none text-white font-mono text-sm p-4 focus:ring-1 focus:ring-[#fcee0a] outline-none placeholder:text-white/20"
                  />
                </div>
              </div>
              
              <div>
                <label className="block font-headline text-[#fcee0a] text-[10px] tracking-widest mb-3 uppercase">{t.missionLabel}</label>
                <select 
                  name="Mision"
                  value={formData.mission}
                  onChange={handleChange}
                  className="w-full bg-[#1a1a1a] border-none text-white font-mono text-sm p-4 focus:ring-1 focus:ring-[#fcee0a] outline-none appearance-none"
                >
                  <option value={t.missionOpt1}>{t.missionOpt1}</option>
                  <option value={t.missionOpt2}>{t.missionOpt2}</option>
                  <option value={t.missionOpt3}>{t.missionOpt3}</option>
                </select>
              </div>
              
              <div>
                <label className="block font-headline text-[#fcee0a] text-[10px] tracking-widest mb-3 uppercase">{t.messageLabel}</label>
                <textarea 
                  name="Mensaje"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder={t.messagePlaceholder} 
                  className="w-full bg-[#1a1a1a] border-none text-white font-mono text-sm p-4 focus:ring-1 focus:ring-[#fcee0a] outline-none placeholder:text-white/20 resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-[#fcee0a] text-black font-headline font-bold text-sm md:text-base px-6 py-4 uppercase tracking-widest hover:bg-white transition-colors flex justify-between items-center"
              >
                <span>{t.submitBtn}</span>
                <span className="text-xl leading-none">&gt;</span>
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

const MapSection = () => {
  const { language } = useLanguage();
  const t = translations[language].contact.map;

  return (
    <section className="py-20 bg-background border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <h2 className="font-headline text-3xl md:text-4xl text-[#F8F9FA] mb-2 uppercase tracking-widest">
          {t.title}
        </h2>
        <h3 className="font-headline text-secondary text-xs tracking-widest mb-12 uppercase">
          {t.subtitle}
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 relative border border-secondary/30 bg-[#050505] min-h-[400px] overflow-hidden p-4 flex flex-col justify-between">
            {/* Decorative Map Background */}
            <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100,100 Q200,50 300,150 T500,100 T700,200 T900,100' fill='none' stroke='%2326fedc' stroke-width='1'/%3E%3Cpath d='M150,300 Q250,250 350,350 T550,300 T750,400 T950,300' fill='none' stroke='%2326fedc' stroke-width='1'/%3E%3C/svg%3E")`,
              backgroundSize: 'cover'
            }}></div>
            
            {/* Map elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-secondary/20 rounded-full flex items-center justify-center">
              <div className="w-48 h-48 border border-secondary/30 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-secondary rotate-45 shadow-[0_0_10px_#26fedc] absolute right-10 top-1/3"></div>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-secondary/50 bg-background/80 backdrop-blur-sm px-3 py-1">
              <span className="font-mono text-secondary text-[8px] tracking-widest">{t.locked}</span>
            </div>

            <div className="relative z-10 flex justify-end">
              <div className="text-right font-mono text-secondary/50 text-[8px] tracking-widest">
                LAT: 41° 33' 37" N<br/>LON: 14° 39' 54" E
              </div>
            </div>
            
            <div className="relative z-10 flex justify-start">
              <div className="border border-secondary/50 px-3 py-1">
                <span className="font-mono text-secondary text-[8px] tracking-widest">COORD: 41.5603° N, 14.6650° E</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center space-y-6">
            <h4 className="font-headline text-[#fcee0a] text-[10px] tracking-widest uppercase mb-2">{t.channelsTitle}</h4>
            
            <div className="border border-white/10 p-6 bg-[#0a0a0a]">
              <h5 className="font-headline text-[#F8F9FA] text-sm tracking-widest uppercase mb-2">{t.instaTitle}</h5>
              <p className="text-on-surface-variant font-mono text-[10px] leading-relaxed">{t.instaDesc}</p>
            </div>
            
            <div className="border border-white/10 p-6 bg-[#0a0a0a]">
              <h5 className="font-headline text-[#F8F9FA] text-sm tracking-widest uppercase mb-2">{t.linkedinTitle}</h5>
              <p className="text-on-surface-variant font-mono text-[10px] leading-relaxed">{t.linkedinDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Contact = () => {
  return (
    <>
      <SEO page="contact" />
      <ContactHero />
      <ContactForm />
      <MapSection />
    </>
  );
};
