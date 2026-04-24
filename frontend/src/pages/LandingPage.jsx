import React from 'react';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import SubHeroSection from '../components/landing/SubHeroSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import SocialProofSection from '../components/landing/SocialProofSection';
import PricingSection from '../components/landing/PricingSection';
import CtaSection from '../components/landing/CtaSection';
import Footer from '../components/landing/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-light">
      <Navbar />
      <main>
        <HeroSection />
        <SubHeroSection />
        <SocialProofSection />
        <FeaturesSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
