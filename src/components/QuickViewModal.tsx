'use client';

import React from 'react';
import Image from 'next/image';
import { X, Star, ShieldCheck, Zap, ShoppingCart, Check } from 'lucide-react';
import { Product } from '@/types';
import { useShop } from '@/context/ShopContext';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const { addToCart } = useShop();

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center">
        {/* Backdrop */}
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        />

        {/* Modal Container */}
        <div className="relative w-full max-w-3xl transform overflow-hidden rounded-3xl bg-white p-6 text-left shadow-2xl transition-all border border-[#E8E2D8] z-10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-[#162321] rounded-full hover:bg-[#F7F4EE] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Image */}
            <div className="relative aspect-4/3 w-full bg-[#F7F4EE] rounded-2xl overflow-hidden border border-[#E8E2D8]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              {product.badge && (
                <span className="absolute top-3 left-3 bg-[#D97757] text-white text-xs font-bold px-2.5 py-1 rounded-md uppercase">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase text-[#D97757]">
                  {product.category}
                </span>
                <h3 className="font-heading text-xl font-extrabold text-[#162321]">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[#D5A84C] mt-1">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-bold text-[#162321]">{product.rating}</span>
                  <span className="text-gray-400">({product.reviewCount} reviews)</span>
                </div>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed">
                {product.description}
              </p>

              {/* Features List */}
              <div className="space-y-1.5 bg-[#F7F4EE] p-3 rounded-xl border border-[#E8E2D8]">
                <span className="text-[11px] font-bold text-[#183C3A] uppercase tracking-wider block">
                  Key Features:
                </span>
                {product.features.slice(0, 3).map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#162321]">
                    <Check className="w-3.5 h-3.5 text-[#D97757] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Price & Cart */}
              <div className="pt-4 border-t border-[#E8E2D8] flex items-center justify-between">
                <div>
                  <div className="text-2xl font-extrabold text-[#183C3A] font-heading">
                    ₹{product.price.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-400 line-through">
                    ₹{product.originalPrice.toLocaleString()} ({product.discountPercentage}% OFF)
                  </div>
                </div>

                <button
                  onClick={() => {
                    addToCart(product);
                    onClose();
                  }}
                  className="bg-[#183C3A] hover:bg-[#122e2c] text-white px-6 py-3 rounded-xl font-heading font-bold text-xs flex items-center gap-2 shadow-md"
                >
                  <ShoppingCart className="w-4 h-4" /> Add to Cart
                </button>
              </div>

              <div className="flex items-center gap-2 text-[10px] text-gray-500 justify-center pt-2">
                <Zap className="w-3.5 h-3.5 text-[#D5A84C]" /> Instant Download Key Guarantee Included
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
