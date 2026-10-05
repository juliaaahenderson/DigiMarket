'use client';

import React from 'react';
import Link from 'next/link';
import { Tag, ShieldAlert, BookOpen, Zap } from 'lucide-react';

export const PromotionalDealStrip: React.FC = () => {
  const deals = [
    {
      icon: Tag,
      title: '🔥 UP TO 50% OFF',
      subtitle: 'Premium Software',
      bgColor: 'bg-[#D97757]',
      textColor: 'text-white',
      link: '/deals'
    },
    {
      icon: ShieldAlert,
      title: '🛡 SECURITY WEEK',
      subtitle: 'Antivirus & VPN Licenses',
      bgColor: 'bg-[#183C3A]',
      textColor: 'text-white',
      link: '/categories/antivirus'
    },
    {
      icon: BookOpen,
      title: '📚 EBOOK MEGA SALE',
      subtitle: 'Guides Starting ₹399',
      bgColor: 'bg-[#162321]',
      textColor: 'text-[#D5A84C]',
      link: '/categories/ebooks'
    },
    {
      icon: Zap,
      title: '⚡ INSTANT DELIVERY',
      subtitle: 'Keys Delivered Post-Purchase',
      bgColor: 'bg-[#E8E2D8]',
      textColor: 'text-[#162321]',
      link: '/shop'
    }
  ];

  return (
    <section className="bg-[#F7F4EE] py-6 border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {deals.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <Link
              key={index}
              href={item.link}
              className={`flex items-center gap-4 p-4 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 ${item.bgColor} ${item.textColor} group`}
            >
              <div className="p-2.5 rounded-lg bg-white/10 group-hover:scale-110 transition-transform">
                <IconComponent className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-extrabold text-sm tracking-wide">
                  {item.title}
                </h4>
                <p className="text-xs opacity-90 font-medium">
                  {item.subtitle}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
