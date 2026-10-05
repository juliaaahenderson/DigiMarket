'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Star, ArrowRight, Download, CheckCircle } from 'lucide-react';
import { PRODUCTS } from '@/data/mockData';
import { useShop } from '@/context/ShopContext';

export const EbookSection: React.FC = () => {
  const { addToCart } = useShop();
  const ebooks = PRODUCTS.filter((p) => p.categorySlug === 'ebooks');

  return (
    <section className="py-12 bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#162321]">
              Knowledge, one click away.
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Curated technical ebooks, architecture frameworks, and founder manuals
            </p>
          </div>
          <Link
            href="/categories/ebooks"
            className="text-xs font-bold text-[#183C3A] hover:text-[#D97757] flex items-center gap-1 transition-colors"
          >
            Explore Digital Library <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Ebook Cards Grid (6 cards, 3 cols x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ebooks.map((book) => (
            <div
              key={book.id}
              className="bg-white border border-[#E8E2D8] rounded-2xl p-5 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex gap-4 items-start">
                {/* Visual Book Cover */}
                <div className="relative w-28 h-36 bg-[#162321] rounded-xl overflow-hidden shadow-md shrink-0 border border-[#E8E2D8]">
                  <Image
                    src={book.image}
                    alt={book.name}
                    fill
                    sizes="112px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-1 left-1 bg-[#D5A84C] text-[#162321] text-[9px] font-extrabold px-1.5 py-0.5 rounded-xs">
                    PDF/EPUB
                  </span>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <span className="text-[10px] font-extrabold text-[#D97757] uppercase tracking-wider">
                    {book.authorOrVendor}
                  </span>
                  <h3 className="font-heading text-base font-extrabold text-[#162321] line-clamp-2 mt-1 leading-snug group-hover:text-[#183C3A]">
                    {book.name}
                  </h3>

                  <div className="flex items-center gap-1 text-xs text-[#D5A84C] mt-2">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="font-bold text-[#162321]">{book.rating}</span>
                    <span className="text-gray-400">({book.reviewCount})</span>
                  </div>

                  <p className="text-xs text-gray-500 line-clamp-2 mt-2 leading-relaxed">
                    {book.tagline}
                  </p>
                </div>
              </div>

              {/* Bottom Price Strip */}
              <div className="mt-5 pt-4 border-t border-[#E8E2D8] flex items-center justify-between">
                <div>
                  <span className="text-lg font-extrabold text-[#183C3A] font-heading">
                    ₹{book.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-gray-400 line-through ml-2">
                    ₹{book.originalPrice.toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={() => addToCart(book)}
                  className="bg-[#183C3A] hover:bg-[#122e2c] text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" /> Instant PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
