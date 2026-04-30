import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Analysis } from './pages/Analysis';
import { Sanctuary } from './pages/Sanctuary';
import { Contact } from './pages/Contact';
import { Adopt } from './pages/Adopt';
import { Login } from './pages/Login';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import { HelmetProvider } from 'react-helmet-async';

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <AuthProvider>
          <Router>
        <ScrollToTop />
        <div className="bg-background text-on-background font-body selection:bg-primary selection:text-background overflow-x-hidden">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analisis" element={<Analysis />} />
            <Route path="/santuario" element={<Sanctuary />} />
            <Route path="/adopta" element={<Adopt />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
          <WhatsAppButton />
        </div>
        </Router>
        </AuthProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
}
