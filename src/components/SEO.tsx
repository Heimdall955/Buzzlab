import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

interface SEOProps {
  page?: 'home' | 'lab' | 'sanctuary' | 'network' | 'contact' | 'adopt' | 'login';
  title?: string;
  description?: string;
}

export const SEO: React.FC<SEOProps> = ({ page, title, description }) => {
  const { language } = useLanguage();
  
  // Try to get from translations if page is provided and exists
  const seoData = page && translations[language]?.seo?.[page as keyof typeof translations['es']['seo']] 
    ? translations[language].seo[page as keyof typeof translations['es']['seo']] 
    : { title: title || 'BuzzLab', desc: description || 'Biological Engineering & Honey' };

  // Base URL
  const siteUrl = 'https://buzzlab.online';
  
  // Create page specific URL mapping
  const pathMap: Record<string, string> = {
    home: '',
    lab: '/analisis',
    sanctuary: '/santuario',
    network: '/red',
    contact: '/contacto',
    adopt: '/adopta',
    login: '/login'
  };
  
  const basePath = page ? pathMap[page] : '';
  const currentUrl = `${siteUrl}${basePath}`;

  // Organization Schema (Home)
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BuzzLab",
    "url": "https://buzzlab.online",
    "description": "Santuario de abejas con IA. Apicultura ética, monitoreo, certificación.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Roccavivara",
      "addressRegion": "Molise",
      "addressCountry": "IT"
    }
  };

  // Product Schema (Adopt)
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Adopta una Colmena",
    "brand": {
      "@type": "Organization",
      "name": "BuzzLab"
    },
    "offers": [
      { "@type": "Offer", "name": "Guardián", "price": "79", "priceCurrency": "EUR" },
      { "@type": "Offer", "name": "Protector", "price": "149", "priceCurrency": "EUR" },
      { "@type": "Offer", "name": "Patrón", "price": "249", "priceCurrency": "EUR" }
    ]
  };

  return (
    <Helmet htmlAttributes={{ lang: language }}>
      {/* Primary Meta Tags */}
      <title>{seoData.title}</title>
      <meta name="title" content={seoData.title} />
      <meta name="description" content={seoData.desc} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.desc} />
      <meta property="og:site_name" content="BuzzLab" />
      <meta property="og:image" content="https://images.unsplash.com/photo-1555626906-f410d4654536?auto=format&fit=crop&q=80&w=1200" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={seoData.title} />
      <meta property="twitter:description" content={seoData.desc} />
      <meta property="twitter:image" content="https://images.unsplash.com/photo-1555626906-f410d4654536?auto=format&fit=crop&q=80&w=1200" />

      {/* Language Alternates (Hreflang) */}
      <link rel="alternate" href={`${siteUrl}${basePath}`} hrefLang="es" />
      <link rel="alternate" href={`${siteUrl}/en${basePath}`} hrefLang="en" />
      <link rel="alternate" href={`${siteUrl}/it${basePath}`} hrefLang="it" />
      <link rel="alternate" href={`${siteUrl}${basePath}`} hrefLang="x-default" />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(page === 'home' ? orgSchema : page === 'adopt' ? productSchema : null)}
      </script>
    </Helmet>
  );
};
