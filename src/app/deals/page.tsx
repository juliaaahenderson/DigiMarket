'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { CartDrawer } from '@/components/CartDrawer';
import { QuickViewModal } from '@/components/QuickViewModal';
import { PRODUCTS } from '@/data/mockData';
import { Product } from '@/types';
import { Flame, Timer, Sparkles, ChevronRight } from 'lucide-react';

function DealsContent() {
  const dealProducts = useMemo(() => {
    const mainDeals = PRODUCTS.filter((p) => p.isFlashDeal || p.discountPercentage >= 35);
    if (mainDeals.length >= 20) return mainDeals;

    const remaining = PRODUCTS.filter((p) => !mainDeals.includes(p));
    return [...mainDeals, ...remaining].slice(0, 24);
  }, []);

  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-gray-500">
        <Link href="/" className="hover:text-[#183C3A]">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-[#D97757] font-bold">Special Promotional Deals</span>
      </nav>

      {/* Hero Deals Banner */}
      <div className="relative rounded-3xl bg-gradient-to-r from-[#D97757] via-[#162321] to-[#183C3A] text-white p-8 lg:p-12 shadow-2xl overflow-hidden border border-[#D5A84C]/30">
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#D5A84C] text-[#162321] px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
            <Flame className="w-4 h-4 fill-current" /> LIMITED TIME PROMOTIONS
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Exclusive Deals & <br />
            <span className="text-[#D5A84C]">Up to 50% OFF.</span>
          </h1>
          <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
            Grab official software keys, security suites, and developer tools at deeply discounted promotional rates. All licenses come with instant digital delivery and lifetime key guarantees.
          </p>
        </div>
      </div>

      {/* Grid of Deals */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-xl font-extrabold text-[#162321] flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#D97757]" /> Active Discount Offers ({dealProducts.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dealProducts.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          ))}
        </div>
      </div>

      <CartDrawer />
      <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </div>
  );
}

export default function DealsPage() {
  return (
    <div className="min-h-screen bg-[#F7F4EE] flex flex-col">
      <Header />
      <Suspense fallback={<div className="p-12 text-center text-xs text-gray-500">Loading deals...</div>}>
        <DealsContent />
      </Suspense>
      <Footer />
    </div>
  );
}
