import React from 'react';
import { Hero } from '../components/Hero';
import { TrustedBy } from '../components/TrustedBy';
import { Services } from '../components/Services';
import { Stats } from '../components/Stats';
import { HowItWorks } from '../components/HowItWorks';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { FinalCTA } from '../components/FinalCTA';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <Stats />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
};
