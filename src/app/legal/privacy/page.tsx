'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ShieldCheck, Lock, Eye, Database, FileText } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EE]">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#162321] tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-gray-500 mt-2">
              Last Updated: October 2026 • DIGIMARKET Inc.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#E8E2D8] p-6 sm:p-10 shadow-xs space-y-8 text-xs sm:text-sm text-gray-700 leading-relaxed">
            <div>
              <h2 className="font-heading text-lg font-extrabold text-[#162321] mb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#183C3A]" /> 1. Overview & Commitment
              </h2>
              <p>
                At DIGIMARKET ("we," "our," or "us"), protecting your personal and financial information is our highest priority. This Privacy Policy explains how we collect, use, safeguard, and process your data when you visit our website or purchase digital licenses and software keys.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-extrabold text-[#162321] mb-2 flex items-center gap-2">
                <Database className="w-5 h-5 text-[#183C3A]" /> 2. Data We Collect
              </h2>
              <ul className="list-disc pl-5 space-y-1.5 text-gray-600">
                <li><strong>Account Data:</strong> Your name, email address, and account credentials.</li>
                <li><strong>Transaction Information:</strong> Order history, license keys generated, and billing address.</li>
                <li><strong>Payment Data:</strong> Payment card details and UPI handles are processed directly by PCI-DSS certified payment gateways (Razorpay/Stripe). We never store raw payment card credentials on our servers.</li>
                <li><strong>Technical Logs:</strong> IP address, device operating system, and browser headers for fraud detection.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-lg font-extrabold text-[#162321] mb-2 flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#183C3A]" /> 3. How We Use Your Data
              </h2>
              <p className="mb-2">We process your data strictly to:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-gray-600">
                <li>Deliver product license keys and download mirrors instantly upon checkout.</li>
                <li>Verify software key activation and process replacement requests.</li>
                <li>Prevent fraudulent transactions and unauthorized key redistribution.</li>
                <li>Send transactional receipts and license expiry renewal notices.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-lg font-extrabold text-[#162321] mb-2 flex items-center gap-2">
                <Eye className="w-5 h-5 text-[#183C3A]" /> 4. Data Sharing & Third Parties
              </h2>
              <p>
                We do not sell, rent, or trade your personal data to third-party advertisers. Data is shared exclusively with PCI-compliant payment processors and authorized software publishers solely to facilitate legitimate license key validation.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-extrabold text-[#162321] mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#183C3A]" /> 5. Your Rights & Data Requests
              </h2>
              <p>
                You have the right to inspect, export, or request permanent deletion of your account data at any time under GDPR and local privacy laws. Contact privacy@digimarket.com to submit a request.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
