'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Timer, ArrowRight, ShoppingCart, Star, Flame } from 'lucide-react';
import { PRODUCTS } from '@/data/mockData';
import { useShop } from '@/context/ShopContext';

export const FlashDeals: React.FC = () => {
  const { addToCart } = useShop();
  const flashProducts = PRODUCTS.filter((p) => p.isFlashDeal);

  // Timer Countdown state
  const [timeLeft, setTimeLeft] = useState({ hours: 8, minutes: 24, seconds: 51 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <section className="py-12 bg-[#162321] text-white border-b border-[#D5A84C]/20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Strip with Live Timer */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#D97757] rounded-xl text-white">
              <Flame className="w-6 h-6 fill-current" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#D5A84C] tracking-widest uppercase block">
                LIMITED QUANTITIES
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                Flash Deals
              </h2>
            </div>
          </div>

          {/* Countdown Clock */}
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-2xl">
            <Timer className="w-5 h-5 text-[#D5A84C]" />
            <span className="text-xs text-white/70 font-semibold uppercase tracking-wider hidden sm:inline">
              Ends In:
            </span>
            <div className="flex items-center gap-1.5 font-heading font-extrabold text-lg tracking-wider text-[#D5A84C]">
              <span className="bg-[#183C3A] border border-[#D5A84C]/30 px-2.5 py-1 rounded-md min-w-[36px] text-center">
                {formatNumber(timeLeft.hours)}
              </span>
              <span>:</span>
              <span className="bg-[#183C3A] border border-[#D5A84C]/30 px-2.5 py-1 rounded-md min-w-[36px] text-center">
                {formatNumber(timeLeft.minutes)}
              </span>
              <span>:</span>
              <span className="bg-[#183C3A] border border-[#D5A84C]/30 px-2.5 py-1 rounded-md min-w-[36px] text-center">
                {formatNumber(timeLeft.seconds)}
              </span>
            </div>
          </div>

          <Link
            href="/deals"
            className="text-xs font-bold text-[#D5A84C] hover:text-white flex items-center gap-1.5 transition-colors self-start md:self-auto"
          >
            View All Deals <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Horizontal Deals Carousel / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {flashProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-white text-[#162321] p-4 rounded-xl shadow-xl flex gap-4 items-center group hover:scale-[1.02] transition-transform duration-300 border border-[#E8E2D8]"
            >
              {/* Product Visual */}
              <div className="relative w-28 h-28 bg-[#F7F4EE] rounded-lg shrink-0 overflow-hidden">
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  sizes="112px"
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <span className="absolute top-1 left-1 bg-[#D97757] text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded-xs">
                  {prod.discountPercentage}% OFF
                </span>
              </div>

              {/* Product Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-sm font-bold text-[#162321] line-clamp-1 group-hover:text-[#183C3A]">
                    {prod.name}
                  </h3>
                  <div className="flex items-center gap-1 mt-1 text-xs text-[#D5A84C]">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="font-bold text-[#162321]">{prod.rating}</span>
                    <span className="text-gray-400">({prod.reviewCount})</span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <div className="text-base font-extrabold text-[#183C3A] font-heading">
                      ₹{prod.price.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-400 line-through">
                      ₹{prod.originalPrice.toLocaleString()}
                    </div>
                  </div>

                  <button
                    onClick={() => addToCart(prod)}
                    className="bg-[#D97757] hover:bg-[#c46445] text-white p-2 rounded-lg transition-colors flex items-center gap-1 text-xs font-bold shadow-xs"
                    title="Grab Deal"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span>Get Deal</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
