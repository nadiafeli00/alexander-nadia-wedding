'use client';

import React, { useEffect, useState } from 'react';
import LoadingScreen from '@/components/sections/LoadingScreen';
import CoverSection from '@/components/sections/CoverSection';
import GreetingSection from '@/components/sections/GreetingSection';
import WeddingDetailsSection from '@/components/sections/WeddingDetailsSection';
import CountdownSection from '@/components/sections/CountdownSection';
import EventsSection from '@/components/sections/EventsSection';
import MapsSection from '@/components/sections/MapsSection';
import GallerySection from '@/components/sections/GallerySection';
import WeddingGiftSection from '@/components/sections/WeddingGiftSection';
import RSVPSection from '@/components/sections/RSVPSection';
import WeddingWishesSection from '@/components/sections/WeddingWishesSection';
import ClosingSection from '@/components/sections/ClosingSection';
import ScrollProgressBar from '@/components/effects/ScrollProgressBar';
import MusicControl from '@/components/effects/MusicControl';
import BackToTopButton from '@/components/effects/BackToTopButton';
import FloatingFlower from '@/components/effects/FloatingFlower';

const Page: React.FC = () => {
  const [showFloatingFlowers, setShowFloatingFlowers] = useState(true);

  useEffect(() => {
    // Generate floating flowers every 2 seconds
    const interval = setInterval(() => {
      if (showFloatingFlowers) {
        // Flowers are regenerated
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [showFloatingFlowers]);

  return (
    <>
      <LoadingScreen />
      <ScrollProgressBar />
      <MusicControl src="/assets/audio/wedding-music.mp3" />
      <BackToTopButton />
      
      {showFloatingFlowers && (
        <>
          <FloatingFlower delay={0} duration={6} />
          <FloatingFlower delay={0.5} duration={6} />
          <FloatingFlower delay={1} duration={6} />
        </>
      )}

      <main className="w-full">
        <CoverSection />
        <GreetingSection />
        <WeddingDetailsSection />
        <CountdownSection />
        <EventsSection />
        <MapsSection />
        <GallerySection />
        <WeddingGiftSection />
        <RSVPSection />
        <WeddingWishesSection />
        <ClosingSection />
      </main>
    </>
  );
};

export default Page;
