'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Accordion state for mobile: all sections collapsed with '+' by default
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    company: false,
    client: false,
    legal: false,
    store: false,
  });

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer id="t4s-footer" className="w-full bg-white text-[#333333] border-t border-[#e6e6e6]">
      {/* Main 4-Column Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 pt-10 sm:pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-8 lg:gap-10">
          
          {/* ========================================================= */}
          {/* 1. COMPANY SECTION                                        */}
          {/* ========================================================= */}
          <div className="border-b border-[#e6e6e6] md:border-b-0 py-3 md:py-0">
            {/* Desktop Heading */}
            <div className="hidden md:block mb-6">
              <h3 className="text-base font-medium text-[#333333] tracking-normal font-sans">
                Company
              </h3>
            </div>

            {/* Mobile Collapsible Header */}
            <button
              type="button"
              onClick={() => toggleSection('company')}
              className="flex md:hidden w-full items-center justify-between py-2.5 text-left cursor-pointer group"
            >
              <h3 className="text-[15px] font-medium text-[#333333] group-hover:text-[#8c254c] transition-colors">
                Company
              </h3>
              <span className="text-[#555] group-hover:text-[#8c254c] transition-colors">
                {openSections.company ? (
                  <Minus size={16} strokeWidth={1.5} />
                ) : (
                  <Plus size={16} strokeWidth={1.5} />
                )}
              </span>
            </button>

            {/* Links Content */}
            <div className={`${openSections.company ? 'block pb-4' : 'hidden'} md:block md:pb-0`}>
              <ul className="space-y-2 text-sm text-[#333333]">
                <li>
                  <a
                    href="#footer"
                    className="hover:text-black hover:underline transition-colors block py-0.5"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#footer"
                    className="hover:text-black hover:underline transition-colors block py-0.5"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-black hover:underline transition-colors block py-0.5"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 2. CLIENT SERVICES (Client Service) SECTION                */}
          {/* ========================================================= */}
          <div className="border-b border-[#e6e6e6] md:border-b-0 py-3 md:py-0">
            {/* Desktop Heading */}
            <div className="hidden md:block mb-6">
              <h3 className="text-base font-medium text-[#333333] tracking-normal font-sans">
                Client Services
              </h3>
            </div>

            {/* Mobile Collapsible Header */}
            <button
              type="button"
              onClick={() => toggleSection('client')}
              className="flex md:hidden w-full items-center justify-between py-2.5 text-left cursor-pointer group"
            >
              <h3 className="text-[15px] font-medium text-[#333333] group-hover:text-[#8c254c] transition-colors">
                Client Services
              </h3>
              <span className="text-[#555] group-hover:text-[#8c254c] transition-colors">
                {openSections.client ? (
                  <Minus size={16} strokeWidth={1.5} />
                ) : (
                  <Plus size={16} strokeWidth={1.5} />
                )}
              </span>
            </button>

            {/* Content: Operating Hours exactly from Monark */}
            <div className={`${openSections.client ? 'block pb-4' : 'hidden'} md:block md:pb-0`}>
              <div className="text-sm text-[#333333] space-y-1.5 leading-relaxed">
                <p>10am to 10pm (Mon to Fri)</p>
                <p>10am to 3pm (Saturday)</p>
                <p>4pm to 10pm (Sunday)</p>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 3. LEGAL SECTION                                          */}
          {/* ========================================================= */}
          <div className="border-b border-[#e6e6e6] md:border-b-0 py-3 md:py-0">
            {/* Desktop Heading */}
            <div className="hidden md:block mb-6">
              <h3 className="text-base font-medium text-[#333333] tracking-normal font-sans">
                Legal
              </h3>
            </div>

            {/* Mobile Collapsible Header */}
            <button
              type="button"
              onClick={() => toggleSection('legal')}
              className="flex md:hidden w-full items-center justify-between py-2.5 text-left cursor-pointer group"
            >
              <h3 className="text-[15px] font-medium text-[#333333] group-hover:text-[#8c254c] transition-colors">
                Legal
              </h3>
              <span className="text-[#555] group-hover:text-[#8c254c] transition-colors">
                {openSections.legal ? (
                  <Minus size={16} strokeWidth={1.5} />
                ) : (
                  <Plus size={16} strokeWidth={1.5} />
                )}
              </span>
            </button>

            {/* Links Content */}
            <div className={`${openSections.legal ? 'block pb-4' : 'hidden'} md:block md:pb-0`}>
              <ul className="space-y-2 text-sm text-[#333333]">
                <li>
                  <a
                    href="#footer"
                    className="hover:text-black hover:underline transition-colors block py-0.5"
                  >
                    FAQ&apos;S
                  </a>
                </li>
                <li>
                  <a
                    href="#footer"
                    className="hover:text-black hover:underline transition-colors block py-0.5"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#footer"
                    className="hover:text-black hover:underline transition-colors block py-0.5"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#footer"
                    className="hover:text-black hover:underline transition-colors block py-0.5"
                  >
                    Delivery Information
                  </a>
                </li>
                <li>
                  <a
                    href="#footer"
                    className="hover:text-black hover:underline transition-colors block py-0.5"
                  >
                    Return Form
                  </a>
                </li>
                <li>
                  <a
                    href="#footer"
                    className="hover:text-black hover:underline transition-colors block py-0.5"
                  >
                    Exchange &amp; Return Guide
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 4. STORE LOCATOR SECTION                                  */}
          {/* ========================================================= */}
          <div className="border-b border-[#e6e6e6] md:border-b-0 py-3 md:py-0">
            {/* Desktop Heading */}
            <div className="hidden md:block mb-6">
              <h3 className="text-base font-medium text-[#333333] tracking-normal font-sans">
                Store Locator
              </h3>
            </div>

            {/* Mobile Collapsible Header */}
            <button
              type="button"
              onClick={() => toggleSection('store')}
              className="flex md:hidden w-full items-center justify-between py-2.5 text-left cursor-pointer group"
            >
              <h3 className="text-[15px] font-medium text-[#333333] group-hover:text-[#8c254c] transition-colors">
                Store Locator
              </h3>
              <span className="text-[#555] group-hover:text-[#8c254c] transition-colors">
                {openSections.store ? (
                  <Minus size={16} strokeWidth={1.5} />
                ) : (
                  <Plus size={16} strokeWidth={1.5} />
                )}
              </span>
            </button>

            {/* Content: View Store Locator + Dummy Contact Details + Socials */}
            <div className={`${openSections.store ? 'block pb-4' : 'hidden'} md:block md:pb-0`}>
              {/* Monark Store Locator link */}
              <a
                href="#footer"
                className="font-semibold text-sm block mb-5 underline hover:text-[#8c254c] transition-colors"
              >
                View Store Locator
              </a>

              {/* Email with Monark Mail SVG */}
              <div className="flex items-center text-sm text-[#333333] mb-3">
                <svg
                  className="w-5 h-5 mr-2 flex-shrink-0 text-[#333333]"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <path d="M 28.244 7.47 h -25.572 v 17.06 h 26.656 v -17.06 h -1.084 Z M 27.177 8.536 l -10.298 10.298 c -0.47 0.47 -1.289 0.47 -1.759 0 l -10.3 -10.298 h 22.356 Z M 3.738 8.961 l 6.923 6.922 l -6.923 6.923 v -13.846 Z M 4.589 23.464 l 6.827 -6.826 l 2.951 2.95 c 0.436 0.436 1.016 0.677 1.633 0.677 s 1.197 -0.241 1.633 -0.677 l 2.951 -2.951 l 6.826 6.826 h -22.822 Z M 28.262 22.807 l -6.923 -6.924 l 6.923 -6.924 v 13.848 Z" />
                </svg>
                <a
                  href="mailto:support@dummy-domain.com"
                  className="hover:underline hover:text-[#8c254c] transition-colors truncate"
                >
                  customercare@dummy-monark.com
                </a>
              </div>

              {/* Phone with Monark Phone SVG */}
              <div className="flex items-center text-sm text-[#333333] mb-5">
                <svg
                  className="w-5 h-5 mr-2 flex-shrink-0 text-[#333333]"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <path d="M 23.407 30.394 c -2.431 0 -8.341 -3.109 -13.303 -9.783 c -4.641 -6.242 -6.898 -10.751 -6.898 -13.785 c 0 -2.389 1.65 -3.529 2.536 -4.142 l 0.219 -0.153 c 0.979 -0.7 2.502 -0.927 3.086 -0.927 c 1.024 0 1.455 0.599 1.716 1.121 c 0.222 0.442 2.061 4.39 2.247 4.881 c 0.286 0.755 0.192 1.855 -0.692 2.488 l -0.155 0.108 c -0.439 0.304 -1.255 0.869 -1.368 1.557 c -0.055 0.334 0.057 0.684 0.342 1.068 c 1.423 1.918 5.968 7.55 6.787 8.314 c 0.642 0.6 1.455 0.685 2.009 0.218 c 0.573 -0.483 0.828 -0.768 0.83 -0.772 l 0.059 -0.057 c 0.048 -0.041 0.496 -0.396 1.228 -0.396 c 0.528 0 1.065 0.182 1.596 0.541 c 1.378 0.931 4.487 3.011 4.487 3.011 l 0.05 0.038 c 0.398 0.341 0.973 1.323 0.302 2.601 c -0.695 1.327 -2.85 4.066 -5.079 4.066 Z M 9.046 2.672 c -0.505 0 -1.746 0.213 -2.466 0.728 l -0.232 0.162 c -0.827 0.572 -2.076 1.435 -2.076 3.265 c 0 2.797 2.188 7.098 6.687 13.149 c 4.914 6.609 10.532 9.353 12.447 9.353 c 1.629 0 3.497 -2.276 4.135 -3.494 c 0.392 -0.748 0.071 -1.17 -0.04 -1.284 c -0.36 -0.241 -3.164 -2.117 -4.453 -2.988 c -0.351 -0.238 -0.688 -0.358 -0.999 -0.358 c -0.283 0 -0.469 0.1 -0.532 0.14 c -0.104 0.111 -0.39 0.405 -0.899 0.833 c -0.951 0.801 -2.398 0.704 -3.424 -0.254 c -0.923 -0.862 -5.585 -6.666 -6.916 -8.459 c -0.46 -0.62 -0.641 -1.252 -0.538 -1.877 c 0.187 -1.133 1.245 -1.866 1.813 -2.26 l 0.142 -0.099 c 0.508 -0.363 0.4 -1.02 0.316 -1.242 c -0.157 -0.414 -1.973 -4.322 -2.203 -4.781 c -0.188 -0.376 -0.336 -0.533 -0.764 -0.533 Z" />
                </svg>
                <a
                  href="tel:+18005550199"
                  className="hover:underline hover:text-[#8c254c] transition-colors"
                >
                  Head office: +1 (800) 555-0199
                </a>
              </div>

              {/* Monark Social Icons List (Facebook, Instagram, YouTube, TikTok) */}
              <div className="flex items-center gap-2 pt-1">
                {/* Facebook */}
                <a
                  href="https://facebook.com/dummyfashion"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook (Dummy)"
                  className="w-8 h-8 rounded flex items-center justify-center bg-[#f0f0f0] text-[#333] hover:bg-[#8c254c] hover:text-white transition-all shadow-sm"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 320 512" fill="currentColor">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/dummyfashion"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram (Dummy)"
                  className="w-8 h-8 rounded flex items-center justify-center bg-[#f0f0f0] text-[#333] hover:bg-[#8c254c] hover:text-white transition-all shadow-sm"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@dummyfashion"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube (Dummy)"
                  className="w-8 h-8 rounded flex items-center justify-center bg-[#f0f0f0] text-[#333] hover:bg-[#8c254c] hover:text-white transition-all shadow-sm"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 576 512" fill="currentColor">
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com/@dummyfashion"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok (Dummy)"
                  className="w-8 h-8 rounded flex items-center justify-center bg-[#f0f0f0] text-[#333] hover:bg-[#8c254c] hover:text-white transition-all shadow-sm"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* NEWSLETTER FORM SECTION (EXACT MONARK STYLING)            */}
        {/* ========================================================= */}
        <div className="mt-8 pt-6 md:mt-12 md:pt-8 md:border-t md:border-[#e6e6e6] text-center max-w-xl mx-auto">
          <p className="text-sm sm:text-base font-normal tracking-wide text-[#000000] uppercase mb-4">
            GET ON THE LIST TO STAY UPDATED
          </p>

          {subscribed ? (
            <p className="text-xs text-[#8c254c] py-3 font-medium">
              Thank you for subscribing! You are on the Monark VIP list.
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex max-w-md mx-auto border border-[#000000]">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-4 py-2.5 text-xs text-[#333] outline-none bg-white placeholder:text-[#878787]"
              />
              <button
                type="submit"
                className="bg-[#000000] hover:bg-[#333333] text-white text-xs uppercase tracking-wider px-6 font-medium transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

        {/* Bottom Bar: Copyright & Safe area for mobile toolbar */}
        <div className="mt-8 pt-4 border-t border-[#e6e6e6] text-center pb-16 md:pb-6 text-xs text-[#878787]">
          <p>
            Copyright &copy; {new Date().getFullYear()} <strong className="text-[#333]">Monark</strong>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
