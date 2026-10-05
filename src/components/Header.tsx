'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  ShieldCheck,
  Zap,
  CheckCircle,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';
import { useShop } from '@/context/ShopContext';
import { CATEGORIES } from '@/data/mockData';

export const Header: React.FC = () => {
  const router = useRouter();
  const { cartTotalCount, wishlist, searchQuery, setSearchQuery, setIsCartOpen } = useShop();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="w-full sticky top-0 z-40 bg-white shadow-xs border-b border-[#E8E2D8]">
      {/* 1. Top Announcement Strip */}
      <div className="bg-[#183C3A] text-white text-xs font-semibold py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#D5A84C]" /> FREE INSTANT DELIVERY
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D5A84C]" /> SECURE PAYMENTS
            </span>
            <span className="hidden lg:flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#D5A84C]" /> LICENSED DIGITAL PRODUCTS
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs text-white/80">
            <Link href="/account" className="hover:text-white transition-colors">
              Support 24/7
            </Link>
            <span className="text-white/40">|</span>
            <Link href="/deals" className="text-[#D5A84C] font-bold hover:underline">
              Today's Offers
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Main E-Commerce Header */}
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between gap-4 sm:gap-8">
        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-[#162321] p-1.5 hover:bg-[#F7F4EE] rounded-lg"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Brand Logo Image */}
        <Link href="/" className="flex items-center shrink-0">
          <div className="relative h-12 sm:h-16 w-48 sm:w-64">
            <Image
              src="/DigiMarket logo.png"
              alt="DigiMarket Logo"
              fill
              priority
              sizes="(max-width: 640px) 192px, 256px"
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Large Central Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="hidden md:flex flex-1 max-w-2xl relative items-center"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search software, antivirus, productivity tools & eBooks..."
            className="w-full bg-[#F7F4EE] border border-[#E8E2D8] focus:border-[#183C3A] focus:bg-white text-[#162321] placeholder-gray-400 rounded-full py-2.5 pl-4 pr-12 text-sm font-medium outline-hidden transition-all shadow-inner"
          />
          <button
            type="submit"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#183C3A] hover:bg-[#122e2c] text-white p-2 rounded-full transition-colors"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
        </form>

        {/* Right Actions: Wishlist, Account, Cart */}
        <div className="flex items-center gap-2 sm:gap-5">
          {/* Wishlist Icon */}
          <Link
            href="/wishlist"
            className="relative p-2 text-[#162321] hover:text-[#D97757] hover:bg-[#F7F4EE] rounded-full transition-colors flex items-center gap-1.5"
            title="Wishlist"
          >
            <Heart className="w-5 h-5" />
            <span className="hidden xl:inline text-xs font-semibold">Wishlist</span>
            {wishlist.length > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-[#D97757] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Account Icon */}
          <Link
            href="/account"
            className="p-2 text-[#162321] hover:text-[#183C3A] hover:bg-[#F7F4EE] rounded-full transition-colors flex items-center gap-1.5"
            title="My Account"
          >
            <User className="w-5 h-5" />
            <span className="hidden xl:inline text-xs font-semibold">Account</span>
          </Link>

          {/* Cart Icon & Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative bg-[#183C3A] hover:bg-[#122e2c] text-white px-3.5 py-2 rounded-full flex items-center gap-2.5 shadow-md transition-all"
            aria-label="Open Cart"
          >
            <div className="relative">
              <ShoppingCart className="w-4 h-4" />
              {cartTotalCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#D97757] text-white text-[10px] font-bold rounded-full flex items-center justify-center border border-white">
                  {cartTotalCount}
                </span>
              )}
            </div>
            <span className="text-xs font-bold font-heading hidden sm:inline">Cart</span>
          </button>
        </div>
      </div>

      {/* Mobile Search Bar (Visible on mobile screens) */}
      <div className="md:hidden px-4 pb-3">
        <form onSubmit={handleSearchSubmit} className="relative flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full bg-[#F7F4EE] border border-[#E8E2D8] text-[#162321] placeholder-gray-400 rounded-full py-2 pl-4 pr-10 text-xs font-medium outline-hidden"
          />
          <button
            type="submit"
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#183C3A] text-white p-1.5 rounded-full"
          >
            <Search className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>

      {/* 3. Category Navigation Bar (Horizontal Strip) */}
      <nav className="bg-[#F7F4EE] border-t border-[#E8E2D8] hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-2 text-xs font-bold text-[#162321]">
          <div className="flex items-center gap-0.5 overflow-x-auto py-2 scrollbar-none min-w-0 flex-1">
            <Link
              href="/shop"
              className="px-2.5 py-1.5 rounded-md hover:bg-[#183C3A] hover:text-white transition-colors uppercase tracking-wider text-[11px] whitespace-nowrap shrink-0 font-extrabold"
            >
              All Products
            </Link>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/categories/${cat.slug}`}
                className="px-2.5 py-1.5 rounded-md hover:bg-[#183C3A] hover:text-white transition-colors uppercase tracking-wider text-[11px] whitespace-nowrap shrink-0"
              >
                {cat.name}
              </Link>
            ))}
            <Link
              href="/deals"
              className="px-2.5 py-1.5 rounded-md text-[#D97757] hover:bg-[#D97757] hover:text-white transition-colors uppercase tracking-wider text-[11px] font-extrabold whitespace-nowrap shrink-0"
            >
              🔥 Deals
            </Link>
          </div>

          <div className="text-[11px] text-[#183C3A] font-bold flex items-center gap-1 cursor-pointer hover:underline py-2 shrink-0 whitespace-nowrap hidden xl:flex">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D5A84C]" /> Instant Digital Key Guarantee
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E8E2D8] px-4 py-4 space-y-3 shadow-lg">
          <div className="text-xs font-bold uppercase text-gray-400 tracking-wider">
            Categories
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs font-medium">
            <Link
              href="/shop"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 bg-[#F7F4EE] rounded-lg text-[#183C3A] font-bold"
            >
              All Products
            </Link>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/categories/${cat.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 bg-[#F7F4EE] rounded-lg hover:bg-[#183C3A] hover:text-white transition-colors"
              >
                {cat.name}
              </Link>
            ))}
            <Link
              href="/deals"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 bg-[#D97757]/10 text-[#D97757] rounded-lg font-bold"
            >
              🔥 Deals & Sales
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
