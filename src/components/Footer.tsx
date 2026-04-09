import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-[#050505] py-8 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-secondary font-headline font-black text-xl tracking-tighter">BUZZLAB</div>
        <div className="text-[#fcee0a] font-mono text-[8px] md:text-[10px] uppercase tracking-widest text-center md:text-right">
          © 2026 BUZZLAB. PROPIEDAD INTELECTUAL DE APIS MELLIFERA. GESTIONADO POR HUMANOS BAJO SUPERVISIÓN.
        </div>
      </div>
    </footer>
  );
};
