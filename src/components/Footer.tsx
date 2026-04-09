import React from 'react';
import { useLocation } from 'react-router-dom';

export const Footer = () => {
  const location = useLocation();
  const isContact = location.pathname === '/contacto';

  if (isContact) {
    return (
      <footer className="bg-[#050505] py-8 border-t border-white/10">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-secondary font-headline font-black text-xl tracking-tighter">BUZZLAB</div>
          <div className="text-[#fcee0a] font-mono text-[8px] md:text-[10px] uppercase tracking-widest text-center">
            © 2026 BUZZLAB. PROPIEDAD INTELECTUAL DE APIS MELLIFERA. GESTIONADO POR HUMANOS BAJO SUPERVISIÓN.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-[#fcee0a] font-headline text-[10px] tracking-widest uppercase hover:text-white transition-colors">HIVE_RULES</a>
            <a href="#" className="text-[#fcee0a] font-headline text-[10px] tracking-widest uppercase hover:text-white transition-colors">SECRET_STING</a>
            <a href="#" className="text-[#fcee0a] font-headline text-[10px] tracking-widest uppercase hover:text-white transition-colors">POLLINATE_US</a>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="w-full py-8 md:py-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center bg-[#0e0e0e] border-t border-[#fbffa7]/10">
      <div className="font-headline text-[8px] md:text-[10px] text-secondary uppercase tracking-widest mb-8 md:mb-0 text-center md:text-left">
        © 2024 BUZZLAB // SYSTEM STATUS: OPTIMAL
      </div>
      <div className="flex flex-wrap justify-center gap-6 md:gap-12">
        <a className="font-headline text-[8px] md:text-[10px] text-secondary hover:opacity-100 uppercase tracking-widest transition-opacity" href="#">HIVE PROTOCOL</a>
        <a className="font-headline text-[8px] md:text-[10px] text-secondary hover:opacity-100 uppercase tracking-widest transition-opacity" href="#">NEURAL ENCRYPTION</a>
        <a className="font-headline text-[8px] md:text-[10px] text-secondary hover:opacity-100 uppercase tracking-widest transition-opacity" href="#">QUANTUM TERMS</a>
      </div>
    </footer>
  );
};
