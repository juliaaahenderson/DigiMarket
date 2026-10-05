'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { ProductCard } from '@/components/ProductCard';
import { PRODUCTS } from '@/data/mockData';
import { useShop } from '@/context/ShopContext';
import { Star, ShieldCheck, Zap, Heart, Check, Download, ChevronRight } from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const inWishlist = isInWishlist(product.id);

  const [selectedLicense, setSelectedLicense] = useState(
    product.licenseOptions?.[0] || '1 Device License'
  );
  const [selectedDuration, setSelectedDuration] = useState(
    product.durationOptions?.[0] || '1 Year'
  );
  const [activeTab, setActiveTab] = useState<'description' | 'features' | 'system' | 'reviews'>('description');

  const relatedProducts = PRODUCTS.filter(
    (p) => p.categorySlug === product.categorySlug && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#F7F4EE] flex flex-col">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#183C3A]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/shop" className="hover:text-[#183C3A]">Products</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href={`/categories/${product.categorySlug}`} className="hover:text-[#183C3A]">{product.category}</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#162321] font-bold line-clamp-1">{product.name}</span>
        </nav>

        {/* Top Product Detail Section */}
        <div className="bg-white border border-[#E8E2D8] rounded-3xl p-6 sm:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* LEFT: Product Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-4/3 w-full bg-[#F7F4EE] rounded-2xl overflow-hidden border border-[#E8E2D8]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-[#D97757] text-white text-xs font-extrabold px-3 py-1 rounded-md uppercase tracking-wider">
                  {product.badge}
                </span>
              )}
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[product.image, product.image, product.image].map((img, i) => (
                <div key={i} className="relative aspect-4/3 rounded-xl overflow-hidden bg-[#F7F4EE] border border-[#E8E2D8] cursor-pointer hover:opacity-80">
                  <Image src={img} alt="Thumbnail" fill sizes="150px" className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Product Buying Info */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D97757]">
                {product.category}
              </span>
              <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#162321] mt-1">
                {product.name}
              </h1>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1 text-[#D5A84C] text-xs">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-bold text-[#162321]">{product.rating}</span>
                </div>
                <span className="text-gray-300">•</span>
                <span className="text-xs text-gray-500 font-medium">
                  {product.reviewCount} Verified Ratings
                </span>
                <span className="text-gray-300">•</span>
                <span className="inline-flex items-center gap-1 text-xs text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full">
                  <Zap className="w-3.5 h-3.5" /> Instant Delivery
                </span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              {product.tagline}
            </p>

            {/* Price Strip */}
            <div className="bg-[#F7F4EE] p-4 rounded-2xl border border-[#E8E2D8] flex items-center justify-between">
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-extrabold text-[#183C3A] font-heading">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                </div>
                <div className="text-xs font-bold text-[#D97757] mt-0.5">
                  Save {product.discountPercentage}% today on license keys
                </div>
              </div>

              <span className="bg-[#183C3A] text-[#D5A84C] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#D5A84C]/30">
                Official Digital Key
              </span>
            </div>

            {/* License Option Selector */}
            {product.licenseOptions && product.licenseOptions.length > 0 && (
              <div>
                <label className="text-xs font-bold text-[#183C3A] uppercase tracking-wider block mb-2">
                  Select License Tier:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {product.licenseOptions.map((lic) => (
                    <button
                      key={lic}
                      onClick={() => setSelectedLicense(lic)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                        selectedLicense === lic
                          ? 'bg-[#183C3A] text-white border-[#183C3A] shadow-xs'
                          : 'bg-white text-[#162321] border-[#E8E2D8] hover:bg-[#F7F4EE]'
                      }`}
                    >
                      {lic}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Actions: Add to Cart, Buy Now, Wishlist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => addToCart(product, 1, selectedLicense, selectedDuration)}
                  className="flex-1 bg-[#D97757] hover:bg-[#c46445] text-white py-3.5 rounded-xl font-heading font-extrabold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  ADD TO CART
                </button>
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-3.5 rounded-xl border transition-colors ${
                    inWishlist
                      ? 'bg-[#D97757]/10 border-[#D97757] text-[#D97757]'
                      : 'bg-white border-[#E8E2D8] text-gray-600 hover:bg-[#F7F4EE]'
                  }`}
                  title="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${inWishlist ? 'fill-current' : ''}`} />
                </button>
              </div>

              <button
                onClick={() => addToCart(product, 1, selectedLicense, selectedDuration)}
                className="w-full bg-[#183C3A] hover:bg-[#122e2c] text-white py-3 rounded-xl font-heading font-extrabold text-xs tracking-wider transition-colors shadow-sm"
              >
                BUY NOW WITH 1-CLICK INSTANT CHECKOUT
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3 text-xs text-gray-600 pt-2 border-t border-[#E8E2D8]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#183C3A]" />
                <span>100% Verified License</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4 text-[#183C3A]" />
                <span>Instant Download Portal</span>
              </div>
            </div>
          </div>

        </div>

        {/* Detailed Tabs Section */}
        <div className="bg-white border border-[#E8E2D8] rounded-3xl p-6 sm:p-8 shadow-sm mb-12">
          {/* Tabs Navigation */}
          <div className="flex items-center gap-4 border-b border-[#E8E2D8] pb-4 overflow-x-auto">
            {(['description', 'features', 'system', 'reviews'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs font-extrabold uppercase tracking-wider pb-2 border-b-2 transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-[#183C3A] text-[#183C3A]'
                    : 'border-transparent text-gray-400 hover:text-[#162321]'
                }`}
              >
                {tab === 'description' && 'Product Overview'}
                {tab === 'features' && "What's Included"}
                {tab === 'system' && 'System Requirements'}
                {tab === 'reviews' && `Reviews (${product.reviewCount})`}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="pt-6">
            {activeTab === 'description' && (
              <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
                <h3 className="font-heading text-lg font-bold text-[#162321]">
                  Detailed Overview
                </h3>
                <p>{product.description}</p>
                <p>
                  Upon purchasing, you will instantly receive your unique activation code key and direct download mirrors directly in your account dashboard and email address.
                </p>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="space-y-3">
                <h3 className="font-heading text-lg font-bold text-[#162321] mb-4">
                  Features & Capabilities
                </h3>
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-[#162321]">
                    <div className="w-5 h-5 rounded-full bg-[#183C3A] text-white flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'system' && (
              <div className="space-y-3">
                <h3 className="font-heading text-lg font-bold text-[#162321] mb-4">
                  Compatible Platforms & Requirements
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {product.systemRequirements?.map((req, idx) => (
                    <div key={idx} className="p-3 bg-[#F7F4EE] rounded-xl border border-[#E8E2D8] text-[#162321] font-medium">
                      ✓ {req}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-4 text-xs">
                <h3 className="font-heading text-lg font-bold text-[#162321]">
                  Customer Reviews
                </h3>
                <p className="text-gray-500">
                  ★★★★★ Rated {product.rating} / 5 by verified license purchasers.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mb-12">
            <h2 className="font-heading text-2xl font-extrabold text-[#162321] mb-6">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
