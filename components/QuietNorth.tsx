'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Eye,
  Camera,
  Film,
  Sparkles,
  ArrowRight,
  Compass,
} from 'lucide-react';

export interface LookbookItem {
  id: number;
  lookNumber: string;
  part: 1 | 2 | 3;
  partName: string;
  partShort: string;
  title: string;
  category: string;
  description: string;
  image: string;
  isGrayscale?: boolean;
}

export const QUIET_NORTH_LOOKS: LookbookItem[] = [
  // PART I: Outerwear & Shackets (1 - 6)
  {
    id: 1,
    lookNumber: 'Look 01',
    part: 1,
    partName: 'Part I — Outerwear & Shackets',
    partShort: 'Outerwear',
    title: 'Textured Tweed Shacket',
    category: 'Winter Outerwear',
    description: 'Heavyweight houndstooth wool-blend shacket paired with structured charcoal trousers.',
    image: 'https://monark.com.pk/cdn/shop/files/1_f805bd8f-772a-4f12-b2ad-7553a02ac45c.jpg?v=1791183643&width=1200',
  },
  {
    id: 2,
    lookNumber: 'Look 02',
    part: 1,
    partName: 'Part I — Outerwear & Shackets',
    partShort: 'Outerwear',
    title: 'Heritage Plaid Wool Coat',
    category: 'Tailored Coats',
    description: 'Earth-toned plaid overcoat engineered for freezing pastoral winds and urban versatility.',
    image: 'https://monark.com.pk/cdn/shop/files/2_f62dc724-163c-44dc-bc5b-93d5dff3e915.jpg?v=1791183656&width=1200',
  },
  {
    id: 3,
    lookNumber: 'Look 03',
    part: 1,
    partName: 'Part I — Outerwear & Shackets',
    partShort: 'Outerwear',
    title: 'Minimalist Charcoal Zip Blouson',
    category: 'Casual Outerwear',
    description: 'Clean silhouette blouson with brushed silver zipper hardware and ribbed storm collar.',
    image: 'https://monark.com.pk/cdn/shop/files/3_5793d8c6-5033-4fa2-8b24-be3243c7a856.jpg?v=1791183665&width=1200',
  },
  {
    id: 4,
    lookNumber: 'Look 04',
    part: 1,
    partName: 'Part I — Outerwear & Shackets',
    partShort: 'Outerwear',
    title: 'Olive Technical Quilted Parka',
    category: 'Quilted Jackets',
    description: 'Thermo-insulated diamond quilted outerwear finished with water-repellent shell.',
    image: 'https://monark.com.pk/cdn/shop/files/4_a75f8249-6f82-4d3d-8d31-b4d1d48df739.jpg?v=1791183734&width=1200',
  },
  {
    id: 5,
    lookNumber: 'Look 05',
    part: 1,
    partName: 'Part I — Outerwear & Shackets',
    partShort: 'Outerwear',
    title: 'Rich Camel Fleece Sherpa',
    category: 'Sherpa Jackets',
    description: 'Plush sherpa fleece jacket with reinforced canvas chest pocket and warmth retention.',
    image: 'https://monark.com.pk/cdn/shop/files/5_211f03fd-520c-40f7-81fd-7a289a4236f9.jpg?v=1791183748&width=1200',
  },
  {
    id: 6,
    lookNumber: 'Look 06',
    part: 1,
    partName: 'Part I — Outerwear & Shackets',
    partShort: 'Outerwear',
    title: 'Rustic Buffalo Check Shacket',
    category: 'Winter Overshirts',
    description: 'Bold rustic check motif on brushed heavy flannel with dual flap pockets.',
    image: 'https://monark.com.pk/cdn/shop/files/6_891cc9db-da37-4a32-9491-f259f72f8db1.jpg?v=1791183770&width=1200',
  },

  // PART II: Pastoral Scenery & Knitwear (7 - 12)
  {
    id: 7,
    lookNumber: 'Look 07',
    part: 2,
    partName: 'Part II — Countryside & Knitwear',
    partShort: 'Knitwear',
    title: 'High-Neck Cable Knit Sweater',
    category: 'Heritage Knits',
    description: 'Intricately patterned cable knit jumper in unbleached natural wool for crisp morning walks.',
    image: 'https://monark.com.pk/cdn/shop/files/7_7d57efd5-0941-4041-ba08-bd5b0dc79178.jpg?v=1791183809&width=1200',
  },
  {
    id: 8,
    lookNumber: 'Look 08',
    part: 2,
    partName: 'Part II — Countryside & Knitwear',
    partShort: 'Knitwear',
    title: 'Argyle Heritage V-Neck Pullover',
    category: 'Fine Knitwear',
    description: 'Classic Scottish argyle diamonds reimagined in deep navy, forest green, and wine hues.',
    image: 'https://monark.com.pk/cdn/shop/files/8_1acf8406-94a0-460f-997c-6bbcaf969d51.jpg?v=1791183816&width=1200',
  },
  {
    id: 9,
    lookNumber: 'Look 09',
    part: 2,
    partName: 'Part II — Countryside & Knitwear',
    partShort: 'Knitwear',
    title: 'Merino Wool Roll-Neck Sweater',
    category: 'Turtlenecks',
    description: 'Fine-gauge Australian merino wool turtleneck offering effortless layered sophistication.',
    image: 'https://monark.com.pk/cdn/shop/files/9_5ba91c12-9532-48d0-a095-77de17b4e543.jpg?v=1791183834&width=1200',
  },
  {
    id: 10,
    lookNumber: 'Look 10',
    part: 2,
    partName: 'Part II — Countryside & Knitwear',
    partShort: 'Knitwear',
    title: 'Waffle-Knit Thermal Henley',
    category: 'Layering Essentials',
    description: 'Textured waffle construction with mother-of-pearl buttons for under-jacket warmth.',
    image: 'https://monark.com.pk/cdn/shop/files/10_824227fd-4ea4-4855-b834-508a67368a82.jpg?v=1791183918&width=1200',
  },
  {
    id: 11,
    lookNumber: 'Look 11',
    part: 2,
    partName: 'Part II — Countryside & Knitwear',
    partShort: 'Knitwear',
    title: 'Shawl-Collar Wool Cardigan',
    category: 'Knit Cardigans',
    description: 'Substantial chunky cardigan with leather-wrapped buttons, designed for fireside contemplation.',
    image: 'https://monark.com.pk/cdn/shop/files/11_27243e83-4f24-452c-b7a6-a075abd74cb7.jpg?v=1791184063&width=1200',
  },
  {
    id: 12,
    lookNumber: 'Look 12',
    part: 2,
    partName: 'Part II — Countryside & Knitwear',
    partShort: 'Knitwear',
    title: 'Muted Earth-Tone Crewneck',
    category: 'Casual Pullovers',
    description: 'Brushed cotton-cashmere blend in moss tone with reinforced ribbing.',
    image: 'https://monark.com.pk/cdn/shop/files/12_31df2e49-6b37-4cd2-a0b3-eb23efecd345.jpg?v=1791184072&width=1200',
  },

  // PART III: The Monochromatic Series (13 - 18) - Special grayscale to color effect
  {
    id: 13,
    lookNumber: 'Look 13',
    part: 3,
    partName: 'Part III — The Monochromatic Series',
    partShort: 'Monochrome',
    title: 'Deep Noir Structured Overcoat',
    category: 'Monochrome Outerwear',
    description: 'Sharp double-breasted tailoring cut from rich melton wool. Hover to reveal subtle tonal hues.',
    image: 'https://monark.com.pk/cdn/shop/files/13_01210a32-3b1f-4cf8-9a89-366f65566758.jpg?v=1791184120&width=1200',
    isGrayscale: true,
  },
  {
    id: 14,
    lookNumber: 'Look 14',
    part: 3,
    partName: 'Part III — The Monochromatic Series',
    partShort: 'Monochrome',
    title: 'Tonal Granite Field Jacket',
    category: 'Monochrome Utility',
    description: 'Four-pocket military utility jacket rendered in brooding ash tones with internal drawstring.',
    image: 'https://monark.com.pk/cdn/shop/files/14_00e51e9f-6778-4e2d-a4bc-45cd91a7abb3.jpg?v=1791184139&width=1200',
    isGrayscale: true,
  },
  {
    id: 15,
    lookNumber: 'Look 15',
    part: 3,
    partName: 'Part III — The Monochromatic Series',
    partShort: 'Monochrome',
    title: 'Minimalist Shadow Bomber',
    category: 'Monochrome Casual',
    description: 'Matte technical twill bomber jacket with low-profile stand collar and seamless pocketing.',
    image: 'https://monark.com.pk/cdn/shop/files/15_4ef2a0e8-b404-4a36-8ce2-da1ad1252f60.jpg?v=1791184150&width=1200',
    isGrayscale: true,
  },
  {
    id: 16,
    lookNumber: 'Look 16',
    part: 3,
    partName: 'Part III — The Monochromatic Series',
    partShort: 'Monochrome',
    title: 'Slate Brushed Wool Overshirt',
    category: 'Monochrome Shackets',
    description: 'Relaxed drop-shoulder silhouette in dense brushed wool flannel for effortless layering.',
    image: 'https://monark.com.pk/cdn/shop/files/16_165f7803-81f4-4b67-ab3e-f4ed464ea684.jpg?v=1791184241&width=1200',
    isGrayscale: true,
  },
  {
    id: 17,
    lookNumber: 'Look 17',
    part: 3,
    partName: 'Part III — The Monochromatic Series',
    partShort: 'Monochrome',
    title: 'Ash Pinstripe Tailored Blazer',
    category: 'Monochrome Suiting',
    description: 'Deconstructed modern blazer in subtle charcoal chalk-stripe wool with soft shoulder padding.',
    image: 'https://monark.com.pk/cdn/shop/files/17_ebcce036-4d48-4259-a27f-6f84cd797d3a.jpg?v=1791184254&width=1200',
    isGrayscale: true,
  },
  {
    id: 18,
    lookNumber: 'Look 18',
    part: 3,
    partName: 'Part III — The Monochromatic Series',
    partShort: 'Monochrome',
    title: 'Onyx Ribbed Cashmere Turtleneck',
    category: 'Monochrome Essentials',
    description: 'Pure Grade-A Mongolian cashmere with ribbed knit texture. The ultimate cold-weather pinnacle.',
    image: 'https://monark.com.pk/cdn/shop/files/18_b6215b95-8583-4ca8-8bb5-49bd0f30beea.jpg?v=1791184262&width=1200',
    isGrayscale: true,
  },
];

export function QuietNorth() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeTab, setActiveTab] = useState<'all' | 'part1' | 'part2' | 'part3'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const filteredLooks = React.useMemo(() => {
    if (activeTab === 'part1') return QUIET_NORTH_LOOKS.filter((l) => l.part === 1);
    if (activeTab === 'part2') return QUIET_NORTH_LOOKS.filter((l) => l.part === 2);
    if (activeTab === 'part3') return QUIET_NORTH_LOOKS.filter((l) => l.part === 3);
    return QUIET_NORTH_LOOKS;
  }, [activeTab]);

  const activeLook = lightboxIndex !== null ? QUIET_NORTH_LOOKS[lightboxIndex] : null;

  const handleNextLook = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % QUIET_NORTH_LOOKS.length : 0));
  }, [lightboxIndex]);

  const handlePrevLook = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + QUIET_NORTH_LOOKS.length) % QUIET_NORTH_LOOKS.length : 0
    );
  }, [lightboxIndex]);

  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const handleModalTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };
  const handleModalTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };
  const handleModalTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (diff > 40) handleNextLook();
    else if (diff < -40) handlePrevLook();
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNextLook();
      if (e.key === 'ArrowLeft') handlePrevLook();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleNextLook, handlePrevLook]);

  return (
    <section id="quiet-north" className="relative w-full bg-white text-[#171717] overflow-hidden">
      {/* ========================================================= */}
      {/* 1. CINEMATIC BACKGROUND CAMPAIGN VIDEO HERO (Hidden on mobile devices) */}
      {/* ========================================================= */}
      <div className="hidden md:flex relative w-full h-[65vh] sm:h-[80vh] lg:h-[90vh] bg-black overflow-hidden items-end">
        <video
          ref={videoRef}
          src="https://cdn.shopify.com/videos/c/o/v/bb8ce782d8ec4d378bc198a314b346ae.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.82] transition-all duration-700"
        />

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-vignette opacity-40 pointer-events-none" />

        {/* Video Controls (Top Right) */}
        <div className="absolute top-6 right-6 z-20 flex items-center gap-3">
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause Campaign Video' : 'Play Campaign Video'}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white hover:bg-[#8c254c] hover:border-[#8c254c] transition-all duration-300 shadow-lg cursor-pointer"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>
          <button
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute Campaign Audio' : 'Mute Campaign Audio'}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white hover:bg-[#8c254c] hover:border-[#8c254c] transition-all duration-300 shadow-lg cursor-pointer"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>

        {/* Campaign Hero Overlay Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-12 sm:pb-20 text-white">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] uppercase tracking-[0.25em] text-white/90">
              <Sparkles className="w-3 h-3 text-[#f3b5c7]" />
              Official Winter 2026 Campaign
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold uppercase tracking-[-0.04em] leading-[0.95] drop-shadow-md">
              The Quiet North
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-white/80 max-w-2xl font-light leading-relaxed tracking-wide">
              A cinematic journey into stillness and refined craftsmanship. Heavyweight woolen shackets,
              heritage argyle pullovers, and structured charcoal tailoring crafted for northern cold.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href="#lookbook-gallery"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] hover:bg-[#8c254c] hover:text-white transition-all duration-300 shadow-xl"
              >
                Explore Lookbook (18 Looks)
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#new-arrivals"
                className="inline-flex items-center gap-2 bg-transparent text-white border border-white/40 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                Shop New Arrivals
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. OFFICIAL EDITORIAL BRAND STATEMENT                      */}
      {/* ========================================================= */}
      <div className="border-b border-[#e5e5e5] bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24 text-center">
          {/* Official Monark Logo Image */}
          <div className="flex justify-center mb-6">
            <img
              src="https://monark.com.pk/cdn/shop/files/logo.png?v=1791185232&width=400"
              alt="Monark"
              className="h-8 sm:h-11 w-auto object-contain filter contrast-125"
            />
          </div>

          <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8c254c] mb-3">
            Fall / Winter 2026 Editorial Chapter
          </p>

          <h2 className="text-2xl sm:text-4xl font-bold uppercase tracking-[-0.03em] text-[#171717] mb-6">
            Escape The Noise
          </h2>

          <p className="text-xs sm:text-sm lg:text-[15px] font-light leading-[1.9] text-[#444] text-justify sm:text-center">
            Escape the noise of the city with Monark’s &ldquo;The Quiet North&rdquo; Fall/Winter 2026 collection.
            Set against sweeping pastoral landscapes, this new campaign embraces rugged elegance through
            heavy-duty plaid shackets, heritage argyle knitwear, and quilted outerwear. From structured charcoal
            overcoats to warm sherpa-lined jackets, we have carefully engineered a cold-weather wardrobe
            balancing uncompromising warmth with sophisticated textures for truly modern men.
          </p>

          {/* Campaign Key Highlights */}
          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-[#e2e2e2] pt-8 max-w-2xl mx-auto text-center">
            <div>
              <p className="text-xl sm:text-2xl font-bold text-[#171717]">18</p>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-[#777] mt-1">
                Curated Looks
              </p>
            </div>
            <div className="border-x border-[#e2e2e2]">
              <p className="text-xl sm:text-2xl font-bold text-[#171717]">100%</p>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-[#777] mt-1">
                Refined Wool & Blends
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-[#8c254c]">A/W &apos;26</p>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-[#777] mt-1">
                Northern Escapes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. LOOKBOOK GALLERY TABS & INTERACTIVE FILTER              */}
      {/* ========================================================= */}
      <div id="lookbook-gallery" className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-14 pb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[#e5e5e5]">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8c254c]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#777]">
                Visual Campaign Catalogue
              </p>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#171717] mt-1">
              Lookbook Galleries
            </h3>
          </div>

          {/* Interactive Gallery Switcher (Swipeable on Mobile) */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none p-1.5 rounded-lg bg-[#f4f4f4] border border-[#e5e5e5] max-w-full -mx-2 px-2 sm:mx-0 sm:justify-center sm:flex-wrap">
            <button
              onClick={() => setActiveTab('all')}
              className={`flex-shrink-0 whitespace-nowrap px-3 sm:px-4 py-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] rounded transition-all duration-200 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-black text-white shadow-sm'
                  : 'text-[#666] hover:text-black hover:bg-white/60'
              }`}
            >
              All Looks (18)
            </button>
            <button
              onClick={() => setActiveTab('part1')}
              className={`flex-shrink-0 whitespace-nowrap px-3 sm:px-4 py-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] rounded transition-all duration-200 cursor-pointer ${
                activeTab === 'part1'
                  ? 'bg-black text-white shadow-sm'
                  : 'text-[#666] hover:text-black hover:bg-white/60'
              }`}
            >
              Part I: Outerwear (01-06)
            </button>
            <button
              onClick={() => setActiveTab('part2')}
              className={`flex-shrink-0 whitespace-nowrap px-3 sm:px-4 py-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] rounded transition-all duration-200 cursor-pointer ${
                activeTab === 'part2'
                  ? 'bg-black text-white shadow-sm'
                  : 'text-[#666] hover:text-black hover:bg-white/60'
              }`}
            >
              Part II: Countryside (07-12)
            </button>
            <button
              onClick={() => setActiveTab('part3')}
              className={`flex-shrink-0 whitespace-nowrap px-3 sm:px-4 py-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] rounded transition-all duration-200 cursor-pointer ${
                activeTab === 'part3'
                  ? 'bg-[#8c254c] text-white shadow-sm'
                  : 'text-[#666] hover:text-[#8c254c] hover:bg-white/60'
              }`}
            >
              Part III: Monochrome (13-18)
            </button>
          </div>
        </div>

        {/* Part III Grayscale-to-color notification badge */}
        {activeTab === 'part3' && (
          <div className="mt-4 px-4 py-2.5 bg-[#171717] text-white rounded-md text-[11px] flex items-center justify-between animate-fadeIn">
            <span className="flex items-center gap-2">
              <Camera className="w-3.5 h-3.5 text-[#f3b5c7]" />
              <strong>Monark Signature CSS Effect:</strong> Looks 13 to 18 appear in dramatic grayscale.
              Hover over any photo to reveal its full cinematic color!
            </span>
            <span className="text-[10px] tracking-wider uppercase text-white/60 hidden sm:inline">
              Interactive Mode
            </span>
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* 4. LOOKBOOK 18-IMAGE GRID (WITH MONARK CSS HOVER EFFECT)   */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {filteredLooks.map((look) => {
            const originalIndex = QUIET_NORTH_LOOKS.findIndex((l) => l.id === look.id);

            return (
              <div
                key={look.id}
                onClick={() => setLightboxIndex(originalIndex)}
                className="group relative cursor-pointer overflow-hidden rounded-md bg-[#f0f0f0] border border-[#e8e8e8] shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Look Image Container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#222]">
                  <img
                    src={look.image}
                    alt={`${look.lookNumber} - ${look.title}`}
                    loading="lazy"
                    className={`h-full w-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 ${
                      look.isGrayscale
                        ? 'filter grayscale contrast-105 group-hover:filter-none'
                        : 'filter contrast-[1.02]'
                    }`}
                  />

                  {/* Subtle Dark Vignette on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Top Badges */}
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white rounded">
                      {look.lookNumber}
                    </span>
                  </div>

                  {look.isGrayscale && (
                    <div className="absolute top-2.5 right-2.5 z-10">
                      <span className="px-1.5 py-0.5 text-[8px] font-medium uppercase tracking-wider bg-[#8c254c] text-white rounded opacity-90 group-hover:opacity-0 transition-opacity">
                        B&W
                      </span>
                    </div>
                  )}

                  {/* Center Zoom Icon on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 pointer-events-none">
                    <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-black flex items-center justify-center shadow-lg">
                      <Maximize2 className="w-4 h-4 text-black" />
                    </div>
                  </div>

                  {/* Bottom Hover Details */}
                  <div className="absolute bottom-0 inset-x-0 p-3 text-white transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <p className="text-[9px] uppercase tracking-wider text-white/70 font-medium">
                      {look.category}
                    </p>
                    <p className="text-[11px] font-semibold leading-tight line-clamp-1 text-white">
                      {look.title}
                    </p>
                  </div>
                </div>

                {/* Micro Caption Below Card */}
                <div className="p-2.5 bg-white border-t border-[#f0f0f0] flex items-center justify-between">
                  <div className="min-w-0">
                    <p className="text-[11px] font-medium text-[#171717] truncate">
                      {look.title}
                    </p>
                    <p className="text-[9px] text-[#777] uppercase tracking-wider">
                      {look.partShort}
                    </p>
                  </div>
                  <Eye className="w-3.5 h-3.5 text-[#aaa] group-hover:text-[#8c254c] transition-colors flex-shrink-0 ml-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================= */}
      {/* 5. INTERACTIVE FULLSCREEN LIGHTBOX MODAL                   */}
      {/* ========================================================= */}
      {lightboxIndex !== null && activeLook && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-3 sm:p-8 animate-fadeIn"
          onClick={() => setLightboxIndex(null)}
          onTouchStart={handleModalTouchStart}
          onTouchMove={handleModalTouchMove}
          onTouchEnd={handleModalTouchEnd}
        >
          {/* Top Bar Controls */}
          <div
            className="absolute top-3 sm:top-4 inset-x-3 sm:inset-x-8 flex items-center justify-between text-white z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-white/10 backdrop-blur-md rounded text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white border border-white/20">
                {activeLook.lookNumber} of 18
              </span>
              <span className="text-[11px] sm:text-xs text-white/70 hidden sm:inline">
                {activeLook.partName}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-wider text-white/50 hidden md:inline">
                Use Arrow Keys ← → to navigate • ESC to close
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-[#8c254c] border border-white/20 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevLook();
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-black/50 hover:bg-[#8c254c] border border-white/20 flex items-center justify-center text-white backdrop-blur-md transition-all cursor-pointer"
            aria-label="Previous Look"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNextLook();
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-black/50 hover:bg-[#8c254c] border border-white/20 flex items-center justify-center text-white backdrop-blur-md transition-all cursor-pointer"
            aria-label="Next Look"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Modal Central Content */}
          <div
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-6 z-10 overflow-y-auto sm:overflow-visible pb-16 sm:pb-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* High-Res Image Display */}
            <div className="relative max-h-[44vh] sm:max-h-[65vh] md:max-h-[75vh] max-w-full md:max-w-[60%] flex items-center justify-center overflow-hidden rounded-lg shadow-2xl bg-black">
              <img
                src={activeLook.image}
                alt={`${activeLook.lookNumber} - ${activeLook.title}`}
                className="max-h-[44vh] sm:max-h-[65vh] md:max-h-[75vh] w-auto object-contain rounded-lg"
              />
            </div>

            {/* Look Details Sidebar */}
            <div className="max-w-md w-full text-white bg-white/5 backdrop-blur-lg border border-white/10 p-6 sm:p-8 rounded-xl shadow-2xl space-y-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f3b5c7]">
                  {activeLook.partName}
                </p>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white mt-1">
                  {activeLook.title}
                </h3>
                <p className="text-xs text-white/60 uppercase tracking-wider mt-0.5">
                  Category: {activeLook.category}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                {activeLook.description}
              </p>

              <div className="border-t border-white/10 pt-4 space-y-2">
                <div className="flex items-center justify-between text-xs text-white/70">
                  <span>Season:</span>
                  <span className="font-medium text-white">Autumn / Winter 2026</span>
                </div>
                <div className="flex items-center justify-between text-xs text-white/70">
                  <span>Collection:</span>
                  <span className="font-medium text-white">The Quiet North</span>
                </div>
                <div className="flex items-center justify-between text-xs text-white/70">
                  <span>Styling:</span>
                  <span className="font-medium text-white">Monark Editorial Studio</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href="#new-arrivals"
                  onClick={() => setLightboxIndex(null)}
                  className="flex-1 bg-white text-black py-2.5 px-4 text-center text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#8c254c] hover:text-white transition-all rounded"
                >
                  View Related Products
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Thumbnail Strip */}
          <div
            className="absolute bottom-4 inset-x-4 sm:inset-x-8 z-20 flex items-center justify-center gap-1.5 overflow-x-auto py-2 scrollbar-none"
            onClick={(e) => e.stopPropagation()}
          >
            {QUIET_NORTH_LOOKS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className={`relative w-9 h-11 sm:w-11 sm:h-14 flex-shrink-0 rounded overflow-hidden border-2 transition-all cursor-pointer ${
                  lightboxIndex === idx
                    ? 'border-white scale-110 shadow-lg'
                    : 'border-white/20 opacity-50 hover:opacity-100 hover:border-white/50'
                }`}
              >
                <img
                  src={item.image}
                  alt={`Look ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
