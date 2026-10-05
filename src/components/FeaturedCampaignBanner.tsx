'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

export const FeaturedCampaignBanner: React.FC = () => {
  return (
    <section className="py-12 bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#183C3A] via-[#162321] to-[#183C3A] text-white p-8 lg:p-12 overflow-hidden shadow-2xl border border-[#D5A84C]/30">
          
          {/* Subtle Grid Accent */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D5A84C_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Copy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D97757] text-white text-xs font-extrabold uppercase tracking-wider">
                PROMOTIONAL BUNDLE
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Your complete <br />
                <span className="text-[#D5A84C]">digital toolkit.</span>
              </h2>

              <p className="text-base text-white/80 max-w-xl leading-relaxed">
                Everything you need to work smarter, stay protected, and learn faster. Unlock enterprise software, security shields, and technical blueprints in one unified checkout.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D5A84C]" />
                  <span>Licensed Workstation Software</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D5A84C]" />
                  <span>Cross-Platform Security Suites</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D5A84C]" />
                  <span>Developer & System Utilities</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D5A84C]" />
                  <span>Lifetime Free Version Upgrades</span>
                </div>
              </div>

              <div>
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 bg-[#D5A84C] hover:bg-[#b88d37] text-[#162321] px-8 py-3.5 rounded-xl font-heading font-extrabold text-sm transition-colors shadow-lg"
                >
                  Explore Collection <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Visual Products Group */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                  alt="Digital Toolkit"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl w-full flex items-center justify-between">
                    <div>
                      <div className="text-xs text-[#D5A84C] font-bold">Bundle Offer Price</div>
                      <div className="text-xl font-extrabold text-white font-heading">
                        ₹2,999 <span className="text-xs line-through text-white/50">₹5,499</span>
                      </div>
                    </div>
                    <span className="bg-[#D97757] text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                      Save 45%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
