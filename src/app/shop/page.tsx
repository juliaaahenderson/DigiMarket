'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { CartDrawer } from '@/components/CartDrawer';
import { QuickViewModal } from '@/components/QuickViewModal';
import { PRODUCTS, CATEGORIES } from '@/data/mockData';
import { Product } from '@/types';
import { SlidersHorizontal } from 'lucide-react';

function ShopContent() {
  const searchParams = useSearchParams();
  const searchQueryParam = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState<number>(3000);
  const [minRating, setMinRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string>('recommended');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Search query filter
      if (searchQueryParam && !product.name.toLowerCase().includes(searchQueryParam.toLowerCase()) && !product.description.toLowerCase().includes(searchQueryParam.toLowerCase())) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'All' && product.categorySlug !== selectedCategory) {
        return false;
      }
      // Platform filter
      if (selectedPlatform !== 'All' && !product.platforms?.includes(selectedPlatform as any)) {
        return false;
      }
      // Price filter
      if (product.price > selectedPriceRange) {
        return false;
      }
      // Rating filter
      if (product.rating < minRating) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return (b.reviewCount || 0) - (a.reviewCount || 0); // Recommended (default)
    });
  }, [searchQueryParam, selectedCategory, selectedPlatform, selectedPriceRange, minRating, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full">
      {/* Page Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#E8E2D8] gap-4">
        <div>
          <h1 className="font-heading text-3xl font-extrabold text-[#162321]">
            All Products
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Showing <span className="font-bold text-[#183C3A]">{filteredProducts.length}</span> digital products & licenses
            {searchQueryParam && <span> matching "{searchQueryParam}"</span>}
          </p>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            Sort By:
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white border border-[#E8E2D8] text-[#162321] text-xs font-bold py-2 px-3 rounded-xl outline-hidden cursor-pointer shadow-xs"
          >
            <option value="recommended">Recommended</option>
            <option value="popular">Most Popular</option>
            <option value="newest">Newest Additions</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        {/* LEFT FILTER SIDEBAR */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="bg-white border border-[#E8E2D8] p-5 rounded-2xl shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#E8E2D8]">
              <h3 className="font-heading text-sm font-extrabold text-[#162321] flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#183C3A]" /> Filters
              </h3>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedPlatform('All');
                  setSelectedPriceRange(3000);
                  setMinRating(0);
                }}
                className="text-[11px] font-bold text-[#D97757] hover:underline"
              >
                Reset All
              </button>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-heading text-xs font-bold text-[#183C3A] uppercase tracking-wider mb-3">
                Categories
              </h4>
              <div className="space-y-1 text-xs">
                <button
                  onClick={() => setSelectedCategory('All')}
                  className={`w-full text-left px-3 py-1.5 rounded-lg font-medium transition-colors ${
                    selectedCategory === 'All'
                      ? 'bg-[#183C3A] text-white font-bold'
                      : 'text-[#162321] hover:bg-[#F7F4EE]'
                  }`}
                >
                  All Categories
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg font-medium transition-colors ${
                      selectedCategory === cat.slug
                        ? 'bg-[#183C3A] text-white font-bold'
                        : 'text-[#162321] hover:bg-[#F7F4EE]'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Max Price Range Slider */}
            <div className="pt-4 border-t border-[#E8E2D8]">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-heading text-xs font-bold text-[#183C3A] uppercase tracking-wider">
                  Max Price
                </h4>
                <span className="text-xs font-extrabold text-[#183C3A] font-heading">
                  ₹{selectedPriceRange.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="300"
                max="3000"
                step="100"
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(Number(e.target.value))}
                className="w-full accent-[#183C3A] cursor-pointer"
              />
            </div>

            {/* Platform Filter */}
            <div className="pt-4 border-t border-[#E8E2D8]">
              <h4 className="font-heading text-xs font-bold text-[#183C3A] uppercase tracking-wider mb-3">
                Operating Platform
              </h4>
              <div className="space-y-1 text-xs">
                {['All', 'Windows', 'macOS', 'Android', 'iOS', 'Web'].map((plat) => (
                  <button
                    key={plat}
                    onClick={() => setSelectedPlatform(plat)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg font-medium transition-colors ${
                      selectedPlatform === plat
                        ? 'bg-[#183C3A] text-white font-bold'
                        : 'text-[#162321] hover:bg-[#F7F4EE]'
                    }`}
                  >
                    {plat}
                  </button>
                ))}
              </div>
            </div>

            {/* Min Rating */}
            <div className="pt-4 border-t border-[#E8E2D8]">
              <h4 className="font-heading text-xs font-bold text-[#183C3A] uppercase tracking-wider mb-3">
                Minimum Rating
              </h4>
              <div className="space-y-1 text-xs">
                {[0, 4.5, 4.8].map((stars) => (
                  <button
                    key={stars}
                    onClick={() => setMinRating(stars)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg font-medium transition-colors ${
                      minRating === stars
                        ? 'bg-[#183C3A] text-white font-bold'
                        : 'text-[#162321] hover:bg-[#F7F4EE]'
                    }`}
                  >
                    {stars === 0 ? 'All Ratings' : `★ ${stars} & Above`}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </aside>

        {/* RIGHT PRODUCT GRID */}
        <section className="lg:col-span-9">
          {filteredProducts.length === 0 ? (
            <div className="bg-white border border-[#E8E2D8] p-12 text-center rounded-2xl space-y-3">
              <h3 className="font-heading text-lg font-extrabold text-[#162321]">
                No products found matching your filters
              </h3>
              <p className="text-xs text-gray-500">
                Try adjusting your price range or clearing category filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedPlatform('All');
                  setSelectedPriceRange(3000);
                }}
                className="bg-[#183C3A] text-white text-xs font-bold px-6 py-2.5 rounded-xl"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((prod) => (
                <ProductCard
                  key={prod.id}
                  product={prod}
                  onQuickView={(p) => setQuickViewProduct(p)}
                />
              ))}
            </div>
          )}
        </section>
      </div>

      <CartDrawer />
      <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </div>
  );
}

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-[#F7F4EE] flex flex-col">
      <Header />
      <Suspense fallback={
        <div className="max-w-7xl mx-auto px-4 py-16 text-center text-xs text-gray-500 font-medium">
          Loading marketplace catalog...
        </div>
      }>
        <ShopContent />
      </Suspense>
      <Footer />
    </div>
  );
}
