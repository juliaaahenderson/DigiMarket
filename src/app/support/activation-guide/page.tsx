'use client';

import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Key, Monitor, Terminal, Shield, Download, CheckCircle } from 'lucide-react';

export default function ActivationGuidePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EE]">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#162321] tracking-tight">
              License Activation Guide
            </h1>
            <p className="text-sm text-gray-600 mt-2">
              Comprehensive step-by-step instructions to redeem and activate your software keys.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#E8E2D8] p-6 sm:p-10 shadow-xs space-y-8">
            
            {/* Steps */}
            <div className="space-y-8">
              <div className="flex gap-4 items-start pb-6 border-b border-[#E8E2D8]">
                <div className="w-10 h-10 rounded-xl bg-[#183C3A] text-[#D5A84C] font-heading font-extrabold text-lg flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#162321]">Retrieve Your Product Key</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                    Copy your 25-character product key from your checkout confirmation screen, your order email, or under your <Link href="/account" className="text-[#183C3A] font-bold underline">My Account Dashboard</Link>.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start pb-6 border-b border-[#E8E2D8]">
                <div className="w-10 h-10 rounded-xl bg-[#183C3A] text-[#D5A84C] font-heading font-extrabold text-lg flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#162321]">Download Official Installer</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                    Click the official download mirror link provided on your order page. Always download directly from vendor mirrors to ensure untampered software files.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start pb-6 border-b border-[#E8E2D8]">
                <div className="w-10 h-10 rounded-xl bg-[#183C3A] text-[#D5A84C] font-heading font-extrabold text-lg flex items-center justify-center shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#162321]">Enter Activation Key</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                    Launch the installed software application, navigate to <strong>Settings &gt; License / Activation</strong>, and paste your key. Click <em>Activate Online</em>.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#183C3A] text-[#D5A84C] font-heading font-extrabold text-lg flex items-center justify-center shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#162321]">Verification Complete</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                    Your software subscription is now active! Updates, virus definitions, and cloud sync features will function continuously.
                  </p>
                </div>
              </div>
            </div>

            {/* Need Assistance */}
            <div className="p-6 bg-[#F7F4EE] rounded-xl border border-[#E8E2D8] text-center">
              <h4 className="font-heading font-bold text-base text-[#162321]">Encountering activation code errors?</h4>
              <p className="text-xs text-gray-500 mt-1">Our support engineers can guide you through phone activation or remotely verify key validity.</p>
              <Link href="/support/contact" className="inline-block mt-3 bg-[#183C3A] text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-[#122e2c] transition-colors">
                Open Support Ticket
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
