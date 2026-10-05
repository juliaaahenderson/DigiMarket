'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { Key, Download, Package, Heart, User, ShieldCheck, Copy, Check } from 'lucide-react';

export default function AccountPage() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const purchasedLicenses = [
    {
      id: 'LIC-849201',
      productName: 'SecureShield Total Security 2026',
      licenseKey: 'SS26-X94B-882A-KL90-V412',
      purchaseDate: 'Oct 02, 2026',
      expiryDate: 'Oct 02, 2027',
      status: 'Active',
      devicesUsed: '2 / 5 Devices',
      downloadUrl: '#'
    },
    {
      id: 'LIC-773109',
      productName: 'CodeForge Developer Suite Pro',
      licenseKey: 'CFPRO-9921-AZ88-MM74-QQ10',
      purchaseDate: 'Sep 15, 2026',
      expiryDate: 'Lifetime License',
      status: 'Active',
      devicesUsed: '1 / 1 Developer',
      downloadUrl: '#'
    }
  ];

  const handleCopy = (key: string) => {
    navigator.clipboard.writeText(key);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] flex flex-col">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full">
        {/* Account Header */}
        <div className="bg-white border border-[#E8E2D8] p-6 rounded-3xl shadow-xs mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#183C3A] text-[#D5A84C] font-heading font-extrabold text-2xl flex items-center justify-center border-2 border-[#D5A84C]/40">
              JS
            </div>
            <div>
              <h1 className="font-heading text-2xl font-extrabold text-[#162321]">
                John Doe
              </h1>
              <p className="text-xs text-gray-500">
                VIP License Holder • Member since 2025
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            <ShieldCheck className="w-4 h-4" /> Account Status: Verified Buyer
          </div>
        </div>

        {/* Dashboard Tabs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Nav */}
          <div className="lg:col-span-3 space-y-2">
            <button className="w-full text-left px-4 py-3 rounded-xl bg-[#183C3A] text-white font-bold text-xs flex items-center gap-2 shadow-xs">
              <Key className="w-4 h-4 text-[#D5A84C]" /> My Digital Licenses
            </button>
            <button className="w-full text-left px-4 py-3 rounded-xl bg-white border border-[#E8E2D8] text-[#162321] font-bold text-xs hover:bg-[#F7F4EE] transition-colors flex items-center gap-2">
              <Download className="w-4 h-4 text-gray-500" /> Downloads & Files
            </button>
            <button className="w-full text-left px-4 py-3 rounded-xl bg-white border border-[#E8E2D8] text-[#162321] font-bold text-xs hover:bg-[#F7F4EE] transition-colors flex items-center gap-2">
              <Package className="w-4 h-4 text-gray-500" /> Order History
            </button>
          </div>

          {/* Licenses Section Content */}
          <div className="lg:col-span-9 space-y-6">
            <div className="bg-white border border-[#E8E2D8] p-6 rounded-3xl shadow-xs space-y-6">
              <div className="pb-4 border-b border-[#E8E2D8] flex items-center justify-between">
                <div>
                  <h2 className="font-heading text-lg font-bold text-[#162321]">
                    Purchased Software Licenses
                  </h2>
                  <p className="text-xs text-gray-500">
                    Click copy key to activate your software installations
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {purchasedLicenses.map((lic) => (
                  <div
                    key={lic.id}
                    className="p-5 bg-[#F7F4EE] border border-[#E8E2D8] rounded-2xl space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-extrabold text-[#D97757] uppercase tracking-wider">
                          {lic.id}
                        </span>
                        <h3 className="font-heading text-base font-extrabold text-[#162321]">
                          {lic.productName}
                        </h3>
                      </div>
                      <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-0.5 rounded-full self-start sm:self-auto">
                        {lic.status}
                      </span>
                    </div>

                    {/* License Key Box */}
                    <div className="bg-white p-3 rounded-xl border border-[#E8E2D8] flex items-center justify-between gap-2">
                      <div className="font-mono text-xs font-bold text-[#183C3A] tracking-widest overflow-x-auto">
                        {lic.licenseKey}
                      </div>
                      <button
                        onClick={() => handleCopy(lic.licenseKey)}
                        className="bg-[#183C3A] text-white hover:bg-[#122e2c] px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 shrink-0"
                      >
                        {copiedKey === lic.licenseKey ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" /> Copy Key
                          </>
                        )}
                      </button>
                    </div>

                    {/* Details Row */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] text-gray-600 pt-1">
                      <div>Purchase Date: <strong className="text-[#162321]">{lic.purchaseDate}</strong></div>
                      <div>Expiry: <strong className="text-[#162321]">{lic.expiryDate}</strong></div>
                      <div>Devices: <strong className="text-[#162321]">{lic.devicesUsed}</strong></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
