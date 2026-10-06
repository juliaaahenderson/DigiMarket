'use client';

import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Zap, Clock, Mail, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function DeliveryPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EE]">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#162321] tracking-tight">
              Instant Digital Delivery Policy
            </h1>
            <p className="text-sm text-gray-600 mt-2">
              0-minute instant delivery for all software license keys, activation codes, and downloadable assets.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#E8E2D8] p-6 sm:p-10 shadow-xs space-y-8">
            <div className="flex items-start gap-4 p-5 bg-[#F7F4EE] rounded-xl border border-[#E8E2D8]">
              <Zap className="w-8 h-8 text-[#D97757] shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-extrabold text-base text-[#162321]">Zero Wait Time Policy</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                  DIGIMARKET products are 100% digital. You will never pay shipping fees or wait for physical delivery. Your digital keys and direct download mirrors generate instantly upon successful payment.
                </p>
              </div>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <h2 className="font-heading text-xl font-bold text-[#162321]">How You Receive Your Order</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="p-4 border border-[#E8E2D8] rounded-xl bg-white">
                  <div className="w-7 h-7 bg-[#183C3A] text-white rounded-full flex items-center justify-center font-bold text-xs mb-3">1</div>
                  <h4 className="font-heading font-bold text-[#162321] text-sm">On-Screen Key</h4>
                  <p className="text-xs text-gray-500 mt-1">Displayed directly on your checkout confirmation page with a 1-click copy button.</p>
                </div>

                <div className="p-4 border border-[#E8E2D8] rounded-xl bg-white">
                  <div className="w-7 h-7 bg-[#183C3A] text-white rounded-full flex items-center justify-center font-bold text-xs mb-3">2</div>
                  <h4 className="font-heading font-bold text-[#162321] text-sm">Instant Email</h4>
                  <p className="text-xs text-gray-500 mt-1">Sent to your purchase email address containing your invoice, product key, and download links.</p>
                </div>

                <div className="p-4 border border-[#E8E2D8] rounded-xl bg-white">
                  <div className="w-7 h-7 bg-[#183C3A] text-white rounded-full flex items-center justify-center font-bold text-xs mb-3">3</div>
                  <h4 className="font-heading font-bold text-[#162321] text-sm">Account Dashboard</h4>
                  <p className="text-xs text-gray-500 mt-1">Stored permanently in your DIGIMARKET account under "My License Keys" for lifetime re-downloads.</p>
                </div>
              </div>

              <h2 className="font-heading text-xl font-bold text-[#162321] pt-4">Delayed Delivery Troubleshooting</h2>
              <p>
                If you do not see your license email within 2 minutes:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Check your Spam, Promotions, or Junk email folders.</li>
                <li>Verify your purchase transaction completed under your account orders.</li>
                <li>Reach out to support with your Order ID for immediate re-sending.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
