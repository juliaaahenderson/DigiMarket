'use client';

import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { CartDrawer } from '@/components/CartDrawer';
import { useShop } from '@/context/ShopContext';
import { Heart, ShoppingBag } from 'lucide-react';

export default function WishlistPage() {
  const { wishlist } = useShop();

  return (
    <div className="min-h-screen bg-[#F7F4EE] flex flex-col">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full">
        <div className="flex items-center justify-between pb-6 border-b border-[#E8E2D8] mb-8">
          <div>
            <h1 className="font-heading text-3xl font-extrabold text-[#162321] flex items-center gap-2">
              <Heart className="w-7 h-7 text-[#D97757] fill-current" /> My Wishlist
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              {wishlist.length} saved digital products in your wishlist
            </p>
          </div>
        </div>

        {wishlist.length === 0 ? (
          <div className="bg-white border border-[#E8E2D8] p-12 text-center rounded-3xl max-w-md mx-auto space-y-4">
            <div className="w-16 h-16 bg-[#F7F4EE] rounded-full mx-auto flex items-center justify-center text-[#D97757]">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-extrabold text-[#162321]">
              Your Wishlist is Empty
            </h3>
            <p className="text-xs text-gray-500">
              Browse our products and click the heart icon on any card to save your favorite software or tools!
            </p>
            <Link
              href="/shop"
              className="inline-block bg-[#183C3A] text-white text-xs font-bold px-6 py-3 rounded-xl shadow-md"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
