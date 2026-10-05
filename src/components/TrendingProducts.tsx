'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { PRODUCTS } from '@/data/mockData';
import { Product } from '@/types';

interface TrendingProductsProps {
  onQuickView?: (product: Product) => void;
}

export const TrendingProducts: React.FC<TrendingProductsProps> = ({ onQuickView }) => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const tabs = ['All', 'Software', 'Antivirus & Security', 'Productivity Tools', 'eBooks & Guides'];

  const filteredProducts = PRODUCTS.filter((p) => {
    if (!p.isTrending) return false;
    if (activeTab === 'All') return true;
    return p.category === activeTab;
  }).slice(0, 4);

  return (
    <section className="py-12 bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#162321]">
              Trending Right Now
            </h2>
          </div>

          {/* Dynamic Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-[#183C3A] text-white shadow-md'
                    : 'bg-white border border-[#E8E2D8] text-[#162321] hover:bg-[#E8E2D8]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onQuickView={onQuickView} />
          ))}
        </div>

        {/* View All Button CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-[#183C3A] hover:bg-[#122e2c] text-white font-heading font-extrabold px-8 py-3.5 rounded-xl text-xs tracking-wider shadow-md hover:shadow-lg transition-all"
          >
            VIEW ALL PRODUCTS <ArrowRight className="w-4 h-4 text-[#D5A84C]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
