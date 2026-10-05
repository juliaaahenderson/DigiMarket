'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Flame } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { PRODUCTS } from '@/data/mockData';
import { Product } from '@/types';

interface BestSellersProps {
  onQuickView?: (product: Product) => void;
}

export const BestSellers: React.FC<BestSellersProps> = ({ onQuickView }) => {
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller).slice(0, 4);

  return (
    <section className="py-12 bg-white border-y border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#162321]">
              Best Sellers
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Most loved digital tools, security suites & resources by our customers
            </p>
          </div>
          <Link
            href="/shop"
            className="text-xs font-bold text-[#183C3A] hover:text-[#D97757] flex items-center gap-1 transition-colors"
          >
            Explore All Best Sellers <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4-Column Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} onQuickView={onQuickView} />
          ))}
        </div>
      </div>
    </section>
  );
};
