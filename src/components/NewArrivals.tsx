'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { PRODUCTS } from '@/data/mockData';
import { Product } from '@/types';

interface NewArrivalsProps {
  onQuickView?: (product: Product) => void;
}

export const NewArrivals: React.FC<NewArrivalsProps> = ({ onQuickView }) => {
  const newArrivals = PRODUCTS.filter((p) => p.isNew || p.badge?.includes('NEW'));
  const displayProducts = newArrivals.length > 0 ? newArrivals : PRODUCTS.slice(4, 8);

  return (
    <section className="py-12 bg-white border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#162321]">
              New Arrivals
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Latest tools, templates, and software additions to our marketplace
            </p>
          </div>
          <Link
            href="/shop?sort=newest"
            className="text-xs font-bold text-[#183C3A] hover:text-[#D97757] flex items-center gap-1 transition-colors"
          >
            Explore All New Additions <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4-Column Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} onQuickView={onQuickView} />
          ))}
        </div>
      </div>
    </section>
  );
};
