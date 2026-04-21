import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Terminal, ShieldCheck, Lock, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Login = () => {
  const { language } = useLanguage();
  const { user, signInWithGoogle, logout } = useAuth();

  const tTitle = language === 'es' ? 'SISTEMA DE ACCESO' : language === 'it' ? 'SISTEMA DI ACCESSO' : 'ACCESS SYSTEM';
  const tSubtitle = language === 'es' ? 'AUTENTICACIÓN REQUERIDA' : language === 'it' ? 'AUTENTICAZIONE RICHIESTA' : 'AUTHENTICATION REQUIRED';
  const tDesc = language === 'es' 
    ? 'El protocolo de acceso al Nodo está actualmente en fase de despliegue. Identifícate con tus credenciales de Google para acceder a la Hive-Mind.' 
    : language === 'it' 
    ? 'Il protocollo di accesso al Nodo è attualmente in fase di distribuzione. Identificati con le tue credenziali Google per accedere alla Hive-Mind.' 
    : 'The Node access protocol is currently in deployment phase. Authenticate with your Google credentials to access the Hive-Mind.';
  
  const tBtn = language === 'es' ? '[ INICIAR CONEXIÓN CON GOOGLE ]' : language === 'it' ? '[ ACCEDI CON GOOGLE ]' : '[ INITIATE GOOGLE CONNECTION ]';
  const tWarn = language === 'es' ? 'ACCESO RESTRINGIDO AL PERSONAL AUTORIZADO' : language === 'it' ? 'ACCESSO LIMITATO AL PERSONALE AUTORIZZATO' : 'ACCESS RESTRICTED TO AUTHORIZED PERSONNEL';

  const tNodeActive = language === 'es' ? 'CONEXIÓN ESTABLECIDA' : language === 'it' ? 'CONNESSIONE STABILITA' : 'CONNECTION ESTABLISHED';
  const tWelcome = language === 'es' ? 'Bienvenido, Operador' : language === 'it' ? 'Benvenuto, Operatore' : 'Welcome, Operator';
  const tDashboardInfo = language === 'es' 
    ? 'Has accedido con éxito a la terminal de BuzzLab. Aquí podrás gestionar tu Nodo Smart-Core y visualizar los datos de bioprotección de la colonia.' 
    : language === 'it' 
    ? 'Sei entrato con successo nel terminale BuzzLab. Qui potrai gestire il tuo Nodo Smart-Core e visualizzare i dati di bioprotezione della colonia.' 
    : 'You have successfully accessed the BuzzLab terminal. Here you can manage your Smart-Core Node and view colony bioprotection data.';
  const tLogout = language === 'es' ? '[ DESCONECTAR NODO ]' : language === 'it' ? '[ DISCONNETTI NODO ]' : '[ DISCONNECT NODE ]';

  return (
    <>
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#050505]"></div>
          <div className="absolute w-full h-full opacity-10" style={{
            backgroundImage: `linear-gradient(rgba(38, 254, 220, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(38, 254, 220, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(3)',
            transformOrigin: 'top center'
          }}></div>
        </div>

        <div className="relative z-10 w-full max-w-md px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`bg-[#0a0a0a] border p-8 md:p-12 relative overflow-hidden group ${user ? 'border-primary/30' : 'border-secondary/30'}`}
          >
            <div className={`absolute top-0 left-0 w-full h-1 animate-pulse ${user ? 'bg-primary' : 'bg-secondary'}`}></div>
            
            {user ? (
              // Logged in visual state
              <div>
                <div className="text-center mb-8">
                  <Terminal className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h1 className="font-headline text-xl md:text-2xl text-primary uppercase tracking-widest text-glow-primary">
                    {tNodeActive}
                  </h1>
                  <p className="font-mono text-[10px] text-white/50 mt-2 tracking-[0.2em]">ID: {user.uid.slice(0,8)}</p>
                </div>

                <div className="bg-[#111] border border-primary/20 p-6 mb-8 text-center flex flex-col items-center">
                  {user.photoURL ? (
                     <img src={user.photoURL} alt="Operator" referrerPolicy="no-referrer" className="w-16 h-16 rounded-full border-2 border-primary mb-4 shadow-[0_0_15px_rgba(255,179,0,0.3)]"/>
                  ) : (
                     <div className="w-16 h-16 rounded-full border-2 border-primary mb-4 flex items-center justify-center bg-primary/10">
                       <Terminal className="text-primary w-8 h-8" />
                     </div>
                  )}
                  <p className="font-headline text-[#F8F9FA] tracking-widest uppercase mb-1">{tWelcome}</p>
                  <p className="font-mono text-primary/80 text-xs">{user.email}</p>
                </div>

                <p className="text-on-surface-variant text-sm text-center mb-8 border-b border-white/10 pb-8 leading-relaxed">
                  {tDashboardInfo}
                </p>

                <button 
                  onClick={logout}
                  className="w-full bg-transparent hover:bg-primary/20 text-primary border border-primary/50 font-headline font-bold text-xs md:text-sm px-6 py-4 uppercase tracking-widest transition-colors flex items-center justify-center gap-3"
                >
                  <LogOut className="w-4 h-4" />
                  {tLogout}
                </button>
              </div>
            ) : (
              // Login form
              <div>
                <div className="text-center mb-10">
                  <ShieldCheck className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h1 className="font-headline text-2xl md:text-3xl text-secondary uppercase tracking-widest text-glow-secondary">
                    {tTitle}
                  </h1>
                  <p className="font-mono text-[10px] text-white/50 mt-2 tracking-[0.2em]">{tSubtitle}</p>
                </div>

                <p className="text-on-surface-variant text-sm text-center mb-8 pb-8 border-b border-white/10 leading-relaxed">
                  {tDesc}
                </p>

                <div className="space-y-6">
                  <button 
                    onClick={signInWithGoogle}
                    className="w-full bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/50 font-headline font-bold text-xs md:text-sm px-6 py-4 uppercase tracking-widest mt-4 transition-colors flex items-center justify-center gap-3"
                  >
                    <Lock className="w-4 h-4" />
                    {tBtn}
                  </button>
                </div>

                <div className="mt-8 text-center bg-red-900/10 border border-red-500/20 p-3">
                  <span className="font-headline text-[10px] text-red-500 tracking-widest uppercase">
                    {tWarn}
                  </span>
                </div>
              </div>
            )}

          </motion.div>
        </div>
      </section>
    </>
  );
};
