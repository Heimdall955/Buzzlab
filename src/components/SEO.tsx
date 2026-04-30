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

  // Base URL (Update if deployed to custom domain)
  const siteUrl = 'https://buzzlab.com';
  
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
  
  const currentUrl = `${siteUrl}${page ? pathMap[page] : ''}`;

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "BuzzLab",
    "url": siteUrl,
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BuzzLab",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.svg`,
    "description": "Biological engineering, ethical extraction, and pollination data.",
  };

  return (
    <Helmet>
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

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={seoData.title} />
      <meta property="twitter:description" content={seoData.desc} />

      {/* Language Alternates (Hreflang) */}
      <link rel="alternate" href={currentUrl} hrefLang="es" />
      <link rel="alternate" href={currentUrl} hrefLang="en" />
      <link rel="alternate" href={currentUrl} hrefLang="it" />
      <link rel="alternate" href={currentUrl} hrefLang="x-default" />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(page === 'home' ? [defaultSchema, orgSchema] : defaultSchema)}
      </script>
    </Helmet>
  );
};
