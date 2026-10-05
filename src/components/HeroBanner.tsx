'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, ShieldCheck, Zap, ArrowRight, Star, Sparkles, Check } from 'lucide-react';
import { useShop } from '@/context/ShopContext';
import { PRODUCTS } from '@/data/mockData';

export const HeroBanner: React.FC = () => {
  const { addToCart } = useShop();

  const heroFeaturedProducts = [
    {
      title: 'SecureShield 2026',
      price: '₹799',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&q=80',
      badge: 'Antivirus'
    },
    {
      title: 'CodeForge Dev Suite',
      price: '₹1,499',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80',
      badge: 'Developer Tool'
    },
    {
      title: 'FocusFlow Pro',
      price: '₹999',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80',
      badge: 'Productivity'
    },
    {
      title: 'Business Handbook',
      price: '₹399',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80',
      badge: 'eBook'
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#183C3A] to-[#162321] text-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#D5A84C]/20">
      {/* Decorative Grid Overlay Background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D5A84C_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: E-Commerce Offer Copy & CTAs */}
        <div className="lg:col-span-6 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D5A84C]/20 border border-[#D5A84C]/40 text-[#D5A84C] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LIMITED TIME PROMOTIONAL DEALS</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
            Power up your <br />
            <span className="text-[#D97757]">digital world.</span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-white/80 font-normal max-w-xl leading-relaxed">
            Premium licensed software, cybersecurity suites, developer productivity tools, and expert ebooks — delivered <strong className="text-white">instantly to your inbox</strong>.
          </p>

          {/* Bullet Highlights */}
          <div className="grid grid-cols-2 gap-3 text-xs font-medium text-white/90 py-2">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#D97757] flex items-center justify-center text-white shrink-0">
                <Check className="w-3 h-3" />
              </div>
              <span>100% Verified Genuine Keys</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#D97757] flex items-center justify-center text-white shrink-0">
                <Check className="w-3 h-3" />
              </div>
              <span>Instant Download Links</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#D97757] flex items-center justify-center text-white shrink-0">
                <Check className="w-3 h-3" />
              </div>
              <span>Lifetime License Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#D97757] flex items-center justify-center text-white shrink-0">
                <Check className="w-3 h-3" />
              </div>
              <span>24/7 Priority Tech Support</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/shop"
              className="bg-[#D97757] hover:bg-[#c46445] text-white px-8 py-3.5 rounded-xl font-heading font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2"
            >
              Shop Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/deals"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-3.5 rounded-xl font-heading font-bold text-sm transition-colors duration-200"
            >
              Explore Deals
            </Link>
          </div>

          {/* Social Proof Stats */}
          <div className="flex items-center gap-6 pt-4 border-t border-white/10">
            <div>
              <div className="text-xl font-extrabold font-heading text-[#D5A84C]">50,000+</div>
              <div className="text-[11px] text-white/70 uppercase tracking-wider">Satisfied Buyers</div>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <div className="text-xl font-extrabold font-heading text-white">4.9 / 5.0</div>
              <div className="flex items-center gap-1 text-[#D5A84C] text-[11px]">
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <span className="text-white/70 ml-1">(1,400+ reviews)</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Realistic Product Composition & Mockups */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          <div className="w-full relative max-w-lg">
            
            {/* Background Accent Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#D97757]/30 to-[#D5A84C]/30 rounded-3xl blur-2xl opacity-60" />

            {/* Overlapping Product Box Showcase */}
            <div className="relative grid grid-cols-2 gap-4">
              {heroFeaturedProducts.map((prod, index) => (
                <div
                  key={index}
                  className={`relative group bg-[#162321]/90 border border-white/15 p-3.5 rounded-2xl shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-[#D5A84C]/50 ${
                    index === 1 ? 'translate-y-4' : index === 2 ? '-translate-y-2' : ''
                  }`}
                >
                  <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-black/40 mb-3">
                    <Image
                      src={prod.image}
                      alt={prod.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 bg-[#183C3A] text-[#D5A84C] border border-[#D5A84C]/40 text-[9px] font-bold px-2 py-0.5 rounded-md uppercase">
                      {prod.badge}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-heading text-xs font-bold text-white line-clamp-1">
                      {prod.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-extrabold text-[#D5A84C] font-heading">
                        {prod.price}
                      </span>
                      <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-0.5">
                        <Zap className="w-3 h-3 fill-current" /> Instant Key
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Trust Pill Badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white text-[#162321] px-5 py-2.5 rounded-full shadow-2xl border border-[#E8E2D8] flex items-center gap-3 whitespace-nowrap z-20">
              <ShieldCheck className="w-5 h-5 text-[#183C3A]" />
              <div className="text-xs font-bold">
                Official Digital Distribution Partner
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
