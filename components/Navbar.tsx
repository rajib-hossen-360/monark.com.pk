'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronDown,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  UserRound,
  X,
  ArrowRight,
  Sparkles,
  Truck,
  RotateCcw,
  Check,
  Home,
  LayoutGrid,
  MessageCircle,
  Phone,
} from 'lucide-react';

interface SubcategoryGroup {
  heading: string;
  items: { label: string; href: string }[];
}

interface NavCategory {
  title: string;
  href: string;
  isSale?: boolean;
  isSpecial?: boolean;
  subcategories?: SubcategoryGroup[];
  featuredPromo?: {
    title: string;
    tagline: string;
    image: string;
    link: string;
  };
}

const NAV_CATEGORIES: NavCategory[] = [
  {
    title: 'NEW IN',
    href: '#shop',
    subcategories: [
      {
        heading: 'Latest Drops',
        items: [
          { label: 'Spring/Summer 2026', href: '#shop' },
          { label: 'Winter Knitwear Drop', href: '#shop' },
          { label: 'Textured Zipper Jackets', href: '#shop' },
          { label: 'Formal Eveningwear', href: '#shop' },
        ],
      },
      {
        heading: 'Trending Collections',
        items: [
          { label: 'The Quiet North Campaign', href: '#shop' },
          { label: 'Argyle Heritage Line', href: '#shop' },
          { label: 'Italian Wool Blazers', href: '#shop' },
          { label: 'Essential Oxford Shirts', href: '#shop' },
        ],
      },
    ],
    featuredPromo: {
      title: 'Spring / Summer 2026',
      tagline: 'Modern tailoring crafted for effortless versatility',
      image: 'https://monark.com.pk/cdn/shop/files/1_desktop_1_jpg.jpg?v=1792566769&width=600',
      link: '#shop',
    },
  },
  {
    title: 'TOPS',
    href: '#shop',
    subcategories: [
      {
        heading: 'Knitwear & Outerwear',
        items: [
          { label: 'Textured Zipper Jackets', href: '#shop' },
          { label: 'Crewneck Sweaters', href: '#shop' },
          { label: 'Fleece Sweatshirts', href: '#shop' },
          { label: 'Overcoats & Trench', href: '#shop' },
          { label: 'Cardigans & Vests', href: '#shop' },
        ],
      },
      {
        heading: 'Shirts & Polos',
        items: [
          { label: 'Casual Button-Down Shirts', href: '#shop' },
          { label: 'Formal Dress Shirts', href: '#shop' },
          { label: 'Premium Piqué Polos', href: '#shop' },
          { label: 'Linen Blend Shirts', href: '#shop' },
          { label: 'Basic Crewneck Tees', href: '#shop' },
        ],
      },
      {
        heading: 'Signature Fits',
        items: [
          { label: 'Slim Fit Tailoring', href: '#shop' },
          { label: 'Classic Regular Fit', href: '#shop' },
          { label: 'Relaxed Urban Fit', href: '#shop' },
          { label: 'Heavyweight Cotton', href: '#shop' },
        ],
      },
    ],
    featuredPromo: {
      title: 'Winter Plaid Jackets',
      tagline: 'Heavy-duty insulation meets refined textures',
      image: 'https://images.pexels.com/photos/17615759/pexels-photo-17615759.jpeg?auto=compress&cs=tinysrgb&h=600&w=450',
      link: '#shop',
    },
  },
  {
    title: 'BOTTOMS',
    href: '#shop',
    subcategories: [
      {
        heading: 'Tailored & Formal',
        items: [
          { label: 'Formal Dress Trousers', href: '#shop' },
          { label: 'Pleated Wool Trousers', href: '#shop' },
          { label: 'Stretch Cotton Chinos', href: '#shop' },
        ],
      },
      {
        heading: 'Denim & Casual',
        items: [
          { label: 'Slim Fit Denim Jeans', href: '#shop' },
          { label: 'Straight Leg Raw Denim', href: '#shop' },
          { label: 'Utility Cargo Pants', href: '#shop' },
          { label: 'Casual Chino Shorts', href: '#shop' },
        ],
      },
      {
        heading: 'Comfort Line',
        items: [
          { label: 'Drawstring Travel Pants', href: '#shop' },
          { label: 'Easywear Stretch Pants', href: '#shop' },
          { label: 'Linen Blend Pants', href: '#shop' },
        ],
      },
    ],
    featuredPromo: {
      title: 'Precision Cut Chinos',
      tagline: 'Tailored for sharp elegance and all-day comfort',
      image: 'https://images.pexels.com/photos/10040313/pexels-photo-10040313.jpeg?auto=compress&cs=tinysrgb&h=600&w=450',
      link: '#shop',
    },
  },
  {
    title: 'ACTIVE WEAR',
    href: '#shop',
    subcategories: [
      {
        heading: 'Alpha Performance',
        items: [
          { label: 'Alpha Tracksuits', href: '#shop' },
          { label: 'Performance Training Hoodies', href: '#shop' },
          { label: 'Quick-Dry Athletic Tees', href: '#shop' },
          { label: 'Gym Compression Tops', href: '#shop' },
        ],
      },
      {
        heading: 'Active Bottoms',
        items: [
          { label: 'Training Jogger Pants', href: '#shop' },
          { label: 'Athletic Workout Shorts', href: '#shop' },
          { label: 'Fleece Warm-Up Joggers', href: '#shop' },
        ],
      },
    ],
    featuredPromo: {
      title: 'ALPHA by Monark',
      tagline: 'Engineered for intense training and unrestricted movement',
      image: 'https://images.pexels.com/photos/17381750/pexels-photo-17381750.jpeg?auto=compress&cs=tinysrgb&h=600&w=450',
      link: '#shop',
    },
  },
  {
    title: 'FORMAL WEAR',
    href: '#shop',
    subcategories: [
      {
        heading: 'Suits & Tailoring',
        items: [
          { label: '2-Piece Classic Suits', href: '#shop' },
          { label: '3-Piece Ceremonial Suits', href: '#shop' },
          { label: 'Black Tie Tuxedos', href: '#shop' },
          { label: 'Tailored Waistcoats', href: '#shop' },
        ],
      },
      {
        heading: 'Blazers & Shirts',
        items: [
          { label: 'Structured Wool Blazers', href: '#shop' },
          { label: 'Tweed & Textured Coats', href: '#shop' },
          { label: '100% Cotton Dress Shirts', href: '#shop' },
          { label: 'French Cuff Evening Shirts', href: '#shop' },
        ],
      },
      {
        heading: 'Accessories & Finishing',
        items: [
          { label: 'Silk Bow Ties & Neckties', href: '#shop' },
          { label: 'Cufflinks & Tie Bars', href: '#shop' },
          { label: 'Pocket Squares', href: '#shop' },
        ],
      },
    ],
    featuredPromo: {
      title: 'Bespoke 3-Piece Suits',
      tagline: 'Mastercrafted silhouettes made from premium Italian wool',
      image: 'https://monark.com.pk/cdn/shop/files/suits_660f6c05-665f-4080-9ed2-9c662c0a9382.jpg?v=1768217157&width=600',
      link: '#shop',
    },
  },
  {
    title: 'EASY WEAR',
    href: '#shop',
    subcategories: [
      {
        heading: 'Loungewear & Basics',
        items: [
          { label: 'Comfort Pajama Sets', href: '#shop' },
          { label: 'Relaxed Fit Basic Tees', href: '#shop' },
          { label: 'Waffle Knit Long Sleeves', href: '#shop' },
          { label: 'Cotton Lounge Shorts', href: '#shop' },
        ],
      },
      {
        heading: 'Daily Lounging',
        items: [
          { label: 'Soft Ribbed Henley', href: '#shop' },
          { label: 'Lightweight Robes', href: '#shop' },
          { label: 'Everyday Sleepwear', href: '#shop' },
        ],
      },
    ],
    featuredPromo: {
      title: 'Weekend Ease',
      tagline: 'Supreme softness meets minimal understated aesthetics',
      image: 'https://images.pexels.com/photos/7653854/pexels-photo-7653854.jpeg?auto=compress&cs=tinysrgb&h=600&w=450',
      link: '#shop',
    },
  },
  {
    title: 'ACCESSORIES',
    href: '#shop',
    subcategories: [
      {
        heading: 'Leather Essentials',
        items: [
          { label: 'Full Grain Leather Belts', href: '#shop' },
          { label: 'Bifold Leather Wallets', href: '#shop' },
          { label: 'Cardholders & Clips', href: '#shop' },
          { label: 'Formal Dress Shoes', href: '#shop' },
        ],
      },
      {
        heading: 'Neckwear & Accents',
        items: [
          { label: 'Pure Silk Neckties', href: '#shop' },
          { label: 'Silk Pocket Squares', href: '#shop' },
          { label: 'Cufflinks & Tie Pins', href: '#shop' },
          { label: 'Combed Cotton Socks', href: '#shop' },
        ],
      },
      {
        heading: 'Fragrances & Headwear',
        items: [
          { label: 'Monark Eau de Parfum', href: '#shop' },
          { label: 'Wool Felt Caps', href: '#shop' },
          { label: 'Ribbed Knit Beanies', href: '#shop' },
        ],
      },
    ],
    featuredPromo: {
      title: 'Handmade Leather Goods',
      tagline: 'Timeless luxury accessories built to endure',
      image: 'https://images.pexels.com/photos/14707868/pexels-photo-14707868.jpeg?auto=compress&cs=tinysrgb&h=600&w=450',
      link: '#shop',
    },
  },
  {
    title: 'ARCHIVE SALE',
    href: '#shop',
    isSale: true,
  },
  {
    title: 'ALPHA ATHLEISURE',
    href: '#shop',
    isSpecial: true,
  },
];

const ANNOUNCEMENTS = [
  'COMPLIMENTARY SHIPPING NATIONWIDE ON ORDERS ABOVE RS. 3,500',
  'SPRING / SUMMER 2026 COLLECTION NOW LIVE • SHOP NEW IN',
  'HASSLE-FREE 14-DAY EXCHANGE & RETURN POLICY',
  'FLAT SHIPPING RATE RS. 199 NATIONWIDE',
];

interface NavbarProps {
  bagCount: number;
  onOpenCart?: () => void;
  onWishlistClick?: () => void;
}

export function Navbar({ bagCount, onOpenCart }: NavbarProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [announcementIdx, setAnnouncementIdx] = useState(0);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(2);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileTab, setMobileTab] = useState<'menu' | 'categories'>('menu');
  const [drawerSearch, setDrawerSearch] = useState('');
  const [supportModalOpen, setSupportModalOpen] = useState(false);

  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Rotating announcement bar every 4.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIdx((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Sticky header scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (categoryTitle: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(categoryTitle);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const toggleMobileSection = (title: string) => {
    setMobileExpandedSection(mobileExpandedSection === title ? null : title);
  };

  return (
    <>
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#141414] text-white text-[10px] tracking-[0.14em] font-medium transition-colors">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="hidden md:flex items-center gap-4 text-[9px] text-[#999] uppercase">
            <span className="flex items-center gap-1">
              <Truck size={12} className="text-[#c89255]" /> Fast Delivery
            </span>
            <span className="flex items-center gap-1">
              <RotateCcw size={12} className="text-[#c89255]" /> 14-Day Exchange
            </span>
          </div>

          <div className="flex-1 text-center overflow-hidden h-4 flex items-center justify-center">
            <div
              key={announcementIdx}
              className="animate-fadeIn whitespace-nowrap uppercase tracking-[0.16em] text-[9.5px] sm:text-[10px] font-medium"
            >
              {ANNOUNCEMENTS[announcementIdx]}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-5 text-[9px] text-[#bbb]">
            <a
              href="#contact"
              className="hover:text-white transition-colors uppercase tracking-[0.12em]"
            >
              Find Stores
            </a>
            <span className="text-[#444]">|</span>
            <span className="font-semibold text-white tracking-wider">PKR (Rs.)</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER (STICKY) */}
      <header
        className={`sticky top-0 z-40 bg-white transition-all duration-300 ${
          isScrolled
            ? 'shadow-sm border-b border-[#e2e2e2] bg-white/98 backdrop-blur-md'
            : 'border-b border-[#e8e8e8]'
        }`}
      >
        {/* Main Logo & Utility Icons Row */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-[56px] sm:h-[62px] items-center justify-between">
            {/* Left: Mobile hamburger (Monark Official 3-bar standard) */}
            <div className="flex items-center lg:hidden w-20">
              <button
                type="button"
                aria-label="Open navigation menu"
                onClick={() => setMobileMenuOpen(true)}
                className="p-1.5 -ml-1.5 text-[#171717] hover:text-[#8c254c] transition-colors focus:outline-none"
              >
                <span className="flex flex-col justify-center gap-[5px] w-6 h-4">
                  <span className="h-[1.5px] w-6 bg-[#222] rounded-full" />
                  <span className="h-[1.5px] w-6 bg-[#222] rounded-full" />
                  <span className="h-[1.5px] w-6 bg-[#222] rounded-full" />
                </span>
              </button>
            </div>

            {/* Left on Desktop: Currency & Brand Origin Note */}
            <div className="hidden lg:flex items-center gap-3 w-60">
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#666] font-medium">
                Est. 2014 • Lahore
              </span>
            </div>

            {/* Center: Monark Official Brand Identity */}
            <div className="flex-1 flex justify-center items-center">
              <a
                href="#top"
                className="flex items-center justify-center group py-1"
                aria-label="Monark Home"
              >
                <img
                  src="https://monark.com.pk/cdn/shop/files/logo_white_opt_265x_1b1a0c46-5798-493d-8231-8372612f5939.png?v=1666374472&width=185"
                  alt="Monark Clothing"
                  className="h-5 sm:h-6 md:h-7 w-auto object-contain transition-opacity duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.parentElement?.querySelector('.brand-text-fallback');
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                />
                <span className="brand-text-fallback hidden font-sans text-xl sm:text-2xl font-bold tracking-[0.18em] text-[#171717] uppercase">
                  ◇ MONARK
                </span>
              </a>
            </div>

            {/* Right: Actions (Search, Account, Wishlist, Bag) */}
            <div className="flex items-center justify-end gap-1 sm:gap-4 w-20 lg:w-60">
              {/* Search Toggle (Mobile & Desktop) */}
              <button
                type="button"
                aria-label="Search Collection"
                onClick={() => setSearchOpen(true)}
                className="p-1.5 text-[#171717] hover:text-[#8c254c] transition-colors"
              >
                <Search size={19} strokeWidth={1.5} />
              </button>

              {/* Desktop Account */}
              <a
                href="#footer"
                aria-label="My Account"
                className="hidden lg:flex text-[#171717] hover:text-[#8c254c] transition-colors p-1"
              >
                <UserRound size={18} strokeWidth={1.5} />
              </a>

              {/* Desktop Wishlist */}
              <button
                type="button"
                aria-label="Wishlist"
                onClick={() => setWishlistCount((c) => (c > 0 ? c + 1 : 1))}
                className="relative hidden lg:flex text-[#171717] hover:text-[#8c254c] transition-colors p-1"
              >
                <Heart size={18} strokeWidth={1.5} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#171717] text-[8px] text-white font-medium">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Shopping Bag Button (Mobile & Desktop) */}
              <button
                type="button"
                aria-label="Shopping Bag"
                onClick={() => {
                  if (onOpenCart) onOpenCart();
                  else setCartDrawerOpen(true);
                }}
                className="relative p-1.5 text-[#171717] hover:text-[#8c254c] transition-colors"
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {bagCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-black px-1 text-[8px] font-bold text-white shadow-sm">
                    {bagCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Category Navigation Menu Bar */}
        <nav
          className="hidden lg:block border-t border-[#ececec] bg-white relative"
          aria-label="Main Navigation"
        >
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex items-center justify-center gap-7 py-3">
              {NAV_CATEGORIES.map((category) => {
                const hasDropdown = Boolean(category.subcategories && category.subcategories.length > 0);
                const isHovered = activeDropdown === category.title;

                return (
                  <li
                    key={category.title}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(category.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a
                      href={category.href}
                      className={`group inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.12em] py-1 transition-colors font-medium ${
                        category.isSale
                          ? 'text-[#d9222a] font-bold hover:text-[#a0161d]'
                          : category.isSpecial
                          ? 'text-[#171717] tracking-[0.15em] font-semibold hover:text-[#8c254c]'
                          : isHovered
                          ? 'text-[#8c254c]'
                          : 'text-[#2b2b2b] hover:text-[#8c254c]'
                      }`}
                    >
                      {category.title}
                      {category.isSale && (
                        <span className="ml-1 px-1 py-0.2 rounded bg-[#d9222a] text-[8px] tracking-wider text-white uppercase font-bold">
                          Sale
                        </span>
                      )}
                      {hasDropdown && (
                        <ChevronDown
                          size={11}
                          strokeWidth={2}
                          className={`transition-transform duration-200 text-[#888] group-hover:text-[#8c254c] ${
                            isHovered ? 'rotate-180 text-[#8c254c]' : ''
                          }`}
                        />
                      )}
                    </a>

                    {/* Animated underline indicator */}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#8c254c] transition-all duration-200 ${
                        isHovered ? 'w-full' : 'w-0'
                      }`}
                    />

                    {/* MEGA MENU DROPDOWN */}
                    {hasDropdown && isHovered && (
                      <div
                        className="fixed left-0 right-0 top-[108px] bg-white border-b border-[#ddd] shadow-xl z-50 animate-fadeIn"
                        onMouseEnter={() => handleMouseEnter(category.title)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="max-w-7xl mx-auto px-8 py-8">
                          <div className="grid grid-cols-12 gap-8">
                            {/* Subcategory Columns */}
                            <div className="col-span-8 grid grid-cols-3 gap-8 border-r border-[#eee] pr-8">
                              {category.subcategories?.map((group) => (
                                <div key={group.heading} className="space-y-3">
                                  <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#171717] border-b border-[#eaeaea] pb-2">
                                    {group.heading}
                                  </h4>
                                  <ul className="space-y-2">
                                    {group.items.map((item) => (
                                      <li key={item.label}>
                                        <a
                                          href={item.href}
                                          className="text-[11px] text-[#555] hover:text-[#8c254c] transition-colors block py-0.5 tracking-wide"
                                        >
                                          {item.label}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>

                            {/* Featured Promo Card */}
                            {category.featuredPromo && (
                              <div className="col-span-4 pl-4">
                                <a
                                  href={category.featuredPromo.link}
                                  className="group/promo block overflow-hidden bg-[#f7f7f7] border border-[#e5e5e5]"
                                >
                                  <div className="aspect-[16/10] overflow-hidden bg-[#eaeaea] relative">
                                    <img
                                      src={category.featuredPromo.image}
                                      alt={category.featuredPromo.title}
                                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover/promo:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[9px] uppercase tracking-[0.14em] font-medium px-2 py-0.5">
                                      Featured Look
                                    </span>
                                  </div>
                                  <div className="p-4">
                                    <h5 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#171717] group-hover/promo:text-[#8c254c] transition-colors">
                                      {category.featuredPromo.title}
                                    </h5>
                                    <p className="mt-1 text-[11px] text-[#666] leading-relaxed">
                                      {category.featuredPromo.tagline}
                                    </p>
                                    <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8c254c] group-hover/promo:underline">
                                      Shop Now <ArrowRight size={11} />
                                    </span>
                                  </div>
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        {/* 3. INTERACTIVE SEARCH BAR OVERLAY */}
        {searchOpen && (
          <div className="border-t border-[#e2e2e2] bg-[#fafafa] px-4 py-4 sm:px-8 shadow-inner animate-fadeIn">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-between gap-3 border-b-2 border-[#171717] pb-2">
                <Search size={18} className="text-[#666]" />
                <input
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search jackets, suits, polos, knitwear..."
                  className="w-full bg-transparent text-sm sm:text-base outline-none tracking-wide placeholder:text-[#999]"
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  aria-label="Close search"
                  className="text-[#555] hover:text-[#171717] p-1"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Popular Search Suggestions */}
              <div className="mt-3 flex flex-wrap items-center gap-2 text-[10px] text-[#666]">
                <span className="uppercase tracking-[0.14em] font-medium text-[#999]">
                  Trending Searches:
                </span>
                {['Zipper Jackets', '3-Piece Suits', 'Argyle Knitwear', 'Chinos', 'Oxford Shirts'].map(
                  (tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setSearchQuery(tag)}
                      className="border border-[#dedede] bg-white px-2.5 py-1 rounded-full hover:border-[#8c254c] hover:text-[#8c254c] transition-colors"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 4. MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden animate-fadeIn">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative w-[85%] max-w-[360px] bg-white h-full shadow-2xl flex flex-col z-10 animate-slideRight overflow-y-auto">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#eee]">
              <a href="#top" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
                <img
                  src="https://monark.com.pk/cdn/shop/files/logo_white_opt_265x_1b1a0c46-5798-493d-8231-8372612f5939.png?v=1666374472&width=120"
                  alt="Monark"
                  className="h-5 w-auto object-contain"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Menu"
                className="p-1 text-[#444] hover:text-black cursor-pointer"
              >
                <X size={22} />
              </button>
            </div>

            {/* Mobile Drawer Search Bar */}
            <div className="p-3 border-b border-[#f0f0f0] bg-[#fafafa]">
              <div className="flex items-center gap-2 bg-white border border-[#e0e0e0] px-3 py-2 rounded">
                <Search size={14} className="text-[#888]" />
                <input
                  type="text"
                  placeholder="Search jackets, sweaters, shirts..."
                  value={drawerSearch}
                  onChange={(e) => setDrawerSearch(e.target.value)}
                  className="w-full bg-transparent text-xs outline-none text-[#171717] placeholder:text-[#999]"
                />
                {drawerSearch && (
                  <button onClick={() => setDrawerSearch('')} className="text-[#888]">
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* Drawer Tabs: MENU vs CATEGORIES */}
            <div className="grid grid-cols-2 border-b border-[#eee] text-xs font-semibold uppercase tracking-wider text-center bg-[#fdfdfd]">
              <button
                type="button"
                onClick={() => setMobileTab('menu')}
                className={`py-3 transition-colors border-b-2 cursor-pointer ${
                  mobileTab === 'menu'
                    ? 'border-[#8c254c] text-[#8c254c] font-bold bg-white'
                    : 'border-transparent text-[#666] hover:text-black'
                }`}
              >
                Menu
              </button>
              <button
                type="button"
                onClick={() => setMobileTab('categories')}
                className={`py-3 transition-colors border-b-2 cursor-pointer ${
                  mobileTab === 'categories'
                    ? 'border-[#8c254c] text-[#8c254c] font-bold bg-white'
                    : 'border-transparent text-[#666] hover:text-black'
                }`}
              >
                Categories
              </button>
            </div>

            {/* Mobile Fast Category Highlights */}
            <div className="p-3 bg-[#f7f7f7] border-b border-[#eee]">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#777] mb-2">
                Quick Highlights
              </p>
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                <a
                  href="#quiet-north"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-shrink-0 px-3 py-1.5 bg-black text-white text-[10px] font-semibold uppercase tracking-wider rounded flex items-center gap-1 shadow-sm"
                >
                  <Sparkles size={11} className="text-[#f3b5c7]" /> The Quiet North
                </a>
                <a
                  href="#shop"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-shrink-0 px-3 py-1.5 bg-white border border-[#ddd] text-[#171717] text-[10px] font-medium uppercase tracking-wider rounded"
                >
                  New Arrivals
                </a>
                <a
                  href="#shop"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-shrink-0 px-3 py-1.5 bg-[#8c254c] text-white text-[10px] font-semibold uppercase tracking-wider rounded"
                >
                  Winter Sale 50%
                </a>
                <a
                  href="#shop"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-shrink-0 px-3 py-1.5 bg-white border border-[#ddd] text-[#171717] text-[10px] font-medium uppercase tracking-wider rounded"
                >
                  Formal Suits
                </a>
              </div>
            </div>

            {/* Tab 1: Menu Navigation Accordion */}
            {mobileTab === 'menu' && (
              <nav className="p-4 flex-1 space-y-1">
                {NAV_CATEGORIES.filter((c) =>
                  drawerSearch ? c.title.toLowerCase().includes(drawerSearch.toLowerCase()) : true
                ).map((category) => {
                  const hasSubs = Boolean(category.subcategories && category.subcategories.length > 0);
                  const isExpanded = mobileExpandedSection === category.title;

                  return (
                    <div key={category.title} className="border-b border-[#f0f0f0]">
                      <div className="flex items-center justify-between py-3">
                        <a
                          href={category.href}
                          onClick={() => !hasSubs && setMobileMenuOpen(false)}
                          className={`text-xs uppercase tracking-[0.14em] font-medium ${
                            category.isSale
                              ? 'text-[#d9222a] font-bold'
                              : 'text-[#1a1a1a] hover:text-[#8c254c]'
                          }`}
                        >
                          {category.title}
                          {category.isSale && (
                            <span className="ml-2 px-1.5 py-0.5 rounded bg-[#d9222a] text-[8px] text-white font-bold">
                              SALE
                            </span>
                          )}
                        </a>

                        {hasSubs && (
                          <button
                            type="button"
                            onClick={() => toggleMobileSection(category.title)}
                            aria-label={`Toggle ${category.title}`}
                            className="p-2 text-[#777] cursor-pointer"
                          >
                            <ChevronDown
                              size={14}
                              className={`transition-transform duration-200 ${
                                isExpanded ? 'rotate-180 text-[#8c254c]' : ''
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {/* Subcategories Accordion Content */}
                      {hasSubs && isExpanded && (
                        <div className="pb-3 pl-3 pr-1 space-y-4 bg-[#fafafa] p-3 rounded">
                          {category.subcategories?.map((group) => (
                            <div key={group.heading}>
                              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#999] mb-1.5">
                                {group.heading}
                              </p>
                              <ul className="space-y-1.5">
                                {group.items.map((sub) => (
                                  <li key={sub.label}>
                                    <a
                                      href={sub.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="text-[11px] text-[#444] hover:text-[#8c254c] block py-0.5"
                                    >
                                      {sub.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
            )}

            {/* Tab 2: Visual Categories Grid */}
            {mobileTab === 'categories' && (
              <div className="p-4 flex-1 space-y-3">
                {[
                  { name: 'Jackets & Outerwear', count: '16 Styles', href: '#shop', badge: 'Trending' },
                  { name: 'Heritage Sweaters', count: '24 Styles', href: '#shop', badge: 'Winter Essential' },
                  { name: 'Casual Shirts', count: '38 Styles', href: '#shop' },
                  { name: 'Polo Shirts', count: '22 Styles', href: '#shop' },
                  { name: 'Formal Suits & Blazers', count: '14 Styles', href: '#shop', badge: 'Handcrafted' },
                  { name: 'Alpha Athletics', count: '18 Styles', href: '#shop' },
                  { name: 'Trousers & Chinos', count: '29 Styles', href: '#shop' },
                  { name: 'Winter Accessories', count: '15 Styles', href: '#shop' },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3 rounded-lg bg-[#f9f9f9] hover:bg-[#f0f0f0] border border-[#e8e8e8] transition-colors group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-[#171717] uppercase tracking-wide group-hover:text-[#8c254c]">
                          {item.name}
                        </span>
                        {item.badge && (
                          <span className="text-[8px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-black text-white font-medium">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-[#888]">{item.count}</span>
                    </div>
                    <ArrowRight size={14} className="text-[#aaa] group-hover:text-[#8c254c] group-hover:translate-x-0.5 transition-all" />
                  </a>
                ))}
              </div>
            )}

            {/* Drawer Footer Links */}
            <div className="p-4 border-t border-[#eee] bg-[#fdfdfd] space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2 pb-2">
                <a
                  href="tel:+18005550199"
                  className="flex items-center justify-center gap-1.5 py-2 px-3 bg-[#f3f3f3] hover:bg-[#eaeaea] rounded text-[11px] font-medium text-[#171717] transition-colors"
                >
                  <Phone size={13} className="text-[#8c254c]" /> Call Support
                </a>
                <button
                  type="button"
                  onClick={() => setSupportModalOpen(true)}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 rounded text-[11px] font-medium text-[#128C7E] transition-colors cursor-pointer"
                >
                  <MessageCircle size={13} /> WhatsApp
                </button>
              </div>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-[#444] hover:text-[#8c254c] text-[11px]"
              >
                <span>📍 Dummy Store Locator (All Cities)</span>
              </a>
              <div className="pt-2 border-t border-[#f0f0f0] flex items-center justify-between text-[10px] text-[#888]">
                <span>Nationwide Shipping: <strong className="text-[#109533]">Active</strong></span>
                <span>Currency: <strong className="text-[#171717]">PKR (Rs.)</strong></span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. SLIDE-OVER SHOPPING BAG DRAWER */}
      {cartDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end animate-fadeIn">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setCartDrawerOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="relative w-full max-w-[400px] bg-white h-full shadow-2xl flex flex-col z-10 animate-slideLeft">
            <div className="flex items-center justify-between p-5 border-b border-[#eee]">
              <div className="flex items-center gap-2">
                <ShoppingBag size={18} />
                <h3 className="text-sm uppercase tracking-[0.12em] font-semibold">Shopping Bag</h3>
                <span className="text-xs text-[#8c254c] font-medium">({bagCount})</span>
              </div>
              <button
                type="button"
                onClick={() => setCartDrawerOpen(false)}
                aria-label="Close Bag"
                className="p-1 text-[#555] hover:text-black"
              >
                <X size={20} />
              </button>
            </div>

            {/* Free Shipping Progress Meter */}
            <div className="p-4 bg-[#f9f9f9] border-b border-[#eee] text-center">
              <p className="text-[10px] tracking-wide text-[#555] uppercase font-medium">
                {bagCount > 0 ? (
                  <span className="text-[#109533] flex items-center justify-center gap-1">
                    <Check size={12} /> You have unlocked FREE shipping nationwide!
                  </span>
                ) : (
                  'Add items to unlock Free Delivery (Above Rs. 3,500)'
                )}
              </p>
              <div className="w-full bg-[#e5e5e5] h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-[#8c254c] h-full transition-all duration-500"
                  style={{ width: bagCount > 0 ? '100%' : '20%' }}
                />
              </div>
            </div>

            {/* Cart Body */}
            <div className="flex-1 overflow-y-auto p-5">
              {bagCount === 0 ? (
                <div className="text-center py-16 space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f3f3f3] text-[#777]">
                    <ShoppingBag size={24} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[#171717]">
                    Your bag is empty
                  </h4>
                  <p className="text-xs text-[#777] max-w-[240px] mx-auto leading-relaxed">
                    Explore our latest Spring/Winter arrivals and add your favorite pieces.
                  </p>
                  <a
                    href="#shop"
                    onClick={() => setCartDrawerOpen(false)}
                    className="inline-block bg-[#171717] text-white text-[11px] uppercase tracking-[0.16em] px-6 py-2.5 font-medium hover:bg-[#8c254c] transition-colors"
                  >
                    Start Shopping
                  </a>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex gap-3 pb-4 border-b border-[#eee]">
                    <img
                      src="https://images.pexels.com/photos/14707868/pexels-photo-14707868.jpeg?auto=compress&cs=tinysrgb&h=200&w=150"
                      alt="Textured Zipper Jacket"
                      className="w-16 h-20 object-cover bg-[#f3f3f3]"
                    />
                    <div className="flex-1 text-xs">
                      <h5 className="font-medium text-[#171717] uppercase tracking-wide">
                        Black Textured Zipper Jacket
                      </h5>
                      <p className="text-[#777] text-[10px] mt-0.5">Size: M | Color: Black</p>
                      <p className="font-semibold text-[#171717] mt-1">Rs. 6,490</p>
                      <span className="text-[10px] text-[#109533]">In Stock</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Drawer Footer */}
            {bagCount > 0 && (
              <div className="p-5 border-t border-[#eee] bg-white space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#666] uppercase tracking-wider">Subtotal:</span>
                  <span className="font-semibold text-sm text-[#171717]">Rs. 6,490</span>
                </div>
                <p className="text-[9px] text-[#888] leading-tight">
                  Taxes and shipping calculated at checkout.
                </p>
                <button
                  type="button"
                  className="w-full bg-[#171717] hover:bg-[#8c254c] text-white text-xs uppercase tracking-[0.16em] py-3 font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  Proceed to Checkout <ArrowRight size={14} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 6. FLOATING QUICK CUSTOMER CARE / WHATSAPP WIDGET */}
      <div className="fixed bottom-18 md:bottom-6 right-4 z-40">
        <button
          type="button"
          onClick={() => setSupportModalOpen(true)}
          aria-label="Monark Customer Support"
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebd59] text-white p-3 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <MessageCircle size={22} className="fill-white text-white" />
          <span className="hidden sm:inline text-xs font-semibold pr-1">Need Help?</span>
        </button>
      </div>

      {/* QUICK CUSTOMER CARE MODAL */}
      {supportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-sm bg-white rounded-xl shadow-2xl p-6 space-y-4 animate-scaleUp">
            <div className="flex items-center justify-between pb-3 border-b border-[#eee]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#128C7E]">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#171717]">Monark Support</h4>
                  <p className="text-[10px] text-[#109533] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#109533] animate-pulse" />
                    Online • Responds in 5 mins
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSupportModalOpen(false)}
                className="p-1 text-[#888] hover:text-black cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-3 text-xs text-[#555]">
              <p className="leading-relaxed">
                Welcome to Monark Customer Care. How can we assist your shopping today?
              </p>

              <div className="space-y-2 pt-1">
                <a
                  href="https://wa.me/18005550199"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#1ebd59] text-white rounded-lg font-semibold text-xs transition-colors shadow-md"
                >
                  <MessageCircle size={15} /> Chat on WhatsApp (Dummy)
                </a>

                <a
                  href="tel:+18005550199"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#171717] hover:bg-[#8c254c] text-white rounded-lg font-semibold text-xs transition-colors"
                >
                  <Phone size={15} /> Call Toll-Free: +1 (800) 555-0199
                </a>
              </div>

              <div className="text-[10px] text-[#888] text-center pt-2 border-t border-[#f0f0f0]">
                Support Hours: 10:00 AM – 10:00 PM (Mon – Sun PKT)
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 7. STICKY MOBILE BOTTOM NAVIGATION BAR (Monark Live Store Standard) */}
      <nav
        aria-label="Mobile Navigation Toolbar"
        className="fixed bottom-0 inset-x-0 z-40 bg-white/98 backdrop-blur-md border-t border-[#e2e2e2] shadow-[0_-4px_25px_rgba(0,0,0,0.08)] md:hidden"
      >
        <div className="grid grid-cols-5 h-[58px] max-w-md mx-auto items-center text-center">
          {/* 1. Shop */}
          <a
            href="#top"
            className="flex flex-col items-center justify-center h-full text-[#171717] hover:text-[#8c254c] active:scale-95 transition-all py-1"
          >
            <Home size={18} strokeWidth={1.75} />
            <span className="text-[9px] uppercase tracking-wider font-medium mt-1">Shop</span>
          </a>

          {/* 2. Explore / Categories */}
          <button
            type="button"
            onClick={() => {
              setMobileTab('categories');
              setMobileMenuOpen(true);
            }}
            className="flex flex-col items-center justify-center h-full text-[#555] hover:text-[#8c254c] active:scale-95 transition-all py-1 cursor-pointer"
          >
            <LayoutGrid size={18} strokeWidth={1.75} />
            <span className="text-[9px] uppercase tracking-wider font-medium mt-1">Explore</span>
          </button>

          {/* 3. Search */}
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="flex flex-col items-center justify-center h-full text-[#555] hover:text-[#8c254c] active:scale-95 transition-all py-1 cursor-pointer"
          >
            <Search size={18} strokeWidth={1.75} />
            <span className="text-[9px] uppercase tracking-wider font-medium mt-1">Search</span>
          </button>

          {/* 4. Saved / Wishlist */}
          <button
            type="button"
            onClick={() => setWishlistCount((c) => c + 1)}
            className="relative flex flex-col items-center justify-center h-full text-[#555] hover:text-[#8c254c] active:scale-95 transition-all py-1 cursor-pointer"
          >
            <Heart
              size={18}
              strokeWidth={1.75}
              className={wishlistCount > 0 ? 'text-[#8c254c] fill-[#8c254c]' : ''}
            />
            {wishlistCount > 0 && (
              <span className="absolute top-2 right-4 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-[#8c254c] px-1 text-[8px] font-bold text-white">
                {wishlistCount}
              </span>
            )}
            <span className="text-[9px] uppercase tracking-wider font-medium mt-1">Saved</span>
          </button>

          {/* 5. Bag */}
          <button
            type="button"
            onClick={() => setCartDrawerOpen(true)}
            className="relative flex flex-col items-center justify-center h-full text-[#171717] hover:text-[#8c254c] active:scale-95 transition-all py-1 cursor-pointer"
          >
            <ShoppingBag size={18} strokeWidth={1.75} />
            {bagCount > 0 && (
              <span className="absolute top-2 right-4 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-[#8c254c] px-1 text-[8px] font-bold text-white animate-scaleUp">
                {bagCount}
              </span>
            )}
            <span className="text-[9px] uppercase tracking-wider font-medium mt-1">
              Bag {bagCount > 0 && `(${bagCount})`}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}
