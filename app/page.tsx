'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroCarousel } from '@/components/HeroCarousel';
import { NewArrivals } from '@/components/NewArrivals';
import { QuietNorth } from '@/components/QuietNorth';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [bagCount, setBagCount] = useState(0);

  return (
    <main className="min-h-screen bg-white text-[#171717]">
      {/* Monark Official Design Navbar with Announcement Bar & Mega Menu */}
      <Navbar bagCount={bagCount} />

      {/* Monark Official Hero Carousel with 4 HD Editorial Banner Slides */}
      <HeroCarousel />

      {/* Monark Official New Arrivals Section with Catalog, Filters & Dual Hover */}
      <NewArrivals onAddToCart={() => setBagCount((count) => count + 1)} />

      {/* Monark Official The Quiet North Campaign Section */}
      <QuietNorth />

      {/* Monark Official Footer with Company, Client Services, Legal & Store Locator */}
      <Footer />
    </main>
  );
}
