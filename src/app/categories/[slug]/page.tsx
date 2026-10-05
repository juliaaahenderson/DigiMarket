'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { CartDrawer } from '@/components/CartDrawer';
import { QuickViewModal } from '@/components/QuickViewModal';
import { PRODUCTS, CATEGORIES } from '@/data/mockData';
import { Product } from '@/types';
import { SlidersHorizontal, ChevronRight, Laptop, ShieldCheck, Zap, Code, Briefcase, BookOpen, Layout, GraduationCap } from 'lucide-react';

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

function CategoryContent() {
  const params = useParams();
  const slug = params.slug as string;

  const currentCategory = CATEGORIES.find((c) => c.slug === slug) || {
    id: 'cat-all',
    slug: slug,
    name: slug.replace(/-/g, ' ').toUpperCase(),
    itemCount: PRODUCTS.filter((p) => p.categorySlug === slug).length,
    iconName: 'Laptop',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    description: `Explore premium digital ${slug.replace(/-/g, ' ')} products, software keys, and instant downloadable tools.`
  };

  const IconComp = iconMap[currentCategory.iconName] || Laptop;

  const [selectedPlatform, setSelectedPlatform] = useState<string>('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState<number>(3000);
  const [minRating, setMinRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string>('recommended');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Products belonging STRICTLY to this specific category
  const categoryProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      if (product.categorySlug !== currentCategory.slug) return false;
      if (selectedPlatform !== 'All' && !product.platforms?.includes(selectedPlatform as any)) return false;
      if (product.price > selectedPriceRange) return false;
      if (product.rating < minRating) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.reviewCount || 0) - (a.reviewCount || 0);
    });
  }, [currentCategory.slug, selectedPlatform, selectedPriceRange, minRating, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-gray-500">
        <Link href="/" className="hover:text-[#183C3A]">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/shop" className="hover:text-[#183C3A]">Categories</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-[#162321] font-bold uppercase">{currentCategory.name}</span>
      </nav>

      {/* Category Hero Banner */}
      <div className="relative rounded-3xl bg-gradient-to-r from-[#183C3A] via-[#162321] to-[#183C3A] text-white p-8 lg:p-10 shadow-xl overflow-hidden border border-[#D5A84C]/30">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-[#D5A84C]/20 border border-[#D5A84C]/40 text-[#D5A84C] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <IconComp className="w-4 h-4" /> Dedicated Marketplace Category
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              {currentCategory.name}
            </h1>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              {currentCategory.description}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center shrink-0">
            <div className="text-2xl font-extrabold text-[#D5A84C] font-heading">
              {categoryProducts.length}
            </div>
            <div className="text-[11px] text-white/80 font-bold uppercase tracking-wider">
              Unique Products
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
        {/* LEFT SIDEBAR FILTERS */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="bg-white border border-[#E8E2D8] p-5 rounded-2xl shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#E8E2D8]">
              <h3 className="font-heading text-sm font-extrabold text-[#162321] flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#183C3A]" /> Filters
              </h3>
              <button
                onClick={() => {
                  setSelectedPlatform('All');
                  setSelectedPriceRange(3000);
                  setMinRating(0);
                }}
                className="text-[11px] font-bold text-[#D97757] hover:underline"
              >
                Reset
              </button>
            </div>

            {/* Other Categories Links */}
            <div>
              <h4 className="font-heading text-xs font-bold text-[#183C3A] uppercase tracking-wider mb-3">
                All Categories
              </h4>
              <div className="space-y-1 text-xs">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/categories/${cat.slug}`}
                    className={`block px-3 py-1.5 rounded-lg font-medium transition-colors ${
                      cat.slug === currentCategory.slug
                        ? 'bg-[#183C3A] text-white font-bold'
                        : 'text-[#162321] hover:bg-[#F7F4EE]'
                    }`}
                  >
                    {cat.name}
                  </Link>
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
                Platform
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
          </div>
        </aside>

        {/* RIGHT PRODUCT GRID */}
        <section className="lg:col-span-9 space-y-6">
          {/* Header Bar */}
          <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-[#E8E2D8]">
            <div className="text-xs font-bold text-[#162321]">
              Showing <span className="text-[#183C3A]">{categoryProducts.length}</span> unique products in {currentCategory.name}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider hidden sm:inline">
                Sort:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#F7F4EE] border border-[#E8E2D8] text-[#162321] text-xs font-bold py-1.5 px-3 rounded-xl outline-hidden cursor-pointer"
              >
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          {categoryProducts.length === 0 ? (
            <div className="bg-white border border-[#E8E2D8] p-12 text-center rounded-2xl space-y-3">
              <h3 className="font-heading text-lg font-extrabold text-[#162321]">
                No products found matching your filters
              </h3>
              <p className="text-xs text-gray-500">
                Try widening your price limit or clearing platform filters.
              </p>
              <button
                onClick={() => {
                  setSelectedPlatform('All');
                  setSelectedPriceRange(3000);
                }}
                className="bg-[#183C3A] text-white text-xs font-bold px-6 py-2.5 rounded-xl"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProducts.map((prod) => (
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

export default function CategoryPage() {
  return (
    <div className="min-h-screen bg-[#F7F4EE] flex flex-col">
      <Header />
      <Suspense fallback={<div className="p-12 text-center text-xs text-gray-500">Loading category page...</div>}>
        <CategoryContent />
      </Suspense>
      <Footer />
    </div>
  );
}
