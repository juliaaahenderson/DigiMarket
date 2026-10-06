'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HelpCircle, Key, Download, RefreshCw, ShieldCheck, ChevronDown } from 'lucide-react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How do I receive my digital license key after purchase?',
      a: 'All digital keys and download links are delivered instantly on your checkout confirmation screen, sent to your registered email address, and accessible anytime under your My Account dashboard.'
    },
    {
      q: 'What should I do if my license key shows as invalid?',
      a: 'First, make sure there are no accidental spaces in your copied key. Ensure you are activating the key on the exact software version specified in your order. If it still fails, contact support for a 100% free replacement key within minutes.'
    },
    {
      q: 'Are your software licenses 100% genuine and legal?',
      a: 'Yes. DIGIMARKET partners directly with verified software publishers, distributors, and authorized vendors. All licenses come with genuine vendor activation guarantees.'
    },
    {
      q: 'How many devices can I activate with my license?',
      a: 'Device limits vary depending on the product tier selected during checkout (e.g., 1 PC, 3 Devices, or 5 Devices). Check your product invoice or license keys tab for specific device allowances.'
    },
    {
      q: 'What is your refund policy if the software doesn\'t work?',
      a: 'We offer a 30-day 100% replacement or refund guarantee on all un-activated or defective product keys.'
    },
    {
      q: 'How do I re-download my digital purchases in the future?',
      a: 'Log into your DIGIMARKET account at any time and navigate to "My Account > Digital Downloads" or "My License Keys" to access your installer download mirrors.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EE]">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#162321] tracking-tight">
              FAQ & License Activation Help
            </h1>
            <p className="text-sm text-gray-600 mt-2">
              Everything you need to know about instant digital keys, software downloads, and license activation.
            </p>
          </div>

          {/* Quick Help Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
            <Link href="/support/activation-guide" className="bg-white p-6 rounded-2xl border border-[#E8E2D8] hover:shadow-md transition-shadow group">
              <Key className="w-8 h-8 text-[#183C3A] mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading font-extrabold text-base text-[#162321]">Activation Guide</h3>
              <p className="text-xs text-gray-500 mt-1">Step-by-step software key installation steps.</p>
            </Link>

            <Link href="/support/delivery-policy" className="bg-white p-6 rounded-2xl border border-[#E8E2D8] hover:shadow-md transition-shadow group">
              <Download className="w-8 h-8 text-[#D97757] mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading font-extrabold text-base text-[#162321]">Instant Delivery</h3>
              <p className="text-xs text-gray-500 mt-1">How 0-minute key delivery works.</p>
            </Link>

            <Link href="/support/refund-guarantee" className="bg-white p-6 rounded-2xl border border-[#E8E2D8] hover:shadow-md transition-shadow group">
              <RefreshCw className="w-8 h-8 text-[#D5A84C] mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading font-extrabold text-base text-[#162321]">Refund Guarantee</h3>
              <p className="text-xs text-gray-500 mt-1">30-Day hassle-free replacement terms.</p>
            </Link>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-white rounded-2xl border border-[#E8E2D8] p-6 sm:p-8 shadow-xs space-y-4">
            <h2 className="font-heading text-xl font-bold text-[#162321] mb-6">
              Frequently Asked Questions
            </h2>

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#E8E2D8] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left font-heading font-bold text-sm text-[#162321] hover:bg-[#F7F4EE] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                </button>
                {openIndex === index && (
                  <div className="p-4 pt-0 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-[#E8E2D8]/50 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center bg-[#183C3A] text-white p-8 rounded-2xl">
            <h3 className="font-heading text-lg font-bold text-[#D5A84C]">Still need assistance?</h3>
            <p className="text-xs text-white/80 mt-1">Our support specialists are online 24/7 to resolve license activation queries.</p>
            <Link href="/support/contact" className="inline-block mt-4 bg-[#D5A84C] text-[#162321] px-6 py-2.5 rounded-xl font-bold text-xs hover:bg-[#b88d37] transition-colors">
              Contact 24/7 Support
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
