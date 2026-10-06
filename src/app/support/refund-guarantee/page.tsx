'use client';

import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ShieldCheck, RefreshCw, CheckCircle, HelpCircle } from 'lucide-react';

export default function RefundGuaranteePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EE]">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#162321] tracking-tight">
              Refund & Replacement Guarantee
            </h1>
            <p className="text-sm text-gray-600 mt-2">
              Our 30-Day 100% Risk-Free activation guarantee for all genuine digital products.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#E8E2D8] p-6 sm:p-10 shadow-xs space-y-8">
            <div className="flex items-start gap-4 p-5 bg-[#183C3A] text-white rounded-xl">
              <ShieldCheck className="w-8 h-8 text-[#D5A84C] shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-extrabold text-base text-[#D5A84C]">100% Valid Key Guarantee</h3>
                <p className="text-xs sm:text-sm text-white/80 mt-1 leading-relaxed">
                  Every product key sold on DIGIMARKET is backed by our zero-defect policy. If a key fails to activate or is deemed invalid by the software vendor, we provide an immediate 1-to-1 replacement key or a 100% full refund.
                </p>
              </div>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <h2 className="font-heading text-xl font-bold text-[#162321]">Conditions for Refund or Replacement</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 border border-emerald-200 bg-emerald-50/50 rounded-xl">
                  <h4 className="font-heading font-bold text-emerald-900 text-sm flex items-center gap-1.5 mb-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" /> Eligible Scenarios
                  </h4>
                  <ul className="text-xs text-emerald-800 space-y-1.5 list-disc pl-4">
                    <li>Key fails vendor online activation.</li>
                    <li>Incorrect key format delivered.</li>
                    <li>Software download link broken or unavailable.</li>
                    <li>Duplicate payment processed by mistake.</li>
                  </ul>
                </div>

                <div className="p-4 border border-amber-200 bg-amber-50/50 rounded-xl">
                  <h4 className="font-heading font-bold text-amber-900 text-sm flex items-center gap-1.5 mb-2">
                    <HelpCircle className="w-4 h-4 text-amber-600" /> Ineligible Scenarios
                  </h4>
                  <ul className="text-xs text-amber-800 space-y-1.5 list-disc pl-4">
                    <li>Key has already been activated and bound to vendor account.</li>
                    <li>Change of mind after successful key activation.</li>
                    <li>Incompatibility due to un-met hardware specs explicitly listed on product page.</li>
                  </ul>
                </div>
              </div>

              <h2 className="font-heading text-xl font-bold text-[#162321] pt-4">How to Request a Replacement Key</h2>
              <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                <li>Go to our <Link href="/support/contact" className="text-[#183C3A] font-bold underline">Contact Support Page</Link>.</li>
                <li>Select "License Key Activation Issue" or "Billing & Refund".</li>
                <li>Include your Order ID and attach a screenshot of the activation error message.</li>
                <li>Our team will issue a fresh key or process your refund within 1–4 hours.</li>
              </ol>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
