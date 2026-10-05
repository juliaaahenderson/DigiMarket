'use client';

import React from 'react';
import { Zap, ShieldCheck, CheckCircle2, Key, Headset } from 'lucide-react';

export const WhyShopWithUs: React.FC = () => {
  const trustItems = [
    {
      icon: Zap,
      title: 'Instant Digital Delivery',
      desc: 'License key & link generated immediately upon order confirmation.'
    },
    {
      icon: ShieldCheck,
      title: 'Secure Checkout',
      desc: 'Bank-level 256-bit SSL encryption across all payment options.'
    },
    {
      icon: CheckCircle2,
      title: '100% Verified Genuine',
      desc: 'Sourced directly from official software vendors & authors.'
    },
    {
      icon: Key,
      title: 'Easy License Manager',
      desc: 'Track keys, active devices, and renewals in your account.'
    },
    {
      icon: Headset,
      title: '24/7 VIP Customer Support',
      desc: 'Dedicated technical support engineers ready to assist anytime.'
    }
  ];

  return (
    <section className="bg-[#183C3A] text-white py-10 border-y border-[#D5A84C]/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {trustItems.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#D5A84C]/20 border border-[#D5A84C]/40 text-[#D5A84C] flex items-center justify-center mb-3">
                  <IconComp className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-extrabold text-sm text-white mb-1">
                  ✓ {item.title}
                </h4>
                <p className="text-xs text-white/70 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
