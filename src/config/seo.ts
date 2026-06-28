/**
 * Highly optimized SEO metadata configuration for Prime Influence.
 * Defines section-specific meta titles, descriptions, and keywords for search engine optimization.
 */

export interface MetaConfig {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: 'website' | 'article';
}

export const DEFAULT_SEO: MetaConfig = {
  title: "Prime Influence — Premium Creator Matchmaking & Influencer Marketing Agency",
  description: "Supercharge your brand's growth with Prime Influence. We connect enterprise brands with high-performing, verified creators for high-impact, secure campaigns.",
  keywords: "influencer marketing, creator network, brand matchmaking, prime influence, digital marketing agency, verified creators, premium influencer agency, marketing ROI",
  ogTitle: "Prime Influence — Premium Creator Matchmaking",
  ogDescription: "We connect enterprise brands with high-performing, verified creators for high-impact, secure campaigns.",
  ogType: "website",
};

export const SECTION_SEO: Record<string, MetaConfig> = {
  home: {
    title: "Prime Influence — Premium Creator Matchmaking & Influencer Marketing Agency",
    description: "Supercharge your brand's growth with Prime Influence. We connect enterprise brands with high-performing, verified creators for high-impact, secure campaigns.",
    keywords: "influencer marketing, creator network, brand matchmaking, prime influence, digital marketing agency, verified creators, premium influencer agency",
  },
  services: {
    title: "Our Services — Creator Matchmaking & Campaign Execution | Prime Influence",
    description: "Discover our end-to-end influencer marketing services. From direct verified matchmaking and secure contracts to comprehensive performance attribution and ROI analysis.",
    keywords: "influencer management, influencer matching, brand collaborations, ROI attribution, campaign execution, digital advertising, marketing agency",
  },
  brands: {
    title: "For Brands — Enterprise Campaign Matchmaking & High-ROI Deals | Prime Influence",
    description: "Launch highly secure, brand-safe influencer campaigns. Get tailored matches with premium, authenticated creators reaching your target demographics.",
    keywords: "enterprise influencer campaigns, brand sponsors, target audience matchmaking, verified influencers, corporate influencer marketing, campaign scale",
  },
  creators: {
    title: "For Creators — High-Ticket Sponsorships & Elite Management | Prime Influence",
    description: "Unlock high-ticket brand partnerships, secure payment terms, and expert management. Join Prime Influence's VIP creator network to monetize your platform.",
    keywords: "creator management, brand sponsorships, influencer onboarding, content creator deals, VIP talent agency, audience monetization, influencer network",
  },
  about: {
    title: "About & FAQs — Mission, Verification, and Scale | Prime Influence",
    description: "Learn how Prime Influence guarantees secure talent-brand matching. Read our FAQ on our creator selection criteria, performance tracking, and security measures.",
    keywords: "prime influence mission, creator network faq, influencer marketing security, ROI measurement, agency details, brand safety, faq",
  },
  contact: {
    title: "Contact Us — Partner with Prime Influence Creator Agency",
    description: "Connect with our VIP partnership managers. Reach out directly at work@primeinfluence.in or fill out our official brand/creator registration briefs.",
    keywords: "contact prime influence, influencer agency email, partnerships, prime influence onboarding, register brand brief, work with influencers",
  },
};
