'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Scale, FileCheck, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EE]">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#162321] tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-xs text-gray-500 mt-2">
              Effective Date: October 2026 • DIGIMARKET Inc.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#E8E2D8] p-6 sm:p-10 shadow-xs space-y-8 text-xs sm:text-sm text-gray-700 leading-relaxed">
            <div>
              <h2 className="font-heading text-lg font-extrabold text-[#162321] mb-2 flex items-center gap-2">
                <Scale className="w-5 h-5 text-[#183C3A]" /> 1. Agreement to Terms
              </h2>
              <p>
                By accessing DIGIMARKET or purchasing digital licenses, software packages, or technical ebooks from our store, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-extrabold text-[#162321] mb-2 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-[#183C3A]" /> 2. Digital Product License & Scope
              </h2>
              <p className="mb-2">
                When purchasing software products or activation keys on DIGIMARKET:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-gray-600">
                <li>You are granted a non-exclusive, non-transferable personal or business license according to the device tier selected (e.g., 1 PC, 5 Devices).</li>
                <li>Keys are strictly for legitimate activation on authorized vendor software.</li>
                <li>Reselling, sharing, or publicly publishing activation keys on forums or torrent repositories will result in immediate key revocation without refund.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-lg font-extrabold text-[#162321] mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#183C3A]" /> 3. Instant Delivery & Pricing
              </h2>
              <p>
                All prices are displayed in Indian Rupees (₹) or local currency equivalents inclusive of taxes. Digital product delivery occurs instantly upon payment completion. In rare instances of temporary supplier verification delays, keys will deliver within 60 minutes.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-extrabold text-[#162321] mb-2 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-[#183C3A]" /> 4. Intellectual Property & Trademarks
              </h2>
              <p>
                All software titles, logos, brand names, and trademarks mentioned on DIGIMARKET belong to their respective original publishers and copyright holders. DIGIMARKET is an authorized vendor platform distributing genuine digital key licenses.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
