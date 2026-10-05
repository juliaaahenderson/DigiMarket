'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Laptop, ShieldCheck, Zap, Code, Briefcase, BookOpen, Layout, GraduationCap } from 'lucide-react';
import { CATEGORIES } from '@/data/mockData';

const iconMap: Record<string, React.ElementType> = {
  Laptop,
  ShieldCheck,
  Zap,
  Code,
  Briefcase,
  BookOpen,
  Layout,
  GraduationCap
};

export const ShopByCategory: React.FC = () => {
  return (
    <section className="py-12 bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#162321]">
              Shop by Category
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-xs font-bold text-[#183C3A] hover:text-[#D97757] flex items-center gap-1 transition-colors"
          >
            View All Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => {
            const IconComponent = iconMap[cat.iconName] || Laptop;
            return (
              <Link
                key={cat.id}
                href={`/categories/${cat.slug}`}
                className="group relative bg-white border border-[#E8E2D8] rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative aspect-16/9 w-full bg-[#E8E2D8] overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  
                  {/* Category Icon */}
                  <div className="absolute bottom-3 left-3 bg-[#183C3A] text-white p-2 rounded-lg shadow-md">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-heading text-sm font-bold text-[#162321] group-hover:text-[#183C3A] transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">
                      {cat.itemCount} Products
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#F7F4EE] group-hover:bg-[#183C3A] group-hover:text-white flex items-center justify-center text-[#162321] transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
