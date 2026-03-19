import React from 'react';
import Navbar from '../components/navbar/Navbar.jsx';
import BackToTopButton from '../components/backToTop/BackToTopButton.jsx';
import GamesSection from '../components/games/GamesSection.jsx';
import FeaturesSection from '../components/features/FeaturesSection.jsx';
import TestimonialsSection from '../components/testimonials/TestimonialsSection.jsx';
import DetectivesInActionSection from '../components/detectivesInAction/DetectivesInActionSection.jsx';
import CtaSection from '../components/cta/CtaSection.jsx';
import Footer from '../components/footer/Footer.jsx';

export default function LandingPage() {
  return (
    <>
      <div id="top" aria-hidden="true" />
      <Navbar />

      <main>
        <GamesSection />
        <FeaturesSection />
        <TestimonialsSection />
        <DetectivesInActionSection />
        <CtaSection />
        <Footer />
      </main>

      <BackToTopButton />
    </>
  );
}

