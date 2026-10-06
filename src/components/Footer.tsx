'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, CreditCard, Lock, Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#162321] text-white pt-16 pb-8 border-t border-[#D5A84C]/20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Main 4 Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info Column */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-14 sm:h-16 w-56 sm:w-64 bg-white/90 p-2.5 rounded-xl border border-white/20 shadow-md">
                <Image
                  src="/DigiMarket logo.png"
                  alt="DigiMarket Logo"
                  fill
                  sizes="256px"
                  className="object-contain p-1"
                />
              </div>
            </Link>
            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              The premium marketplace for verified digital software, cybersecurity licenses, developer tools, business applications, and expert ebooks.
            </p>
            <div className="flex items-center gap-3 text-xs text-[#D5A84C]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" /> SSL Encrypted
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Zap className="w-4 h-4" /> Instant Delivery
              </span>
            </div>
          </div>

          {/* SHOP Column */}
          <div>
            <h4 className="font-heading text-xs font-extrabold uppercase tracking-widest text-[#D5A84C] mb-4">
              SHOP
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li>
                <Link href="/shop" className="hover:text-white transition-colors">All Products</Link>
              </li>
              <li>
                <Link href="/categories/software" className="hover:text-white transition-colors">Software</Link>
              </li>
              <li>
                <Link href="/categories/antivirus" className="hover:text-white transition-colors">Antivirus & Security</Link>
              </li>
              <li>
                <Link href="/categories/productivity" className="hover:text-white transition-colors">Productivity Tools</Link>
              </li>
              <li>
                <Link href="/categories/developer-tools" className="hover:text-white transition-colors">Developer Tools</Link>
              </li>
              <li>
                <Link href="/categories/ebooks" className="hover:text-white transition-colors">eBooks & Guides</Link>
              </li>
              <li>
                <Link href="/deals" className="text-[#D97757] font-bold hover:underline">Special Deals</Link>
              </li>
            </ul>
          </div>

          {/* HELP & SUPPORT Column */}
          <div>
            <h4 className="font-heading text-xs font-extrabold uppercase tracking-widest text-[#D5A84C] mb-4">
              HELP & SUPPORT
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li>
                <Link href="/support/contact" className="hover:text-white transition-colors">Contact Support</Link>
              </li>
              <li>
                <Link href="/support/faq" className="hover:text-white transition-colors">FAQ & License Help</Link>
              </li>
              <li>
                <Link href="/support/delivery-policy" className="hover:text-white transition-colors">Instant Delivery Policy</Link>
              </li>
              <li>
                <Link href="/support/refund-guarantee" className="hover:text-white transition-colors">Refund & Replacement Guarantee</Link>
              </li>
              <li>
                <Link href="/support/activation-guide" className="hover:text-white transition-colors">License Activation Guide</Link>
              </li>
            </ul>
          </div>

          {/* ACCOUNT & LEGAL */}
          <div>
            <h4 className="font-heading text-xs font-extrabold uppercase tracking-widest text-[#D5A84C] mb-4">
              MY ACCOUNT
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li>
                <Link href="/account" className="hover:text-white transition-colors">My Dashboard</Link>
              </li>
              <li>
                <Link href="/account" className="hover:text-white transition-colors">Order History</Link>
              </li>
              <li>
                <Link href="/account" className="hover:text-white transition-colors">Digital Downloads</Link>
              </li>
              <li>
                <Link href="/account" className="hover:text-white transition-colors">My License Keys</Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="hover:text-white transition-colors text-gray-300">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-white transition-colors text-gray-300">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Payment Icons */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © 2026 DIGIMARKET Inc. All rights reserved. Premium Digital Goods Marketplace.
          </div>

          {/* Secure Payment Badges */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-semibold text-white/80">Secure Payments:</span>
            <div className="flex items-center gap-2">
              <span className="bg-white/10 px-2 py-1 rounded-md text-[10px] font-bold text-white border border-white/20">
                VISA
              </span>
              <span className="bg-white/10 px-2 py-1 rounded-md text-[10px] font-bold text-white border border-white/20">
                MASTERCARD
              </span>
              <span className="bg-white/10 px-2 py-1 rounded-md text-[10px] font-bold text-white border border-white/20">
                UPI
              </span>
              <span className="bg-white/10 px-2 py-1 rounded-md text-[10px] font-bold text-white border border-white/20">
                RAZORPAY
              </span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
