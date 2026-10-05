'use client';

import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { REVIEWS } from '@/data/mockData';

export const CustomerReviews: React.FC = () => {
  return (
    <section className="py-12 bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#162321]">
            Loved by digital shoppers
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Over 50,000+ professionals, developers, and tech enthusiasts rely on our instant digital keys.
          </p>
        </div>

        {/* 4-Column Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-[#E8E2D8] p-6 rounded-2xl shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[#E8E2D8]/60 pointer-events-none" />

              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-[#D5A84C] mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Review Title & Comment */}
                <h4 className="font-heading text-sm font-extrabold text-[#162321] mb-2">
                  "{rev.title}"
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed italic mb-4">
                  "{rev.comment}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-3 border-t border-[#E8E2D8]">
                <div className="flex items-center justify-between">
                  <span className="font-heading text-xs font-bold text-[#162321]">
                    {rev.userName}
                  </span>
                  {rev.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle className="w-3 h-3" /> Verified Purchase
                    </span>
                  )}
                </div>
                <div className="text-[10px] text-gray-400 font-medium mt-1">
                  Product: {rev.productName}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
