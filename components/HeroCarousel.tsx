'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Pause, Play } from 'lucide-react';

export interface CarouselSlide {
  id: string;
  desktopImage: string;
  mobileImage: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  badge?: string;
  textPosition?: 'left' | 'center' | 'right';
  theme?: 'dark' | 'light';
}

const SLIDES: CarouselSlide[] = [
  {
    id: 'slide-1',
    desktopImage: 'https://monark.com.pk/cdn/shop/files/1_desktop_1_jpg.jpg?v=1792566769&width=1920',
    mobileImage: 'https://monark.com.pk/cdn/shop/files/2_mobile__jpg.jpg?v=1792566788&width=1500',
    eyebrow: 'SPRING / SUMMER 2026',
    title: 'THE MODERN SILHOUETTE',
    description: 'Effortless minimalism crafted with premium textures, fluid drape, and sharp architectural cuts.',
    primaryCtaText: 'SHOP NEW IN',
    primaryCtaLink: '#shop',
    secondaryCtaText: 'VIEW LOOKBOOK',
    secondaryCtaLink: '#shop',
    badge: 'NEW ARRIVALS',
    textPosition: 'left',
    theme: 'light',
  },
  {
    id: 'slide-2',
    desktopImage: 'https://monark.com.pk/cdn/shop/files/desktop_top_banner__jpg.jpg?v=1791182399&width=1920',
    mobileImage: 'https://monark.com.pk/cdn/shop/files/mobile_top_bannner_jpg.jpg?v=1791182403&width=1500',
    eyebrow: 'WINTER LUXURY & OUTERWEAR',
    title: 'THE QUIET NORTH',
    description: 'Heavy-duty plaid jackets, heritage argyle knitwear, and sherpa-lined cold weather warmth.',
    primaryCtaText: 'EXPLORE JACKETS',
    primaryCtaLink: '#shop',
    secondaryCtaText: 'DISCOVER KNITWEAR',
    secondaryCtaLink: '#shop',
    badge: 'COLD WEATHER 2026',
    textPosition: 'left',
    theme: 'light',
  },
  {
    id: 'slide-3',
    desktopImage: 'https://monark.com.pk/cdn/shop/files/desktop_top_banner_copy_3_2bdc43d2-9d95-4aaa-afbe-27e8553d4b3a.jpg?v=1787549735&width=1920',
    mobileImage: 'https://monark.com.pk/cdn/shop/files/mobile_top_bannner1_copy_2_a571d86c-4998-41a5-a052-a71d4c237574.jpg?v=1787549735&width=1500',
    eyebrow: 'URBAN ESSENTIALS',
    title: 'TIMELESS CASUAL WEAR',
    description: 'Pure oxford button-downs, structured pique polos, and precision-tailored cotton chinos.',
    primaryCtaText: 'DISCOVER CASUALS',
    primaryCtaLink: '#shop',
    secondaryCtaText: 'SHOP TOPS',
    secondaryCtaLink: '#shop',
    badge: 'DAILY LUXURY',
    textPosition: 'left',
    theme: 'light',
  },
  {
    id: 'slide-4',
    desktopImage: 'https://monark.com.pk/cdn/shop/files/suits_660f6c05-665f-4080-9ed2-9c662c0a9382.jpg?v=1768217157&width=1920',
    mobileImage: 'https://monark.com.pk/cdn/shop/files/suits_mob_54b0af0e-2886-4680-8947-b17d9e9ac6a0.jpg?v=1768892096&width=1500',
    eyebrow: 'SIGNATURE CEREMONIAL',
    title: 'BESPOKE 3-PIECE SUITS',
    description: 'Uncompromising formal elegance crafted from Italian wool blends for weddings and black-tie evenings.',
    primaryCtaText: 'SHOP FORMALS',
    primaryCtaLink: '#shop',
    secondaryCtaText: 'VIEW ALL SUITS',
    secondaryCtaLink: '#shop',
    badge: 'HANDCRAFTED TAILORING',
    textPosition: 'left',
    theme: 'light',
  },
];

const AUTOPLAY_INTERVAL = 6000;

export function HeroCarousel() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const totalSlides = SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentIdx((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIdx((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIdx(index);
  };

  // Autoplay timer
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const timer = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, nextSlide]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const diff = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 45;

    if (diff > minSwipeDistance) {
      // Swiped Left -> Next
      nextSlide();
    } else if (diff < -minSwipeDistance) {
      // Swiped Right -> Previous
      prevSlide();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <section
      id="top"
      aria-label="Monark Hero Carousel"
      className="relative w-full overflow-hidden bg-white select-none border-b border-[#e6e6e6]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Aspect Ratio Container: exact 1500/1130 on mobile matching Monark mobile banners, 16:9 on desktop */}
      <div className="relative w-full aspect-[1500/1130] md:aspect-[16/9] lg:aspect-[21/9] max-h-[820px]">
        {SLIDES.map((slide, index) => {
          const isActive = index === currentIdx;

          return (
            <div
              key={slide.id}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Full Slide Link for effortless mobile and desktop tap to shop */}
              <a
                href={slide.primaryCtaLink}
                aria-label={`Shop ${slide.title}`}
                className="block w-full h-full relative"
              >
                {/* Responsive Image with Picture Tag */}
                <picture className="w-full h-full block">
                  <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
                  <img
                    src={slide.desktopImage}
                    alt={slide.title}
                    className="w-full h-full object-cover object-center"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </picture>

                {/* Desktop-only subtle gradient overlay (hidden on mobile to preserve pure photographic campaign) */}
                <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

                {/* Desktop-only Text & Content Overlay */}
                <div className="hidden md:flex absolute inset-0 items-center">
                  <div className="max-w-7xl w-full mx-auto px-8 lg:px-16">
                    <div className="max-w-xl text-white space-y-3 sm:space-y-4">
                      {/* Badge / Tag */}
                      {slide.badge && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-[9px] uppercase tracking-[0.2em] font-semibold text-white">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c89255]" />
                          {slide.badge}
                        </div>
                      )}

                      {/* Eyebrow */}
                      <p className="text-xs uppercase tracking-[0.22em] text-[#e0e0e0] font-medium">
                        {slide.eyebrow}
                      </p>

                      {/* Headline */}
                      <h2 className="text-3xl md:text-5xl font-semibold uppercase tracking-[-0.03em] leading-[1.1] text-white drop-shadow-sm font-sans">
                        {slide.title}
                      </h2>

                      {/* Description */}
                      <p className="text-sm text-[#d4d4d4] leading-relaxed max-w-lg font-light">
                        {slide.description}
                      </p>

                      {/* CTAs */}
                      <div className="pt-3 flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-2 bg-white text-[#171717] px-6 py-3 text-[11px] uppercase tracking-[0.16em] font-semibold hover:bg-[#8c254c] hover:text-white transition-all duration-300 shadow-md group">
                          {slide.primaryCtaText}
                          <ArrowRight
                            size={13}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </span>

                        {slide.secondaryCtaText && (
                          <span className="inline-flex items-center gap-2 border border-white/60 bg-black/20 backdrop-blur-sm text-white px-5 py-3 text-[11px] uppercase tracking-[0.16em] font-semibold hover:bg-white hover:text-[#171717] hover:border-white transition-all duration-300">
                            {slide.secondaryCtaText}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrow Controls on Desktop */}
      <div className="hidden md:flex absolute inset-y-0 left-6 items-center z-20 pointer-events-none">
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="pointer-events-auto h-11 w-11 rounded-full border border-white/30 bg-black/30 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black hover:border-white shadow-lg active:scale-95"
        >
          <ChevronLeft size={20} strokeWidth={2} />
        </button>
      </div>

      <div className="hidden md:flex absolute inset-y-0 right-6 items-center z-20 pointer-events-none">
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next Slide"
          className="pointer-events-auto h-11 w-11 rounded-full border border-white/30 bg-black/30 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black hover:border-white shadow-lg active:scale-95"
        >
          <ChevronRight size={20} strokeWidth={2} />
        </button>
      </div>

      {/* Bottom Bar: Dots Pagination & Slide Counter */}
      <div className="absolute bottom-3 sm:bottom-7 left-0 right-0 z-20 px-4 sm:px-10 lg:px-16 flex items-center justify-center sm:justify-between pointer-events-none">
        {/* Play / Pause Toggle Button */}
        <button
          type="button"
          onClick={() => setIsPlaying((p) => !p)}
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          className="pointer-events-auto hidden sm:flex items-center gap-1.5 text-white/80 hover:text-white text-[10px] uppercase tracking-[0.14em] bg-black/40 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded-full transition-colors"
        >
          {isPlaying ? <Pause size={10} /> : <Play size={10} />}
          <span>{isPlaying ? 'Pause' : 'Autoplay'}</span>
        </button>

        {/* Center: Interactive Pagination Dots */}
        <div className="pointer-events-auto flex items-center gap-1.5 sm:gap-2 bg-black/35 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/25 shadow-sm">
          {SLIDES.map((slide, idx) => {
            const isCurrent = idx === currentIdx;

            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`group relative h-1.5 transition-all duration-500 rounded-full overflow-hidden ${
                  isCurrent ? 'w-6 sm:w-8 bg-white' : 'w-1.5 sm:w-2 bg-white/50 hover:bg-white/80'
                }`}
              >
                {/* Active Progress Bar Timer Animation */}
                {isCurrent && isPlaying && !isHovered && (
                  <span
                    className="absolute inset-0 bg-[#8c254c] origin-left animate-progress"
                    style={{ animationDuration: `${AUTOPLAY_INTERVAL}ms` }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Right: Slide Counter */}
        <div className="hidden sm:flex items-center gap-2 text-white font-mono text-xs tracking-widest bg-black/40 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full">
          <span className="font-bold text-white">0{currentIdx + 1}</span>
          <span className="text-white/40">/</span>
          <span className="text-white/70">0{totalSlides}</span>
        </div>
      </div>
    </section>
  );
}
