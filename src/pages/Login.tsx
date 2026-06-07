import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Terminal, ShieldCheck, Lock, LogOut, Activity, Video, Users, Cpu, AlertTriangle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { SEO } from '../components/SEO';

// Mock Data for Charts
const hiveData = [
  { time: '00:00', temp: 34.2, humidity: 55, activity: 120 },
  { time: '04:00', temp: 34.0, humidity: 58, activity: 80 },
  { time: '08:00', temp: 34.5, humidity: 62, activity: 450 },
  { time: '12:00', temp: 35.1, humidity: 50, activity: 890 },
  { time: '16:00', temp: 35.5, humidity: 48, activity: 920 },
  { time: '20:00', temp: 34.8, humidity: 54, activity: 300 },
  { time: '24:00', temp: 34.3, humidity: 56, activity: 150 },
];

const dashTranslations = {
  es: {
    activeNode: 'NODO ACTIVO',
    operator: 'OPERADOR',
    disconnect: 'DESCONECTAR',
    liveTelemetry: 'TELEMETRÍA EN VIVO',
    biometrics: 'Biometría de Colmena Alfa',
    cameraFeed: 'Feed de Cámara (Molise_Cam_01)',
    signalOptimal: 'SEÑAL PTIMA',
    signalInterference: '[ INTERFERENCIA DE SEÑAL ]',
    operatorNetwork: 'Red de Operadores',
    transmitPlaceholder: 'Transmitir mensaje al enjambre...',
    nodeIntegrity: 'Integridad de Nodos',
    varroaThreat: 'Amenaza Varroa',
    low: 'BAJA',
    warning: 'Precaución: El acceso a los actuadores físicos está temporalmente deshabilitado fuera de la red local del Santuario.',
    tBtn: '[ INICIAR CONEXIÓN CON GOOGLE ]',
    tWarn: 'ACCESO RESTRINGIDO AL PERSONAL AUTORIZADO',
    feed: [
      { id: 1, user: "Operador-X9A", action: "Se unió al enlace", time: "hace 2 min", type: "system" },
      { id: 2, user: "Nodo-ITA-04", action: "Alerta reportada: humedad > 65% estabilizada", time: "hace 15 min", type: "alert" },
      { id: 3, user: "Guardián_Zen", action: "Vídeo de la colmena Alfa compartido.", time: "hace 1 h", type: "user" },
      { id: 4, user: "BuzzNature Control", action: "Actualización de protocolo V2.4 completada", time: "hace 3 h", type: "system" },
    ]
  },
  en: {
    activeNode: 'ACTIVE NODE',
    operator: 'OPERATOR',
    disconnect: 'DISCONNECT',
    liveTelemetry: 'LIVE TELEMETRY',
    biometrics: 'Alpha Hive Biometrics',
    cameraFeed: 'Camera Feed (Molise_Cam_01)',
    signalOptimal: 'OPTIMAL SIGNAL',
    signalInterference: '[ SIGNAL INTERFERENCE ]',
    operatorNetwork: 'Operator Network',
    transmitPlaceholder: 'Transmit message to the swarm...',
    nodeIntegrity: 'Node Integrity',
    varroaThreat: 'Varroa Threat',
    low: 'LOW',
    warning: 'Caution: Access to physical actuators is temporarily disabled outside the Sanctuary local network.',
    tBtn: '[ INITIATE GOOGLE CONNECTION ]',
    tWarn: 'ACCESS RESTRICTED TO AUTHORIZED PERSONNEL',
    feed: [
      { id: 1, user: "Operator-X9A", action: "Joined the uplink", time: "2 min ago", type: "system" },
      { id: 2, user: "Node-ITA-04", action: "Alert reported: humidity > 65% stabilized", time: "15 min ago", type: "alert" },
      { id: 3, user: "Guardian_Zen", action: "Alpha hive video shared.", time: "1 hr ago", type: "user" },
      { id: 4, user: "BuzzNature Control", action: "Protocol V2.4 update completed", time: "3 hrs ago", type: "system" },
    ]
  },
  it: {
    activeNode: 'NODO ATTIVO',
    operator: 'OPERATORE',
    disconnect: 'DISCONNETTI',
    liveTelemetry: 'TELEMETRIA IN DIRETTA',
    biometrics: 'Biometria Alveare Alfa',
    cameraFeed: 'Feed Telecamera (Molise_Cam_01)',
    signalOptimal: 'SEGNALE OTTIMALE',
    signalInterference: '[ INTERFERENZA SEGNALE ]',
    operatorNetwork: 'Rete Operatori',
    transmitPlaceholder: 'Trasmetti messaggio allo sciame...',
    nodeIntegrity: 'Integrità Nodi',
    varroaThreat: 'Minaccia Varroa',
    low: 'BASSA',
    warning: 'Attenzione: L\'accesso agli attuatori fisici è temporaneamente disabilitato al di fuori della rete locale del Santuario.',
    tBtn: '[ ACCEDI CON GOOGLE ]',
    tWarn: 'ACCESSO LIMITATO AL PERSONALE AUTORIZZATO',
    feed: [
      { id: 1, user: "Operatore-X9A", action: "Si è unito al collegamento", time: "2 min fa", type: "system" },
      { id: 2, user: "Nodo-ITA-04", action: "Allarme segnalato: umidità > 65% stabilizzata", time: "15 min fa", type: "alert" },
      { id: 3, user: "Guardiano_Zen", action: "Video dell'alveare Alfa condiviso.", time: "1 ora fa", type: "user" },
      { id: 4, user: "BuzzNature Controllo", action: "Aggiornamento protocollo V2.4 completato", time: "3 ore fa", type: "system" },
    ]
  }
};

export const Login = () => {
  const { language } = useLanguage();
  const { user, signInWithGoogle, logout } = useAuth();
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    if (!user) return;
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 8000);
    return () => clearInterval(interval);
  }, [user]);

  const tTitle = language === 'es' ? 'SISTEMA DE ACCESO' : language === 'it' ? 'SISTEMA DI ACCESSO' : 'ACCESS SYSTEM';
  const tSubtitle = language === 'es' ? 'AUTENTICACIÓN REQUERIDA' : language === 'it' ? 'AUTENTICAZIONE RICHIESTA' : 'AUTHENTICATION REQUIRED';
  const tDesc = language === 'es' 
    ? 'El protocolo de acceso al Nodo está actualmente en fase de despliegue. Identifícate con tus credenciales de Google para acceder a la Hive-Mind.' 
    : language === 'it' 
    ? 'Il protocollo di accesso al Nodo è attualmente in fase di distribuzione. Identificati con le tue credenziali Google per accedere alla Hive-Mind.' 
    : 'The Node access protocol is currently in deployment phase. Authenticate with your Google credentials to access the Hive-Mind.';
  
  const dl = dashTranslations[language as keyof typeof dashTranslations] || dashTranslations['es'];

  if (!user) {
    return (
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
            className="bg-[#0a0a0a] border border-secondary/30 p-8 md:p-12 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 animate-pulse bg-secondary"></div>
            
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
                {dl.tBtn}
              </button>
            </div>

            <div className="mt-8 text-center bg-red-900/10 border border-red-500/20 p-3">
              <span className="font-headline text-[10px] text-red-500 tracking-widest uppercase">
                {dl.tWarn}
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Dashboard for Authenticated User
  return (
    <>
      <SEO title="BuzzNature // Operator Node" description="Secured Operator Node Dashboard." />
      <div className="min-h-screen bg-[#050505] text-[#F8F9FA] pt-24 pb-12 px-4 md:px-8 font-mono">
        {/* Background Grid */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(rgba(255, 184, 0, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 184, 0, 1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Dashboard Header */}
          <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-primary/20 gap-4">
            <div className="flex items-center gap-4">
               {user.photoURL ? (
                 <img src={user.photoURL} alt="Operator" referrerPolicy="no-referrer" className={`w-12 h-12 rounded-none border border-primary ${glitch ? 'opacity-50 blur-[1px]' : ''}`}/>
              ) : (
                 <div className="w-12 h-12 bg-primary/20 border border-primary flex items-center justify-center">
                   <Terminal className="text-primary w-6 h-6" />
                 </div>
              )}
              <div>
                <h1 className="font-headline text-xl md:text-2xl text-primary tracking-widest uppercase text-glow-primary flex items-center gap-2">
                  <Activity className="w-5 h-5 animate-pulse" />
                  {dl.activeNode}
                </h1>
                <p className="text-[10px] text-white/50 tracking-[0.2em] uppercase">{dl.operator}: {user.email} | ID: {user.uid.slice(0,10)}</p>
              </div>
            </div>
            
            <button 
              onClick={logout}
              className="flex items-center gap-2 text-[10px] uppercase font-headline tracking-widest border border-red-500/50 text-red-400 hover:bg-red-500/10 px-4 py-2 transition-colors"
            >
              <LogOut className="w-3 h-3" />
              {dl.disconnect}
            </button>
          </header>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left Column: Data & Activity */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Telemetry Chart */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="bg-[#0a0a0a] border border-primary/20 p-6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-primary/20 text-primary text-[10px] px-3 py-1 font-headline tracking-widest border-l border-b border-primary/20">
                  {dl.liveTelemetry}
                </div>
                <h2 className="font-headline text-lg text-[#F8F9FA] uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-primary" />
                  {dl.biometrics}
                </h2>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={hiveData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#FFB300" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#FFB300" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                      <XAxis dataKey="time" stroke="#666" tick={{fontSize: 10, fill: '#888'}} />
                      <YAxis stroke="#666" tick={{fontSize: 10, fill: '#888'}} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#111', border: '1px solid #FFB300', fontSize: '12px' }}
                        itemStyle={{ color: '#FFB300' }}
                      />
                      <Area type="monotone" dataKey="activity" stroke="#26fedc" fillOpacity={0} />
                      <Area type="monotone" dataKey="temp" stroke="#FFB300" fillOpacity={1} fill="url(#colorTemp)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              {/* Video Feed */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="bg-[#0a0a0a] border border-white/10 p-6 relative"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-headline text-lg text-[#F8F9FA] uppercase tracking-widest flex items-center gap-2 border-b border-transparent">
                    <Video className="w-4 h-4 text-secondary" />
                    {dl.cameraFeed}
                  </h2>
                  <span className="flex items-center gap-1 text-red-500 text-[10px] animate-pulse font-headline tracking-widest uppercase">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span> REC
                  </span>
                </div>
                
                <div className="relative aspect-video bg-black border border-[#333] overflow-hidden group">
                  {/* We use a public video as placeholder, with some heavy CSS filtering */}
                  <video 
                    autoPlay loop muted playsInline 
                    className="w-full h-full object-cover opacity-60 grayscale-[50%] contrast-[1.2] sepia-[20%] hue-rotate-[180deg]"
                    src="https://assets.mixkit.co/videos/preview/mixkit-bees-in-a-hive-1549-large.mp4"
                  ></video>
                  
                  {/* Cyber Overlay */}
                  <div className="absolute inset-0 pointer-events-none border-[1px] border-secondary/20 shadow-[inset_0_0_50px_rgba(38,254,220,0.1)]"></div>
                  <div className="absolute top-2 left-2 text-secondary text-[10px] opacity-70">
                    CAM_01 // SEC_ALPHA ({new Date().toISOString().split('T')[0]})
                  </div>
                  <div className="absolute bottom-2 right-2 text-white/50 text-[10px]">
                    {glitch ? dl.signalInterference : dl.signalOptimal}
                  </div>
                  
                  {/* Central Reticle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-secondary/30 rounded-full flex items-center justify-center opacity-50 group-hover:scale-110 transition-transform duration-1000">
                    <div className="w-2 h-2 bg-secondary/50 rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Community & Status */}
            <div className="space-y-6">
              
              {/* Community Feed */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="bg-[#0a0a0a] border border-white/10 p-6 h-[400px] flex flex-col"
              >
                <h2 className="font-headline text-lg text-[#F8F9FA] uppercase tracking-widest mb-6 flex items-center gap-2 pb-4 border-b border-white/10">
                  <Users className="w-4 h-4 text-primary" />
                  {dl.operatorNetwork}
                </h2>
                
                <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                  {dl.feed.map((item) => (
                    <div key={item.id} className="text-xs">
                      <div className="flex justify-between text-[10px] mb-1">
                        <span className={`font-bold ${item.type === 'alert' ? 'text-red-400' : item.type === 'system' ? 'text-primary' : 'text-secondary'}`}>
                          {item.user}
                        </span>
                        <span className="text-white/40">{item.time}</span>
                      </div>
                      <p className="text-white/70">{item.action}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <input 
                    type="text" 
                    placeholder={dl.transmitPlaceholder}
                    className="w-full bg-[#111] border border-white/20 px-3 py-2 text-xs text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </motion.div>

              {/* Status Modules */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-primary/5 border border-primary/20 p-4 shrink-0 flex flex-col justify-center items-center text-center">
                  <span className="text-[10px] text-primary/70 font-headline mb-2 uppercase">{dl.nodeIntegrity}</span>
                  <span className="text-2xl text-primary font-bold">98.4%</span>
                </div>
                <div className="bg-secondary/5 border border-secondary/20 p-4 shrink-0 flex flex-col justify-center items-center text-center">
                  <span className="text-[10px] text-secondary/70 font-headline mb-2 uppercase">{dl.varroaThreat}</span>
                  <span className="text-2xl text-secondary font-bold">{dl.low}</span>
                </div>
              </motion.div>

              {/* Secure Notice */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                className="bg-red-900/10 border border-red-500/30 p-4 flex items-start gap-3 text-red-400"
              >
                <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                <p className="text-[10px] uppercase leading-relaxed tracking-wider">
                  {dl.warning}
                </p>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
