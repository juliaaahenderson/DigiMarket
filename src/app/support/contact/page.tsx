'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare, HelpCircle, ShieldCheck } from 'lucide-react';

export default function ContactSupportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderId: '',
    subject: 'License Key Issue',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EE]">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#162321] tracking-tight">
              Contact Customer Support
            </h1>
            <p className="text-sm text-gray-600 mt-2">
              Have questions about your digital order, license activation, or billing? Our dedicated support team is available 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Sidebar */}
            <div className="bg-[#183C3A] text-white p-8 rounded-2xl shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-xl font-bold text-[#D5A84C] mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-6 text-sm text-white/90">
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-[#D5A84C] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-white">Email Support</span>
                      <span>support@digimarket.com</span>
                      <span className="block text-xs text-white/60 mt-0.5">Average response: &lt; 15 mins</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MessageSquare className="w-5 h-5 text-[#D5A84C] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-white">Live Chat</span>
                      <span>24/7 Priority Support Chat</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-[#D5A84C] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-white">Phone Support</span>
                      <span>+1 (800) 555-DIGI (3444)</span>
                      <span className="block text-xs text-white/60 mt-0.5">Mon - Fri: 9:00 AM - 8:00 PM EST</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/20 mt-8">
                <div className="flex items-center gap-2 text-xs text-[#D5A84C] font-semibold">
                  <ShieldCheck className="w-4 h-4" /> 100% Guaranteed License Key Delivery
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-[#E8E2D8] shadow-xs">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-bold text-[#162321]">
                    Support Ticket Created!
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 max-w-md mx-auto">
                    Thank you! Ticket <strong>#DM-{Math.floor(100000 + Math.random() * 900000)}</strong> has been opened. Our support team will respond to <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 bg-[#183C3A] text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-[#122e2c] transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#162321] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-[#F7F4EE] border border-[#E8E2D8] rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-[#183C3A] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#162321] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-[#F7F4EE] border border-[#E8E2D8] rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-[#183C3A] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#162321] mb-1.5">
                        Order ID (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.orderId}
                        onChange={(e) => setFormData({ ...formData, orderId: e.target.value })}
                        placeholder="e.g. DM-982314"
                        className="w-full bg-[#F7F4EE] border border-[#E8E2D8] rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-[#183C3A] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#162321] mb-1.5">
                        Category / Issue Type *
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-[#F7F4EE] border border-[#E8E2D8] rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-[#183C3A] focus:bg-white"
                      >
                        <option value="License Key Issue">License Key Activation Issue</option>
                        <option value="Download Help">Software Download Assistance</option>
                        <option value="Billing & Refund">Billing or Refund Query</option>
                        <option value="Pre-Purchase Inquiry">Pre-Purchase Question</option>
                        <option value="Other">Other Query</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#162321] mb-1.5">
                      Describe Your Issue in Detail *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please include error messages or details about the software software package..."
                      className="w-full bg-[#F7F4EE] border border-[#E8E2D8] rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-[#183C3A] focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#183C3A] hover:bg-[#122e2c] text-white font-extrabold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <Send className="w-4 h-4" /> Send Support Ticket
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
