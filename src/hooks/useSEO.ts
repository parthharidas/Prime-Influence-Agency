import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MetaConfig, DEFAULT_SEO, SECTION_SEO } from '../config/seo';

/**
 * Utility function to update or create a meta tag in the document head.
 * Supports both standard name attributes and Open Graph property attributes.
 */
export function updateMetaTag(attributeName: 'name' | 'property', attributeValue: string, content: string) {
  if (typeof document === 'undefined') return;

  let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

/**
 * Utility function to inject or update a JSON-LD structured data script tag in the document head.
 */
export function injectJsonLd(id: string, data: object) {
  if (typeof document === 'undefined') return;

  let element = document.getElementById(id) as HTMLScriptElement | null;

  if (!element) {
    element = document.createElement('script');
    element.id = id;
    element.type = 'application/ld+json';
    document.head.appendChild(element);
  }

  element.text = JSON.stringify(data, null, 2);
}

/**
 * Utility to manually update SEO metadata for any specific page/view or content.
 */
export function updateDocumentMetadata(config: MetaConfig) {
  if (typeof document === 'undefined') return;

  // Update Page Title
  document.title = config.title;

  // Update Standard Meta Tags
  updateMetaTag('name', 'description', config.description);
  updateMetaTag('name', 'keywords', config.keywords);

  // Update Open Graph (OG) Meta Tags
  const ogTitle = config.ogTitle || config.title;
  const ogDescription = config.ogDescription || config.description;
  const ogType = config.ogType || DEFAULT_SEO.ogType || 'website';

  updateMetaTag('property', 'og:title', ogTitle);
  updateMetaTag('property', 'og:description', ogDescription);
  updateMetaTag('property', 'og:type', ogType);
  updateMetaTag('property', 'og:url', window.location.href);

  // Update Twitter Card Meta Tags
  updateMetaTag('name', 'twitter:title', ogTitle);
  updateMetaTag('name', 'twitter:description', ogDescription);
}

/**
 * Custom hook that dynamically updates document metadata based on the active route.
 */
export function useSEO() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Map pathnames to SEO config keys
    const path = location.pathname;
    let key = 'home';
    if (path === '/services') key = 'services';
    else if (path === '/brands') key = 'brands';
    else if (path === '/creators') key = 'creators';
    else if (path === '/about') key = 'about';
    else if (path === '/contact') key = 'contact';

    const seoConfig = SECTION_SEO[key] || DEFAULT_SEO;
    updateDocumentMetadata(seoConfig);

    // Inject JSON-LD Structured Data
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://primeinfluence.in/#organization",
      "name": "Prime Influence",
      "url": "https://primeinfluence.in",
      "logo": "https://primeinfluence.in/logo.png",
      "email": "work@primeinfluence.in",
      "description": "Prime Influence is a premier corporate influencer marketing agency connecting global brands with verified, top-performing creators.",
      "sameAs": [
        "https://instagram.com",
        "https://linkedin.com",
        "https://x.com",
        "https://youtube.com"
      ]
    };

    const professionalServiceSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://primeinfluence.in/#service",
      "name": "Prime Influence",
      "url": "https://primeinfluence.in",
      "logo": "https://primeinfluence.in/logo.png",
      "image": "https://primeinfluence.in/logo.png",
      "description": "Premium corporate influencer marketing agency connecting global brands with verified, top-performing creators.",
      "email": "work@primeinfluence.in",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "priceRange": "$$$$"
    };

    injectJsonLd('jsonld-organization', organizationSchema);
    injectJsonLd('jsonld-professional-service', professionalServiceSchema);

    // Scroll to top instantly on page change to keep UX pristine
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);
}
