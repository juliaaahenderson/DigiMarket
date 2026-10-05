'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Eye, ShoppingCart, Star, Check } from 'lucide-react';
import { Product } from '@/types';
import { useShop } from '@/context/ShopContext';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="group relative flex flex-col bg-white border border-[#E8E2D8] rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Badge Top Left */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-block px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase text-white bg-[#D97757] rounded-md shadow-xs">
            {product.badge}
          </span>
        </div>
      )}

      {/* Wishlist Top Right */}
      <button
        onClick={() => toggleWishlist(product)}
        aria-label="Add to Wishlist"
        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 backdrop-blur-xs text-[#162321] hover:text-[#D97757] hover:bg-white shadow-sm transition-colors duration-200"
      >
        <Heart
          className={`w-4 h-4 transition-colors ${
            inWishlist ? 'fill-[#D97757] text-[#D97757]' : ''
          }`}
        />
      </button>

      {/* Product Image Area (55-60% of card) */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-[#F7F4EE] flex items-center justify-center p-4">
        <Link href={`/products/${product.slug}`} className="w-full h-full relative block">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg"
          />
        </Link>

        {/* Quick View Button on Hover */}
        {onQuickView && (
          <button
            onClick={() => onQuickView(product)}
            className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[#162321]/90 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md hover:bg-[#183C3A]"
          >
            <Eye className="w-3.5 h-3.5" /> Quick View
          </button>
        )}
      </div>

      {/* Product Info Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Category */}
          <div className="text-[11px] font-semibold text-[#D97757] tracking-wider uppercase mb-1">
            {product.category}
          </div>

          {/* Product Title */}
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-heading text-base font-bold text-[#162321] line-clamp-1 group-hover:text-[#183C3A] transition-colors mb-1">
              {product.name}
            </h3>
          </Link>

          {/* Short Tagline */}
          <p className="text-xs text-[#162321]/70 line-clamp-2 mb-3 leading-relaxed">
            {product.tagline}
          </p>
        </div>

        <div>
          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            <div className="flex items-center text-[#D5A84C]">
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="text-xs font-bold text-[#162321]">{product.rating}</span>
            <span className="text-xs text-gray-400">({product.reviewCount})</span>
          </div>

          {/* Price & Action */}
          <div className="flex items-center justify-between pt-3 border-t border-[#E8E2D8]/60">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-[#183C3A] font-heading">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="text-xs text-gray-400 line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              </div>
              <span className="text-[10px] font-bold text-[#D97757]">
                {product.discountPercentage}% OFF
              </span>
            </div>

            <button
              onClick={() => addToCart(product)}
              className="bg-[#183C3A] hover:bg-[#122e2c] text-white p-2.5 rounded-lg transition-colors duration-200 flex items-center justify-center gap-1 text-xs font-semibold shadow-xs"
              title="Add to Cart"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
