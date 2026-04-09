import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Analysis } from './pages/Analysis';
import { Sanctuary } from './pages/Sanctuary';
import { Contact } from './pages/Contact';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="bg-background text-on-background font-body selection:bg-primary selection:text-background overflow-x-hidden">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analisis" element={<Analysis />} />
            <Route path="/santuario" element={<Sanctuary />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}
