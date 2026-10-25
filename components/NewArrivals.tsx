'use client';

import React, { useState, useMemo } from 'react';
import {
  Heart,
  ShoppingBag,
  Eye,
  Check,
  X,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  SlidersHorizontal,
} from 'lucide-react';

export interface ProductItem {
  id: string;
  name: string;
  category: 'jackets' | 'sweaters' | 'sweatshirts';
  price: string;
  priceNum: number;
  image: string;
  hoverImage: string;
  badge?: string;
  sizes: string[];
  colors: string[];
  description: string;
}

export const NEW_ARRIVAL_PRODUCTS: ProductItem[] = [
  {
    id: 'rtcw26-20',
    name: 'Black Textured Zipper Jacket',
    category: 'jackets',
    price: 'Rs. 9,500',
    priceNum: 9500,
    image: 'https://monark.com.pk/cdn/shop/files/hf_20261002_062944_94a3a4b5-0e6c-4c98-8d38-bcf3ddfb3e64.png?v=1792060835&width=800',
    hoverImage: 'https://monark.com.pk/cdn/shop/files/hf_20261002_062814_02fbb790-0164-42e1-be61-55101cc07a4d.png?v=1792060835&width=800',
    badge: 'NEW ARRIVAL',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#171717'],
    description: 'Textured poly-blend jacket with mock collar, full zip closure, and twin welt pockets. Tailored for sharp winter elegance.',
  },
  {
    id: 'rtcw26-019',
    name: 'Grey Textured Zipper Jacket',
    category: 'jackets',
    price: 'Rs. 9,500',
    priceNum: 9500,
    image: 'https://monark.com.pk/cdn/shop/files/hf_20261002_111813_c8f6f9b9-b543-4d12-9a26-634a752e7506.png?v=1792060799&width=800',
    hoverImage: 'https://monark.com.pk/cdn/shop/files/hf_20261002_111426_77afaf41-9dc3-4dff-91ad-69b1578cb22b.png?v=1792060797&width=800',
    badge: 'COLD WEATHER',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#71717a'],
    description: 'Structured heather grey zippered outerwear with ribbed hems, premium silver-toned hardware, and warm inner lining.',
  },
  {
    id: 'rtcw26-018',
    name: 'Olive Green Textured Zipper Jacket',
    category: 'jackets',
    price: 'Rs. 9,500',
    priceNum: 9500,
    image: 'https://monark.com.pk/cdn/shop/files/hf_20261002_112705_7fab0e53-a207-4efd-b181-7eb4119dcdd9.png?v=1792060743&width=800',
    hoverImage: 'https://monark.com.pk/cdn/shop/files/hf_20261002_112551_ca56f46d-74ef-45c7-a11c-bc9d500f823c.png?v=1792060741&width=800',
    badge: 'BESTSELLER',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#4b5320'],
    description: 'Deep earthy olive green zip jacket with contrast dark trims and ribbed cuffs. Unmatched cold-weather versatility.',
  },
  {
    id: 'w011-br',
    name: 'Brown Knit Sweater',
    category: 'sweaters',
    price: 'Rs. 9,450',
    priceNum: 9450,
    image: 'https://monark.com.pk/cdn/shop/files/000208361.jpg?v=1792060686&width=800',
    hoverImage: 'https://monark.com.pk/cdn/shop/files/000208351.jpg?v=1792060686&width=800',
    badge: 'PURE KNITWEAR',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#654321'],
    description: 'Heritage cable & waffle knit sweater in warm espresso brown. Handcrafted ultra-soft lambswool blend with ribbed crew neck.',
  },
  {
    id: 'rtcw26-44',
    name: 'Black Corduroy Sweatshirt',
    category: 'sweatshirts',
    price: 'Rs. 5,850',
    priceNum: 5850,
    image: 'https://monark.com.pk/cdn/shop/files/hf_20261012_103726_8d426813-d6f2-4c01-8f34-67739bcd219b.jpg?v=1791888467&width=800',
    hoverImage: 'https://monark.com.pk/cdn/shop/files/hf_20261012_103551_2c86f372-055d-4317-9656-f4a1f200121c.jpg?v=1791888467&width=800',
    badge: 'NEW TEXTURE',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#171717'],
    description: 'Finely ribbed corduroy fleece sweatshirt offering rich tactile warmth and a modern boxy relaxed silhouette.',
  },
  {
    id: 'rtcw26-43',
    name: 'Black Half-Zipped Fleece Sweatshirt',
    category: 'sweatshirts',
    price: 'Rs. 5,850',
    priceNum: 5850,
    image: 'https://monark.com.pk/cdn/shop/files/hf_20261013_074954_9c41ced6-1d0b-4121-a97f-cf68a826385f_1.jpg?v=1791888438&width=800',
    hoverImage: 'https://monark.com.pk/cdn/shop/files/hf_20261013_075124_10723f67-7b81-44a8-b25c-ffc750d4dd28_1.jpg?v=1791888438&width=800',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#171717'],
    description: 'Brushed heavyweight fleece pullover with stand-up zip collar and minimal Monark tonal embroidery at chest.',
  },
  {
    id: 'rtcw26-42',
    name: 'Black Textured Half-Zipped Sweatshirt',
    category: 'sweatshirts',
    price: 'Rs. 5,850',
    priceNum: 5850,
    image: 'https://monark.com.pk/cdn/shop/files/hf_20261012_084811_ae7308de-a219-48c0-86d8-24d29bbbcadf.jpg?v=1791887856&width=800',
    hoverImage: 'https://monark.com.pk/cdn/shop/files/hf_20261012_084936_fe7435c9-0b52-4a00-9210-6c47f6b6b4b8.jpg?v=1791887856&width=800',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#171717'],
    description: 'Textured micro-waffle pullover sweatshirt with polished metallic quarter zipper and durable rib-knit trim.',
  },
  {
    id: 'rtcw26-41',
    name: 'Beige Half-Zipped Sweatshirt',
    category: 'sweatshirts',
    price: 'Rs. 5,850',
    priceNum: 5850,
    image: 'https://monark.com.pk/cdn/shop/files/hf_20261012_123049_dcbf51c1-0ff0-4ec1-8a3b-ee06f9c153f7.jpg?v=1791887818&width=800',
    hoverImage: 'https://monark.com.pk/cdn/shop/files/hf_20261012_123121_cab69e28-0d52-44ee-bdeb-415777218bfe.jpg?v=1791887818&width=800',
    badge: 'POPULAR COLOR',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#d7c9b1'],
    description: 'Clean oatmeal beige half-zip sweatshirt crafted from ultra-soft cotton blend fleece. Subtle minimalist drape.',
  },
  {
    id: 'rtcw26-40',
    name: 'Black Half-Zipped Sweatshirt',
    category: 'sweatshirts',
    price: 'Rs. 5,850',
    priceNum: 5850,
    image: 'https://monark.com.pk/cdn/shop/files/hf_20261012_122628_2d422297-e5c0-475d-b726-8e5ebfe76867.jpg?v=1791886263&width=800',
    hoverImage: 'https://monark.com.pk/cdn/shop/files/hf_20261012_122555_b6b49e7b-4c2c-45fe-949f-fecd0fe7de1a.jpg?v=1791886263&width=800',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#171717'],
    description: 'Minimalist half-zip essential with drop shoulder tailored silhouette. Everyday luxury comfort.',
  },
  {
    id: 'rtcw26-37',
    name: 'Burgundy Half-Zipped Sweatshirt',
    category: 'sweatshirts',
    price: 'Rs. 5,850',
    priceNum: 5850,
    image: 'https://monark.com.pk/cdn/shop/files/hf_20261012_081918_34d1228e-97b4-4df3-8357-b777945a2232.jpg?v=1791885951&width=800',
    hoverImage: 'https://monark.com.pk/cdn/shop/files/hf_20261012_081810_93bd2bc8-b37a-4bc1-a892-87a19fd61d83.jpg?v=1791885952&width=800',
    badge: 'MONARK MAROON',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#800020'],
    description: 'Deep wine burgundy half-zip pullover matching Monark signature autumnal palette and refined textures.',
  },
  {
    id: 'rtcw26-33',
    name: 'Off-White Classic Sweatshirt',
    category: 'sweatshirts',
    price: 'Rs. 4,850',
    priceNum: 4850,
    image: 'https://monark.com.pk/cdn/shop/files/Layer1_eef84254-71ef-4e88-b1f9-4e675f95decc.jpg?v=1791885876&width=800',
    hoverImage: 'https://monark.com.pk/cdn/shop/files/hf_20261013_071403_534750d8-9b0d-4232-a318-be95ab98ad67.jpg?v=1791885875&width=800',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#f4f1ea'],
    description: 'Crisp ivory crewneck sweatshirt with ribbed hem and reinforced collar seam. Versatile clean look.',
  },
  {
    id: 'rtcw26-31',
    name: 'Sand Brown Sweatshirt',
    category: 'sweatshirts',
    price: 'Rs. 4,850',
    priceNum: 4850,
    image: 'https://monark.com.pk/cdn/shop/files/hf_20261012_082321_0264e4ad-4cfa-4083-b92a-2046048feaf6.jpg?v=1791885839&width=800',
    hoverImage: 'https://monark.com.pk/cdn/shop/files/hf_20261012_082519_5d3c03d7-9e7f-41df-8338-32de57ac9437.jpg?v=1791885839&width=800',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#a68b73'],
    description: 'Warm camel sand tone crewneck sweatshirt engineered for versatile everyday layering and relaxed styling.',
  },
];

interface NewArrivalsProps {
  onAddToCart: (product: ProductItem, size: string) => void;
}

export function NewArrivals({ onAddToCart }: NewArrivalsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [quickViewProduct, setQuickViewProduct] = useState<ProductItem | null>(null);
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All New In', count: NEW_ARRIVAL_PRODUCTS.length },
    {
      id: 'jackets',
      label: 'Jackets & Outerwear',
      count: NEW_ARRIVAL_PRODUCTS.filter((p) => p.category === 'jackets').length,
    },
    {
      id: 'sweaters',
      label: 'Knitwear & Sweaters',
      count: NEW_ARRIVAL_PRODUCTS.filter((p) => p.category === 'sweaters').length,
    },
    {
      id: 'sweatshirts',
      label: 'Sweatshirts & Pullovers',
      count: NEW_ARRIVAL_PRODUCTS.filter((p) => p.category === 'sweatshirts').length,
    },
  ];

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return NEW_ARRIVAL_PRODUCTS;
    return NEW_ARRIVAL_PRODUCTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist((prev) => {
      const next = !prev[id];
      showToast(next ? 'Saved to Wishlist' : 'Removed from Wishlist');
      return { ...prev, [id]: next };
    });
  };

  const handleQuickAdd = (product: ProductItem, size: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(product, size);
    showToast(`Added ${product.name} (${size}) to Bag!`);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 2800);
  };

  return (
    <section id="shop" className="py-12 sm:py-16 bg-white border-b border-[#ededed]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#171717] text-white text-xs px-4 py-2.5 shadow-2xl flex items-center gap-2 animate-fadeIn border-l-4 border-[#8c254c]">
          <Check size={14} className="text-[#109533]" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[#e5e5e5] gap-4">
          <div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#8c254c] font-semibold mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8c254c]" />
              Fall / Winter 2026 Collection
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#171717] uppercase font-sans">
              NEW ARRIVALS
            </h2>
            <p className="mt-1 text-xs text-[#666] max-w-lg">
              Engineered cold-weather staples balancing uncompromising warmth, tactile textures, and modern cuts.
            </p>
          </div>

          {/* Category Filter Tabs (Swipeable Pills on Mobile) */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none pb-2 -mx-3 px-3 sm:mx-0 sm:px-0 sm:flex-wrap">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex-shrink-0 whitespace-nowrap text-[10px] sm:text-[11px] uppercase tracking-[0.14em] px-3.5 py-1.5 transition-all duration-200 border cursor-pointer ${
                    isSelected
                      ? 'bg-[#171717] text-white border-[#171717] font-semibold shadow-sm'
                      : 'bg-white text-[#555] border-[#d8d8d8] hover:border-[#171717] hover:text-[#171717]'
                  }`}
                >
                  {cat.label}
                  <span className={`ml-1.5 text-[9px] ${isSelected ? 'text-white/70' : 'text-[#888]'}`}>
                    ({cat.count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-5">
          {filteredProducts.map((product) => {
            const isWishlisted = Boolean(wishlist[product.id]);

            return (
              <article
                key={product.id}
                className="group relative flex flex-col bg-white border border-[#f0f0f0] hover:border-[#d0d0d0] hover:shadow-md transition-all duration-300 rounded-sm overflow-hidden"
              >
                {/* Product Image Box with Dual Image Hover & Mobile Tap */}
                <div
                  onClick={() => setQuickViewProduct(product)}
                  className="relative aspect-[3/4] overflow-hidden bg-[#f4f4f4] cursor-pointer"
                >
                  {/* Primary Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500 group-hover:opacity-0"
                    loading="lazy"
                  />
                  {/* Hover Secondary Image (Back/Detail view) */}
                  <img
                    src={product.hoverImage}
                    alt={`${product.name} angle`}
                    className="absolute inset-0 h-full w-full object-cover object-center opacity-0 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 bg-[#171717] text-white text-[7.5px] sm:text-[9px] uppercase tracking-[0.16em] px-1.5 sm:px-2 py-0.5 font-medium z-10">
                      {product.badge}
                    </span>
                  )}

                  {/* Top Right Wishlist & QuickView Actions */}
                  <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 flex flex-col gap-1.5 z-10">
                    <button
                      type="button"
                      aria-label="Save to Wishlist"
                      onClick={(e) => toggleWishlist(product.id, e)}
                      className={`h-7 w-7 sm:h-8 sm:w-8 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
                        isWishlisted
                          ? 'bg-[#8c254c] text-white shadow-md'
                          : 'bg-white/90 backdrop-blur-sm text-[#444] hover:bg-white hover:text-[#8c254c] shadow-sm'
                      }`}
                    >
                      <Heart size={13} className={isWishlisted ? 'fill-current' : ''} />
                    </button>

                    <button
                      type="button"
                      aria-label="Quick View Product"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setQuickViewProduct(product);
                      }}
                      className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-white/90 backdrop-blur-sm text-[#444] hover:bg-white hover:text-[#171717] flex items-center justify-center transition-all duration-200 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 shadow-sm cursor-pointer"
                    >
                      <Eye size={13} />
                    </button>
                  </div>

                  {/* Quick Add Size Bar (Reveals on Hover for Desktop) */}
                  <div className="hidden sm:block absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
                    <p className="text-[9px] uppercase tracking-[0.14em] text-white/90 text-center mb-1.5 font-medium">
                      Quick Add to Bag
                    </p>
                    <div className="flex justify-center gap-1.5">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={(e) => handleQuickAdd(product, size, e)}
                          className="bg-white/90 hover:bg-[#8c254c] hover:text-white text-[#171717] text-[10px] font-semibold h-7 min-w-7 px-1.5 transition-colors shadow-sm cursor-pointer"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Product Metadata */}
                <div className="p-2.5 sm:p-4 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category tag */}
                    <span className="text-[8.5px] sm:text-[9px] uppercase tracking-[0.16em] text-[#888] font-medium block mb-0.5 sm:mb-1">
                      {product.category}
                    </span>

                    {/* Title */}
                    <h3
                      onClick={() => setQuickViewProduct(product)}
                      className="text-xs sm:text-[13px] font-medium uppercase tracking-[0.03em] text-[#171717] line-clamp-1 group-hover:text-[#8c254c] transition-colors cursor-pointer"
                    >
                      {product.name}
                    </h3>
                  </div>

                  <div className="mt-2 sm:mt-3 pt-1.5 sm:pt-2 border-t border-[#f2f2f2] flex items-center justify-between">
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-[#171717] tracking-tight">
                        {product.price}
                      </p>
                    </div>

                    {/* Desktop Size pills */}
                    <div className="hidden sm:flex items-center gap-1 text-[8px] text-[#777]">
                      {product.sizes.map((s) => (
                        <span key={s} className="px-1 border border-[#e0e0e0] rounded-sm">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Quick Add Size Buttons (Finger-Friendly) */}
                  <div className="mt-2 pt-2 border-t border-[#f4f4f4] flex sm:hidden items-center justify-between gap-1">
                    <span className="text-[8px] uppercase tracking-wider text-[#999] font-medium">Quick Add:</span>
                    <div className="flex gap-1">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={(e) => handleQuickAdd(product, size, e)}
                          className="h-5 min-w-5 px-1 text-[8.5px] font-bold bg-[#f5f5f5] hover:bg-[#8c254c] hover:text-white active:bg-[#8c254c] active:text-white text-[#222] rounded transition-all cursor-pointer"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Banner & Discovery Strip (Hidden on mobile devices) */}
        <div className="hidden md:flex mt-12 p-6 sm:p-8 bg-[#151515] text-white flex-col sm:flex-row items-center justify-between gap-6 border border-[#2b2b2b]">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#c89255] font-semibold">
              The Full Winter Lineup
            </span>
            <h4 className="text-lg sm:text-xl font-medium uppercase tracking-tight">
              Looking for More Outerwear & Formals?
            </h4>
            <p className="text-xs text-[#999] max-w-xl">
              Discover our complete collection including Italian 3-piece suits, luxury argyle cardigans, and formal shirts.
            </p>
          </div>

          <a
            href="#footer"
            className="whitespace-nowrap inline-flex items-center gap-2 bg-white text-[#171717] px-6 py-3 text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#8c254c] hover:text-white transition-colors"
          >
            Explore Complete Catalog <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* QUICK VIEW LIGHTBOX MODAL */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fadeIn">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setQuickViewProduct(null)}
          />

          {/* Modal Container */}
          <div className="relative bg-white w-full max-w-3xl shadow-2xl z-10 overflow-hidden border-t sm:border border-[#ddd] rounded-t-2xl sm:rounded-none animate-slideUp sm:animate-slideRight max-h-[92vh] sm:max-h-[85vh] flex flex-col">
            {/* Mobile Drag Handle */}
            <div className="w-10 h-1 bg-[#ccc] rounded-full mx-auto my-2 sm:hidden flex-shrink-0" />

            <button
              type="button"
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-3 right-3 text-[#555] hover:text-black p-1.5 z-20 bg-white/80 rounded-full cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 overflow-y-auto">
              {/* Product Gallery Images */}
              <div className="bg-[#f5f5f5] p-4 flex flex-col gap-2">
                <img
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  className="w-full aspect-[3/4] object-cover object-center shadow-sm"
                />
                <img
                  src={quickViewProduct.hoverImage}
                  alt={`${quickViewProduct.name} back view`}
                  className="w-full aspect-[3/4] object-cover object-center opacity-90 shadow-sm"
                />
              </div>

              {/* Product Details & Actions */}
              <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8c254c]">
                    Monark Official Item
                  </span>
                  <h3 className="text-xl font-medium uppercase tracking-tight text-[#171717]">
                    {quickViewProduct.name}
                  </h3>
                  <p className="text-lg font-bold text-[#171717]">{quickViewProduct.price}</p>
                  <p className="text-xs text-[#666] leading-relaxed pt-2 border-t border-[#eee]">
                    {quickViewProduct.description}
                  </p>

                  {/* Size selection */}
                  <div className="pt-3">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-medium uppercase tracking-wider text-[#171717]">
                        Select Size
                      </span>
                      <span className="text-[#888] text-[10px] underline cursor-pointer">
                        Size Guide
                      </span>
                    </div>
                    <div className="flex gap-2">
                      {quickViewProduct.sizes.map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => {
                            onAddToCart(quickViewProduct, size);
                            showToast(`Added ${quickViewProduct.name} (${size}) to Bag!`);
                            setQuickViewProduct(null);
                          }}
                          className="h-10 min-w-10 px-3 border border-[#ccc] hover:border-[#8c254c] hover:bg-[#8c254c] hover:text-white text-xs font-semibold transition-colors flex items-center justify-center"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Additional Info Box */}
                <div className="pt-4 border-t border-[#eee] text-[10px] text-[#777] space-y-1.5">
                  <p className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#109533]" />
                    In stock, ready for fast domestic dispatch
                  </p>
                  <p>• 100% Genuine Monark Fabric & Construction</p>
                  <p>• Free shipping nationwide on orders above Rs. 3,500</p>
                  <p>• 14-day hassle-free exchange & return policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
