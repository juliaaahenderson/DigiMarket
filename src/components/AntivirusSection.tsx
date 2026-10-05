'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Monitor, Smartphone, Laptop, Check, ArrowRight, Star } from 'lucide-react';
import { PRODUCTS } from '@/data/mockData';
import { useShop } from '@/context/ShopContext';

export const AntivirusSection: React.FC = () => {
  const { addToCart } = useShop();
  const securityProducts = PRODUCTS.filter((p) => p.categorySlug === 'antivirus');

  return (
    <section className="py-12 bg-white border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#162321]">
              Stay Protected
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Enterprise-grade malware & ransomware protection for every device
            </p>
          </div>
          <Link
            href="/categories/antivirus"
            className="text-xs font-bold text-[#183C3A] hover:text-[#D97757] flex items-center gap-1 transition-colors"
          >
            Compare Security Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Responsive Grid for Security Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {securityProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#F7F4EE] border border-[#E8E2D8] rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative group"
            >
              <div>
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#183C3A] text-[#D5A84C] text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {product.badge || 'VERIFIED SECURITY'}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-[#D5A84C]">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="font-bold text-[#162321]">{product.rating}</span>
                  </div>
                </div>

                {/* Image & Title */}
                <div className="relative aspect-16/9 w-full bg-white rounded-xl overflow-hidden mb-4 border border-[#E8E2D8]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="font-heading text-lg font-extrabold text-[#162321] mb-2">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  {product.tagline}
                </p>

                {/* Compatible OS Badges */}
                <div className="mb-4 pt-3 border-t border-[#E8E2D8]">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
                    Supported Devices
                  </span>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#183C3A]">
                    <span className="inline-flex items-center gap-1 bg-white px-2 py-1 rounded-md border border-[#E8E2D8]">
                      <Monitor className="w-3.5 h-3.5" /> Windows
                    </span>
                    <span className="inline-flex items-center gap-1 bg-white px-2 py-1 rounded-md border border-[#E8E2D8]">
                      <Laptop className="w-3.5 h-3.5" /> macOS
                    </span>
                    <span className="inline-flex items-center gap-1 bg-white px-2 py-1 rounded-md border border-[#E8E2D8]">
                      <Smartphone className="w-3.5 h-3.5" /> Mobile
                    </span>
                  </div>
                </div>

                {/* License Options Pills */}
                <div className="space-y-1.5 mb-6">
                  {product.licenseOptions?.map((lic, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#162321] font-medium">
                      <Check className="w-3.5 h-3.5 text-[#D97757]" />
                      <span>{lic} / 1-Year License</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Price & CTA */}
              <div className="pt-4 border-t border-[#E8E2D8] flex items-center justify-between">
                <div>
                  <div className="text-xl font-extrabold text-[#183C3A] font-heading">
                    ₹{product.price.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-400 line-through">
                    ₹{product.originalPrice.toLocaleString()} ({product.discountPercentage}% OFF)
                  </div>
                </div>

                <button
                  onClick={() => addToCart(product)}
                  className="bg-[#183C3A] hover:bg-[#122e2c] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-colors shadow-sm"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
